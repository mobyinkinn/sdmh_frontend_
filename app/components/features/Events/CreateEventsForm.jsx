import { useForm } from "react-hook-form";
import Input, { DateInput } from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import { useCreateEvent } from "../../admin/events/useEvents";
import moment from "moment";
import { useState } from "react";
import Jodit from "../Openings/Jodit";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";

const CreateEventsForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { createEvents, isCreating } = useCreateEvent();
  const { errors } = formState;
  const [description, setDescription] = useState("");

  function onSubmit(data) {
    const multipleFiles = data.images ? Array.from(data.images) : [];
    const formdata = new FormData();

    multipleFiles.forEach((file) => {
      formdata.append("images", file);
    });

    const formattedDate = moment(data.date).format("YYYY-MM-DD");

    formdata.append("title", data.title);
    formdata.append("tag", data.tag);
    formdata.append("smallDescription", data.smallDescription);
    formdata.append("description", description);
    formdata.append("date", formattedDate);
    formdata.append("featured", false);
    formdata.append("status", true);
    if (data.image[0]) {
      formdata.append("image", data.image[0]);
    }

    createEvents(formdata, {
      onSuccess: () => {
        onCloseModal?.();
        reset();
      },
    });
  }

  const StyledSelect = styled.select`
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    border: 1px solid
      ${(props) =>
        props.type === "white"
          ? "var(--color-grey-100)"
          : "var(--color-grey-300)"};
    border-radius: var(--border-radius-sm);
    background-color: var(--color-grey-0);
    font-weight: 500;
    box-shadow: var(--shadow-sm);
  `;

  if (isCreating) return <SpinnerMini />;
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
          <FormRow label="Title" error={errors?.title?.message}>
            <Input
              type="text"
              id="title"
              {...register("title", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label="Date" error={errors?.date?.message}>
            <DateInput
              type="date"
              id="date"
              {...register("date", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>
        <Stack direction={"row"} columnGap={7}>
          <FormRow
            label="Small Description"
            error={errors?.smallDescription?.message}
          >
            <Input
              type="text"
              id="smallDescription"
              {...register("smallDescription", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label="Tag" error={errors?.tag?.message}>
            <StyledSelect
              id="tag"
              {...register("tag", {
                required: "This field is required",
              })}
            >
              <option value="">Select a tag</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Recent">Recent</option>
              <option value="Academics">Academics</option>
              <option value="Public Awareness">Public Awareness</option>
            </StyledSelect>
          </FormRow>
        </Stack>

        <FormRow label="Description" error={errors?.page?.message}></FormRow>
        <Jodit content={description} setContent={setDescription} />

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

        <Stack direction={"row"}>
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
          <Button>{"Create new event"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default CreateEventsForm;
