import { ContainerMain } from "@/app/styledComponents/frontend/Container";

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

export default function Qr() {
  return (
    <ContainerMain dir="row">
      <Stack
        width={"50%"}
        gap={"10px"}
        justifyContent={"center"}
        sx={{
          borderRight: "3px solid #379237",
        }}
      >
        <Head1 color="black">Join Newsletter</Head1>
        <Typography fontSize={"1.2rem"} textAlign={"center"}>
          The point of using Lorem Ipsum is that more-or-less normal
          distribution.
        </Typography>
        <DarkGreenButton
          bgColor={"#379237"}
          borderRadius={"100px"}
          margin={"0 auto"}
        >
          Enter Your Mail Id
        </DarkGreenButton>
      </Stack>
      <Stack width={"50%"} alignItems={"center"}>
        <Image src={qr} alt="" width={200} height={200} style={{}} />
        <Head4>Scan Qr</Head4>
        <Head1>Share Your Feedback</Head1>
      </Stack>
    </ContainerMain>
  );
}
