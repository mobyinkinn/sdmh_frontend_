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
import Button from "@/app/components/ui/Button";
import {
  ButtonMediumOutline,
  ButtonSmallOutline,
  ButtonSmallOutlineWithoutHover,
} from "@/app/styledComponents/frontend/Buttons";
import { HiEyeOff, HiPencil } from "react-icons/hi";
import {
  useDeleteDownloadables,
  useUpdateDownloadables,
  useUpdateDownloadablesImage,
} from "../useDownload";
import EditDownloadablesForm from "@/app/components/features/Downloadables/EditDownloadablesForm";
import { useState } from "react";
import moment from "moment";
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

function DownloadRow({
  department: { _id, name, file, type, status, createdAt },
}) {
  //   const navigate = useNavigate();
  //   const { checkout, isCheckingOut } = useCheckout();
  //   const { deleteBooking, isDeleting } = useDeleteBooking();
  const { updateDownloadables, isUpdating } = useUpdateDownloadables();
  const { deleteDownloadables, isDeleting } = useDeleteDownloadables();
  const { mutate: updateTheFile } = useUpdateDownloadablesImage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const created = moment(createdAt).format("YYYY-MM-DD");

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  // When opening the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const id = _id;

  function handleToggleStatus() {
    if (status) {
      updateDownloadables({ id, data: { status: false } });
    } else {
      updateDownloadables({ id, data: { status: true } });
    }
  }

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

  const [editData, setEditData] = useState({
    name,
    type,
    file,
  });

  const handleConfirmEdit = () => {
    const formDataText = {
      name: editData.name,
      type: editData.type,
    };

    updateDownloadables(
      {
        id: _id,
        data: formDataText,
      },
      {
        onSuccess: () => {
          toast.success("Downloadable updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Downloadable:", error);
          toast.error("Failed to update Downloadable. Please try again.");
        },
      }
    );
    //Image Update
    const formDataImage = new FormData();
    if (editData.file instanceof File) {
      formDataImage.append("file", editData.file);
    }

    updateTheFile(
      {
        id: _id,
        formdata: formDataImage,
      },
      {
        onSuccess: () => {
          toast.success("File updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update File:", error);
          toast.error("Failed to update File. Please try again.");
        },
      }
    );
  };

  return (
    <Table.Row>
      <Stacked>
        <span>Name</span>
        <span>{name}</span>
      </Stacked>

      <Stacked>
        {/* <Image src={image} alt={name} width={50} height={50} /> */}
        <a
          href={file}
          download
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ButtonSmallOutlineWithoutHover
            style={{ color: "#005900", border: "1px solid #005900" }}
          >
            View
          </ButtonSmallOutlineWithoutHover>
        </a>
      </Stacked>

      <Stacked>
        <span>{type}</span>
      </Stacked>

      <Tag type={statusToTagName[convertedStatus]}>
        {convertedStatus.replace("-", " ")}
      </Tag>

      {/* <Amount>{formatCurrency(totalPrice)}</Amount> */}
      <Stacked>
        <span>{created}</span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
            disabled={isUpdating}
          ></Menus.Button>
          <Modal.Open opens="banner-form">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Window name="banner-form">
            <EditDownloadablesForm
              resourceName="Banner"
              editData={editData}
              setEditData={setEditData}
              onCloseModal={onCloseModal}
              onConfirm={handleConfirmEdit}
              disabled={false}
            />
          </Modal.Window>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Banner"
            disabled={isDeleting}
            onConfirm={() => deleteDownloadables(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default DownloadRow;
