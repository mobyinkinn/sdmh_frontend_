import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
// import useCreateCabin from "./useCreateCabin";
// import useEditCabin from "./useEditCabin";
import { useCreateBanner } from "../../admin/banner/parts/useBanner";

function CreateBannerForm({ cabinToEdit = {}, onCloseModal }) {
  //   const { id: editId, ...editValues } = cabinToEdit;
  //   const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createBanners } = useCreateBanner();
  //   const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating;

  function onSubmit(data) {
    const file = typeof data.file === "string" ? data.file : data.file[0];

    const formdata = new FormData();
    formdata.append("banner", file);
    formdata.append("page", data.page);
    formdata.append("status", true);
    console.log("formdata", formdata);
    console.log("Submitted data:", data);

    createBanners(formdata, {
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
      <FormRow label="Page Name" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="page"
          {...register("page", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"File"}>
        <FileInput
          id="file"
          accept="image/*"
          type="file"
          {...register("file", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>{"Create new banner"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBannerForm;
