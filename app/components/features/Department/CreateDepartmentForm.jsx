import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
// import useCreateCabin from "./useCreateCabin";
// import useEditCabin from "./useEditCabin";
import { useCreateDepartment } from "../../admin/departments/parts/useDepartment";
import { Stack } from "@mui/material";
import SpinnerMini from "../../ui/SpinnerMini";
import { useState } from "react";
import Jodit from "../Openings/Jodit";

function CreateDepartmentForm({ cabinToEdit = {}, onCloseModal }) {
  //   const { id: editId, ...editValues } = cabinToEdit;
  //   const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createDepartment } = useCreateDepartment();
  const [content, setContent] = useState("");
  //   const { isEditing, editCabin } = useEditCabin();
  if (isCreating) return <SpinnerMini />;

  const isWorking = isCreating;

  function onSubmit(data) {
    const file = typeof data.image === "string" ? data.image : data.image[0];
    const bannerFile =
      typeof data.bannerFile === "string"
        ? data.bannerFile
        : data.bannerFile[0];

    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("bannerImage", bannerFile);
    formdata.append("name", data.name);
    formdata.append("content", content);
    formdata.append("status", true);

    console.log("Department formdata: ", formdata);

    createDepartment(formdata, {
      onSuccess: (data) => {
        reset();
        onCloseModal?.();
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

      <FormRow label="Content" error={errors?.page?.message}></FormRow>
      <Jodit content={content} setContent={setContent} />

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

      <FormRow label={"Banner Image"}>
        <FileInput
          id="file"
          accept="image/*"
          type="file"
          {...register("bannerFile", {
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
        <Button disabled={isWorking}>{"Create new department"}</Button>
      </Stack>
    </Form>
  );
}

export default CreateDepartmentForm;
