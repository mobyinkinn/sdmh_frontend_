import styled from "styled-components";
import { format, isToday } from "date-fns";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
// import { formatCurrency } from "../../../utils/helpers";
// import { formatDistanceFromNow } from "../../../utils/helpers";
import Menus from "../../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import Image from "next/image";
import { useState } from "react";
import { HiEyeOff, HiPencil } from "react-icons/hi";
import { useAwards, useDeleteAward, useUpdateAward } from "../useAwards";
import EditAwardForm from "@/app/components/features/Awards/EditAwardForm";
import { FaRegImages } from "react-icons/fa";
import AddImagesFormAward from "@/app/components/features/Awards/AddImagesFormAward";
// import { useNavigate } from "react-router-dom";
// import { useCheckout } from "../check-in-out/useCheckout";
// import useDeleteBooking from "./useDeleteBooking";

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

function AwardsRow({
  award: {
    _id,
    name,
    year,
    about,
    image,
    status,
    createdAt,
    smallDescription,
    bannerImage,
    images,
  },
}) {
  const [fullDesc, setShowFullDesc] = useState(false);
  const { mutate: updateAward, isLoading: isUpdating } = useUpdateAward();
  const { mutate: deleteAward, isLoading: isDeleting } = useDeleteAward();
  const id = _id;
  const [editData, setEditData] = useState({
    name,
    year,
    about,
    image,
    smallDescription,
    bannerImage,
    images,
  });
  const [aboutContent, setAboutContent] = useState(about);

  const handleConfirmEdit = () => {
    const formData = {
      name: editData.name,
      year: editData.year,
      about: aboutContent,
      smallDescription: editData.smallDescription,
    };

    updateAward(
      {
        id,
        data: formData,
      },
      {
        onSuccess: () => {
          toast.success("Award updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Award:", error);
          toast.error("Failed to update Award. Please try again.");
        },
      }
    );
  };

  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };

  let convertedStatus;
  if (status === true) {
    convertedStatus = "active";
  } else {
    convertedStatus = "inactive";
  }

  const handleToggleStatus = () => {
    if (status) {
      updateAward({ id, data: { status: false } });
    } else {
      updateAward({ id, data: { status: true } });
    }
  };

  const expandDesc = () => {
    setShowFullDesc((desc) => !desc);
  };

  return (
    <Table.Row>
      <Stacked>
        <span>{name}</span>
      </Stacked>

      <Stacked>
        <span>{year}</span>
      </Stacked>

      <Stacked>
        <span>{smallDescription}</span>
      </Stacked>

      <Stacked>
        <span
          dangerouslySetInnerHTML={{
            __html: fullDesc
              ? about
              : `${about.slice(0, 50)}${about.length > 50 ? "..." : ""}`,
          }}
        />
        <span onClick={expandDesc} style={{ cursor: "pointer" }}>
          {fullDesc ? "show less" : "show more"}
        </span>
      </Stacked>

      <Stacked>
        <Image src={image} alt={name} width={50} height={50} />
      </Stacked>

      <Tag type={statusToTagName[convertedStatus]}>
        {convertedStatus.replace("-", " ")}
      </Tag>

      <Stacked>
        <span>{format(new Date(createdAt), "yyyy-MM-dd")}</span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
            disabled={isUpdating}
          ></Menus.Button>
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Open opens="image-form">
            <Menus.Button icon={<FaRegImages />} />
          </Modal.Open>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>

        <Modal.Window name="image-form">
          <AddImagesFormAward
            id={_id}
            resourceName="Award"
            editData={editData}
            setEditData={setEditData}
          />
        </Modal.Window>
        <Modal.Window name="edit">
          <EditAwardForm
            id={_id}
            resourceName="Award"
            editData={editData}
            setEditData={setEditData}
            onCloseModal={() => {}}
            onConfirm={handleConfirmEdit}
            disabled={isUpdating}
            aboutContent={aboutContent}
            setAboutContent={setAboutContent}
          />
        </Modal.Window>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="award"
            disabled={isDeleting}
            onConfirm={() => deleteAward(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default AwardsRow;
