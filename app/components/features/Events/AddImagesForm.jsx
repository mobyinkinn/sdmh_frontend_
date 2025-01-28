import React from "react";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteImageFromEvent,
  useAddImagesToEvent,
} from "../../admin/events/useEvents";
import toast from "react-hot-toast";
import SpinnerMini from "../../ui/SpinnerMini";

const AddImagesForm = ({
  id,
  onConfirm,
  disabled,
  editData,
  setEditData,
  onCloseModal,
}) => {
  const { mutate: removeImageFromEvent } = useDeleteImageFromEvent();
  const { mutate: addImagesToEvent, isPending: isAddingImages } =
    useAddImagesToEvent();
  if (isAddingImages) return <SpinnerMini />;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    editData.images.forEach((image) => {
      formData.append("images", image); // No index brackets
    });

    addImagesToEvent(
      { id, images: formData },
      {
        onSuccess: () => {
          toast.success("Images added successfully!");
          onCloseModal?.();
          onConfirm?.();
        },
        onError: (error) => {
          console.error("Failed to add images:", error);
          toast.error("Failed to add images. Please try again.");
        },
      }
    );
  };

  const handleDeleteImage = (index) => {
    const payload = { index: { index } };

    removeImageFromEvent(
      { id, data: payload },
      {
        onSuccess: () => {
          toast.success("Image deleted successfully!");
        },
        onError: (error) => {
          console.error("Failed to delete Image:", error);
          toast.error("Failed to delete Image. Please try again.");
        },
      }
    );
    const updatedImages = editData.images.filter((_, i) => i !== index);
    setEditData({ ...editData, images: updatedImages });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h3">Update Images</Heading>

      <Stack
        direction="row"
        pt={5}
        pb={2}
        spacing={2}
        sx={{ flexWrap: "wrap", gap: 3 }}
      >
        {editData.images.map((image, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={
                typeof image === "string" ? image : URL.createObjectURL(image)
              }
              alt={`Preview ${index}`}
              style={{ width: "100px", height: "100px", objectFit: "inherit" }}
            />
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteImage(index)}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                color: "red",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </Stack>

      <Stack pb={2}>
        <FormRow label="Add New Images">
          <FileInput
            type="file"
            id="images"
            accept="image/*"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setEditData({
                ...editData,
                images: [...editData.images, ...files],
              });
            }}
            multiple
          />
        </FormRow>
      </Stack>

      <FormRow>
        <Button
          variation="secondary"
          type="button"
          onClick={() => onCloseModal?.()}
          disabled={disabled || isAddingImages}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={disabled || isAddingImages}>
          {isAddingImages ? "Saving..." : "Save Changes"}
        </Button>
      </FormRow>
    </form>
  );
};

export default AddImagesForm;
