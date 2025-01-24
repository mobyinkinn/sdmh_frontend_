import { useForm } from "react-hook-form";

import Input, { InputCheck } from "../../ui/Input";

import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
// import useCreateCabin from "./useCreateCabin";
// import useEditCabin from "./useEditCabin";
import { useCreateDepartment } from "../../admin/departments/parts/useDepartment";
import { Stack, Typography } from "@mui/material";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCreateDoctor } from "../../admin/doctors/parts/useDoctor";
import Jodit from "../Openings/Jodit";
import { useState } from "react";

function CreateDoctorForm({ cabinToEdit = {}, onCloseModal }) {
  //   const { id: editId, ...editValues } = cabinToEdit;
  //   const isEditSession = Boolean(editId);
  const [about, setAbout] = useState("");

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createDoctor } = useCreateDoctor();
  //   const { isEditing, editCabin } = useEditCabin();
  if (isCreating) return <SpinnerMini />;

  const isWorking = isCreating;

  function onSubmit(data) {
    const file = typeof data.image === "string" ? data.image : data.image[0];
    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("name", data.name);
    formdata.append("designation", data.designation);
    formdata.append("room", data.room);
    formdata.append("floor", data.floor);
    formdata.append("department", data.department);
    formdata.append("about", about);
    for (let i = 0; i < data.availablity.length; i++) {
      formdata.append("availablity", data.availablity[i]);
    }
    formdata.append("status", true);

    createDoctor(formdata, {
      onSuccess: (data) => {
        reset();
        onCloseModal?.();
      },
    });
  }
  function onError(errors) {}
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Name" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Department" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="department"
          {...register("department", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Designation" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="designation"
          {...register("designation", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Available on" error={errors?.page?.message}>
        <Stack direction="row" gap="20px">
          <Stack direction="row" gap="5px">
            <InputCheck
              disabled={isWorking}
              type="checkbox"
              id="Monday"
              value="Mon"
              {...register("availablity", {
                required: "This field is required",
              })}
            />{" "}
            Mon
          </Stack>
          <Stack direction="row" gap="5px">
            <InputCheck
              disabled={isWorking}
              type="checkbox"
              id="Tuesday"
              value="Tue"
              {...register("availablity", {
                required: "This field is required",
              })}
            />{" "}
            Tue
          </Stack>
          <Stack direction="row" gap="5px">
            <InputCheck
              disabled={isWorking}
              type="checkbox"
              id="Wednesday"
              value="Wed"
              {...register("availablity", {
                required: "This field is required",
              })}
            />{" "}
            Wed
          </Stack>
          <Stack direction="row" gap="5px">
            <InputCheck
              disabled={isWorking}
              type="checkbox"
              id="Thursday"
              value="Thurs"
              {...register("availablity", {
                required: "This field is required",
              })}
            />{" "}
            Thurs
          </Stack>
          <Stack direction="row" gap="5px">
            <InputCheck
              disabled={isWorking}
              type="checkbox"
              id="Friday"
              value="Fri"
              {...register("availablity", {
                required: "This field is required",
              })}
            />{" "}
            Fri
          </Stack>
          <Stack direction="row" gap="5px">
            <InputCheck
              disabled={isWorking}
              type="checkbox"
              id="Saturday"
              value="Sat"
              {...register("availablity", {
                required: "This field is required",
              })}
            />{" "}
            Sat
          </Stack>
          <Stack direction="row" gap="5px">
            <InputCheck
              disabled={isWorking}
              type="checkbox"
              id="Sunday"
              value="Sun"
              {...register("availablity", {
                required: "This field is required",
              })}
            />{" "}
            Sun
          </Stack>
        </Stack>
      </FormRow>

      <FormRow label="Room" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="room"
          {...register("room", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Floor" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="floor"
          {...register("floor", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {/* <FormRow label="About" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="about"
          {...register("about", {
            required: "This field is required",
          })}
        />
      </FormRow> */}
      <FormRow label="About" error={errors?.page?.message}></FormRow>
      <Jodit content={about} setContent={setAbout} />

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

      <Stack
        direction="row"
        sx={{
          gap: "20px",
          justifyContent: "end",
        }}
      >
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isWorking ? <SpinnerMini /> : "Create Doctor"}
        </Button>
      </Stack>
    </Form>
  );
}

export default CreateDoctorForm;
