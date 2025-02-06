import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useNavbarById, useUpdateNavbar } from "../../admin/navbar/useNavbar";
import SpinnerMini from "../../ui/SpinnerMini";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Stack } from "@mui/material";

function EditNavlinksForm({ itemId, editData, setEditData, onCloseModal }) {
  console.log("itemId", itemId);
  const { id } = useParams();
  const { data: navData, isLoading, error, refetch } = useNavbarById(id);
  const { isPending: isUpdating, mutate: updateNavbar } = useUpdateNavbar();
  const isWorking = isUpdating || isLoading;

  useEffect(() => {
    if (navData) {
      const itemToEdit = navData.items.find((item) => item._id === itemId);
      if (itemToEdit) {
        setEditData(itemToEdit);
      }
    }
  }, [navData, itemId, setEditData]);

  if (isLoading || isUpdating) return <SpinnerMini />;
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

    const updatedItems = navData.items.filter((item) => item._id !== itemId);

    updatedItems.push({ ...formData });

    const updatedNavData = {
      ...navData,
      items: updatedItems,
    };

    updateNavbar(
      { id, formData: updatedNavData },
      {
        onSuccess: () => {
          refetch();
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
