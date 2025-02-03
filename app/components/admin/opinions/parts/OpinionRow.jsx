import styled from "styled-components";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import { HiTrash } from "react-icons/hi2";
import { useDeleteOpinion } from "../useOpinions";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
import moment from "moment";
import SpinnerMini from "@/app/components/ui/SpinnerMini";

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

function OpinionRow({
  opinion: { _id, name, phone, email, speciality, file, createdAt },
}) {
  const { mutate: deleteOpinion, isPending: isDeleting } = useDeleteOpinion();
  const created = moment(createdAt).format("YYYY-MM-DD");
  if (isDeleting) return <SpinnerMini />;

  const handleDelete = () => {
    deleteOpinion(_id);
  };
  return (
    <Table.Row>
      <Stacked>
        <span>{name}</span>
      </Stacked>

      <Stacked>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>{phone}</span>
      </Stacked>

      <Stacked>
        <span>{speciality}</span>
      </Stacked>

      <Stacked>
        <a
          href={file}
          download
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ButtonSmallOutlineWithoutHover
            style={{ color: "#005900", border: "1px solid #005900" }}
          >
            View
          </ButtonSmallOutlineWithoutHover>
        </a>
      </Stacked>

      <Stacked>
        <span>{created}</span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="opinion"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default OpinionRow;
