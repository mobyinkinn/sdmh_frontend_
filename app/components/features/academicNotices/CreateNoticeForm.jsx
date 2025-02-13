import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
// import useCreateCabin from "./useCreateCabin";
// import useEditCabin from "./useEditCabin";
import { useCreateNotice } from "../../admin/academic_notices/useNotices";
import { Stack } from "@mui/material";
import SpinnerMini from "../../ui/SpinnerMini";
import { useDepartment } from "../../admin/departments/parts/useDepartment";
import styled from "styled-components";

function CreateNoticeForm({ cabinToEdit = {}, onCloseModal }) {
  //   const { id: editId, ...editValues } = cabinToEdit;
  //   const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createNotice } = useCreateNotice();
  const { data: departmentData, isLoading, error } = useDepartment();

  //   const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating;

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

  function onSubmit(data) {
    const file = typeof data.file === "string" ? data.file : data.file[0];

    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("name", data.name);
    formdata.append("year", data.year);
    formdata.append("department", data.department);
    formdata.append("status", true);

    createNotice(formdata, {
      onSuccess: (data) => {
        reset();
        onCloseModal?.();
      },
    });
  }
  if (isCreating) return <SpinnerMini />;
  function onError(errors) {}
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
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

      <FormRow label="Year" error={errors?.year?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="year"
          {...register("year", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Department" error={errors?.department?.message}>
        <StyledSelect
          disabled={isWorking}
          id="department"
          {...register("department", {
            required: "This field is required",
          })}
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
        <Button disabled={isWorking}>{"Create new notice"}</Button>
      </Stack>
    </Form>
  );
}

export default CreateNoticeForm;
