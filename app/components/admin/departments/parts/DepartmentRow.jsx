import styled from "styled-components";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import moment from "moment";
import { HiEye, HiTrash } from "react-icons/hi2";
import Image from "next/image";
import { HiEyeOff, HiPencil } from "react-icons/hi";
import {
  useBlockDepartment,
  useUnblockDepartment,
  useDeleteDepartment,
  useUpdateDepartment,
} from "./useDepartment";
import EditDepartmentForm from "@/app/components/features/Department/EditDepartmentForm";
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

function DepartmentRow({
  department: {
    _id: id,
    bannerImage,
    name,
    content,
    image,
    status,
    updatedAt,
    mobileBanner,
  },
}) {
  const { mutate: blockDepartment, isLoading: isBlocking } =
    useBlockDepartment();
  const { unblockDepartment, isUnblocking } = useUnblockDepartment();
  const { deleteDepartment, isDeleting } = useDeleteDepartment();
  const { isUpdating, updateDepartment } = useUpdateDepartment();

  const [editData, setEditData] = useState({
    name,
    content,
    image,
    bannerImage,
    mobileBanner,
  });
  const [aboutContent, setAboutContent] = useState(content);

  const handleConfirmEdit = () => {
    const formData = {
      name: editData.name,
      content: aboutContent,
    };

    updateDepartment(
      {
        id,
        formdata: formData,
      },
      {
        onSuccess: () => {
          toast.success("Department updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Department:", error);
          toast.error("Failed to update Department. Please try again.");
        },
      }
    );
  };

  const handleToggleStatus = () => {
    if (status === true) {
      blockDepartment(id); // Call block API if active
    } else {
      unblockDepartment(id); // Call unblock API if inactive
    }
  };

  const created = moment(updatedAt).format("YYYY-MM-DD");

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
            <EditDepartmentForm
              id={id}
              editData={editData}
              setEditData={setEditData}
              aboutContent={aboutContent}
              setAboutContent={setAboutContent}
              onConfirm={handleConfirmEdit}
              disabled={isUpdating}
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
            onConfirm={() => deleteDepartment(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default DepartmentRow;
