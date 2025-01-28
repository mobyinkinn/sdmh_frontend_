import React from "react";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import { useCreatePage } from "../../admin/pages/usePages";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import { Stack } from "@mui/material";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

const CreatePageForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { createPages, isCreating } = useCreatePage();
  const { errors } = formState;
  const isWorking = isCreating;

  function onSubmit(data) {
    const Formdata = {
      name: data.name,
      status: "true",
    };

    createPages(Formdata, {
      onSuccess: () => {
        onCloseModal?.();
        reset();
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
      <Stack gap={2} pt={5}>
        <FormRow label="Name" error={errors?.name?.message}>
          <Input
            disabled={isWorking}
            type="text"
            id="name"
            {...register("name", {
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
          <Button disabled={isWorking}>{"Create new page"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default CreatePageForm;
