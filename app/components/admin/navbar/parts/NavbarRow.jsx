import styled from "styled-components";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import { HiTrash } from "react-icons/hi2";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
import SpinnerMini from "@/app/components/ui/SpinnerMini";
import { useDeleteNavbar } from "../useNavbar";
import { HiPencil } from "react-icons/hi";
import EditNavbarForm from "@/app/components/features/Navbar/EditNavbarForm";

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

function NavbarRow({ navbar: { _id, orderId, name, link, items } }) {
  const { mutate: deleteNavbar, isPending: isDeleting } = useDeleteNavbar();
  if (isDeleting) return <SpinnerMini />;

  const handleDelete = () => {
    deleteNavbar(_id);
  };

  console.log("items", items);
  return (
    <Table.Row>
      <Stacked>
        <span>{orderId}</span>
      </Stacked>

      <Stacked>
        <span>{name}</span>
      </Stacked>

      <Stacked>
        <span>{link}</span>
      </Stacked>

      <Stacked>
        <Table columns="2fr 2fr 2fr">
          <Table.Header>
            <div>Item Order</div>
            <div>Item Name</div>
            <div>Item Link</div>
          </Table.Header>

          <Table.Body
            data={items}
            render={(item) => <ItemRow key={item.subItemOrderId} item={item} />}
          />
        </Table>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="edit">
          <EditNavbarForm
            id={_id}
            resourceName="Navbar"
            // editData={editData}
            // setEditData={setEditData}
            // onCloseModal={() => {}}
            // onConfirm={handleConfirmEdit}
          />
        </Modal.Window>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Navbar"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default NavbarRow;

const ItemRow = ({ item: { subItemOrderId, itemName, itemLink } }) => {
  return (
    <Table.Row>
      <Stacked>
        <span>{subItemOrderId}</span>
      </Stacked>
      <Stacked>
        <span>{itemName}</span>
      </Stacked>
      <Stacked>
        <span>{itemLink}</span>
      </Stacked>
    </Table.Row>
  );
};
