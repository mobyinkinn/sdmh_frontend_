import { useForm } from "react-hook-form";
import Input, { InputCheck } from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import {
  useDoctors,
  useUpdateImage,
  useUpdateDoctor,
} from "../../admin/doctors/parts/useDoctor";
import ControlsOverlay from "../../Frontend/gallery/ControlsOverlay";
import { useDepartment } from "../../admin/departments/parts/useDepartment";
import Spinner from "../../ui/Spinner";
import Jodit from "../Openings/Jodit";
import SpinnerMini from "../../ui/SpinnerMini";

function EditDoctorForm({ onCloseModal, id, department, departmentData }) {
  const { data, isLoading } = useDoctors();
  const filteredData = data.filter((el) => el._id === id);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const [formdata, setFormdata] = useState(filteredData[0]);
  const [departmentValue, setDepartmentValue] = useState(department.name);

  const { isUpdating, updateDoctor } = useUpdateDoctor();
  const { updateImage, isUpdatingImage } = useUpdateImage();
  const [content, setContent] = useState(filteredData[0]?.about || "");
  const { errors } = formState;
  if (isUpdatingImage) return <SpinnerMini />;

  const handleAboutClick = () => {
    onUpdateDoctor({ ...formdata, about: content }, id);
  };

  function updateDepartment(name) {
    let newDepartment = data.filter((el) => el.name === name);

    if (newDepartment.length > 0) {
      setFormdata((formdata) => ({
        ...formdata,
        department: newDepartment[0]._id,
      }));
      onUpdateDoctor({ ...formdata, department: newDepartment[0]._id }, id);
    } else {
      alert(
        "No such department exists, hence department will not be updated!!!"
      );
    }
  }

  function updateDay(day) {
    let days = formdata.availablity;
    const includesDay = days.includes(day);
    if (includesDay) {
      days = days.filter((el) => el !== day);
    } else {
      days.push(day);
    }

    onUpdateDoctor({ ...formdata, availablity: days }, id);
    setFormdata((formdata) => ({ ...formdata, availablity: days }));
  }

  function onUpdateDoctor(formdata, id) {
    updateDoctor({ formdata, id });
  }

  function onUpdateImage(files, id) {
    const file = typeof files === "string" ? files : files[0];
    const formdata = new FormData();
    formdata.append("image", file);
    updateImage({ id, formdata });
  }

  function onError(errors) {}

  return (
    <Form
      // onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Name" error={errors?.page?.message}>
        <Input
          disabled={isUpdating}
          type="text"
          id="name"
          value={formdata.name}
          {...register("name", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newName = e.target.value;
            setFormdata((formdata) => ({ ...formdata, name: newName }));
            onUpdateDoctor({ ...formdata, name: newName }, id);
          }}
        />
      </FormRow>

      <FormRow label="Department" error={errors?.page?.message}>
        <Input
          disabled={isUpdating}
          type="text"
          id="department"
          value={departmentValue}
          {...register("department", {
            required: "This field is required",
          })}
          onChange={(e) => {
            setDepartmentValue(e.target.value);
          }}
          onBlur={(e) => updateDepartment(e.target.value)}
        />
      </FormRow>

      <FormRow label="Designation" error={errors?.page?.message}>
        <Input
          disabled={isUpdating}
          type="text"
          id="designation"
          value={formdata.designation}
          {...register("designation", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newName = e.target.value;
            setFormdata((formdata) => ({ ...formdata, name: newName }));
            onUpdateDoctor({ ...formdata, designation: newName }, id);
          }}
        />
      </FormRow>

      <FormRow label="Available on" error={errors?.page?.message}>
        <Stack direction="row" gap="20px">
          {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
            <Stack direction="row" gap="5px" key={day}>
              <InputCheck
                disabled={isUpdating}
                type="checkbox"
                id={day}
                value={day}
                checked={formdata.availablity.includes(day)}
                {...register("availablity", {
                  required: "This field is required",
                })}
                onChange={(e) => {
                  updateDay(day);
                }}
              />{" "}
              {day}
            </Stack>
          ))}
        </Stack>
      </FormRow>

      <FormRow label="Room" error={errors?.page?.message}>
        <Input
          disabled={isUpdating}
          type="text"
          id="room"
          value={formdata.room}
          {...register("room", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newName = e.target.value;
            setFormdata((formdata) => ({ ...formdata, room: newName }));
            onUpdateDoctor({ ...formdata, room: newName }, id);
          }}
        />
      </FormRow>

      <FormRow label="Floor" error={errors?.page?.message}>
        <Input
          disabled={isUpdating}
          type="text"
          id="floor"
          value={formdata.floor}
          {...register("floor", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newName = e.target.value;
            setFormdata((formdata) => ({ ...formdata, floor: newName }));
            onUpdateDoctor({ ...formdata, floor: newName }, id);
          }}
        />
      </FormRow>

      <FormRow label="About"></FormRow>
      <Jodit content={content} setContent={setContent} />
      <Stack
        direction="row"
        sx={{
          justifyContent: "end",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        <Button onClick={handleAboutClick}>{"Update About"}</Button>
      </Stack>

      <FormRow label={"Image"}>
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("Image", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const updatedValue = e.target.files;
            onUpdateImage(updatedValue, id);
          }}
        />
      </FormRow>

      <Stack
        direction="row"
        sx={{
          justifyContent: "end",
          gap: "20px",
        }}
      >
        <Button>{"Done"}</Button>
      </Stack>
    </Form>
  );
}

export default EditDoctorForm;
