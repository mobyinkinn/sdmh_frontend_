import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateBanner } from "../../admin/banner/parts/useBanner";
import { useCreateTpa } from "../../admin/tpa_index/useTpa";
import SpinnerMini from "../../ui/SpinnerMini";

function CreateTpaForm({ cabinToEdit = {}, onCloseModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createTpas } = useCreateTpa();
  //   const { isEditing, editCabin } = useEditCabin();
  if (isCreating) return <SpinnerMini />;

  const isWorking = isCreating;

  function onSubmit(data) {
    const file = typeof data.file === "string" ? data.file : data.file[0];

    const formdata = new FormData();
    formdata.append("logo", file);
    formdata.append("name", data.name);
    formdata.append("status", true);
    console.log("formdata", formdata);
    console.log("Submitted data:", data);

    createTpas(formdata, {
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
      <FormRow label="Tpa Name" error={errors?.name?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="name"
          {...register("name", {
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
        <Button disabled={isWorking}>{"Create new Tpa"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateTpaForm;
