import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import {
  useTeachings,
  useUpdateTeaching,
  useUpdateNameFile,
} from "../../admin/academic_teachings/useTeachings";
import { useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import { useDepartment } from "../../admin/departments/parts/useDepartment";
import styled from "styled-components";

function EditTeachingForm({ cabinToEdit = {}, onCloseModal, id, department }) {
  const { data, isLoading } = useTeachings();
  const filteredData = data.filter((el) => el._id === id);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { data: departmentData, isLoading: isLoadingDepartment } =
    useDepartment();
  const [formdata, setFormdata] = useState(filteredData[0] || {});

  const [name, setName] = useState(filteredData[0].name);
  const [year, setYear] = useState(filteredData[0].year);
  const [departmentValue, setDepartmentValue] = useState(department?.name);

  const { errors } = formState;

  const { isUpdating, updatedTeaching } = useUpdateTeaching();
  const { isUpdatingFile, updateFile } = useUpdateNameFile();

  const isWorking = isUpdating;

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

  function onUpdateFile(file, id) {
    const binFile = typeof file === "string" ? file : file[0];
    const formData = new FormData();
    formData.append("file", binFile);

    updateFile({ formData, id });
  }

  function updateDepartment(name) {
    const newDepartment = departmentData.find((el) => el.name === name);
    if (newDepartment) {
      const updatedFormData = { ...formdata, department: newDepartment.name };
      setFormdata(updatedFormData);
      setDepartmentValue(newDepartment.name);
      onUpdateDepartment(updatedFormData, id);
    } else {
      alert("No such department exists, hence department will not be updated!");
    }
  }

  function onUpdateDepartment(updatedFormData, id) {
    updatedTeaching({ formData: updatedFormData, id });
  }

  function onUpdateTeaching(data) {
    const formData = {
      name,
      year,
    };

    updatedTeaching(
      { formData, id },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.error(errors);
  }

  if (isUpdatingFile || isUpdating || isLoadingDepartment)
    return <SpinnerMini />;

  return (
    <Form onSubmit={onUpdateTeaching} type={onCloseModal ? "modal" : "regular"}>
      <FormRow label="Academic teaching name" error={errors?.name?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="name"
          value={name}
          {...register("name", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const updatedValue = e.target.value;
            setName(updatedValue);
          }}
        />
      </FormRow>

      <FormRow label="Year" error={errors?.year?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="year"
          value={year}
          {...register("year", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const updatedValue = e.target.value;
            setYear(updatedValue);
          }}
        />
      </FormRow>

      <FormRow label="Department" error={errors?.department?.message}>
        <StyledSelect
          disabled={isWorking}
          id="department"
          value={departmentValue}
          {...register("department", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newValue = e.target.value;
            setDepartmentValue(newValue);
            updateDepartment(newValue);
          }}
        >
          <option value="">Select a department</option>
          {departmentData?.map((department, index) => (
            <option key={index} value={department.name}>
              {department.name}
            </option>
          ))}
        </StyledSelect>
      </FormRow>

      <FormRow label={"File"}>
        <FileInput
          id="file"
          accept="file/*"
          type="file"
          {...register("file", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const updatedValue = e.target.files;
            onUpdateFile(updatedValue, filteredData[0]._id);
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
        <Button type="submit">{"Update Teaching"}</Button>
      </FormRow>
    </Form>
  );
}

export default EditTeachingForm;
