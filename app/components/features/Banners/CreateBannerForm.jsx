
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Input from "../../ui/Input";
// import Form from "../../ui/Form";
// import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import Textarea from "../../ui/Textarea";
// import FormRow from "../../ui/FormRow";
// import { useCreateBanner } from "../../admin/banner/parts/useBanner";
// import { usePages } from "../../admin/banner/parts/usePages";
// import AnotherSelect from "../../ui/AnotherSelect";
// import { Stack } from "@mui/material";
// import styled from "styled-components";
// import Spinner from "../../ui/Spinner";
// import SpinnerMini from "../../ui/SpinnerMini";

// const OverlaySpinner = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 9999;
// `;
// function CreateBannerForm({ cabinToEdit = {}, onCloseModal }) {
//   const { register, handleSubmit, reset, formState } = useForm({
//     defaultValues: {},
//   });
//   const { errors } = formState;

//   const { isCreating, createBanners } = useCreateBanner();
//   const { data, isLoading, error } = usePages();
//   const isWorking = isCreating;

//   // State to store the selected image previews
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [mobileImagePreviews, setMobileImagePreviews] = useState([]);

//   // Function to handle image file selection for banner
//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImagePreviews(files.map((file) => URL.createObjectURL(file)));
//   };

//   // Function to handle mobile banner image file selection
//   const handleMobileImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setMobileImagePreviews(files.map((file) => URL.createObjectURL(file)));
//   };

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

//   // On form submit, handle multiple file uploads correctly
//   function onSubmit(data) {
//     // Ensure files are arrays (even if only one file is selected)
//     const files = data.file; // Files from desktop banner input
//     const mobileFiles = data.mobileFile; // Files from mobile banner input

//     const formdata = new FormData();
//     formdata.append("link", data.link);
//     formdata.append("page", data.page);
//     formdata.append("status", true);

//     // Append each file to the FormData (for desktop images)
//     if (files) {
//       Array.from(files).forEach((file) => {
//         formdata.append("images", file);
//       });
//     }

//     // Append each file to the FormData (for mobile images)
//     if (mobileFiles) {
//       Array.from(mobileFiles).forEach((file) => {
//         formdata.append("mobileimages", file);
//       });
//     }

//     console.log("FormData content", formdata); // You can log this to inspect the content before submitting (optional)

//     // Send FormData to backend
//     createBanners(formdata, {
//       onSuccess: () => {
//         reset();
//         setImagePreviews([]); // Reset image preview
//         setMobileImagePreviews([]); // Reset mobile image preview
//         onCloseModal?.();
//       },
//     });
//   }

//   // Handle errors
//   function onError(errors) {
//     console.log(errors);
//   }

//   if (isWorking) return <Spinner />;

//   return (
//     <>
//       {isCreating && (
//         <OverlaySpinner>
//           <Spinner />
//         </OverlaySpinner>
//       )}
//       <Form
//         onSubmit={handleSubmit(onSubmit, onError)}
//         type={onCloseModal ? "modal" : "regular"}
//       >
//         <FormRow label="Page Name" error={errors?.page?.message}>
//           <StyledSelect
//             disabled={isWorking}
//             id="page"
//             {...register("page", {
//               required: "This field is required",
//             })}
//           >
//             <option value="">Select a page</option>
//             {data?.map((page, index) => (
//               <option key={index} value={page.name}>
//                 {page.name}
//               </option>
//             ))}
//           </StyledSelect>
//         </FormRow>

//         <FormRow label={"Link"} error={errors?.title?.message}>
//           <Input
//             disabled={isWorking}
//             type="text"
//             id="link"
//             {...register("link")}
//           />
//         </FormRow>

//         {/* Banner Images */}
//         <FormRow label={"Banner Images"}>
//           <FileInput
//             id="file"
//             accept="image/*"
//             type="file"
//             multiple
//             {...register("file", {
//               required: "This field is required",
//             })}
//             onChange={(e) => {
//               handleImageChange(e); // Update preview on file change
//               register("file").onChange(e);
//             }}
//           />

//           <Stack>
//             {imagePreviews.length > 0 && (
//               <div style={{ marginTop: "0.5rem" }}>
//                 <strong>Preview:</strong>
//                 <div style={{ display: "flex", gap: "10px" }}>
//                   {imagePreviews.map((image, index) => (
//                     <img
//                       key={index}
//                       src={image}
//                       alt={`Preview ${index + 1}`}
//                       width={100}
//                       style={{ borderRadius: "8px" }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </Stack>
//         </FormRow>
//         <Stack color={"red"} fontSize={"0.8rem"} mb={"20px"}>
//           <p>Banner size for desktop will be: 2880 * 1200</p>
//         </Stack>
//         {/* Mobile Banner Images */}
//         <FormRow label={"Mobile Banner Images"}>
//           <FileInput
//             id="mobileFile"
//             accept="image/*"
//             type="file"
//             multiple
//             {...register("mobileFile")}
//             onChange={(e) => {
//               handleMobileImageChange(e); // Update preview on file change
//               register("mobileFile").onChange(e);
//             }}
//           />
//           <Stack>
//             {mobileImagePreviews.length > 0 && (
//               <div style={{ marginTop: "0.5rem" }}>
//                 <strong>Preview:</strong>
//                 <div style={{ display: "flex", gap: "10px" }}>
//                   {mobileImagePreviews.map((image, index) => (
//                     <img
//                       key={index}
//                       src={image}
//                       alt={`Mobile Preview ${index + 1}`}
//                       width={100}
//                       style={{ borderRadius: "8px" }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </Stack>
//         </FormRow>
//         <Stack color={"red"} fontSize={"0.8rem"} mb={"20px"}>
//           <p>Banner size for Mobile will be: 1000 * 1200</p>
//         </Stack>
//         <FormRow>
//           <Button
//             variation="secondary"
//             type="reset"
//             onClick={() => {
//               reset();
//               setImagePreviews([]); // Clear preview on reset
//               setMobileImagePreviews([]);
//               onCloseModal?.();
//             }}
//           >
//             Cancel
//           </Button>
//           <Button disabled={isWorking}>{"Create new banner"}</Button>
//         </FormRow>
//       </Form>
//     </>
//   );
// }

// export default CreateBannerForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateBanner } from "../../admin/banner/parts/useBanner";
import { usePages } from "../../admin/banner/parts/usePages";
import AnotherSelect from "../../ui/AnotherSelect";
import { Stack } from "@mui/material";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";

const OverlaySpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

function CreateBannerForm({ cabinToEdit = {}, onCloseModal }) {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createBanners } = useCreateBanner();
  const { data, isLoading, error } = usePages();
  const isWorking = isCreating;

  // State to store the selected image previews
  const [imagePreviews, setImagePreviews] = useState([]);
  const [mobileImagePreviews, setMobileImagePreviews] = useState([]);
  const [sliderChecked, setSliderChecked] = useState(false);

  // Function to handle image file selection for banner
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  // Function to handle mobile banner image file selection
  const handleMobileImageChange = (e) => {
    const files = Array.from(e.target.files);
    setMobileImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

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

  // On form submit, handle multiple file uploads correctly
  function onSubmit(data) {
    // Ensure files are arrays (even if only one file is selected)
    const files = data.file; // Files from desktop banner input
    const mobileFiles = data.mobileFile; // Files from mobile banner input

    const formdata = new FormData();
    formdata.append("link", data.link);
    formdata.append("page", data.page);
    formdata.append("status", true);

    // Append images if slider is checked
    if (sliderChecked) {
      // Append each file to the FormData (for desktop images)
      if (files) {
        Array.from(files).forEach((file) => {
          formdata.append("images", file);
        });
      }

      // Append each file to the FormData (for mobile images)
      if (mobileFiles) {
        Array.from(mobileFiles).forEach((file) => {
          formdata.append("mobileimages", file);
        });
      }
    } else {
      // For the banner and mobile banner, send only the first image
      if (data.banner) {
        formdata.append("banner", data.banner[0]); // single file for banner
      }
      if (data.mobileBanner) {
        formdata.append("mobileBanner", data.mobileBanner[0]); // single file for mobile banner
      }
    }

    console.log("FormData content", formdata); // You can log this to inspect the content before submitting (optional)

    // Send FormData to backend
    createBanners(formdata, {
      onSuccess: () => {
        reset();
        setImagePreviews([]); // Reset image preview
        setMobileImagePreviews([]); // Reset mobile image preview
        onCloseModal?.();
      },
    });
  }

  // Handle errors
  function onError(errors) {
    console.log(errors);
  }

  if (isWorking) return <Spinner />;

  return (
    <>
      {isCreating && (
        <OverlaySpinner>
          <Spinner />
        </OverlaySpinner>
      )}
      <Form
        onSubmit={handleSubmit(onSubmit, onError)}
        type={onCloseModal ? "modal" : "regular"}
      >
        <FormRow label="Page Name" error={errors?.page?.message}>
          <StyledSelect
            disabled={isWorking}
            id="page"
            {...register("page", {
              required: "This field is required",
            })}
          >
            <option value="">Select a page</option>
            {data?.map((page, index) => (
              <option key={index} value={page.name}>
                {page.name}
              </option>
            ))}
          </StyledSelect>
        </FormRow>

        <FormRow label={"Link"} error={errors?.title?.message}>
          <Input
            disabled={isWorking}
            type="text"
            id="link"
            {...register("link")}
          />
        </FormRow>

        {/* Slider Checkbox */}
        <FormRow>
          <label htmlFor="slider" style={{ fontSize: "1rem", color: "#333" }}>
            Is this a Slider Banner?
          </label>
          <input
            type="checkbox"
            id="slider"
            name="slider"
            checked={sliderChecked}
            onChange={() => setSliderChecked(!sliderChecked)}
          />
        </FormRow>

        {/* Banner Images */}
        <FormRow label={"Banner Images"}>
          {sliderChecked ? (
            <FileInput
              id="images"
              accept="image/*"
              type="file"
              multiple
              {...register("images", {
                required: "This field is required",
              })}
              onChange={(e) => {
                handleImageChange(e); // Update preview on file change
                register("images").onChange(e);
              }}
            />
          ) : (
            <FileInput
              id="banner"
              accept="image/*"
              type="file"
              {...register("banner", {
                required: "This field is required",
              })}
              onChange={(e) => {
                register("banner").onChange(e);
              }}
            />
          )}

          <Stack>
            {imagePreviews.length > 0 && (
              <div style={{ marginTop: "0.5rem" }}>
                <strong>Preview:</strong>
                <div style={{ display: "flex", gap: "10px" }}>
                  {imagePreviews.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Preview ${index + 1}`}
                      width={100}
                      style={{ borderRadius: "8px" }}
                    />
                  ))}
                </div>
              </div>
            )}
          </Stack>
        </FormRow>

        <Stack color={"red"} fontSize={"0.8rem"} mb={"20px"}>
          <p>Banner size for desktop will be: 2880 * 1200</p>
        </Stack>

        {/* Mobile Banner Images */}
        <FormRow label={"Mobile Banner Images"}>
          {sliderChecked ? (
            <FileInput
              id="mobileimages"
              accept="image/*"
              type="file"
              multiple
              {...register("mobileimages")}
              onChange={(e) => {
                handleMobileImageChange(e); // Update preview on file change
                register("mobileimages").onChange(e);
              }}
            />
          ) : (
            <FileInput
              id="mobileBanner"
              accept="image/*"
              type="file"
              {...register("mobileBanner")}
              onChange={(e) => {
                register("mobileBanner").onChange(e);
              }}
            />
          )}
          <Stack>
            {mobileImagePreviews.length > 0 && (
              <div style={{ marginTop: "0.5rem" }}>
                <strong>Preview:</strong>
                <div style={{ display: "flex", gap: "10px" }}>
                  {mobileImagePreviews.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Mobile Preview ${index + 1}`}
                      width={100}
                      style={{ borderRadius: "8px" }}
                    />
                  ))}
                </div>
              </div>
            )}
          </Stack>
        </FormRow>

        <Stack color={"red"} fontSize={"0.8rem"} mb={"20px"}>
          <p>Banner size for Mobile will be: 1000 * 1200</p>
        </Stack>

        <FormRow>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => {
              reset();
              setImagePreviews([]); // Clear preview on reset
              setMobileImagePreviews([]);
              onCloseModal?.();
            }}
          >
            Cancel
          </Button>
          <Button disabled={isWorking}>{"Create new banner"}</Button>
        </FormRow>
      </Form>
    </>
  );
}

export default CreateBannerForm;
