import React from "react";
import Input, { DateInput } from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import Jodit from "../Openings/Jodit";
import { ImagePreviewContainer } from "../../ui/ImagePreviewContainer";
import { FaEdit } from "react-icons/fa";
import { useUpdateSingleImageFromEvent } from "../../admin/events/useEvents";
import { ConstantAlphaFactor } from "three";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";

const EditEventsForm = ({
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
  const { mutate: updateSingleImageFromEvent, isPending: isUpdatingImage } =
    useUpdateSingleImageFromEvent();

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

  if (isUpdatingImage) return <SpinnerMini />;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const formDataImage = new FormData();
    formDataImage.append("image", file);

    updateSingleImageFromEvent(
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
      <Stack gap={2} pt={5}>
        <Stack direction={"row"} justifyContent={"space-around"} columnGap={5}>
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
              value={editData.date || ""}
              onChange={handleInputChange}
            />
          </FormRow>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"} columnGap={5}>
          <FormRow label="Small Description">
            <Input
              disabled={disabled}
              type="text"
              id="smallDescription"
              name="smallDescription"
              value={editData.smallDescription || ""}
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
              <option value="Upcoming">Upcoming</option>
              <option value="Recent">Recent</option>
              <option value="Academics">Academics</option>
              <option value="Public Awareness">Public Awareness</option>
            </StyledSelect>
          </FormRow>
        </Stack>

        <FormRow label="Description"></FormRow>
        <Jodit content={descContent} setContent={setDescContent} />

        <Stack>
          <label>
            Image:
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
          </label>
        </Stack>

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
            {"Update Event"}
          </Button>
        </FormRow>
      </Stack>
    </form>
  );
};

export default EditEventsForm;
