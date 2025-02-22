import React from "react";
import Input, { DateInput } from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import Jodit from "../Openings/Jodit";
import { ImagePreviewContainer } from "../../ui/ImagePreviewContainer";
import { FaEdit } from "react-icons/fa";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";
import {
  useUpdateNewspressBanner,
  useUpdateNewspressImage,
} from "../../admin/newspress/useNewspress";

const EditNewspressForm = ({
  id,
  resourceName,
  onConfirm,
  disabled,
  editData,
  setEditData,
  onCloseModal,
  descContent,
  setDescContent,
}) => {
  const { mutate: updateImage, isPending: isUpdatingImage } =
    useUpdateNewspressImage();
  const { mutate: updateBanner, isPending: isUpdatingBanner } =
    useUpdateNewspressBanner();

  const StyledSelect = styled.select`
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    border: 1px solid
      ${(props) =>
        props.type === "white"
          ? "var(--color-grey-100)"
          : "var(--color-grey-300)"};
    border-radius: var(--border-radius-sm);
    background-color: var(--color-grey-0);
    font-weight: 500;
    box-shadow: var(--shadow-sm);
  `;

  if (isUpdatingImage || isUpdatingBanner) return <SpinnerMini />;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const formDataImage = new FormData();
    formDataImage.append("image", file);

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
    if (file) {
      setEditData({ ...editData, image: file });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal?.();
    onConfirm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h3">Edit {resourceName}</Heading>
      <Stack gap={1} pt={2}>
        <FormRow label="Title">
          <Input
            disabled={disabled}
            type="text"
            id="title"
            name="title"
            value={editData.title || ""}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Date">
          <DateInput
            disabled={disabled}
            type="date"
            id="date"
            name="date"
            value={
              editData.date
                ? new Date(editData.date).toISOString().split("T")[0]
                : ""
            }
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Tag">
          <StyledSelect
            id="tag"
            name="tag"
            value={editData.tag || ""}
            onChange={handleInputChange}
          >
            <option value="">Select a tag</option>
            <option value="Digital">Digital</option>
            <option value="Print">Print</option>
          </StyledSelect>
        </FormRow>

        <FormRow label="Link">
          <Input
            disabled={disabled}
            type="text"
            id="link"
            name="link"
            value={editData.link || ""}
            onChange={handleInputChange}
          />
        </FormRow>

        <FormRow label="Description"></FormRow>
        <Jodit content={descContent} setContent={setDescContent} />

        <FormRow label={"Image"}>
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
                    onChange={handleImageChange}
                  />
                </div>
              </>
            )}
          </ImagePreviewContainer>
        </FormRow>

        <FormRow label={"Banner"}>
          <label>
            <ImagePreviewContainer>
              {editData.banner && (
                <>
                  <img
                    src={
                      typeof editData.banner === "string"
                        ? editData.banner
                        : URL.createObjectURL(editData.banner)
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

        <FormRow>
          <Button
            variation="secondary"
            type="button"
            onClick={() => onCloseModal?.()}
            disabled={disabled}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={disabled}>
            {"Update Newspress"}
          </Button>
        </FormRow>
      </Stack>
    </form>
  );
};

export default EditNewspressForm;
