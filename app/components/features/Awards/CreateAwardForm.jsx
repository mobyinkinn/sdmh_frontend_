import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import { useCreateAward } from "../../admin/awards/useAwards";
import SpinnerMini from "../../ui/SpinnerMini";
import Jodit from "../Openings/Jodit";
import { useState } from "react";

const CreateAwardForm = ({ onCloseModal, resourceName }) => {
  const [about, setAbout] = useState("");
  const { createAwards, isCreating } = useCreateAward();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  if (isCreating) return <SpinnerMini />;

  const onSubmit = (data) => {
    const multipleFiles = data.images ? Array.from(data.images) : [];
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("smallDescription", data.smallDescription);
    formData.append("about", about);
    formData.append("status", "true");

    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }
    if (data.banner[0]) {
      formData.append("banner", data.banner[0]);
    }
    multipleFiles.forEach((file) => {
      formData.append("images", file);
    });

    createAwards(formData, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  };

  //name , year, about, image, status
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Heading as="h3">Add {resourceName}</Heading>

      <Stack pt={1}>
        <Stack direction={"row"} marginLeft={2} columnGap={8}>
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

          <FormRow label="Year" error={errors?.year?.message}>
            <Input
              disabled={isCreating}
              type="text"
              id="year"
              {...register("year", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>
        <Stack marginLeft={2}>
          <FormRow label="Small Description" error={errors?.name?.message}>
            <Input
              disabled={isCreating}
              type="text"
              id="smallDescription"
              {...register("smallDescription", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>
        <Stack marginLeft={2}>
          <FormRow label="About" error={errors?.about?.message}></FormRow>
          <Jodit content={about} setContent={setAbout} />
        </Stack>
        <Stack marginLeft={2}>
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
        </Stack>
        <Stack marginLeft={2}>
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
        </Stack>

        <Stack marginLeft={2}>
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

        <FormRow marginLeft={2}>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isCreating}>{"Create new Award"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default CreateAwardForm;
