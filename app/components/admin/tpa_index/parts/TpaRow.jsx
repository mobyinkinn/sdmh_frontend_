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
import {
  useBlockTpa,
  useCreateTpa,
  useDeleteTpa,
  useUnblockTpa,
} from "../useTpa";
import { HiEyeOff } from "react-icons/hi";
import CreateTpa from "./CreateTpa";
import Button from "@/app/components/ui/Button";
import EditTpaForm from "@/app/components/features/Tpa/EditTpaForm";
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

function TpaRow({ academic: { _id, name, logo, status, tag } }) {
  //   const navigate = useNavigate();
  //   const { checkout, isCheckingOut } = useCheckout();
  const { mutate: deleteTpa, isLoading: isDeleting } = useDeleteTpa();
  const { mutate: blockTpa, isLoading: isBlocking } = useBlockTpa();
  const { mutate: unblockTpa, isLoading: isUnblocking } = useUnblockTpa();
  // const { mutate: updateBlog, isLoading: isUpdating } = useUpdateBlog();
  const handleToggleStatus = () => {
    if (status) {
      blockTpa(_id); // Call block API if active
    } else {
      unblockTpa(_id); // Call unblock API if inactive
    }
  };
  const handleDelete = () => {
    deleteTpa(_id);
  };
  const { mutate: createTpa, isLoading: isCreating } = useCreateTpa();

  const handleCreateTpa = (formData) => {
    createTpa(
      {
        data: formData,
      },
      {
        onSuccess: () => {
          toast.success("TPA created successfully!");
          onCloseModal();
        },
        onError: () => {
          toast.error("Failed to create TPA. Please try again.");
        },
      }
    );
  };
  return (
    <Table.Row>
      <Stacked>
        <span>{name}</span>
      </Stacked>

      <Stacked>
        <Image src={logo} alt={name} width={50} height={50} />
      </Stacked>
 <Stacked>
        <span>{tag}</span>
      </Stacked>
      <Tag type={status ? "green" : "silver"}>
        {status ? "Active" : "Inactive"}
      </Tag>
      {/* <Amount>{formatCurrency(totalPrice)}</Amount> */}
      <Stacked>
        <span>{_id}</span>
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
          <Modal.Window name="edit">
            <EditTpaForm id={_id} />
          </Modal.Window>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="tpa"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default TpaRow;
