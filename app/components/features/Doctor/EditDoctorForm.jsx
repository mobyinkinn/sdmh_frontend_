import { useForm } from "react-hook-form";
import Input, { InputCheck } from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { useState } from "react";
import {
  useDoctors,
  useUpdateImage,
  useUpdateDoctor,
} from "../../admin/doctors/parts/useDoctor";
import SpinnerMini from "../../ui/SpinnerMini";
import Jodit from "../Openings/Jodit";
import styled from "styled-components";

function EditDoctorForm({ onCloseModal, id }) {
  const { data, isLoading } = useDoctors();
  const filteredData = data.filter((el) => el._id === id);
  const { register, formState } = useForm({ defaultValues: {} });
  const [formdata, setFormdata] = useState(filteredData[0] || {});
  const { isUpdating, updateDoctor } = useUpdateDoctor();
  const { updateImage, isUpdatingImage } = useUpdateImage();
  const [content, setContent] = useState(filteredData[0]?.about || "");
  const { errors } = formState;

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
  const StyledAvailabilty = styled.select`
    font-size: 1rem;
    padding: 0.2rem 0rem;
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

  if (isUpdatingImage) return <SpinnerMini />;

  const handleAboutClick = () => {
    onUpdateDoctor({ ...formdata, about: content }, id);
  };

  function updateDay(day, value) {
    setFormdata((prevData) => {
      const updatedAvailability = { ...prevData.availablity };

      if (value === "") {
        delete updatedAvailability[day];
      } else {
        updatedAvailability[day] = value;
      }

      onUpdateDoctor({ ...prevData, availablity: updatedAvailability }, id);
      return { ...prevData, availablity: updatedAvailability };
    });
  }

  function onUpdateDoctor(formdata, id) {
    updateDoctor({ formdata, id });
  }

  function onUpdateImage(files, id) {
    if (!files || files.length === 0) return;
    const file = typeof files === "string" ? files : files[0];
    const formdata = new FormData();
    formdata.append("image", file);
    updateImage({ id, formdata });
  }

  return (
    <Form
      onSubmit={(e) => {
        onUpdateDoctor({ ...formdata }, id);
      }}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          disabled={isUpdating}
          type="text"
          id="name"
          value={formdata.name || ""}
          {...register("name", { required: "This field is required" })}
          onChange={(e) => {
            if (!e || !e.target) return;
            const newName = e.target.value;
            setFormdata((prev) => ({ ...prev, name: newName }));
          }}
        />
      </FormRow>

      <FormRow label="Designation" error={errors?.designation?.message}>
        <Input
          disabled={isUpdating}
          type="text"
          id="designation"
          value={formdata.designation || ""}
          {...register("designation", { required: "This field is required" })}
          onChange={(e) => {
            if (!e || !e.target) return;
            const newDesignation = e.target.value;
            setFormdata((prev) => ({ ...prev, designation: newDesignation }));
          }}
        />
      </FormRow>

      <Stack direction={"row"} columnGap={12}>
        <FormRow label="Room" error={errors?.room?.message}>
          <Input
            disabled={isUpdating}
            type="text"
            id="room"
            value={formdata.room || ""}
            {...register("room", { required: "This field is required" })}
            onChange={(e) => {
              if (!e || !e.target) return;
              const newRoom = e.target.value;
              setFormdata((prev) => ({ ...prev, room: newRoom }));
            }}
          />
        </FormRow>

        <FormRow label="Floor" error={errors?.floor?.message}>
          <Input
            disabled={isUpdating}
            type="text"
            id="floor"
            value={formdata.floor || ""}
            {...register("floor", { required: "This field is required" })}
            onChange={(e) => {
              if (!e || !e.target) return;
              const newFloor = e.target.value;
              setFormdata((prev) => ({ ...prev, floor: newFloor }));
            }}
          />
        </FormRow>
      </Stack>
      <FormRow label="Department" error={errors?.department?.message}>
        <Input
          disabled={isUpdating}
          type="text"
          id="department"
          value={formdata.department || ""}
          {...register("department", { required: "This field is required" })}
          onChange={(e) => {
            if (!e || !e.target) return;
            const newDepartment = e.target.value;
            setFormdata((prev) => ({ ...prev, department: newDepartment }));
          }}
        />
      </FormRow>

      <FormRow label="Available on" error={errors?.availability?.message}>
        <Stack direction="row" gap="20px">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <Stack direction="column" alignItems="center" gap="5px" key={day}>
              <InputLabel id={day}>{day}</InputLabel>
              <StyledAvailabilty
                labelId={day}
                id={day}
                disabled={isUpdating}
                value={formdata.availablity?.[day] || ""}
                onChange={(e) => {
                  if (!e || !e.target) return;
                  updateDay(day, e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value="OT">OT</option>
                <option value="OPD">OPD</option>
              </StyledAvailabilty>
            </Stack>
          ))}
        </Stack>
      </FormRow>

      <FormRow label="About" />
      <Jodit content={content} setContent={setContent} />
      <Stack direction="row" justifyContent="end" gap="20px" mt={2}>
        <Button onClick={handleAboutClick}>Update About</Button>
      </Stack>

      <FormRow label="Image">
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("Image", { required: "This field is required" })}
          onChange={(e) => {
            if (!e || !e.target || !e.target.files) return;
            onUpdateImage(e.target.files, id);
          }}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="button"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button type="submit">{"Update Doctor"}</Button>
      </FormRow>
    </Form>
  );
}

export default EditDoctorForm;
