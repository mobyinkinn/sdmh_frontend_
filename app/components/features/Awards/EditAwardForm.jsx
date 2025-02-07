import React, { useState } from "react";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { ImagePreviewContainer } from "../../ui/ImagePreviewContainer";
import { FaEdit } from "react-icons/fa";
import {
  useUpdateAwardBanner,
  useUpdateAwardImage,
} from "../../admin/awards/useAwards";
import SpinnerMini from "../../ui/SpinnerMini";
import Jodit from "../Openings/Jodit";

const EditAwardForm = ({
  id,
  onCloseModal,
  resourceName,
  onConfirm,
  isUpdating,
  editData,
  setEditData,
  aboutContent,
  setAboutContent,
}) => {
  const { mutate: updateAwardImage, isPending: isUpdateImage } =
    useUpdateAwardImage();
  const { mutate: updateBanner, isPending: isUpdateBanner } =
    useUpdateAwardBanner();

  if (isUpdateImage || isUpdateBanner) return <SpinnerMini />;

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

  const handleBannerChange = (e, fieldName) => {
    const file = e.target.files[0];
    const formDataBanner = new FormData();
    formDataBanner.append("banner", file);
    setEditData({ ...editData, [fieldName]: file });

    updateBanner(
      {
        id,
        data: formDataBanner,
      },
      {
        onSuccess: () => {
          toast.success("Banner updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Banner:", error);
          toast.error("Failed to update Banner. Please try again.");
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

      <Stack gap={1} pt={1}>
        <Stack direction={"row"} marginLeft={2} columnGap={7}>
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
          <FormRow label="Small Description">
            <Input
              name="smallDescription"
              disabled={isUpdating}
              type="text"
              id="smallDescription"
              value={editData.smallDescription}
              onChange={handleInputChange}
            />
          </FormRow>
        </Stack>
        <Stack marginLeft={2}>
          <FormRow label="About"></FormRow>
          <Jodit content={aboutContent} setContent={setAboutContent} />
        </Stack>

        <Stack marginLeft={2} direction={"row"} columnGap={7}>
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
                    width={200}
                    height={110}
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
          <FormRow label={"Banner"}>
            <label>
              <ImagePreviewContainer>
                {editData.bannerImage && (
                  <>
                    <img
                      src={
                        typeof editData.bannerImage === "string"
                          ? editData.bannerImage
                          : URL.createObjectURL(editData.bannerImage)
                      }
                      alt="Preview"
                      width={200}
                      height={110}
                    />
                    <div className="edit-icon">
                      <label htmlFor="banner-upload">
                        <FaEdit size={16} />
                      </label>
                      <input
                        name="banner"
                        id="banner-upload"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => handleBannerChange(e, "banner")}
                      />
                    </div>
                  </>
                )}
              </ImagePreviewContainer>
            </label>
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
