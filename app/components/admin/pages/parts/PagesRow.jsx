import styled from "styled-components";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { useCreatePage, useDeletePage, useUpdatePage } from "../usePages";
import { HiEyeOff } from "react-icons/hi";
import EditPageForm from "@/app/components/features/Page/EditPageForm";
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

function PagesRow({ page: { _id, name, status } }) {
  const { mutate: updatePage, isLoading: isUpdating } = useUpdatePage();
  const { mutate: deletePage, isLoading: isDeleting } = useDeletePage();
  const [editData, setEditData] = useState({
    name,
  });

  const handleConfirmEdit = async () => {
    const formData = {
      name: editData.name,
    };

    updatePage(
      { id: _id, data: formData },
      {
        onSuccess: () => {
          toast.success("Page updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Page:", error);
          toast.error("Failed to update Page. Please try again.");
        },
      }
    );
  };

  const handleToggleStatus = () => {
    if (status) {
      updatePage({ id: _id, data: { status: "false" } });
    } else {
      updatePage({ id: _id, data: { status: "true" } });
    }
  };
  const handleDelete = () => {
    deletePage(_id);
  };
  return (
    <Table.Row>
      <Stacked>
        <span>{name}</span>
      </Stacked>
      <Stacked>
        <span>{_id}</span>
      </Stacked>

      <Tag type={status ? "green" : "silver"}>
        {status ? "Active" : "Inactive"}
      </Tag>

      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
            disabled={isUpdating}
          ></Menus.Button>
          <Modal.Open opens="page-form">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Window name="page-form">
            <EditPageForm
              id={_id}
              resourceName="Page"
              editData={editData}
              setEditData={setEditData}
              onCloseModal={() => {}}
              onConfirm={handleConfirmEdit}
              isUpdating={isUpdating}
            />
          </Modal.Window>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="page"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default PagesRow;
