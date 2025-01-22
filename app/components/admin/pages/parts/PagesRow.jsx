import styled from "styled-components";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { useCreatePage, useDeletePage, useUpdatePage } from "../usePages";
import { HiEyeOff } from "react-icons/hi";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
import EditNoticeForm from "@/app/components/features/academicNotices/EditNoticeForm";

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

function PagesRow({ page: { _id, name, file, status } }) {
  const { mutate: updatePage, isLoading: isUpdating } = useUpdatePage();
  const { mutate: deletePage, isLoading: isDeleting } = useDeletePage();

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
            <EditNoticeForm id={_id} />
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
