import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";

// import { formatCurrency } from "../../../utils/helpers";
// import { formatDistanceFromNow } from "../../../utils/helpers";
import Menus from "../../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import {
  useBlockBlog,
  useDeleteBlog,
  useUnblockBlog,
  useUpdateBlog,
  useUpdateSingleImageFromBlog,
} from "../useBlogs";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { useState } from "react";
import { HiEyeOff } from "react-icons/hi";
import ConfirmEdit from "@/app/components/ui/EditModal";
import { FaRegImages } from "react-icons/fa";
import AddImagesFormBlog from "@/app/components/features/Blog/AddImagesFormBlog";
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

function BlogRow({
  department: {
    _id,
    title,
    status,
    date,
    smallDescription,
    description,
    image,
    images,
  },
}) {
  const [fullDesc, showFullDesc] = useState(false);
  const [fullSDesc, showFullSDesc] = useState(false);
  const { mutate: deleteBlog, isLoading: isDeleting } = useDeleteBlog();
  const { mutate: blockBlog, isLoading: isBlocking } = useBlockBlog();
  const { mutate: unblockBlog, isLoading: isUnblocking } = useUnblockBlog();
  const { mutate: updateBlog, isLoading: isUpdating } = useUpdateBlog();
  const { mutate: updateSingleImageFromBlog, isLoading: isUpdatingImage } =
    useUpdateSingleImageFromBlog();
  const [descContent, setDescContent] = useState(description);

  const handleToggleStatus = () => {
    if (status) {
      blockBlog(_id); // Call block API if active
    } else {
      unblockBlog(_id); // Call unblock API if inactive
    }
  };

  const expandDesc = () => {
    showFullDesc((desc) => !desc);
  };

  const expandSDesc = () => {
    showFullSDesc((desc) => !desc);
  };
  const handleDelete = () => {
    deleteBlog(_id);
  };
  const [editData, setEditData] = useState({
    title,
    smallDescription,
    description,
    image,
    date,
    images,
  });

  const handleConfirmEdit = () => {
    const formData = {
      title: editData.title,
      smallDescription: editData.smallDescription,
      description: descContent,
      date: editData.date,
    };

    updateBlog(
      {
        id: _id,
        data: formData,
      },
      {
        onSuccess: () => {
          toast.success("Blog updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Blog:", error);
          toast.error("Failed to update Blog. Please try again.");
        },
      }
    );
  };

  return (
    <Table.Row alignItems="start">
      <Stacked>
        <span>{title}</span>
      </Stacked>

      <Stacked>
        <span>
          {fullSDesc ? smallDescription : smallDescription.slice(0, 10)}...
        </span>
        <span onClick={expandSDesc} style={{ cursor: "pointer" }}>
          {fullSDesc ? "Show less" : "Show more"}
        </span>
      </Stacked>

      <Stacked>
        <span
          dangerouslySetInnerHTML={{
            __html: fullDesc
              ? description
              : `${description.slice(0, 50)}${
                  description.length > 50 ? "..." : ""
                }`,
          }}
        />
        <span onClick={expandDesc} style={{ cursor: "pointer" }}>
          {fullDesc ? "show less" : "show more"}
        </span>
      </Stacked>

      <Stacked>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            style={{ borderRadius: "8px" }}
          />
        ) : (
          <span>No Image</span>
        )}
      </Stacked>
      <Stacked>{date}</Stacked>

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
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Open opens="image-form">
            <Menus.Button icon={<FaRegImages />} />
          </Modal.Open>
          <Modal.Window name="image-form">
            <AddImagesFormBlog
              id={_id}
              resourceName="Blog"
              editData={editData}
              setEditData={setEditData}
              onCloseModal={() => {}}
              onConfirm={handleConfirmEdit}
              disabled={false}
            />
          </Modal.Window>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="blog"
            disabled={isDeleting} // Disable button while deleting
            onConfirm={handleDelete} // Call the delete function on confirm
            onCloseModal={() => {}}
          />
        </Modal.Window>
        <Modal.Window name="edit">
          <ConfirmEdit
            id={_id}
            resourceName="blog"
            editData={editData}
            setEditData={setEditData}
            onCloseModal={() => {}}
            onConfirm={handleConfirmEdit}
            isUpdating={isUpdating}
            descContent={descContent}
            setDescContent={setDescContent}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BlogRow;
