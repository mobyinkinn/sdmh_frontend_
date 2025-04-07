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
import FileInput from "./FileInput";
import Spinner from "@/app/components/ui/Spinner";
import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";
import FormRow from "@/app/components/ui/FormRow";

const Enquire_Now = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { isCreating, createOpinions } = useCreateOpinion();
  const isWorking = isCreating;
  if (isCreating) return <Spinner />;
  const {
    data: departmentData,
    isLoading: isDepartmentLoading,
    error,
  } = useDepartment();
  function onSubmit(data) {
    const file = typeof data.file === "string" ? data.file : data.file[0];
    // const formData = {
    //   name: data.name,
    //   phone: data.phone,
    //   email: data.email,
    //   speciality: data.speciality,
    //   file: data.file,
    // };
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("phone", data.phone);
    formdata.append("email", data.email);
    formdata.append("speciality", data.speciality);
    formdata.append("file", file);
    createOpinions(formdata, {
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
            GET A SECOND OPINION
          </Head1>
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
                <Label>Patient's Full Name</Label>
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
                <Label>Attendent's Full Name</Label>
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
              <Stack direction={"column"}>
                <Label style={{ width: "100%" }}>
                  Speciality to seek second opinion form
                </Label>
                <select
                  style={{
                    border: "1px solid rgba(45, 45, 45, 0.2)",
                    borderRadius: "100px",
                    fontSize: "1rem",
                    padding:"15px 30px",
                    border: "1px solid lightgray",
                    bgColor:"white"
                  }}
                  id="department"
                  {...register("speciality", {
                    required: "speciality is required",
                  })}
                >
                  <option value="">Select a department</option>
                  {departmentData?.map((department, index) => (
                    <option key={index} value={department._id}>
                      {department.name}
                    </option>
                  ))}
                </select>
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
                <Label>Upload Prescription</Label>
                <FileInput
                  placeholder="Upload file"
                  type="file"
                  {...register("file", {
                    required: "File is required",
                  })}
                  disabled={isWorking}
                />
              </Stack>
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
