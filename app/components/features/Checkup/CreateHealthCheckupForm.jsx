import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";

const CreateHealthCheckupForm = ({ onClosedModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  //title, description, image, bannerImage,

  return (
    <Form>
      <Heading as="h3">Add {resourceName}</Heading>

      <Stack gap={2} pt={5}>
        <FormRow label="Title" error={errors?.page?.message}>
          <Input
            disabled={isWorking}
            type="text"
            id="title"
            {...register("title", {
              required: "This field is required",
            })}
          />
        </FormRow>
      </Stack>
    </Form>
  );
};

export default CreateHealthCheckupForm;
