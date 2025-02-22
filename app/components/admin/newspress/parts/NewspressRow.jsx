import styled from "styled-components";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import Image from "next/image";
import { useState } from "react";
import { useDeleteNewspress, useUpdateNewspress } from "../useNewspress";
import { HiEyeOff, HiPencil } from "react-icons/hi";
import toast from "react-hot-toast";
import EditNewspressForm from "@/app/components/features/Newspress/EditNewspressForm";

const Stacked = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 0.9rem;
  }
`;

function NewspressRow({
  newspress: {
    _id,
    title,
    date,
    tag,
    link,
    description,
    image,
    banner,
    status,
  },
}) {
  const [fullDesc, setShowFullDesc] = useState(false);
  const { mutate: deleteNewspress, isLoading: isDeleting } =
    useDeleteNewspress();
  const { mutate: updateNewspress } = useUpdateNewspress();
  const [descContent, setDescContent] = useState(description);

  const handleToggleStatus = () => {
    if (status) {
      updateNewspress({ id: _id, formData: { status: false } });
    } else {
      updateNewspress({ id: _id, formData: { status: true } });
    }
  };

  let convertedStatus;
  if (status === true) {
    convertedStatus = "active";
  } else {
    convertedStatus = "inactive";
  }

  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };

  const handleDelete = () => {
    deleteNewspress(_id);
  };

  const expandDesc = () => {
    setShowFullDesc((desc) => !desc);
  };

  const [editData, setEditData] = useState({
    title,
    date,
    tag,
    link,
    description,
    image,
    banner,
    status,
  });

  const handleConfirmEdit = () => {
    const formData = {
      title: editData.title,
      tag: editData.tag,
      link: editData.link,
      date: editData.date,
      description: descContent,
    };

    updateNewspress(
      {
        id: _id,
        formData,
      },
      {
        onSuccess: () => {
          toast.success("Newspress updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Newspress:", error);
          toast.error("Failed to update Newspress. Please try again.");
        },
      }
    );
  };

  return (
    <Table.Row>
      <Stacked>
        <span>{title}</span>
      </Stacked>

      <Stacked>
        <span>{tag}</span>
      </Stacked>

      <Stacked>
        <span>{link}</span>
      </Stacked>

      <Stacked>
        <span
          dangerouslySetInnerHTML={{
            __html: fullDesc
              ? description
              : `${description.slice(0, 50)}${
                  description.length > 50 ? "..." : ""
                }`,
          }}
        />
        <span onClick={expandDesc} style={{ cursor: "pointer" }}>
          {fullDesc ? "show less" : "show more"}
        </span>
      </Stacked>

      <Stacked>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            style={{ borderRadius: "8px" }}
          />
        ) : (
          <span>No Image</span>
        )}
      </Stacked>

      <Tag type={statusToTagName[convertedStatus]}>
        {convertedStatus.replace("-", " ")}
      </Tag>

      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
          ></Menus.Button>
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>

          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Newspress"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>
        <Modal.Window name="edit">
          <EditNewspressForm
            id={_id}
            resourceName="Newspress"
            editData={editData}
            setEditData={setEditData}
            onCloseModal={() => {}}
            onConfirm={handleConfirmEdit}
            disabled={false}
            descContent={descContent}
            setDescContent={setDescContent}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default NewspressRow;
