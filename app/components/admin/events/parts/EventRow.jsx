import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";

// import { formatCurrency } from "../../../utils/helpers";
// import { formatDistanceFromNow } from "../../../utils/helpers";
import Menus from "../../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { useState } from "react";
import { HiEyeOff } from "react-icons/hi";
import { FaRegImages } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useCheckout } from "../check-in-out/useCheckout";
// import useDeleteBooking from "./useDeleteBooking";
import {
  useUpdateEvent,
  useDeleteEvent,
  useAddImagesToEvent,
} from "../useEvents";
import EditEventsForm from "@/app/components/features/Events/EditEventsForm";
import AddImagesForm from "@/app/components/features/Events/AddImagesForm";
import toast from "react-hot-toast";
import moment from "moment";

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

function EventRow({
  event: {
    _id,
    title,
    status,
    date,
    smallDescription,
    description,
    featured,
    images,
  },
}) {
  const [fullDesc, showFullDesc] = useState(false);
  const [fullSDesc, showFullSDesc] = useState(false);
  const { mutate: updateEvent, isLoading: isUpdating } = useUpdateEvent();
  const { mutate: deleteEvent, isLoading: isDeleting } = useDeleteEvent();
  const id = _id;

  const [editData, setEditData] = useState({
    title,
    smallDescription,
    description,
    date,
    images,
  });

  const handleConfirmEdit = async () => {
    const created = moment(editData.date).format("YYYY-MM-DD");
    const formData = {
      title: editData.title,
      smallDescription: editData.smallDescription,
      description: editData.description,
      date: created,
    };

    updateEvent(
      { id, data: formData },
      {
        onSuccess: () => {
          toast.success("Event updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Event:", error);
          toast.error("Failed to update Event. Please try again.");
        },
      }
    );
  };

  //   const navigate = useNavigate();
  //   const { checkout, isCheckingOut } = useCheckout();
  //   const { deleteBooking, isDeleting } = useDeleteBooking();
  const handleToggleStatus = () => {
    if (status) {
      updateEvent({ id, data: { status: "false" } });
    } else {
      updateEvent({ id, data: { status: "true" } });
    }
  };

  const expandDesc = () => {
    showFullDesc((desc) => !desc);
  };

  const expandSDesc = () => {
    showFullSDesc((desc) => !desc);
  };

  const created = moment(date).format("YYYY-MM-DD");

  return (
    <Table.Row alignItems="start">
      <Stacked>
        <span>{title}</span>
      </Stacked>

      <Stacked>
        <span>
          {fullSDesc ? smallDescription : smallDescription.slice(0, 50)} ...
        </span>
        <span onClick={expandSDesc} style={{ cursor: "pointer" }}>
          {fullSDesc ? "Show less" : "Show more"}
        </span>
      </Stacked>

      <Stacked>
        <span>{fullDesc ? description : description.slice(0, 70)}...</span>
        <span onClick={expandDesc} style={{ cursor: "pointer" }}>
          {fullDesc ? "Show less" : "Show more"}
        </span>
      </Stacked>

      <Stacked>
        <span>{created}</span>
      </Stacked>

      <Tag type={status ? "green" : "silver"}>
        {status ? "Active" : "Inactive"}
      </Tag>

      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
            disabled={isUpdating}
          ></Menus.Button>
          <Modal.Open opens="event-form">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Window name="event-form">
            <EditEventsForm
              resourceName="Event"
              editData={editData}
              setEditData={setEditData}
              onCloseModal={() => {}}
              onConfirm={handleConfirmEdit}
              disabled={false}
            />
          </Modal.Window>
          <Modal.Open opens="image-form">
            <Menus.Button icon={<FaRegImages />} />
          </Modal.Open>
          <Modal.Window name="image-form">
            <AddImagesForm
              id={_id}
              resourceName="Event"
              editData={editData}
              setEditData={setEditData}
              onCloseModal={() => {}}
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
            resourceName="event"
            disabled={isDeleting}
            onConfirm={() => deleteEvent(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default EventRow;
