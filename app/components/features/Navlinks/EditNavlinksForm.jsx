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

function EditNavlinksForm({ itemId, editData, setEditData, onCloseModal }) {
  console.log("itemId", itemId);
  const { id } = useParams();
  const { data: navData, isLoading, error } = useNavbarById(id);
  const { isPending: isUpdating, mutate: updateNavbar } = useUpdateNavbar();
  const isWorking = isUpdating || isLoading;

  if (isLoading) return <SpinnerMini />;
  if (error) return <div>Error loading Navbar links: {error.message}</div>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      subItemOrderId: editData.subItemOrderId,
      itemLink: editData.itemLink,
      itemName: editData.itemName,
    };

    const updatedItems = navData.items.filter((item) => item.id !== itemId);

    updatedItems.push({ _id: itemId, ...formData });

    const updatedNavData = {
      ...navData,
      items: updatedItems,
    };

    updateNavbar(
      { id, formData: updatedNavData },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label={"Sub Item Order Id"}>
        <Input
          disabled={isWorking}
          type="text"
          id="subItemOrderId"
          name="subItemOrderId"
          value={editData.subItemOrderId}
          onChange={handleInputChange}
        />
      </FormRow>
      <FormRow label={"Item Name"}>
        <Input
          disabled={isWorking}
          type="text"
          id="itemName"
          name="itemName"
          value={editData.itemName}
          onChange={handleInputChange}
        />
      </FormRow>
      <FormRow label={"Item Link"}>
        <Input
          disabled={isWorking}
          type="text"
          id="itemLink"
          name="itemLink"
          value={editData.itemLink}
          onChange={handleInputChange}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => {
            onCloseModal?.();
          }}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>{"Edit Navlink"}</Button>
      </FormRow>
    </Form>
  );
}

export default EditNavlinksForm;
