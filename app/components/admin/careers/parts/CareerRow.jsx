import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";

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
import { HiEyeOff } from "react-icons/hi";
import { useBlockCareers, useDeleteCareers, useUnblockCareers } from "./useCareers";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";

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

function CareerRow({
  department: {
    _id,
    position,
    name,
    email,
    phone,
    city,
    resume,
    dateApplied,
    status,
  },
}) {
  const { mutate: deleteCareers, isLoading: isDeleting } = useDeleteCareers();
  const { mutate: blockCareers, isLoading: isBlocking } = useBlockCareers();
  const { mutate: unblockCareers, isLoading: isUnblocking } =
    useUnblockCareers();

  const handleToggleStatus = () => {
    if (status) {
      blockCareers(_id); // Call block API if active
    } else {
      unblockCareers(_id); // Call unblock API if inactive
    }
  };
  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };
const handleDelete = () => {
  deleteCareers(_id);
};
  return (
    <Table.Row alignItems="start">
      <Stacked>
        <span>{position}</span>
      </Stacked>

      <Stacked>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>{name}</span>
      </Stacked>
      <Stacked>
        <span>{phone}</span>
      </Stacked>
      <Stacked>
        <span>{city}</span>
      </Stacked>
      <Stacked>
        <span>
          <a
            href={resume}
            // target="blank"
            download
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ButtonSmallOutlineWithoutHover
              style={{ color: "#005900", border: "1px solid #005900" }}
            >
              Download
            </ButtonSmallOutlineWithoutHover>
          </a>
        </span>
      </Stacked>
      <Tag type={status ? "green" : "silver"}>
        {status ? "Active" : "Inactive"}
      </Tag>
      <Stacked>
        <span>{dateApplied}</span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
            disabled={isBlocking || isUnblocking}
          ></Menus.Button>
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

export default CareerRow;
