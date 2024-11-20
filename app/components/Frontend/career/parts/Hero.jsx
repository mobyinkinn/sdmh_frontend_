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
    <ContainerMain bgColor="#D2E4D8" dir="row" alignItems={"center"}>
      <Stack
        gap={"10px"}
        width={"60%"}
        height={"70vh"}
        justifyContent={"center"}
        paddingLeft={"40px"}
      >
        <Head1 color="#476C9B" textAlign="left">
          Transforming Healthcare
        </Head1>
        <Head1 color="#476C9B" textAlign="left">
          Transforming Lives
        </Head1>
        <ParaNormal>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </ParaNormal>
        <ButtonMediumOutline color="#005900" padding="15px 80px">
          Explore Jobs
        </ButtonMediumOutline>
      </Stack>
      <Stack width={"40%"} height={"50vh"} position={"relative"}>
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
