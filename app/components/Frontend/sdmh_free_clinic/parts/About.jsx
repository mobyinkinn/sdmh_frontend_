import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import oldMan from "./assets/oldMan.png";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import Image from "next/image";
import { Stack } from "@mui/material";

export default function About() {
  return (
    <ContainerMain flexDirection={{ lg: "row", sm: "column-reverse" }}>
      <Stack
        position="relative"
        height={"40vh"}
        width={{ lg: "40%", sm: "100%" }}
      >
        <Image
          src={oldMan}
          alt=""
          fill
          objectFit="contain"
          objectPosition="center center"
        />
      </Stack>
      <Stack
        width={{ lg: "60%", sm: "100%" }}
        gap={"10px"}
        alignItems={"center"}
      >
        <Head1
          textAlign="left"
          color="black"
          fontSize={{ lg: "1.8rem", sm: "1.2rem" }}
        >
          About SDMH Free Clinic
        </Head1>
        <ParaNormalSmall textAlign={"center"} width={"90%"}>
          SDMH recently initiated Free OPD Clinic in its campus for
          underprivileged people of the society whereby not only OPD
          consultation is provided for free but basic medications are also given
          to patients at no cost to them. The Free OPD has benefitted over
          10,000 patients since its inception in May, 2017. This is probably the
          only centre in the state whereby patient has a choice to opt for free
          consultation just beside a paid counter.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          The service has been a great support to patients who could not afford
          even the basic medication and SDMH though this initiative wishes to
          ensure that no patient is turned down due to their inability to pay.
        </ParaNormalSmall>
      </Stack>
    </ContainerMain>
  );
}
