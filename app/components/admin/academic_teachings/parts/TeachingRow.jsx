import styled from "styled-components";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import {
  useBlockTeachings,
  useDeleteTeaching,
  useUnblockTeachings,
} from "../useTeachings";
import { HiEyeOff } from "react-icons/hi";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
import EditTeachingForm from "@/app/components/features/academicTeachings/EditTeachingForm";
import { useDepartment } from "../../departments/parts/useDepartment";
import Spinner from "@/app/components/ui/Spinner";
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

function TeachingRow({
  teaching: { _id, name, file, status, year, department },
}) {
  //   const navigate = useNavigate();
  //   const { checkout, isCheckingOut } = useCheckout();
  //   const { deleteBooking, isDeleting } = useDeleteBooking();
  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };
  const { mutate: blockTeachings, isLoading: isBlocking } = useBlockTeachings();
  const { mutate: unblockTeachings, isLoading: isUnblocking } =
    useUnblockTeachings();
  const { mutate: deleteTeachings, isLoading: isDeleting } =
    useDeleteTeaching();
  const { data: departmentData, isLoading: isLoadingDepartment } =
    useDepartment();
  if (isLoadingDepartment) return <Spinner />;
  let filteredDepartment = departmentData.filter(
    (el) => el._id === department
  )[0];
  const handleToggleStatus = () => {
    if (status) {
      blockTeachings(_id); // Call block API if active
    } else {
      unblockTeachings(_id); // Call unblock API if inactive
    }
  };
  const handleDelete = () => {
    deleteTeachings(_id);
  };
  return (
    <Table.Row>
      <Stacked>
        <span>{name}</span>
      </Stacked>
      <Stacked>
        <span>{year}</span>
      </Stacked>
      <Stacked>
        <span>{filteredDepartment?.name}</span>
      </Stacked>
      <Stacked>
        <span>{_id}</span>
      </Stacked>
      <Stacked>
        <span>
          <a
            href={file}
            // target="blank"
            download
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ButtonSmallOutlineWithoutHover
              style={{ color: "#005900", border: "1px solid #005900" }}
            >
              View
            </ButtonSmallOutlineWithoutHover>
          </a>
        </span>
      </Stacked>

      <Tag type={status ? "green" : "silver"}>
        {status ? "Active" : "Inactive"}
      </Tag>
      {/* <Amount>{formatCurrency(totalPrice)}</Amount> */}
      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
            disabled={isBlocking || isUnblocking}
          ></Menus.Button>
          <Modal.Open opens="notice-form">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Window name="notice-form">
            <EditTeachingForm id={_id} department={filteredDepartment} />
          </Modal.Window>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="notice"
            disabled={isDeleting} // Disable button while deleting
            onConfirm={handleDelete} // Call the delete function on confirm
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default TeachingRow;
