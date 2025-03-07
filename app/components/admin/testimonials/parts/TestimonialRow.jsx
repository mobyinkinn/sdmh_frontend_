import styled from "styled-components";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import Image from "next/image";
import { useState } from "react";
import {
  useBlockTestimonial,
  useDeleteTestimonial,
  useUnblockTestimonial,
} from "./useTestimonial";
import { HiEyeOff } from "react-icons/hi";
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

function TestimonialRow({
  academic: { _id, name, designation, message, image, status, createdAt },
}) {
  const [fullDesc, setShowFullDesc] = useState(false);
  const { mutate: deleteTestimonial, isLoading: isDeleting } =
    useDeleteTestimonial();
  const { mutate: blockTestimonial, isLoading: isBlocking } =
    useBlockTestimonial();
  const { mutate: unblockTestimonial, isLoading: isUnblocking } =
    useUnblockTestimonial();
  const created = moment(createdAt).format("YYYY-MM-DD");

  const handleToggleStatus = () => {
    if (status) {
      blockTestimonial(_id); // Call block API if active
    } else {
      unblockTestimonial(_id); // Call unblock API if inactive
    }
  };
  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };

  const expandDesc = () => {
    setShowFullDesc((desc) => !desc);
  };
  const handleDelete = () => {
    deleteTestimonial(_id);
  };

  return (
    <Table.Row>
      <Stacked>
        <span>{name}</span>
      </Stacked>

      <Stacked>
        <span>{designation}</span>
      </Stacked>

      <Stacked>
        <span
          dangerouslySetInnerHTML={{
            __html: fullDesc ? message : `${message.slice(0, 70)} ...`,
          }}
        />
        <span onClick={expandDesc} style={{ cursor: "pointer", color: "blue" }}>
          {fullDesc ? "show less" : "show more"}
        </span>
      </Stacked>

      <Stacked>
        <Image src={image} alt={name} width={50} height={50} />
      </Stacked>

      <Tag type={status ? "green" : "silver"}>
        {status ? "Active" : "Inactive"}
      </Tag>

      <Stacked>
        <span>{created}</span>
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

export default TestimonialRow;
