import { useForm } from "react-hook-form";
import Input, { DateInput } from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { useCreateBlog } from "../../admin/blog/useBlogs";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import { useState } from "react";
import Jodit from "../Openings/Jodit";

function CreateBlogForm({ cabinToEdit = {}, onCloseModal, resourceName }) {
  //   const { id: editId, ...editValues } = cabinToEdit;
  //   const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const [description, setDescription] = useState("");

  const { isCreating, createBlogs } = useCreateBlog();
  //   const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating;

  function onSubmit(data) {
    const singleFile = data.file[0]; // Single file
    const multipleFiles = data.images ? Array.from(data.images) : []; // Convert FileList to array

    const formdata = new FormData();
    formdata.append("image", singleFile); // Single file
    multipleFiles.forEach((file) => {
      formdata.append("images", file); // Append each file for "images"
    });
    formdata.append("title", data.title);
    formdata.append("smallDescription", data.smallDescription);
    formdata.append("description", description);
    formdata.append("date", data.date);

    formdata.append("status", true);
    console.log("formdata", formdata);
    console.log("Submitted data:", data);

    createBlogs(formdata, {
      onSuccess: (data) => {
        reset();
        onCloseModal?.();
      },
    });
  }
  function onError(errors) {
    // console.log(errors);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Heading as="h3">Add {resourceName}</Heading>
      <Stack gap={1} pt={2}>
        <Stack direction={"row"} columnGap={7}>
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
          <FormRow label="Date" error={errors?.date?.message}>
            <DateInput
              disabled={isWorking}
              type="date"
              id="date"
              {...register("date", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>
        <FormRow
          label="Short Description"
          error={errors?.page?.message}
          p={"0px 10px"}
        >
          <Input
            disabled={isWorking}
            type="text"
            id="smallDescription"
            {...register("smallDescription", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Description" error={errors?.page?.message}></FormRow>
        <Jodit content={description} setContent={setDescription} />

        <Stack>
          <FormRow label={"File"}>
            <FileInput
              id="file"
              accept="image/*"
              type="file"
              {...register("file", {
                required: "This field is required",
              })}
            />
          </FormRow>
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
          <Button disabled={isWorking}>{"Create Blog"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
}

export default CreateBlogForm;
