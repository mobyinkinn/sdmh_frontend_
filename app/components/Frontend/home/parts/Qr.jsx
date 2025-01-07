import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { IoIosSend } from "react-icons/io";

import qr from "../assets/icons/qr.png";
import {
  Head1,
  Head2,
  Head3,
  Head4,
} from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";
import { DarkGreenButton } from "@/app/styledComponents/frontend/Buttons";
import Image from "next/image";
import { SearchInput, TextInput } from "@/app/styledComponents/frontend/Inputs";

export default function Qr() {
  return (
    <ContainerMain
      flexDirection={{ lg: "row", xs: "column", sm: "column", smm: "column" }}
      bgColor={"#CEDDCC"}
    >
      <Stack
        width={{ md: "50%" }}
        gap={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          borderRight: { md: "3px solid #379237" },
        }}
      >
        <Head1 color="black">Join Newsletter</Head1>
        <Typography
          fontSize={{ md: "1.2rem", xs: "0.9rem" }}
          textAlign={"center"}
          width={{ md: "70%", xs: "90%" }}
        >
          The point of using Lorem Ipsum is that more-or-less normal
          distribution.
        </Typography>
        <TextInput
          bgColor={"#379237"}
          borderRadius={"100px"}
          width={"250px"}
          margin={"0 auto"}
          color="white"
          placeholderColor={"white"}
          placeholder="Enter Your Mail Id"
        />
      </Stack>
      <Stack
        width={{ md: "50%", xs: "100%" }}
        flexDirection="column-reverse"
        gap="15px"
        alignItems={"center"}
      >
        <Image src={qr} alt="" width={200} height={200} style={{}} />
        <Stack gap="5px">
          <Head4 color="black">Scan Qr</Head4>
          <Head1>Share Your Feedback</Head1>
        </Stack>
      </Stack>
    </ContainerMain>
  );
}
