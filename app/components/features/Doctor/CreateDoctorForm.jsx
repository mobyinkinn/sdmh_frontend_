import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { useCreateDoctor } from "../../admin/doctors/parts/useDoctor";
import Jodit from "../Openings/Jodit";
import { useState } from "react";
import { InputLabel, MenuItem, Select, Stack } from "@mui/material";
import SpinnerMini from "../../ui/SpinnerMini";
import { useDepartment } from "../../admin/departments/parts/useDepartment";
function CreateDoctorForm({ cabinToEdit = {}, onCloseModal }) {
  const [about, setAbout] = useState("");

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createDoctor } = useCreateDoctor();
  if (isCreating) return <SpinnerMini />;

  const isWorking = isCreating;

  function onSubmit(data) {
    const file = typeof data.image === "string" ? data.image : data.image[0];
    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("name", data.name);
    formdata.append("designation", data.designation);
    formdata.append("experience", data.experience);
    formdata.append("room", data.room);
    formdata.append("floor", data.floor);
    formdata.append("department", data.department);
    formdata.append("about", about);

    const availability = Object.fromEntries(
      Object.entries({
        Mon: data.Mon,
        Tue: data.Tue,
        Wed: data.Wed,
        Thu: data.Thu,
        Fri: data.Fri,
        Sat: data.Sat,
        Sun: data.Sun,
      }).filter(([_, value]) => value)
    );

    if (Object.keys(availability).length > 0) {
      formdata.append("availablity", JSON.stringify(availability));
    }

    formdata.append("status", true);

    console.log(formdata);
    createDoctor(formdata, {
      onSuccess: (data) => {
        reset();
        onCloseModal?.();
      },
    });
  }

  function onError(errors) {
    console.error(errors);
  }

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
      <FormRow label="Experience" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="experience"
          {...register("experience", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Available on" error={errors?.availability?.message}>
        <Stack direction="row" gap="20px">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <Stack direction="column" alignItems={"center"} gap="5px" key={day}>
              <InputLabel id={day}>{day}</InputLabel>
              <Select
                labelId={day}
                id={day}
                label={day}
                {...register(day)}
                MenuProps={{
                  disablePortal: true,
                  style: {
                    zIndex: 1300,
                  },
                }}
              >
                <MenuItem value="OT">OT</MenuItem>
                <MenuItem value="OPD">OPD</MenuItem>
              </Select>
            </Stack>
          ))}
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
