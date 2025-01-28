import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { Stack } from "@mui/material";
import { useState } from "react";
import {
  useTpa,
  useUpdateTpa,
  useUpdateLogo,
} from "../../admin/tpa_index/useTpa";
import SpinnerMini from "../../ui/SpinnerMini";

function EditTpaForm({ onCloseModal, id }) {
  const { data, isLoading } = useTpa();
  const filteredData = data.filter((el) => el._id === id);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });

  const [name, setName] = useState(filteredData[0].name);

  const { isPending: isUpdating, mutate: updateTpa } = useUpdateTpa();
  const { updateLogo, isUpdatingLogo } = useUpdateLogo();
  if (isUpdatingLogo) return <SpinnerMini />;

  const { errors } = formState;

  // const { isUpdating, updateBannerImage } = useUpdateBanner();

  function onUpdateDepartment(name, id) {
    const data = { name };
    updateTpa({ id, data });
  }

  function onUpdateImage(files, id) {
    const file = typeof files === "string" ? files : files[0];
    const formdata = new FormData();
    formdata.append("logo", file);
    updateLogo({ id, formdata });
  }

  return (
    <Form
      // onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Name" error={errors?.page?.message}>
        <Input
          // disabled={isUpdating}
          type="text"
          id="name"
          value={name}
          {...register("name", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newName = e.target.value;
            setName(newName);
            onUpdateDepartment(newName, id);
          }}
        />
      </FormRow>

      <FormRow label={"Logo"}>
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

export default EditTpaForm;
