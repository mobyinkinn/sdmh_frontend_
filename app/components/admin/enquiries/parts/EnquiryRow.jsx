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
import { HiEyeOff } from "react-icons/hi";
import { useDeleteEnquiry } from "./useEnquiry";
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

function EnquiryRow({ academic: { _id, name, phone, email, message, date } }) {
  const { mutate: deleteEnquiry, isLoading: isDeleting } = useDeleteEnquiry();
  const [fullDesc, setShowFullDesc] = useState(false);

  const expandDesc = () => {
    setShowFullDesc((desc) => !desc);
  };

  const handleDelete = () => {
    deleteEnquiry(_id);
  };
  return (
    <Table.Row>
      <Stacked>
        <span>{name}</span>
      </Stacked>

      <Stacked>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>{phone}</span>
      </Stacked>

      <Stacked>
        <span>{fullDesc ? message : message.slice(0, 70)} ...</span>
        <span onClick={expandDesc} style={{ cursor: "pointer" }}>
          {fullDesc ? "show less" : "show more"}
        </span>
      </Stacked>

      <Stacked>
        <span>{date}</span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="testimonial"
            disabled={isDeleting} // Disable button while deleting
            onConfirm={handleDelete} // Call the delete function on confirm
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default EnquiryRow;
