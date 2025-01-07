import React from "react";
import Form from "./Form";
import Button from "./Button";
import FileInput from "./FileInput";
import FormRow from "./FormRow";
import { Stack } from "@mui/material";
import Heading from "./Heading";
import Input from "./Input";

const ConfirmEdit = ({
  onCloseModal,
  resourceName,
  onConfirm,
  disabled,
  editData,
  setEditData,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setEditData({ ...editData, [fieldName]: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(); // Call the onConfirm function to handle the submission logic
  };

  return (
    <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
      <Heading as="h3">Edit {resourceName}</Heading>

      <Stack gap={2} pt={5}>
        <FormRow label="Title">
          <Input
            disabled={disabled}
            type="text"
            name="title"
            value={editData.title || ""}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Description">
          <Input
            disabled={disabled}
            type="text"
            name="description"
            value={editData.description || ""}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label={"Image"}>
          <FileInput
            name="image"
            accept="image/*"
            type="file"
            onChange={(e) => handleImageChange(e, "image")}
          />
        </FormRow>
        <FormRow label={"Banner"}>
          <FileInput
            name="banner"
            accept="image/*"
            type="file"
            onChange={(e) => handleImageChange(e, "banner")}
          />
        </FormRow>

        <FormRow>
          <Button
            variation="secondary"
            type="button" // Change type to button to prevent default form submission behavior
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
