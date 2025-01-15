import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import { useCreateAward } from "../../admin/awards/useAwards";

const CreateAwardForm = ({ onCloseModal, resourceName }) => {
  const { createAwards, isCreating } = useCreateAward();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("about", data.about);
    formData.append("status", "true");

    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    createAwards(formData, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  };

  //name , year, about, image, status
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Heading as="h3">Add {resourceName}</Heading>

      <Stack gap={2} pt={5}>
        <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
          <FormRow label="Name" error={errors?.name?.message}>
            <Input
              disabled={isCreating}
              type="text"
              id="name"
              {...register("name", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label="Year" error={errors?.year?.message}>
            <Input
              disabled={isCreating}
              type="text"
              id="year"
              {...register("year", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>
        <Stack marginLeft={2}>
          <FormRow label="About" error={errors?.about?.message}>
            <Input
              disabled={isCreating}
              type="text"
              id="about"
              {...register("about", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>
        <Stack marginLeft={2}>
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
        </Stack>

        <FormRow marginLeft={2}>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isCreating}>{"Create new Award"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default CreateAwardForm;
