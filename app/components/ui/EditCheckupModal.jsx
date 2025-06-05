import React, { useState } from "react";
import Form from "./Form";
import Button from "./Button";
import FileInput from "./FileInput";
import FormRow from "./FormRow";
import { Stack } from "@mui/material";
import Heading from "./Heading";
import Input from "./Input";
import { ImagePreviewContainer } from "./ImagePreviewContainer";
import { FaEdit } from "react-icons/fa";
import {
  useUpdateCheckupBanner,
  useUpdateCheckupImage,
} from "../admin/health_plans/useCheckups";
import Jodit from "../features/Openings/Jodit";
import { px } from "framer-motion";
import SpinnerMini from "./SpinnerMini";
import { MediaUrl } from "../services/MediaUrl";
import toast from "react-hot-toast";

const ConfirmEdit = ({
  id,
  onCloseModal,
  resourceName,
  onConfirm,
  disabled,
  editData,
  setEditData,
  descContent,
  setDescContent,
}) => {
  const { mutate: updateImage, isPending: isUpdateImage } =
    useUpdateCheckupImage();
  const { mutate: updateBanner, isPending: isUpdateBanner } =
    useUpdateCheckupBanner();

  if (isUpdateImage || isUpdateBanner) return <SpinnerMini />;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    const formDataImage = new FormData();
    formDataImage.append("image", file);

    // Update local state with the new file before sending to the backend
    setEditData({
      ...editData,
      [fieldName]: file,
    });

    updateImage(
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
  };


  // const handleBannerChange = (e, fieldName) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     // Immediately update the state to show the image preview
  //     const imageUrl = URL.createObjectURL(file); // This creates a local URL for the image preview
  //     setEditData({
  //       ...editData,
  //       [fieldName]: imageUrl, // Set the preview URL for the image
  //     });

  //     // Prepare the form data for the banner image
  //     const formDataBanner = new FormData();
  //     formDataBanner.append("banner", file);

  //     // Call the updateBanner function for backend update
  //     updateBanner(
  //       {
  //         id,
  //         data: formDataBanner,
  //       },
  //       {
  //         onSuccess: () => {
  //           toast.success("Banner updated successfully!");
  //           onCloseModal();
  //         },
  //         onError: (error) => {
  //           console.error("Failed to update Banner:", error);
  //           toast.error("Failed to update Banner. Please try again.");
  //         },
  //       }
  //     );
  //   }
  // };
const handleBannerChange = (e, fieldName) => {
  const file = e.target.files[0];


  
  const formDataBanner = new FormData();
  formDataBanner.append("banner", file);

  updateBanner(
    { id, data: formDataBanner },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal?.();
    onConfirm();
  };
 const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("/uploads/")) {
      return `${MediaUrl}${url.substring(url.lastIndexOf("/") + 1)}`;
    }
    return `${MediaUrl}${url}`;
  };
  return (
    <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
      <Heading as="h3">Edit {resourceName}</Heading>

      <Stack gap={0.5} pt={1}>
        <FormRow label="Title">
          <Input
            disabled={disabled}
            type="text"
            name="title"
            value={editData.title || ""}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Short Description">
          <Input
            disabled={disabled}
            type="text"
            name="smallDescription"
            value={editData.smallDescription || ""}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Description"></FormRow>
        <Jodit content={descContent} setContent={setDescContent} />
        <FormRow label="Price">
          <Input
            disabled={disabled}
            type="text"
            name="price"
            value={editData.price || ""}
            onChange={handleInputChange}
          />
        </FormRow>

        <Stack direction={"row"} gap={6}>
          <FormRow label={"Image"}>
            <label>
              <ImagePreviewContainer>
                {editData.image && (
                  <>
                    <img
                      src={
                        typeof editData.image === "string"
                          ? getImageUrl(editData.image) // Use the updated getImageUrl function
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
            </label>
            <Stack color={"red"} fontSize={"0.8rem"} mb={"20px"}>
              <p>Image size will be: 1500 * 1000</p>
            </Stack>
          </FormRow>

          <FormRow label={"Banner"}>
            <label>
              <ImagePreviewContainer>
                {editData.bannerImage && (
                  <>
                    <img
                      src={
                        getImageUrl(editData.bannerImage) ||
                        URL.createObjectURL(editData.bannerImage)
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
            <Stack color={"red"} fontSize={"0.8rem"} mb={"20px"}>
              <p>Image size will be: 1500 * 1000</p>
            </Stack>
          </FormRow>
        </Stack>

        <FormRow>
          <Button
            variation="secondary"
            type="button"
            onClick={onCloseModal}
            disabled={disabled}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={disabled}>
            Save Changes
          </Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default ConfirmEdit;
