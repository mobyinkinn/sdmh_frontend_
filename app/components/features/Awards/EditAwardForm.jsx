import React from "react";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { ImagePreviewContainer } from "../../ui/ImagePreviewContainer";
import { FaEdit } from "react-icons/fa";
import { useUpdateAwardImage } from "../../admin/awards/useAwards";
import SpinnerMini from "../../ui/SpinnerMini";

const EditAwardForm = ({
  id,
  onCloseModal,
  resourceName,
  onConfirm,
  isUpdating,
  editData,
  setEditData,
}) => {
  const { mutate: updateAwardImage, isPending: isUpdateImage } =
    useUpdateAwardImage();

  if (isUpdateImage) return <SpinnerMini />;

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal?.();
    onConfirm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    const formDataImage = new FormData();
    formDataImage.append("image", file);

    updateAwardImage(
      {
        id,
        data: formDataImage,
      },
      {
        onSuccess: () => {
          toast.success("Image updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Image:", error);
          toast.error("Failed to update Image. Please try again.");
        },
      }
    );

    if (file) {
      setEditData({ ...editData, [fieldName]: file });
    }
  };

  return (
    <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
      <Heading as="h3">Edit {resourceName}</Heading>

      <Stack gap={2} pt={5}>
        <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
          <FormRow label="Name">
            <Input
              name="name"
              disabled={isUpdating}
              type="text"
              id="name"
              value={editData.name}
              onChange={handleInputChange}
            />
          </FormRow>
          <FormRow label="Year">
            <Input
              name="year"
              disabled={isUpdating}
              type="text"
              id="year"
              value={editData.year}
              onChange={handleInputChange}
            />
          </FormRow>
        </Stack>
        <Stack marginLeft={2}>
          <FormRow label="About">
            <Input
              name="about"
              disabled={isUpdating}
              type="text"
              id="about"
              value={editData.about}
              onChange={handleInputChange}
            />
          </FormRow>
        </Stack>
        <Stack marginLeft={2}>
          <FormRow label="Image">
            <ImagePreviewContainer>
              {editData.image && (
                <>
                  <img
                    src={
                      typeof editData.image === "string"
                        ? editData.image
                        : URL.createObjectURL(editData.image)
                    }
                    alt="Preview"
                  />
                  <div className="edit-icon">
                    <label htmlFor="image-upload">
                      <FaEdit size={16} />
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => handleImageChange(e, "image")}
                    />
                  </div>
                </>
              )}
            </ImagePreviewContainer>
          </FormRow>
        </Stack>

        <FormRow marginLeft={2}>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isUpdating}>{"Update Award"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default EditAwardForm;
