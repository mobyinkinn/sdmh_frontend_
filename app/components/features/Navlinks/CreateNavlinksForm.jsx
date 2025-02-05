import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useNavbarById, useUpdateNavbar } from "../../admin/navbar/useNavbar";
import SpinnerMini from "../../ui/SpinnerMini";
import { Stack } from "@mui/material";
import Textarea from "../../ui/Textarea";
import { useParams } from "next/navigation";

function CreateNavlinksForm({ onCloseModal }) {
  const { id } = useParams();
  const { data: navData, isLoading, error } = useNavbarById(id);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const { isPending: isUpdating, mutate: updateNavbar } = useUpdateNavbar();
  const isWorking = isUpdating;

  if (isLoading) return <SpinnerMini />;
  if (error) return <div>Error loading Navbar links: {error.message}</div>;

  function onSubmit(data) {
    const formData = {
      subItemOrderId: data.subItemOrderId,
      itemLink: data.itemLink,
      itemName: data.itemName,
    };

    const updatedItems = Array.isArray(navData.items)
      ? [...navData.items, formData]
      : [formData];

    const newNavData = {
      ...navData,
      items: updatedItems,
    };

    updateNavbar(
      { id, formData: newNavData },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  if (isUpdating) return <SpinnerMini />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow
        label={"Sub Item Order Id"}
        error={errors?.subItemOrderId?.message}
      >
        <Input
          disabled={isWorking}
          type="text"
          id="subItemOrderId"
          {...register("subItemOrderId", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label={"Item Name"} error={errors?.itemName?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="itemName"
          {...register("itemName", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label={"Item Link"} error={errors?.itemLink?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="itemLink"
          {...register("itemLink", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => {
            reset();
            onCloseModal?.();
          }}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>{"Create Navlink"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateNavlinksForm;
