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
  academic: { id: id, title, description, status, created },
}) {
  const [fullDesc, setShowFullDesc] = useState(false);
  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };

  const expandDesc = () => {
    setShowFullDesc((desc) => !desc);
  };

  return (
    <Table.Row>
      <Stacked>
        <span>Title</span>
        <span>{title}</span>
      </Stacked>

      <Stacked>
        <span>{fullDesc ? description : description.slice(0, 70)} ...</span>
        <span onClick={expandDesc} style={{ cursor: "pointer" }}>
          {fullDesc ? "show less" : "show more"}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Stacked>
        <span>Created on</span>
        <span>{created}</span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={id} />
          <Menus.List id={id}>
            <Menus.Button icon={<HiEye />}>See details</Menus.Button>
            {status === "inactive" && (
              <Menus.Button icon={<HiArrowDownOnSquare />}>Active</Menus.Button>
            )}
            {status === "active" && (
              <Menus.Button icon={<HiArrowUpOnSquare />}>Inactive</Menus.Button>
            )}
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete health plan</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete resourceName="health plan" />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default PlanRow;
