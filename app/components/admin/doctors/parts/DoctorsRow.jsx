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
import { HiEyeOff, HiPencil } from "react-icons/hi";
import { useBlockDoctor, useUnblockDoctor, useDeleteDoctor } from "./useDoctor";
import EditDoctorForm from "@/app/components/features/Doctor/EditDoctorForm";
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

function DoctorsRow({
  doctor: {
    _id: id,
    name,
    image,
    department,
    floor,
    room,
    availablity,
    status,
    created,
  },
}) {
  let convertedStatus;
  const { blockDoctor, isBlocking } = useBlockDoctor();
  const { unblockDoctor, isUnblocking } = useUnblockDoctor();
  const { deleteDoctor, isDeleting } = useDeleteDoctor();
  const { data: departmentData, isLoading: isLoadingDepartment } =
    useDepartment();

  if (isLoadingDepartment) return <Spinner />;

  let filteredDepartment = departmentData.filter(
    (el) => el._id === department
  )[0];

  if (status === true) {
    convertedStatus = "active";
  } else {
    convertedStatus = "inactive";
  }

  const handleToggleStatus = () => {
    if (status === true) {
      blockDoctor(id);
    } else {
      unblockDoctor(id);
    }
  };

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
        <span>{filteredDepartment.name}</span>
      </Stacked>

      <Stacked>
        <Image src={image} alt={name} width={50} height={50} />
      </Stacked>

      <Stacked>
        <span>{floor}</span>
      </Stacked>

      <Stacked>
        <span>{room}</span>
      </Stacked>

      <Stacked>
        <span
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
          }}
        >
          {availablity.map((el, i) => {
            return (
              <Button size="small" variation="secondary" key={i}>
                {/* {el.day} - {el.at} */}
                {el}
              </Button>
            );
          })}
        </span>
      </Stacked>

      <Tag type={statusToTagName[convertedStatus]}>
        {convertedStatus.replace("-", " ")}
      </Tag>

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
            <EditDoctorForm
              id={id}
              department={filteredDepartment}
              departmentData={departmentData}
            />
          </Modal.Window>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Banner"
            disabled={isDeleting}
            onConfirm={() => deleteDoctor(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default DoctorsRow;
