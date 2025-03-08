import { useForm } from "react-hook-form";
import Input, { DateInput } from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import Jodit from "../Openings/Jodit";
import { useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCreateTestimonial } from "../../admin/testimonials/parts/useTestimonial";

//name, designation, message, image

const CreateTestimonialForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const { createTestimonials, isCreating } = useCreateTestimonial();
  const [descContent, setDescContent] = useState("");

  if (isCreating) return <SpinnerMini />;

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("message", descContent);
    formData.append("designation", data.designation);

    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    createTestimonials(formData, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Heading as="h3">Add {resourceName}</Heading>

      <Stack pt={1}>
        <FormRow label="Name" error={errors?.name?.message}>
          <Input
            disabled={isCreating}
            type="text"
            id="name"
            {...register("name", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Designation" error={errors?.designation?.message}>
          <Input
            disabled={isCreating}
            type="text"
            id="designation"
            {...register("designation")}
          />
        </FormRow>
        <FormRow label="Message" error={errors?.message?.message}></FormRow>
        <Jodit content={descContent} setContent={setDescContent} />

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

        <FormRow>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isCreating}>{"Create testimonial"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default CreateTestimonialForm;
