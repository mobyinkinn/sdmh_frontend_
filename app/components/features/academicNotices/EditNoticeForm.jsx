import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import {
  useCreateNotice,
  useNotices,
  useUpdateName,
  useUpdateNameFile,
} from "../../admin/academic_notices/useNotices";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";

function EditNoticeForm({ cabinToEdit = {}, onCloseModal, id }) {
  const { data, isLoading } = useNotices();
  const filteredData = data.filter((el) => el._id === id);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });

  const [name, setName] = useState(filteredData[0].name);

  const { errors } = formState;

  const { isCreating, createNotice } = useCreateNotice();
  const { isUpdating, updateName } = useUpdateName();
  const { isUpdatingFile, updateFile } = useUpdateNameFile();
  if (isUpdatingFile) return <SpinnerMini />;

  const isWorking = isCreating;

  function onUpdateFile(file, id) {
    const binFile = typeof file === "string" ? file : file[0];
    const formData = new FormData();
    formData.append("file", binFile);

    updateFile({ formData, id });
  }

  function onUpdateName(name, id) {
    const formData = { name };

    updateName(
      { formData, id },
      {
        onSuccess: () => {},
      }
    );
  }
  function onError(errors) {}
  return (
    <Form type={onCloseModal ? "modal" : "regular"}>
      <FormRow label="Academic notice name" error={errors?.name?.message}>
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
            onUpdateName(updatedValue, filteredData[0]._id);
          }}
        />
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

      <Stack
        direction="row"
        sx={{
          gap: "20px",
          justifyContent: "end",
        }}
      >
        <Button disabled={isWorking}>{"Done"}</Button>
      </Stack>
    </Form>
  );
}

export default EditNoticeForm;
