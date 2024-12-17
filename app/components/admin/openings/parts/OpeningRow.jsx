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
import { useState } from "react";
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

function OpeningRow({
  department: {
    id: id,
    title,
    description,
    seats,
    status,
    date,
    cordinateProgramers,
    cordinateNumber,
    created,
  },
}) {
  const [fullDesc, showFullDesc] = useState(false);
  const [fullSDesc, showFullSDesc] = useState(false);
  //   const navigate = useNavigate();
  //   const { checkout, isCheckingOut } = useCheckout();
  //   const { deleteBooking, isDeleting } = useDeleteBooking();
  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };

  const expandDesc = () => {
    showFullDesc((desc) => !desc);
  };

  const expandSDesc = () => {
    showFullSDesc((desc) => !desc);
  };

  return (
    <Table.Row alignItems="start">
      <Stacked>
        <span>{title}</span>
      </Stacked>

      <Stacked>
        <span>{fullSDesc ? description : description.slice(0, 50)} ...</span>
        <span onClick={expandSDesc} style={{ cursor: "pointer" }}>
          {fullSDesc ? "Show less" : "Show more"}
        </span>
      </Stacked>
      <Stacked>
        <span>{seats}</span>
      </Stacked>
      <Stacked>
        <span>{date}</span>
      </Stacked>
      <Stacked>
        <span>{cordinateProgramers}</span>
      </Stacked>

      <Stacked>
        <span>{cordinateNumber}</span>
      </Stacked>

      <Stacked>
        <span>{created}</span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={id} />
          <Menus.List id={id}>
            <Menus.Button
              icon={<HiEye />}
              //   onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </Menus.Button>
            {status === "inactive" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                // onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Active
              </Menus.Button>
            )}
            {status === "active" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                // onClick={() => checkout(bookingId)}
                // disabled={isCheckingOut}
              >
                Inactive
              </Menus.Button>
            )}
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete openinng</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="opening"
            // disabled={isDeleting}
            // onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default OpeningRow;
