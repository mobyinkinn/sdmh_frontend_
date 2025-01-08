import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import { useCreateEvent } from "../../admin/events/useEvents";

const CreateEventsForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { createEvents, isCreating } = useCreateEvent();
  const { errors } = formState;
  const isWorking = isCreating;

  function onSubmit(data) {
    const multipleFiles = data.images ? Array.from(data.images) : []; // Convert FileList to array
    const formdata = new FormData();
    multipleFiles.forEach((file) => {
      formdata.append("images", file); // Append each file for "images"
    });
    formdata.append("title", data.title);
    formdata.append("smallDescription", data.smallDescription);
    formdata.append("description", data.description);
    formdata.append("date", data.date);
    formdata.append("featured", false);
    formdata.append("status", true);

    createEvents(formdata, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  }

  function onError(errors) {
    // console.log(errors);
  }
  // title, smallDescription, description, date, featured, status, images
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Heading as="h3">Add {resourceName}</Heading>
      <Stack gap={2} pt={5}>
        <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
          <FormRow label="Title" error={errors?.page?.message}>
            <Input
              disabled={isWorking}
              type="text"
              id="title"
              {...register("title", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label="Small Description" error={errors?.page?.message}>
            <Input
              disabled={isWorking}
              type="text"
              id="smallDescription"
              {...register("smallDescription", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
          <FormRow label="Description" error={errors?.description?.message}>
            <Input
              disabled={isWorking}
              type="text"
              id="description"
              {...register("description", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label="Date" error={errors?.date?.message}>
            <Input
              disabled={isWorking}
              type="text"
              id="date"
              {...register("date", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>

        <Stack direction={"row"} p={"0px 10px"}>
          <FormRow label="Images">
            <FileInput
              id="images"
              accept="image/*"
              type="file"
              multiple
              {...register("images", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>

        <FormRow>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isWorking}>{"Create new event"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default CreateEventsForm;
