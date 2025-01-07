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
  academic: { _id, title, description, status, createdAt, image },
}) {
  const [fullDesc, setShowFullDesc] = useState(false);
  const { mutate: deleteCheckup, isLoading: isDeleting } = useDeleteCheckup();
  const { mutate: blockCheckup, isLoading: isBlocking } = useBlockCheckup();
  const { mutate: unblockCheckup, isLoading: isUnblocking } =
    useUnblockCheckup();
  const { mutate: updateCheckup, isLoading: isUpdating } = useUpdateCheckup();

  const handleToggleStatus = () => {
    if (status) {
      blockCheckup(_id); // Call block API if active
    } else {
      unblockCheckup(_id); // Call unblock API if inactive
    }
  };

  const handleDelete = () => {
    deleteCheckup(_id);
  };

  const expandDesc = () => {
    setShowFullDesc((desc) => !desc);
  };

  return (
    <Table.Row>
      <Stacked>
        <span>{title}</span>
      </Stacked>

      <Stacked>
        <span>{fullDesc ? description : description.slice(0, 30)} ...</span>
        <span onClick={expandDesc} style={{ cursor: "pointer" }}>
          {fullDesc ? "show less" : "show more"}
        </span>
      </Stacked>

      {/* <Stacked>
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
      </Stacked> */}

      <Stacked>
        <Tag type={status ? "green" : "silver"}>
          {status ? "Active" : "Inactive"}
        </Tag>
      </Stacked>

      <Stacked>
        <span>{createdAt}</span>
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
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="checkup"
            disabled={isDeleting} // Disable button while deleting
            onConfirm={handleDelete} // Call the delete function on confirm
          />
        </Modal.Window>
        <Modal.Window name="edit">
          {/* <ConfirmEdit
            resourceName="checkup"
            editData={editData}
            setEditData={setEditData}
            onCloseModal={() => {}}
            onConfirm={handleConfirmEdit}
            disabled={false}
          /> */}
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default PlanRow;
