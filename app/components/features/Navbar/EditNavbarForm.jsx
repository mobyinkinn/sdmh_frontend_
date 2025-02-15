import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useUpdateNavbar } from "../../admin/navbar/useNavbar";
import SpinnerMini from "../../ui/SpinnerMini";
import { Stack } from "@mui/material";
import Textarea from "../../ui/Textarea";

function EditNavbarForm({ onCloseModal, editData, setEditData, id }) {
  const { mutate: updateNavbar, isPending: isUpdating } = useUpdateNavbar();
  if (isUpdating) return <SpinnerMini />;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataNavbar = {
      orderId: editData.orderId,
      name: editData.name,
      link: editData.link,
    };

    updateNavbar(
      { id, formData: formDataNavbar },
      {
        onSuccess: () => onCloseModal?.(),
      }
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
        <FormRow label={"Order Id"}>
          <Input
            type="text"
            id="orderId"
            name="orderId"
            value={editData.orderId}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label={"Name"}>
          <Input
            type="text"
            id="name"
            name="name"
            value={editData.name}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label={"Link"}>
          <Input
            type="text"
            id="link"
            name="link"
            value={editData.link}
            onChange={handleInputChange}
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
          <Button>{"Edit Navbar"}</Button>
        </FormRow>
      </Form>
    </>
  );
}

export default EditNavbarForm;
