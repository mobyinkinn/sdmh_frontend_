// "use client";
// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { Box, Modal, Stack, Typography } from "@mui/material";
// import {
//   Label,
//   TextArea,
//   TextInput,
// } from "@/app/styledComponents/frontend/Inputs";
// import React from "react";
// import { useForm } from "react-hook-form";
// import {
//   ButtonMediumOutline,
//   DarkGreenButton,
// } from "@/app/styledComponents/frontend/Buttons";

// const Greet = () => {
//   const { register, handleSubmit, reset, formState } = useForm();
//   const { errors } = formState;
//   const isWorking = "";

//   function onSubmit(data) {
//     const formData = {
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       message: data.message,
//       date: new Date().toISOString().split("T")[0],
//     };
//   }
//   return (
//     <>
//       <ContainerMain
//         bgColor={"#F9F9F9"}
//         gap={"70px"}
//         flexDirection={{ sm: "column", smm: "column", md: "column", lg: "row" }}
//         alignItems={"center"}
//         justifyContent={"center"}
//       >
//         <Stack width={{ sm: "100%", lg: "45%" }} gap={2} alignItems={"center"}>
//           <Head1
//             color="#005900"
//             textAlign={{
//               sm: "center",
//               smm: "center",
//               md: "start",
//               lg: "start",
//             }}
//           >
//             Send a Greeting
//           </Head1>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <Stack
//               marginTop={"20px"}
//               padding={{ xs: "20px", md: "30px" }}
//               border={"1px solid rgba(45, 45, 45, 0.2)"}
//               borderRadius={"30px"}
//               gap={2}
//               backgroundColor={"white"}
//             >
//               <Stack>
//                 <Label>Full Name</Label>
//                 <TextInput
//                   bgColor={"#EFF3F8"}
//                   padding={{
//                     xs: "6px 15px",
//                     sm: "10px 25px",
//                     smm: "10px 25px",
//                     md: "10px 25px",
//                     lg: "15px 30px",
//                   }}
//                   placeholder="Enter Your Full Name"
//                   {...register("name", { required: "Full name is required" })}
//                   disabled={isWorking}
//                 />

//                 {errors.name && (
//                   <Typography color="red">{errors.name.message}</Typography>
//                 )}
//               </Stack>
//               <Stack>
//                 <Label>Phone No.</Label>
//                 <TextInput
//                   padding={{
//                     xs: "6px 15px",
//                     sm: "10px 25px",
//                     smm: "10px 25px",
//                     md: "10px 25px",
//                     lg: "15px 30px",
//                   }}
//                   type="tel"
//                   {...register("phone", {
//                     required: "Phone number is required",
//                   })}
//                   disabled={isWorking}
//                   placeholder="Enter Your Phone Number"
//                   bgColor={"#EFF3F8"}
//                 />
//                 {errors.phone && (
//                   <Typography color="red">{errors.phone.message}</Typography>
//                 )}
//               </Stack>
//               <Stack>
//                 <Label>Email ID</Label>
//                 <TextInput
//                   padding={{
//                     xs: "6px 15px",
//                     sm: "10px 25px",
//                     smm: "10px 25px",
//                     md: "10px 25px",
//                     lg: "15px 30px",
//                   }}
//                   placeholder="Enter Your Email Address"
//                   bgColor={"#EFF3F8"}
//                   type="email"
//                   {...register("email", {
//                     required: "Email address is required",
//                   })}
//                   disabled={isWorking}
//                 />
//               </Stack>
//               <Stack>
//                 <Label>Message</Label>
//                 <TextArea
//                   placeholder="Message"
//                   rows={7}
//                   bgColor={"#EFF3F8"}
//                   {...register("message", {
//                     required: "Message is required",
//                   })}
//                   disabled={isWorking}
//                 />
//               </Stack>
//               {/* <Label>Captcha</Label>
//               <Stack
//                 marginBottom={"20px"}
//                 direction={"row"}
//                 width={"100%"}
//                 justifyContent={"space-between"}
//               >
//                 <TextInput
//                   placeholder="Enter Your Captcha Code"
//                   bgColor={"#EFF3F8"}
//                   width={"70%"}
//                 />
//                 <ButtonMediumOutline color="green">Captcha</ButtonMediumOutline>
//               </Stack> */}
//               <DarkGreenButton bgColor={"#379237"} borderRadius={"100px"}>
//                 Submit
//               </DarkGreenButton>
//             </Stack>
//           </form>
//         </Stack>
//       </ContainerMain>
//     </>
//   );
// };

// export default Greet;
"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack, Typography } from "@mui/material";
import {
  Label,
  TextArea,
  TextInput,
} from "@/app/styledComponents/frontend/Inputs";
import React from "react";
import { useForm } from "react-hook-form";
import {
  ButtonMediumOutline,
  DarkGreenButton,
} from "@/app/styledComponents/frontend/Buttons";

const Greet = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const isWorking = "";

  function onSubmit(data) {
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      date: new Date().toISOString().split("T")[0],
    };
    console.log(formData);
  }

  return (
    <ContainerMain
      bgColor={"#F9F9F9"}
      gap={"40px"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      padding={{ xs: "20px", md: "60px" }}
    >
      <Stack width={{ xs: "100%", md: "100%", lg: "50%" }} gap={2}>
        <Head1
          color="#005900"
          textAlign={{ xs: "center", md: "start" }}
          fontSize={{ xs: "1.5rem", sm: "2rem", lg: "2.5rem" }}
        >
          Send a Greeting
        </Head1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            marginTop={"20px"}
            padding={{ xs: "20px", md: "30px" }}
            border={"1px solid rgba(45, 45, 45, 0.2)"}
            borderRadius={"30px"}
            gap={2}
            backgroundColor={"white"}
            width={{ xs: "100%", sm: "100%", md: "100%" }}
          >
            {/* Name */}
            <Stack>
              <Label>Full Name</Label>
              <TextInput
                bgColor={"#EFF3F8"}
                padding={{
                  sm: "7px 18px",
                  md: "15px 30px",
                }}
                placeholder="Enter Your Full Name"
                {...register("name", { required: "Full name is required" })}
                disabled={isWorking}
              />
              {errors.name && (
                <Typography color="red">{errors.name.message}</Typography>
              )}
            </Stack>

            {/* Phone */}
            <Stack>
              <Label>Phone No.</Label>
              <TextInput
                padding={{
                  sm: "7px 18px",
                  md: "15px 30px",
                }}
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                })}
                disabled={isWorking}
                placeholder="Enter Your Phone Number"
                bgColor={"#EFF3F8"}
              />
              {errors.phone && (
                <Typography color="red">{errors.phone.message}</Typography>
              )}
            </Stack>

            {/* Email */}
            <Stack>
              <Label>Email ID</Label>
              <TextInput
                padding={{
                  sm: "7px 18px",
                  md: "15px 30px",
                }}
                placeholder="Enter Your Email Address"
                bgColor={"#EFF3F8"}
                type="email"
                {...register("email", {
                  required: "Email address is required",
                })}
                disabled={isWorking}
              />
            </Stack>

            {/* Message */}
            <Stack>
              <Label>Message</Label>
              <TextArea
                placeholder="Message"
                rows={6}
                bgColor={"#EFF3F8"}
                {...register("message", {
                  required: "Message is required",
                })}
                disabled={isWorking}
              />
            </Stack>

            {/* Submit */}
            <DarkGreenButton
              bgColor={"#379237"}
              borderRadius={"100px"}
              width="fit-content"
              alignSelf={{ xs: "center", md: "flex-start" }}
            >
              Submit
            </DarkGreenButton>
          </Stack>
        </form>
      </Stack>
    </ContainerMain>
  );
};

export default Greet;
