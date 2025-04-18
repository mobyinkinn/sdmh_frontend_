"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head2, Head3 } from "@/app/styledComponents/frontend/Headings";
import { Box, Modal, Stack, Typography } from "@mui/material";

import mail from "../assets/icons/mail.png";
import phone from "../assets/icons/phone.png";
import map from "../assets/icons/map.png";
import Image from "next/image";

import locationMap from "../assets/map.png";
import {
  Label,
  TextArea,
  TextInput,
} from "@/app/styledComponents/frontend/Inputs";
import {
  ButtonMediumOutline,
  DarkGreenButton,
  DarkGreenButtonSmall,
} from "@/app/styledComponents/frontend/Buttons";
import { useForm } from "react-hook-form";
import { useCreateEnquiry } from "@/app/components/admin/enquiries/parts/useEnquiry";
import { useState } from "react";

const address = [
  {
    id: 0,
    data: "Bhawani Singh Marg, Near Rambagh circle, Jaipur-302015 (Rajasthan), INDIA",
    img: map,
  },
  { id: 1, data: "0141 352 4444", img: phone },
  { id: 2, data: "info@sdmh.in", img: mail },
];

export default function Enquire() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { isCreating, createEnquiries } = useCreateEnquiry(); // Replace with career-related API hook
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

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
        bgColor={"#D8E0EB"}
        justifyContent={"space-between"}
        gap={"70px"}
        flexDirection={{ sm: "column", smm: "column", md: "column", lg: "row" }}
      >
        <Stack
          width={{ sm: "100%", lg: "45%" }}
          gap={2}
          // alignItems={{ xs: "center", md: "left" }}
        >
          <Head1
            fontSize={{ sm: "1.5rem" }}
            color="#005900"
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
            >
              <Stack>
                <Label>Full Name</Label>
                <TextInput
                  bgColor={"#EFF3F8"}
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
                  bgColor={"#EFF3F8"}
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
                  bgColor={"#EFF3F8"}
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
                padding={{sm:"20px"}}
                  placeholder="Message"
                  rows={7}
                  bgColor={"#EFF3F8"}
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
                bgColor={"#EFF3F8"}
                width={"70%"}
              />
              <ButtonMediumOutline color="green">Captcha</ButtonMediumOutline>
            </Stack> */}
              <DarkGreenButton bgColor={"#379237"} borderRadius={"100px"}>
                Submit
              </DarkGreenButton>
            </Stack>
          </form>
        </Stack>
        <Stack width={{ sm: "100%", lg: "45%" }} gap={"15px"}>
          <Head1
            color="#005900"
            textAlign={{
              sm: "center",
              smm: "center",
              md: "start",
              lg: "start",
            }}
          >
            How To Reach
          </Head1>
          <Typography fontWeight={"bold"}>
            Santokba Durlabhji Meorial Hospital
          </Typography>
          {address.map((el, i) => {
            return (
              <Stack
                key={i}
                direction={"row"}
                gap={"20px"}
                alignItems={"center"}
                marginBottom={"10px"}
              >
                <Image alt="" src={el.img} width={25} height={25} />
                <Typography>{el.data}</Typography>
              </Stack>
            );
          })}
          <Box
            sx={{
              backgroundImage: `url(${locationMap.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              width: "100%",
              height: "60vh",
              borderRadius: "10px",
            }}
          ></Box>
        </Stack>
      </ContainerMain>
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
