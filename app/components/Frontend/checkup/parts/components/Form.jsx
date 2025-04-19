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
import { useCreateOpinion } from "@/app/components/admin/opinions/useOpinions";
import Spinner from "@/app/components/ui/Spinner";
import Navbar from "../../../navbar/Nav";
import Footer from "../../../footer/Footer";
import MobileFooter from "../../../footer/MobileFooter";
import { useCreateCheckup } from "@/app/components/admin/checkupform/useCheckForm";
import { useSearchParams } from "next/navigation";

const CheckupForm = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { isCreating, createCheckups } = useCreateCheckup();
  const searchParams = useSearchParams();
  const planname = searchParams.get("planname") || "";

  const isWorking = isCreating;
  if (isCreating) return <Spinner />;
  function onSubmit(data) {
    const formdata = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      text: data.text,
      planname: planname, 
    };

    createCheckups(formdata, {
      onSuccess: () => {
        reset();
        setShowModal(true);
      },
      onError: (error) => {
        console.error("Failed to submit opinion:", error);
      },
    });
  }
  return (
    <>
      <Navbar />
      <ContainerMain
        bgColor={"#F9F9F9"}
        gap={"70px"}
        flexDirection={{ sm: "column", smm: "column", md: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack width={{ sm: "100%", lg: "60%" }} gap={2} alignItems={"center"}>
          <Head1
            color="#486c9c"
            textAlign={{
              sm: "center",
              smm: "center",
              md: "start",
              lg: "start",
            }}
          >
            Book A Health Check Up
          </Head1>
          <Stack>
            <Typography fontWeight="bold" color="#005900">
              {planname}
            </Typography>
          </Stack>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              marginTop={"20px"}
              padding={{ xs: "20px", md: "30px" }}
              border={"1px solid rgba(45, 45, 45, 0.2)"}
              borderRadius={"30px"}
              gap={2}
              backgroundColor={"white"}
              width={{ xs: "95vw", smm: "90vw", md: "95vh", lg: "135vh" }}
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
              {/* <Stack>
                <Label style={{ width: "100%" }}>
                  Speciality to seek second opinion form
                </Label>
                <TextInput
                  padding={{
                    xs: "6px 15px",
                    sm: "10px 25px",
                    smm: "10px 25px",
                    md: "10px 25px",
                    lg: "15px 30px",
                  }}
                  placeholder="Enter Your Speciality"
                  bgColor={"white"}
                  type="text"
                  {...register("speciality", {
                    required: "Speciality is required",
                  })}
                  disabled={isWorking}
                />
              </Stack> */}

              <Stack>
                <Label>Mention Your Queries</Label>
                <TextArea
                  padding={{
                    xs: "6px 15px",
                    sm: "10px 25px",
                    smm: "10px 25px",
                    md: "10px 25px",
                    lg: "15px 30px",
                  }}
                  placeholder="Type Here"
                  rows={4}
                  bgColor={"white"}
                  {...register("text", {
                    required: "text is required",
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
                <DarkGreenButton
                  bgColor={"#379237"}
                  borderRadius={"100px"}
                  padding={"9px 35px"}
                >
                  Submit
                </DarkGreenButton>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </ContainerMain>
      <Footer />
      <MobileFooter />
    </>
  );
};

export default CheckupForm;
