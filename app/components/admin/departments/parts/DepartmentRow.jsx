import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";

// import { formatCurrency } from "../../../utils/helpers";
// import { formatDistanceFromNow } from "../../../utils/helpers";
import Menus from "../../../ui/Menus";
import moment from "moment";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import Image from "next/image";
import { HiEyeOff, HiPencil } from "react-icons/hi";
import {
  useBlockDepartment,
  useUnblockDepartment,
  useDeleteDepartment,
} from "./useDepartment";
import EditDepartmentForm from "@/app/components/features/Department/EditDepartmentForm";
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

function DepartmentRow({
  department: { _id: id, bannerImage, name, image, status, updatedAt },
}) {
  const { mutate: blockDepartment, isLoading: isBlocking } =
    useBlockDepartment();
  const { unblockDepartment, isUnblocking } = useUnblockDepartment();
  const { deleteDepartment, isDeleting } = useDeleteDepartment();

  const handleToggleStatus = () => {
    if (status === true) {
      blockDepartment(id); // Call block API if active
    } else {
      unblockDepartment(id); // Call unblock API if inactive
    }
  };

  const created = moment(updatedAt).format("YYYY-MM-DD");

  //   const navigate = useNavigate();
  //   const { checkout, isCheckingOut } = useCheckout();
  //   const { deleteBooking, isDeleting } = useDeleteBooking();

  let convertedStatus;
  if (status === true) {
    convertedStatus = "active";
  } else {
    convertedStatus = "inactive";
  }

  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };

  return (
    <Table.Row>
      <Stacked>
        <span>{name}</span>
      </Stacked>

      <Stacked>
        <Image src={image} alt={name} width={50} height={50} />
      </Stacked>

      <Stacked>
        <Image src={bannerImage} alt={name} width={50} height={50} />
      </Stacked>

      <Tag type={statusToTagName[convertedStatus]}>
        {convertedStatus.replace("-", " ")}
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
          <Modal.Open opens="banner-form">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Window name="banner-form">
            <EditDepartmentForm id={id} />
            {/* <EditBannerForm pageName={page} /> */}
          </Modal.Window>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Banner"
            disabled={isDeleting}
            onConfirm={() => deleteDepartment(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default DepartmentRow;
