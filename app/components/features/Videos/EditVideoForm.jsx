import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";

const EditVideoForm = ({
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
    <Form onSubmit={handleSubmit}>
      <Heading as="h3">Edit {resourceName}</Heading>
      <Stack gap={2} pt={5}>
        <FormRow label="Title">
          <Input
            disabled={isUpdating}
            type="text"
            id="title"
            name="title"
            value={editData.title}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Video URL">
          <Input
            disabled={isUpdating}
            type="text"
            id="url"
            name="url"
            value={editData.url}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow>
          <Button
            variation="secondary"
            type="button"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isUpdating}>{"Edit video"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default EditVideoForm;
