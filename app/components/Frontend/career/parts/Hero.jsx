import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import {
  Head1,
  Head2,
  Head3,
  Head4,
} from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import Image from "next/image";
import banner from "./assets/bannerImage.png";

export default function Hero(params) {
  return (
    <ContainerMain
      bgColor="#D2E4D8"
      flexDirection={{ md: "row", sm: "column-reverse", smm: "column-reverse" }}
      alignItems={"center"}
    >
      <Stack
        gap={"10px"}
        width={{ md: "60%" }}
        height={{ md: "70vh" }}
        justifyContent={"center"}
        alignItems={{ xs: "center", md: "none" }}
        paddingLeft={{ md: "40px" }}
      >
        <Head1
          color="#476C9B"
          textAlign={{ lg: "left", md: "left", sm: "center", smm: "center" }}
        >
          Transforming Healthcare
        </Head1>
        <Head1
          color="#476C9B"
          textAlign={{ lg: "left", md: "left", sm: "center", smm: "center" }}
        >
          Transforming Lives
        </Head1>
        <ParaNormal textAlign={{ lg: "left", sm: "center", smm: "center" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </ParaNormal>
        <ButtonMediumOutline color="#005900" padding="15px 80px">
          Explore Jobs
        </ButtonMediumOutline>
      </Stack>
      <Stack
        width={{ md: "40%", xs: "100%" }}
        height={"50vh"}
        position={"relative"}
      >
        <Image
          src={banner}
          fill
          objectFit="contain"
          objectPosition="center center"
        />
      </Stack>
    </ContainerMain>
  );
}
