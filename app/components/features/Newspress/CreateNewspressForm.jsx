// import { useForm } from "react-hook-form";
// import Input, { DateInput } from "../../ui/Input";
// import Form from "../../ui/Form";
// import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import FormRow from "../../ui/FormRow";
// import { Stack } from "@mui/material";
// import Heading from "../../ui/Heading";
// import { useCreateNewspress } from "../../admin/newspress/useNewspress";
// import Jodit from "../Openings/Jodit";
// import { useState } from "react";
// import SpinnerMini from "../../ui/SpinnerMini";
// import styled from "styled-components";
// import moment from "moment";

// const CreateNewspressForm = ({ onCloseModal, resourceName }) => {
//   const { register, handleSubmit, reset, formState } = useForm({
//     defaultValues: {},
//   });
//   const { errors } = formState;
//   const { createNewspresses, isCreating } = useCreateNewspress();
//   const [descContent, setDescContent] = useState("");

//   const StyledSelect = styled.select`
//     font-size: 1rem;
//     padding: 0.6rem 1.2rem;
//     border: 1px solid
//       ${(props) =>
//         props.type === "white"
//           ? "var(--color-grey-100)"
//           : "var(--color-grey-300)"};
//     border-radius: var(--border-radius-sm);
//     background-color: var(--color-grey-0);
//     font-weight: 500;
//     box-shadow: var(--shadow-sm);
//   `;

//   if (isCreating) return <SpinnerMini />;

//   const onSubmit = (data) => {
//     const formattedDate = moment(data.date).format("YYYY-MM-DD");
//     const formData = new FormData();

//     formData.append("title", data.title);
//     formData.append("date", formattedDate);
//     formData.append("description", descContent);
//     formData.append("tag", data.tag);
//     formData.append("link", data.link);

//      if (data.link) {
//        formData.append("link", data.link);
//      }

//      // Check if files exist before appending
//      if (data.image && data.image[0]) {
//        formData.append("image", data.image[0]);
//      }
//      if (data.banner && data.banner[0]) {
//        formData.append("banner", data.banner[0]);
//      }

//     createNewspresses(formData, {
//       onSuccess: () => {
//         reset();
//         onCloseModal?.();
//       },
//     });
//   };

//   return (
//     <Form
//       onSubmit={handleSubmit(onSubmit)}
//       type={onCloseModal ? "modal" : "regular"}
//     >
//       <Heading as="h3">Add {resourceName}</Heading>

//       <Stack pt={1}>
//         <FormRow label="Title" error={errors?.title?.message}>
//           <Input
//             disabled={isCreating}
//             type="text"
//             id="title"
//             {...register("title", {
//               required: "This field is required",
//             })}
//           />
//         </FormRow>
//         <FormRow label="Date" error={errors?.date?.message}>
//           <DateInput
//             type="date"
//             id="date"
//             {...register("date", {
//               required: "This field is required",
//             })}
//           />
//         </FormRow>
//         <FormRow label="Tag" error={errors?.tag?.message}>
//           <StyledSelect
//             id="tag"
//             {...register("tag", {
//               required: "This field is required",
//             })}
//           >
//             <option value="">Select a tag</option>
//             <option value="Digital">Digital</option>
//             <option value="Print">Print</option>
//           </StyledSelect>
//         </FormRow>
//         <FormRow label="Link" error={errors?.link?.message}>
//           <Input
//             disabled={isCreating}
//             type="text"
//             id="link"
//             {...register("link")}
//           />
//         </FormRow>
//         <FormRow
//           label="Description"
//           error={errors?.description?.message}
//         ></FormRow>
//         <Jodit content={descContent} setContent={setDescContent} />

//         <FormRow label={"Image"}>
//           <FileInput
//             id="file"
//             accept="image/*"
//             type="file"
//             {...register("image", {
//               required: "This field is required",
//             })}
//           />
//         </FormRow>
//         <FormRow label={"Banner Image"}>
//           <FileInput
//             id="file"
//             accept="image/*"
//             type="file"
//             {...register("banner", {
//               required: "This field is required",
//             })}
//           />
//         </FormRow>

//         <FormRow>
//           <Button
//             variation="secondary"
//             type="reset"
//             onClick={() => onCloseModal?.()}
//           >
//             Cancel
//           </Button>
//           <Button disabled={isCreating}>{"Create newspress"}</Button>
//         </FormRow>
//       </Stack>
//     </Form>
//   );
// };

// export default CreateNewspressForm;


import { useForm } from "react-hook-form";
import Input, { DateInput } from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import { useCreateNewspress } from "../../admin/newspress/useNewspress";
import Jodit from "../Openings/Jodit";
import { useState } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";
import moment from "moment";

const CreateNewspressForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const { createNewspresses, isCreating } = useCreateNewspress();
  const [descContent, setDescContent] = useState("");

  const StyledSelect = styled.select`
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    border: 1px solid
      ${(props) =>
        props.type === "white"
          ? "var(--color-grey-100)"
          : "var(--color-grey-300)"};
    border-radius: var(--border-radius-sm);
    background-color: var(--color-grey-0);
    font-weight: 500;
    box-shadow: var(--shadow-sm);
  `;

  if (isCreating) return <SpinnerMini />;

  const onSubmit = (data) => {
    const formattedDate = moment(data.date).format("YYYY-MM-DD");
    const file = typeof data.file === "string" ? data.file : data.file[0];
    const bannerfile =
      typeof data.bannerfile === "string"
        ? data.bannerfile
        : data.bannerfile[0];
console.log("file", file, bannerfile);
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("date", formattedDate);
    formData.append("description", descContent);
    formData.append("tag", data.tag);
    formData.append("image", file);
    formData.append("banner", bannerfile);

    // Only append link if it exists
    if (data.link) {
      formData.append("link", data.link);
    }

    createNewspresses(formData, {
      onSuccess: (formData) => {
        reset();
        setDescContent(""); // Reset the description content
        onCloseModal?.();
      },
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Heading as="h3">Add {resourceName}</Heading>

      <Stack pt={1}>
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

        <FormRow label="Date" error={errors?.date?.message}>
          <DateInput
            type="date"
            id="date"
            {...register("date", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Tag" error={errors?.tag?.message}>
          <StyledSelect
            id="tag"
            disabled={isCreating}
            {...register("tag", {
              required: "This field is required",
            })}
          >
            <option value="">Select a tag</option>
            <option value="Digital">Digital</option>
            <option value="Print">Print</option>
          </StyledSelect>
        </FormRow>

        <FormRow label="Link (Optional)" error={errors?.link?.message}>
          <Input
            disabled={isCreating}
            type="url"
            id="link"
            placeholder="https://example.com"
            {...register("link")}
          />
        </FormRow>

        <FormRow label="Description" error={errors?.description?.message}>
          <Jodit content={descContent} setContent={setDescContent} />
        </FormRow>

        <FormRow label="Image" error={errors?.image?.message}>
          <FileInput
            id="file"
            accept="image/*"
            type="file"
            {...register("file", {
              required: "Image is required",
            })}
          />
        </FormRow>

        <FormRow label="Banner Image" error={errors?.banner?.message}>
          <FileInput
            id="bannerfile"
            name="bannerfile"
            accept="image/*"
            type="file"
            {...register("bannerfile", {
              required: "Banner image is required",
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
          <Button disabled={isCreating}>
            {isCreating ? "Creating..." : "Create newspress"}
          </Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default CreateNewspressForm;