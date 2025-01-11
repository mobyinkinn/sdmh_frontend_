import React from "react";
import Input, { DateInput } from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";

const EditEventsForm = ({
  resourceName,
  onConfirm,
  disabled,
  editData,
  setEditData,
  onCloseModal,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal?.();
    onConfirm(); // Call the onConfirm function to handle the submission logic
  };

  // title, smallDescription, description, date, featured, status, images

  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h3">Edit {resourceName}</Heading>
      <Stack gap={2} pt={5}>
        <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
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
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
          <FormRow label="Description">
            <Input
              disabled={disabled}
              type="text"
              id="description"
              name="description"
              value={editData.description || ""}
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
