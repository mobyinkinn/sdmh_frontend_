import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import { useCreateVideo } from "../../admin/videos/useVideos";
import Input from "../../ui/Input";

const CreateVideoForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { createVideos, isCreating } = useCreateVideo();
  const { errors } = formState;
  const isWorking = isCreating;

  function onSubmit(data) {
    const formdata = {
      title: data.title,
      url: data.url,
    };
    // const formdata = new FormData();

    // formdata.append("title", data.title);
    // formdata.append("url", data.url);

    console.log(formdata);

    createVideos(formdata, {
      onSuccess: () => {
        onCloseModal?.();
        reset();
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
      <Heading as="h3">Add {resourceName}</Heading>
      <Stack gap={2} pt={5}>
        <FormRow label="Title" error={errors?.title?.message}>
          <Input
            disabled={isCreating}
            type="text"
            id="title"
            {...register("title", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Video URL" error={errors?.url?.message}>
          <Input
            disabled={isCreating}
            type="text"
            id="url"
            {...register("url", {
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
          <Button disabled={isCreating}>{"Create new video"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default CreateVideoForm;
