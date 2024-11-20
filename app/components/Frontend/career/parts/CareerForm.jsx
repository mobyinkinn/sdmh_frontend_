"use client";

import {
  ButtonMediumOutline,
  DarkGreenButton,
} from "@/app/styledComponents/frontend/Buttons";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head3 } from "@/app/styledComponents/frontend/Headings";
import { Label, TextInput } from "@/app/styledComponents/frontend/Inputs";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";
import uploadIcon from "./assets/uploadIcon.png";
import Image from "next/image";

export default function CareerForm() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("Choose file");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    setFileName(file.name);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <ContainerMain bgColor="#FFFFFB" alignItems="center">
      <Stack direction={"row"}>
        <Head3 color="black">Apply for&nbsp;</Head3>
        <Head3 color="#007946">Nurse Educator - Ward - SN 01</Head3>
      </Stack>
      <ParaNormal width={"60%"} textAlign="center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </ParaNormal>
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
          <TextInput placeholder="Enter Your Full Name" />
        </Stack>
        <Stack>
          <Label>Phone Number</Label>
          <TextInput placeholder="Enter Your Phone Number" />
        </Stack>
        <Stack>
          <Label>Email Address</Label>
          <TextInput placeholder="Enter Your Enter Your Email Address" />
        </Stack>
        <Stack>
          <Label>City</Label>
          <TextInput placeholder="Enter Your City" />
        </Stack>
        <Stack>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <Label>Upload resume</Label>
          <ButtonMediumOutline
            width="100%"
            color="#d2d2d2"
            onClick={handleIconClick}
          >
            <Image src={uploadIcon} height={24} width={36} alt="" />
            <Typography color="#476C9B">{fileName}</Typography>
          </ButtonMediumOutline>
          {/* <TextInput placeholder="" type="file" /> */}
        </Stack>
        <Stack>
          <Label>Captcha</Label>
          <Stack
            marginBottom={"20px"}
            direction={"row"}
            width={"100%"}
            gap={"20px"}
            justifyContent={"space-between"}
          >
            <TextInput placeholder="Enter Captcha" width={"70%"} />
            <DarkGreenButton borderRadius="100px" bgColor="black">
              Captcha
            </DarkGreenButton>
          </Stack>
        </Stack>
        <DarkGreenButton borderRadius="100px">Submit</DarkGreenButton>
      </Stack>
    </ContainerMain>
  );
}
