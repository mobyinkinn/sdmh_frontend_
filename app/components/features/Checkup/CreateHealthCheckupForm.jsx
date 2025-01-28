import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import { useCreateCheckup } from "../../admin/health_plans/useCheckups";
import Jodit from "../Openings/Jodit";
import { useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";

const CreateHealthCheckupForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { createCheckups, isCreating } = useCreateCheckup();
  const [descContent, setDescContent] = useState("");
  if (isCreating) return <SpinnerMini />;

  const onSubmit = (data) => {
    // Create a FormData object
    const formData = new FormData();

    // Append text fields to FormData
    formData.append("title", data.title);
    formData.append("description", descContent);
    formData.append("price", data.price);
    formData.append("status", true);

    // Append file fields to FormData
    if (data.image[0]) {
      formData.append("image", data.image[0]); // Append the first file from the input
    }
    if (data.banner[0]) {
      formData.append("banner", data.banner[0]); // Append the first file from the input
    }

    createCheckups(formData, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  };

  //title, description, image, bannerImage,

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Heading as="h3">Add {resourceName}</Heading>

      <Stack gap={1} pt={2}>
        <FormRow label="Title" error={errors?.title?.message}>
          <Input
            disabled={isCreating}
            type="text"
            id="title"
            {...register("title", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Description"
          error={errors?.description?.message}
        ></FormRow>
        <Jodit content={descContent} setContent={setDescContent} />
        <FormRow label="Price" error={errors?.price?.message}>
          <Input
            disabled={isCreating}
            type="text"
            id="price"
            {...register("price", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label={"Image"}>
          <FileInput
            id="file"
            accept="image/*"
            type="file"
            {...register("image", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label={"Banner Image"}>
          <FileInput
            id="file"
            accept="image/*"
            type="file"
            {...register("banner", {
              required: "This field is required",
            })}
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
          <Button disabled={isCreating}>{"Create new checkup"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default CreateHealthCheckupForm;
