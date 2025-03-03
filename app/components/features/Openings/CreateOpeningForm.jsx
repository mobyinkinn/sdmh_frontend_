// import { useForm } from "react-hook-form";

// import Input from "../../ui/Input";
// import Form from "../../ui/Form";
// import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import Textarea from "../../ui/Textarea";
// import FormRow from "../../ui/FormRow";
// // import useCreateCabin from "./useCreateCabin";
// // import useEditCabin from "./useEditCabin";
// import { Stack } from "@mui/material";
// import Heading from "../../ui/Heading";
// import { useCreateOpening } from "../../admin/careers/parts/useOpening";

// function CreateOpeningForm({ cabinToEdit = {}, onCloseModal, resourceName }) {
//   //   const { id: editId, ...editValues } = cabinToEdit;
//   //   const isEditSession = Boolean(editId);

//   const { register, handleSubmit, reset, getValues, formState } = useForm({
//     defaultValues: {},
//   });
//   const { errors } = formState;

//   const { isCreating, createOpenings } = useCreateOpening();
//   //   const { isEditing, editCabin } = useEditCabin();

//   const isWorking = isCreating;

//   function onSubmit(data) {
//      const formdata = new FormData();

//     formdata.append("position", data.position);
//     formdata.append("seats", data.seats);
//     formdata.append("lastDate", data.lastDate);
//     formdata.append("programmer", data.programmer);
//     formdata.append("jd", data.jd);
//     formdata.append("number", data.number);
//     formdata.append("status", true);
//     console.log("formdata", formdata);
//     console.log("Submitted data:", data);

//     createOpenings(formdata, {
//       onSuccess: (data) => {
//         reset();
//         onCloseModal?.();
//       },
//     });
//   }
//   function onError(errors) {
//     // console.log(errors);
//   }
//   return (
//     <Form
//       onSubmit={handleSubmit(onSubmit, onError)}
//       type={onCloseModal ? "modal" : "regular"}
//     >
//       <Heading as="h3">Add {resourceName}</Heading>
//       <Stack gap={2} pt={5}>
//         <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
//           <FormRow label="Position" error={errors?.page?.message}>
//             <Input
//               disabled={isWorking}
//               type="text"
//               id="position"
//               {...register("position", {
//                 required: "This field is required",
//               })}
//             />
//           </FormRow>
//           <FormRow label="Seats" error={errors?.page?.message}>
//             <Input
//               disabled={isWorking}
//               type="text"
//               id="seats"
//               {...register("seats", {
//                 required: "This field is required",
//               })}
//             />
//           </FormRow>
//         </Stack>
//         <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
//           <FormRow label="Programmer" error={errors?.description?.message}>
//             <Input
//               disabled={isWorking}
//               type="text"
//               id="programmer"
//               {...register("programmer", {
//                 required: "This field is required",
//               })}
//             />
//           </FormRow>
//           <FormRow label="Last Date" error={errors?.date?.message}>
//             <Input
//               disabled={isWorking}
//               type="text"
//               id="lastDate"
//               {...register("lastDate", {
//                 required: "This field is required",
//               })}
//             />
//           </FormRow>
//         </Stack>
//         <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
//           <FormRow label="JD" error={errors?.description?.message}>
//             <Input
//               disabled={isWorking}
//               type="text"
//               id="jd"
//               {...register("jd", {
//                 required: "This field is required",
//               })}
//             />
//           </FormRow>
//           <FormRow label="Ph Number" error={errors?.date?.message}>
//             <Input
//               disabled={isWorking}
//               type="text"
//               id="number"
//               {...register("number", {
//                 required: "This field is required",
//               })}
//             />
//           </FormRow>
//         </Stack>
//         <FormRow>
//           <Button
//             variation="secondary"
//             type="reset"
//             onClick={() => onCloseModal?.()}
//           >
//             Cancel
//           </Button>
//           <Button disabled={isWorking}>{"Create new banner"}</Button>
//         </FormRow>
//       </Stack>
//     </Form>
//   );
// }

// export default CreateOpeningForm;

import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import { useCreateOpening } from "../../admin/careers/parts/useOpening";
import { useState } from "react";
import dynamic from "next/dynamic";
const Jodit = dynamic(() => import("./Jodit"), { ssr: false });
function CreateOpeningForm({ cabinToEdit = {}, onCloseModal, resourceName }) {
  //   const { id: editId, ...editValues } = cabinToEdit;
  //   const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createOpenings } = useCreateOpening();
  //   const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating;
  const [jdContent, setJdContent] = useState("");
  function onSubmit(data) {
    const payload = {
      position: data.position,
      category: data.category,
      type: data.type,
      location: data.location,
      jd: jdContent,
      status: true,
    };
    createOpenings(payload, {
      onSuccess: (data) => {
        reset();
        onCloseModal?.();
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
      <Stack gap={1} pt={1}>
        <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
          <FormRow label="Position" error={errors?.page?.message}>
            <Input
              disabled={isWorking}
              type="text"
              id="position"
              {...register("position", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label="Category" error={errors?.category?.message}>
            <Input
              disabled={isWorking}
              type="text"
              id="category"
              {...register("category", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"} p={"0px 10px"}>
          <FormRow label="Type" error={errors?.type?.message}>
            <Input
              disabled={isWorking}
              type="text"
              id="type"
              {...register("type", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label="Location" error={errors?.location?.message}>
            <Input
              disabled={isWorking}
              type="text"
              id="location"
              {...register("location", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </Stack>
        <Stack p={"0 24px"}>
          <FormRow label="JD" error={errors?.description?.message}></FormRow>
          <Jodit content={jdContent} setContent={setJdContent} />
        </Stack>
        <FormRow>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isWorking}>{"Create new opening"}</Button>
        </FormRow>
      </Stack>
    </Form>
  );
}

export default CreateOpeningForm;
