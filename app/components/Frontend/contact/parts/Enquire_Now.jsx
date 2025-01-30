"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Modal, Stack, Typography } from "@mui/material";
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
import { useCreateEnquiry } from "@/app/components/admin/enquiries/parts/useEnquiry";

const Enquire_Now = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { isCreating, createEnquiries } = useCreateEnquiry();
  const isWorking = isCreating;

  function onSubmit(data) {
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      date: new Date().toISOString().split("T")[0],
    };
    createEnquiries(formData, {
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
      <ContainerMain
        bgColor={"#F9F9F9"}
        gap={"70px"}
        flexDirection={{ sm: "column", smm: "column", md: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack width={{ sm: "100%", lg: "45%" }} gap={2} alignItems={"center"}>
          <Head1
            color="#000000"
            textAlign={{
              sm: "center",
              smm: "center",
              md: "start",
              lg: "start",
            }}
          >
            Enquire Now
          </Head1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              marginTop={"20px"}
              padding={{ xs: "20px", md: "30px" }}
              border={"1px solid rgba(45, 45, 45, 0.2)"}
              borderRadius={"30px"}
              gap={2}
              backgroundColor={"white"}
              width={{ xs: "55vh", md: "95vh", lg: "135vh" }}
            >
              <Stack>
                <Label>Full Name</Label>
                <TextInput
                  bgColor={"white"}
                  padding={{
                    xs: "6px 15px",
                    sm: "10px 25px",
                    smm: "10px 25px",
                    md: "10px 25px",
                    lg: "15px 30px",
                  }}
                  placeholder="Enter Your Full Name"
                  {...register("name", { required: "Full name is required" })}
                  disabled={isWorking}
                />

                {errors.name && (
                  <Typography color="red">{errors.name.message}</Typography>
                )}
              </Stack>
              <Stack>
                <Label>Phone No.</Label>
                <TextInput
                  padding={{
                    xs: "6px 15px",
                    sm: "10px 25px",
                    smm: "10px 25px",
                    md: "10px 25px",
                    lg: "15px 30px",
                  }}
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  disabled={isWorking}
                  placeholder="Enter Your Phone Number"
                  bgColor={"white"}
                />
                {errors.phone && (
                  <Typography color="red">{errors.phone.message}</Typography>
                )}
              </Stack>
              <Stack>
                <Label>Email ID</Label>
                <TextInput
                  padding={{
                    xs: "6px 15px",
                    sm: "10px 25px",
                    smm: "10px 25px",
                    md: "10px 25px",
                    lg: "15px 30px",
                  }}
                  placeholder="Enter Your Email Address"
                  bgColor={"white"}
                  type="email"
                  {...register("email", {
                    required: "Email address is required",
                  })}
                  disabled={isWorking}
                />
              </Stack>
              <Stack>
                <Label>Message</Label>
                <TextArea
                  padding={{
                    xs: "6px 15px",
                    sm: "10px 25px",
                    smm: "10px 25px",
                    md: "10px 25px",
                    lg: "15px 30px",
                  }}
                  placeholder="Type Here"
                  rows={7}
                  bgColor={"white"}
                  {...register("message", {
                    required: "Message is required",
                  })}
                  disabled={isWorking}
                />
              </Stack>
              {/* <Label>Captcha</Label>
              <Stack
                marginBottom={"20px"}
                direction={"row"}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <TextInput
                  placeholder="Enter Your Captcha Code"
                  bgColor={"white"}
                  width={"70%"}
                />
                <ButtonMediumOutline color="green">Captcha</ButtonMediumOutline>
              </Stack> */}
              <Stack alignItems={{ xs: "center", lg: "start" }}>
                <DarkGreenButton bgColor={"#379237"} borderRadius={"100px"}>
                  Submit
                </DarkGreenButton>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </ContainerMain>
    </>
  );
};

export default Enquire_Now;
