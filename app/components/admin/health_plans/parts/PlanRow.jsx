import styled from "styled-components";
import { format, isToday } from "date-fns";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
// import { formatCurrency } from "../../../utils/helpers";
// import { formatDistanceFromNow } from "../../../utils/helpers";
import Menus from "../../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import Image from "next/image";
import { useState } from "react";
import {
  useBlockCheckup,
  useDeleteCheckup,
  useUnblockCheckup,
  useUpdateCheckup,
} from "../useCheckups";
import { HiEyeOff, HiPencil } from "react-icons/hi";
import ConfirmEdit from "@/app/components/ui/EditCheckupModal";
import toast from "react-hot-toast";
import { FaRegImages } from "react-icons/fa";
import AddImagesFormCheckup from "@/app/components/features/Checkup/AddImagesFormCheckup";
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

function PlanRow({
  academic: {
    _id,
    title,
    description,
    status,
    createdAt,
    image,
    banner,
    bannerImage,
    price,
    smallDescription,
    images,
  },
}) {
  const [fullDesc, setShowFullDesc] = useState(false);
  const { mutate: deleteCheckup, isLoading: isDeleting } = useDeleteCheckup();
  const { mutate: blockCheckup, isLoading: isBlocking } = useBlockCheckup();
  const { mutate: unblockCheckup, isLoading: isUnblocking } =
    useUnblockCheckup();
  const { mutate: updateCheckup } = useUpdateCheckup();
  const [descContent, setDescContent] = useState(description);

  const handleToggleStatus = () => {
    console.log("_id", _id);
    console.log("status", status);
    if (status) {
      blockCheckup(_id); // Call block API if active
    } else {
      unblockCheckup(_id); // Call unblock API if inactive
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
    deleteCheckup(_id);
  };

  const expandDesc = () => {
    setShowFullDesc((desc) => !desc);
  };

  const [editData, setEditData] = useState({
    title,
    description,
    image,
    banner,
    status,
    bannerImage,
    price,
    smallDescription,
    images,
  });

  const handleConfirmEdit = () => {
    const formData = {
      title: editData.title,
      description: descContent,
      price: editData.price,
      smallDescription: editData.smallDescription,
    };

    updateCheckup(
      {
        id: _id,
        data: formData,
      },
      {
        onSuccess: () => {
          toast.success("Checkup updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Checkup:", error);
          toast.error("Failed to update Checkup. Please try again.");
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
        <span>{smallDescription}</span>
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
        <span>{price}</span>
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

      <Stacked>
        <span>{format(new Date(createdAt), "yyyy-MM-dd")}</span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
            disabled={isBlocking || isUnblocking}
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
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="checkup"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>
        <Modal.Window name="edit">
          <ConfirmEdit
            id={_id}
            resourceName="checkup"
            editData={editData}
            setEditData={setEditData}
            onCloseModal={() => {}}
            onConfirm={handleConfirmEdit}
            disabled={false}
            descContent={descContent}
            setDescContent={setDescContent}
          />
        </Modal.Window>
        <Modal.Window name="image-form">
          <AddImagesFormCheckup
            id={_id}
            resourceName="Checkup"
            editData={editData}
            setEditData={setEditData}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default PlanRow;
