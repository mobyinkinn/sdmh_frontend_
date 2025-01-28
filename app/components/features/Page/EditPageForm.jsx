import React from "react";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { Stack } from "@mui/material";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

const EditPageForm = ({
  resourceName,
  onConfirm,
  isUpdating,
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
    onConfirm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h3">Edit {resourceName}</Heading>
      <Stack gap={2} pt={5} width={800}>
        <FormRow label="Name">
          <Input
            disabled={isUpdating}
            type="text"
            id="name"
            name="name"
            value={editData.name}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isUpdating}>{"Update Page"}</Button>
        </FormRow>
      </Stack>
    </form>
  );
};

export default EditPageForm;
