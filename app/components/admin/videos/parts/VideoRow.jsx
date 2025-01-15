import styled from "styled-components";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import { HiTrash } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import { useDeleteVideo, useUpdateVideo } from "../useVideos";
import EditVideoForm from "@/app/components/features/Videos/EditVideoForm";
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

function VideoRow({ videos: { _id, title, url } }) {
  const id = _id;
  const videoId = url.split("v=")[1]?.split("&")[0];
  const { deleteVideos, isDeleting } = useDeleteVideo();
  const { updateVideos, isUpdating } = useUpdateVideo();
  const [editData, setEditData] = useState({
    title,
    url,
  });

  const handleConfirmEdit = () => {
    const formData = {
      title: editData.title,
      url: editData.url,
    };

    updateVideos(
      {
        id,
        data: formData,
      },
      {
        onSuccess: () => {
          console.log("Video updated successfully!");
        },
        onError: (error) => {
          console.error("Failed to update Video:", error);
        },
      }
    );
  };

  return (
    <Table.Row>
      <Stacked>
        <span>{title}</span>
      </Stacked>

      <Stacked>
        <iframe
          width="300"
          height="150"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
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
          <EditVideoForm
            resourceName="video"
            id={_id}
            editData={editData}
            setEditData={setEditData}
            onCloseModal={() => {}}
            onConfirm={handleConfirmEdit}
            disabled={isUpdating}
          />
        </Modal.Window>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="video"
            disabled={isDeleting}
            onConfirm={() => deleteVideos(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default VideoRow;
