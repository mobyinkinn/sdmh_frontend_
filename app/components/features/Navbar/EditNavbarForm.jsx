// import { useForm } from "react-hook-form";
// import Input from "../../ui/Input";
// import Form from "../../ui/Form";
// import Button from "../../ui/Button";
// import FormRow from "../../ui/FormRow";
// import { useUpdateNavbar } from "../../admin/navbar/useNavbar";
// import SpinnerMini from "../../ui/SpinnerMini";
// import { Stack } from "@mui/material";
// import Textarea from "../../ui/Textarea";

// function EditNavbarForm({ onCloseModal }) {
//   const { isUpdating, createNavbars } = useUpdateNavbar();
//   const isWorking = isUpdating;

//   function onSubmit(data) {
//     const formData = {
//       orderId: data.orderId,
//       link: data.link,
//       name: data.name,
//     };

//     createNavbars(formData, {
//       onSuccess: (data) => {
//         reset();
//         onCloseModal?.();
//       },
//     });
//   }

//   if (isUpdating) return <SpinnerMini />;

//   return (
//     <>
//       <Form
//         onSubmit={handleSubmit(onSubmit, onError)}
//         type={onCloseModal ? "modal" : "regular"}
//       >
//         <FormRow label={"Order Id"} error={errors?.title?.message}>
//           <Input
//             disabled={isWorking}
//             type="text"
//             id="orderId"
//             {...register("orderId", {
//               required: "This field is required",
//             })}
//           />
//         </FormRow>
//         <FormRow label={"Name"} error={errors?.title?.message}>
//           <Input
//             disabled={isWorking}
//             type="text"
//             id="name"
//             {...register("name", {
//               required: "This field is required",
//             })}
//           />
//         </FormRow>
//         <FormRow label={"Link"} error={errors?.title?.message}>
//           <Input
//             disabled={isWorking}
//             type="text"
//             id="link"
//             {...register("link", {
//               required: "This field is required",
//             })}
//           />
//         </FormRow>

//         <FormRow>
//           <Button
//             variation="secondary"
//             type="reset"
//             onClick={() => {
//               reset();
//               onCloseModal?.();
//             }}
//           >
//             Cancel
//           </Button>
//           <Button disabled={isWorking}>{"Edit Navbar"}</Button>
//         </FormRow>
//       </Form>
//     </>
//   );
// }

// export default EditNavbarForm;
