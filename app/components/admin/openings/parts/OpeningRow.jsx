import styled from "styled-components";
import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import { useState } from "react";
import { HiEyeOff, HiPencil } from "react-icons/hi";
import {
  useBlockOpening,
  useDeleteOpening,
  useUnblockOpening,
  useUpdateOpening,
} from "../../careers/parts/useOpening";
import EditOpeningsForm from "@/app/components/features/Openings/EditOpeningsForm";

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

function OpeningRow({
  department: { _id, position, jd, category, status, type, location },
}) {
  const [fullDesc, showFullDesc] = useState(false);
  const [fullSDesc, showFullSDesc] = useState(false);
  const { mutate: deleteOpening, isLoading: isDeleting } = useDeleteOpening();
  const { mutate: blockOpening, isLoading: isBlocking } = useBlockOpening();
  const { mutate: unblockOpening, isLoading: isUnblocking } =
    useUnblockOpening();
  const { mutate: updateOpening, isLoading: isUpdating } = useUpdateOpening();
  const [jdContent, setJdContent] = useState(jd);

  const [editData, setEditData] = useState({
    position,
    jd,
    category,
    type,
    location,
  });

  const handleConfirmEdit = () => {
    const formData = {
      position: editData.position,
      jd: jdContent,
      category: editData.category,
      type: editData.type,
      location: editData.location,
    };

    updateOpening(
      {
        id: _id,
        data: formData,
      },
      {
        onSuccess: () => {
          toast.success("Opening updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Opening:", error);
          toast.error("Failed to update Opening. Please try again.");
        },
      }
    );
  };

  const handleToggleStatus = () => {
    if (status) {
      blockOpening(_id); // Call block API if active
    } else {
      unblockOpening(_id); // Call unblock API if inactive
    }
  };
  const expandDesc = () => {
    showFullDesc((desc) => !desc);
  };

  const expandSDesc = () => {
    showFullSDesc((desc) => !desc);
  };
  const handleDelete = () => {
    deleteOpening(_id);
  };
  return (
    <Table.Row alignItems="start">
      <Stacked>
        <span>{position}</span>
      </Stacked>

      <Stacked>
        <span
          dangerouslySetInnerHTML={{
            __html: fullSDesc
              ? jd
              : `${jd.slice(0, 50)}${jd.length > 50 ? "..." : ""}`,
          }}
        />
        <span onClick={expandSDesc} style={{ cursor: "pointer" }}>
          {fullSDesc ? "Show less" : "Show more"}
        </span>
      </Stacked>

      <Stacked>
        <span>{category}</span>
      </Stacked>
      <Stacked>
        <span>{type}</span>
      </Stacked>
      <Stacked>
        <span>{location}</span>
      </Stacked>

      <Tag type={status ? "green" : "silver"}>
        {status ? "Active" : "Inactive"}
      </Tag>

      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
            disabled={isBlocking || isUnblocking}
          ></Menus.Button>
          <Modal.Open opens="opening-form">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="opening-form">
          <EditOpeningsForm
            resourceName="Openings"
            editData={editData}
            setEditData={setEditData}
            onCloseModal={() => {}}
            onConfirm={handleConfirmEdit}
            disabled={isUpdating}
            jdContent={jdContent}
            setJdContent={setJdContent}
          />
        </Modal.Window>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Openings"
            disabled={isDeleting} // Disable button while deleting
            onConfirm={handleDelete} // Call the delete function on confirm
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default OpeningRow;
