// "use client";

// import {
//   ButtonMediumOutline,
//   DarkGreenButton,
// } from "@/app/styledComponents/frontend/Buttons";
// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import { Head3 } from "@/app/styledComponents/frontend/Headings";
// import { Label, TextInput } from "@/app/styledComponents/frontend/Inputs";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";
// import { Stack, Typography } from "@mui/material";
// import { useRef, useState } from "react";
// import uploadIcon from "./assets/uploadIcon.png";
// import Image from "next/image";

// export default function CareerForm({ position }) {
//   console.log("posit", position)
//   const fileInputRef = useRef(null);
//   const [fileName, setFileName] = useState("Choose file");

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     console.log("Selected file:", file);
//     setFileName(file.name);
//   };

//   const handleIconClick = () => {
//     fileInputRef.current.click();
//   };
// const decodedTitle = decodeURIComponent(position);
//   return (
//     <ContainerMain bgColor="#FFFFFB" alignItems="center">
//       <Stack direction={"row"}>
//         <Head3 color="black">Apply for&nbsp;</Head3>
//         <Head3 color="#007946">{decodedTitle}</Head3>
//       </Stack>
//       <ParaNormal width={"60%"} textAlign="center">
//         It is a long established fact that a reader will be distracted by the
//         readable content of a page when looking at its layout.
//       </ParaNormal>
//       <Stack
//         width={"70%"}
//         margin={"0 auto"}
//         backgroundColor="white"
//         gap="20px"
//         sx={{
//           border: "1px solid #2D2D2D33",
//           borderRadius: "10px",
//           padding: "30px 80px",
//         }}
//       >
//         <Stack>
//           <Label>Full Name</Label>
//           <TextInput placeholder="Enter Your Full Name" />
//         </Stack>
//         <Stack>
//           <Label>Phone Number</Label>
//           <TextInput placeholder="Enter Your Phone Number" />
//         </Stack>
//         <Stack>
//           <Label>Email Address</Label>
//           <TextInput placeholder="Enter Your Enter Your Email Address" />
//         </Stack>
//         <Stack>
//           <Label>Current Designation</Label>
//           <TextInput placeholder="Enter Your Current Designation" />
//         </Stack>
//         <Stack>
//           <Label>Total Experience</Label>
//           <TextInput placeholder="Enter Your Total Experience" />
//         </Stack>
//         <Stack>
//           <Label>Current CTC</Label>
//           <TextInput placeholder="Enter Your Current CTC" />
//         </Stack>

//         <Stack>
//           <input
//             type="file"
//             ref={fileInputRef}
//             style={{ display: "none" }}
//             onChange={handleFileChange}
//           />

//           <Label>Upload resume</Label>
//           <ButtonMediumOutline
//             width="100%"
//             color="#d2d2d2"
//             onClick={handleIconClick}
//           >
//             <Image src={uploadIcon} height={24} width={36} alt="" />
//             <Typography color="#476C9B">{fileName}</Typography>
//           </ButtonMediumOutline>
//           {/* <TextInput placeholder="" type="file" /> */}
//         </Stack>
//         {/* <Stack>
//           <Label>Captcha</Label>
//           <Stack
//             marginBottom={"20px"}
//             direction={"row"}
//             width={"100%"}
//             gap={"20px"}
//             justifyContent={"space-between"}
//           >
//             <TextInput placeholder="Enter Captcha" width={"70%"} />
//             <DarkGreenButton borderRadius="100px" bgColor="black">
//               Captcha
//             </DarkGreenButton>
//           </Stack>
//         </Stack> */}
//         <DarkGreenButton borderRadius="100px">Submit</DarkGreenButton>
//       </Stack>
//     </ContainerMain>
//   );
// }

// "use client";

// import { useForm } from "react-hook-form";
// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import { Head3 } from "@/app/styledComponents/frontend/Headings";
// import { Label, TextInput } from "@/app/styledComponents/frontend/Inputs";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";
// import { Stack, Typography } from "@mui/material";
// import { useRef, useState } from "react";
// import uploadIcon from "./assets/uploadIcon.png";
// import Image from "next/image";
// import {
//   DarkGreenButton,
//   ButtonMediumOutline,
// } from "@/app/styledComponents/frontend/Buttons";
// import { useCreateData } from "@/app/components/admin/careers/parts/useCareers";
// import Form from "@/app/components/ui/Form";
// import FormRow from "@/app/components/ui/FormRow";
// import FileInput from "@/app/components/ui/FileInput";

// export default function CareerForm({ position, onCloseModal }) {
//   const { register, handleSubmit, reset, formState } = useForm();
//   const { errors } = formState;


//   const { isCreating, createDatas } = useCreateData(); // Replace with career-related API hook
//   const isWorking = isCreating;

//   // const handleFileChange = (event) => {
//   //   const file = event.target.files[0];
//   //   setFileName(file.name);
//   // };

//   // const handleIconClick = () => {
//   //   console.log("fileInputRef:", fileInputRef.current);
//   //   fileInputRef.current?.click(); // Use optional chaining to avoid null errors
//   // };

//   const decodedTitle = decodeURIComponent(position);

//   function onSubmit(data) {
//     const resumeFile = data.resume[0]; // Resume file
//     const formData = new FormData();

//     formData.append("name", data.name);
//     formData.append("phone", data.phone);
//     formData.append("email", data.email);
//     formData.append("city", data.city);
//     formData.append("dateApplied", "23-03-2025");
//     formData.append("designation", data.designation);
//     formData.append("experience", data.experience);
//     formData.append("ctc", data.ctc);
//     formData.append("resume", resumeFile); // Append resume file
//     formData.append("position", decodedTitle);

//     console.log("FormData to submit:", formData);

//     // API call
//     createDatas(formData, {
//       onSuccess: () => {
//         reset();
//         onCloseModal?.();
//       },
//       onError: (error) => {
//         console.error("Failed to submit application:", error);
//       },
//     });
//   }

//   return (
//     <ContainerMain bgColor="#FFFFFB" alignItems="center">
//       <Stack direction={"row"}>
//         <Head3 color="black">Apply for&nbsp;</Head3>
//         <Head3 color="#007946">{decodedTitle}</Head3>
//       </Stack>
//       <ParaNormal width={"60%"} textAlign="center">
//         It is a long established fact that a reader will be distracted by the
//         readable content of a page when looking at its layout.
//       </ParaNormal>
//       <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
//         <Stack
//           width={"70%"}
//           margin={"0 auto"}
//           backgroundColor="white"
//           gap="20px"
//           sx={{
//             border: "1px solid #2D2D2D33",
//             borderRadius: "10px",
//             padding: "30px 80px",
//           }}
//         >
//           <Stack>
//             <Label>Full Name</Label>
//             <TextInput
//               placeholder="Enter Your Full Name"
//               {...register("name", { required: "Full name is required" })}
//               disabled={isWorking}
//             />
//             {errors.name && (
//               <Typography color="red">{errors.name.message}</Typography>
//             )}
//           </Stack>

//           <Stack>
//             <Label>Phone Number</Label>
//             <TextInput
//               placeholder="Enter Your Phone Number"
//               type="tel"
//               {...register("phone", { required: "Phone number is required" })}
//               disabled={isWorking}
//             />
//             {errors.phone && (
//               <Typography color="red">{errors.phone.message}</Typography>
//             )}
//           </Stack>
//           <Stack>
//             <Label>City</Label>
//             <TextInput
//               placeholder="Enter Your City"
//               type="name"
//               {...register("city", { required: "City is required" })}
//               disabled={isWorking}
//             />
//             {errors.city && (
//               <Typography color="red">{errors.city.message}</Typography>
//             )}
//           </Stack>

//           <Stack>
//             <Label>Email Address</Label>
//             <TextInput
//               placeholder="Enter Your Email Address"
//               type="email"
//               {...register("email", { required: "Email address is required" })}
//               disabled={isWorking}
//             />
//             {errors.email && (
//               <Typography color="red">{errors.email.message}</Typography>
//             )}
//           </Stack>

//           <Stack>
//             <Label>Current Designation</Label>
//             <TextInput
//               placeholder="Enter Your Current Designation"
//               {...register("designation", {
//                 required: "Designation is required",
//               })}
//               disabled={isWorking}
//             />
//             {errors.designation && (
//               <Typography color="red">{errors.designation.message}</Typography>
//             )}
//           </Stack>

//           <Stack>
//             <Label>Total Experience</Label>
//             <TextInput
//               placeholder="Enter Your Total Experience"
//               {...register("experience", {
//                 required: "Experience is required",
//               })}
//               disabled={isWorking}
//             />
//             {errors.experience && (
//               <Typography color="red">{errors.experience.message}</Typography>
//             )}
//           </Stack>

//           <Stack>
//             <Label>Current CTC</Label>
//             <TextInput
//               placeholder="Enter Your Current CTC"
//               {...register("ctc", { required: "CTC is required" })}
//               disabled={isWorking}
//             />
//             {errors.ctc && (
//               <Typography color="red">{errors.ctc.message}</Typography>
//             )}
//           </Stack>

//           <Stack>
//             <FormRow label={"File"}>
//               <FileInput
//                 id="file"
//                 type="file"
//                 {...register("resume", {
//                   required: "This field is required",
//                 })}
//               />
//             </FormRow>
//           </Stack>

//           <DarkGreenButton
//             borderRadius="100px"
//             type="submit"
//             disabled={isWorking}
//           >
//             {isWorking ? "Submitting..." : "Submit"}
//           </DarkGreenButton>
//         </Stack>
//       </Form>
//     </ContainerMain>
//   );
// }


"use client";

import { useForm } from "react-hook-form";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head3 } from "@/app/styledComponents/frontend/Headings";
import { Label, TextInput } from "@/app/styledComponents/frontend/Inputs";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack, Typography, Modal, Box } from "@mui/material";
import { useState } from "react";
import { DarkGreenButton } from "@/app/styledComponents/frontend/Buttons";
import { useCreateData } from "@/app/components/admin/careers/parts/useCareers";
import Form from "@/app/components/ui/Form";
import FormRow from "@/app/components/ui/FormRow";
import FileInput from "@/app/components/ui/FileInput";

export default function CareerForm({ position }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { isCreating, createDatas } = useCreateData(); // Replace with career-related API hook
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const isWorking = isCreating;
  const decodedTitle = decodeURIComponent(position);

  function onSubmit(data) {
    const resumeFile = data.resume[0]; // Resume file
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("city", data.city);
    formData.append("dateApplied", new Date().toISOString().split("T")[0]);
    formData.append("designation", data.designation);
    formData.append("experience", data.experience);
    formData.append("ctc", data.ctc);
    formData.append("resume", resumeFile); // Append resume file
    formData.append("position", decodedTitle);

    createDatas(formData, {
      onSuccess: () => {
        reset();
        setShowModal(true); // Show "Thank You" modal on success
      },
      onError: (error) => {
        console.error("Failed to submit application:", error);
      },
    });
  }

  return (
    <>
      <ContainerMain bgColor="#FFFFFB" alignItems="center">
        <Stack direction={"row"}>
          <Head3 color="black">Apply for&nbsp;</Head3>
          <Head3 color="#007946">{decodedTitle}</Head3>
        </Stack>
        <ParaNormal width={"60%"} textAlign="center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </ParaNormal>
        <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Stack
            width={"70%"}
            margin={"0 auto"}
            backgroundColor="white"
            gap="20px"
            sx={{
              border: "1px solid #2D2D2D33",
              borderRadius: "10px",
              padding: "30px 80px",
            }}
          >
            <Stack>
              <Label>Full Name</Label>
              <TextInput
                placeholder="Enter Your Full Name"
                {...register("name", { required: "Full name is required" })}
                disabled={isWorking}
              />
              {errors.name && (
                <Typography color="red">{errors.name.message}</Typography>
              )}
            </Stack>

            <Stack>
              <Label>Phone Number</Label>
              <TextInput
                placeholder="Enter Your Phone Number"
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                disabled={isWorking}
              />
              {errors.phone && (
                <Typography color="red">{errors.phone.message}</Typography>
              )}
            </Stack>

            <Stack>
              <Label>City</Label>
              <TextInput
                placeholder="Enter Your City"
                {...register("city", { required: "City is required" })}
                disabled={isWorking}
              />
              {errors.city && (
                <Typography color="red">{errors.city.message}</Typography>
              )}
            </Stack>

            <Stack>
              <Label>Email Address</Label>
              <TextInput
                placeholder="Enter Your Email Address"
                type="email"
                {...register("email", {
                  required: "Email address is required",
                })}
                disabled={isWorking}
              />
              {errors.email && (
                <Typography color="red">{errors.email.message}</Typography>
              )}
            </Stack>

            <Stack>
              <Label>Current Designation</Label>
              <TextInput
                placeholder="Enter Your Current Designation"
                {...register("designation", {
                  required: "Designation is required",
                })}
                disabled={isWorking}
              />
              {errors.designation && (
                <Typography color="red">
                  {errors.designation.message}
                </Typography>
              )}
            </Stack>

            <Stack>
              <Label>Total Experience</Label>
              <TextInput
                placeholder="Enter Your Total Experience"
                {...register("experience", {
                  required: "Experience is required",
                })}
                disabled={isWorking}
              />
              {errors.experience && (
                <Typography color="red">{errors.experience.message}</Typography>
              )}
            </Stack>

            <Stack>
              <Label>Current CTC</Label>
              <TextInput
                placeholder="Enter Your Current CTC"
                {...register("ctc", { required: "CTC is required" })}
                disabled={isWorking}
              />
              {errors.ctc && (
                <Typography color="red">{errors.ctc.message}</Typography>
              )}
            </Stack>

            <Stack>
              <FormRow label={"File"}>
                <FileInput
                  id="file"
                  type="file"
                  {...register("resume", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
            </Stack>

            <DarkGreenButton
              borderRadius="100px"
              type="submit"
              disabled={isWorking}
            >
              {isWorking ? "Submitting..." : "Submit"}
            </DarkGreenButton>
          </Stack>
        </Form>
      </ContainerMain>

      {/* Thank You Modal */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="thank-you-modal"
        aria-describedby="thank-you-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="thank-you-modal" variant="h6" component="h2">
            Thank You!
          </Typography>
          <Typography id="thank-you-modal-description" sx={{ mt: 2 }}>
            Thank you for your application. Our HR team will contact you
            shortly.
          </Typography>
          <DarkGreenButton sx={{ mt: 3 }} onClick={() => setShowModal(false)}>
            Close
          </DarkGreenButton>
        </Box>
      </Modal>
    </>
  );
}
