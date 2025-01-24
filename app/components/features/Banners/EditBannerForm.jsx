import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import {
  useCreateBanner,
  useBanner,
  useUpdateBanner,
} from "../../admin/banner/parts/useBanner";
import { Stack } from "@mui/material";
import SpinnerMini from "../../ui/SpinnerMini";

function EditBannerForm({ cabinToEdit = {}, onCloseModal, pageName }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createBanners } = useCreateBanner();
  const { isUpdating, updateBannerImage } = useUpdateBanner();
  if (isUpdating) return <SpinnerMini />;

  const isWorking = isCreating;

  function onUpdateImage(files, pageName) {
    const file = typeof files === "string" ? files : files[0];
    const formdata = new FormData();
    formdata.append("banner", file);
    updateBannerImage({ pageName, formdata });
  }
  function onError(errors) {}
  return (
    <Form
      // onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label={"File"}>
        <FileInput
          id="file"
          accept="image/*"
          type="file"
          {...register("file", {
            required: "This field is required",
          })}
          onChange={(e) => {
            onUpdateImage(e.target.files, pageName);
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
        <Button disabled={isWorking}>{"Done"}</Button>
      </Stack>
    </Form>
  );
}

export default EditBannerForm;
