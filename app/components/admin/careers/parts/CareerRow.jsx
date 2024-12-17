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
  department: { id: id, title, email, name, phone, city, attachment, created },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };

  return (
    <Table.Row alignItems="start">
      <Stacked>
        <span>{title}</span>
      </Stacked>

      <Stacked>
        <span>Email</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>Name</span>
        <span>{name}</span>
      </Stacked>
      <Stacked>
        <span>Phone No</span>
        <span>{phone}</span>
      </Stacked>
      <Stacked>
        <span>City</span>
        <span>{city}</span>
      </Stacked>
      <Stacked>
        <span>
          <a
            href={attachment}
            // target="blank"
            download
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Download Attachment
          </a>
        </span>
      </Stacked>

      <Stacked>
        <span>{created}</span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={id} />
          <Menus.List id={id}>
            {/* 
            <Menus.Button
              icon={<HiEye />}
              //   onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </Menus.Button>
            */}
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete resume</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="resume"
            // disabled={isDeleting}
            // onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default CareerRow;
