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
import { useState } from "react";
import { MdAddLink } from "react-icons/md";
import Input from "@/app/components/ui/Input";
import { useRouter } from "next/navigation";
import EditNavlinksForm from "@/app/components/features/Navlinks/EditNavlinksForm";

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

const NavlinksRow = ({
  navlink: { _id, subItemOrderId, itemName, itemLink },
}) => {
  const [editData, setEditData] = useState({
    subItemOrderId,
    itemName,
    itemLink,
  });
  console.log("item", _id);
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

      <Modal>
        <Menus.Menu>
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Window name="edit">
            <EditNavlinksForm
              itemId={_id}
              resourceName="Navlink"
              editData={editData}
              setEditData={setEditData}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
};

export default NavlinksRow;
