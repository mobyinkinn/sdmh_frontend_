"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import man from "./assets/man.jpg";
import woman from "./assets/woman.jpg";
import { useState } from "react";

export default function Inspiration() {
  const [grayMan, setGrayMan] = useState(1);
  const [grayWoman, setGrayWoman] = useState(1);
  return (
    <ContainerMain bgColor="#D2E4D8" id="inspiration" alignItems={"center"}>
      <Head1 color="black">Inspiration</Head1>
      <Head3 color="black">Behind Santokba Durlabhji Memorial Hospital</Head3>
      <ParaNormal width="80%" margin="0 auto" textAlign="center">
        Sdmh Is A Private, Trust-managed, Autonomous, Fee-for-services And
        Not-for-profit Hospital. It Is A Multidisciplinary, 525-bed, Tertiary
        Care Hospital. It Houses Several Wards, Operation Theatres, Icus,
        Laboratories, Utility Services, Specialties And Super Specialties,
        Including One Of The Best Blood Banks In The Country, Catering To The
        Entire State Of Rajasthan And To Neighbouring States As Well.
      </ParaNormal>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        gap={"100px"}
        marginTop={"50px"}
      >
        <Stack alignItems={"center"} position={"relative"}>
          <Box
            width={160}
            height={320}
            backgroundColor="#476C9B"
            sx={{
              position: "absolute",
              top: -10,
              left: -10,
              zIndex: 1,
            }}
          ></Box>
          <Image
            src={woman}
            height={300}
            width={300}
            alt=""
            style={{
              cursor: "pointer",
              filter: `grayscale(${grayWoman})`,
              zIndex: 10,
            }}
            onMouseEnter={() => setGrayWoman(0)}
            onMouseLeave={() => setGrayWoman(1)}
          />
          <Typography fontWeight={"bold"} marginTop={"30px"}>
            Late Smt. Santokba
          </Typography>
          <Typography fontWeight={"bold"}>
            - The inspiration behind the SDMH
          </Typography>
        </Stack>

        <Stack position={"relative"} alignItems={"center"}>
          <Box
            width={160}
            height={320}
            backgroundColor="#476C9B"
            sx={{
              position: "absolute",
              top: -10,
              right: -10,
              zIndex: 1,
            }}
          ></Box>
          <Image
            src={man}
            height={300}
            width={300}
            alt=""
            style={{
              cursor: "pointer",
              zIndex: 10,
              filter: `grayscale(${grayMan})`,
            }}
            onMouseEnter={() => setGrayMan(0)}
            onMouseLeave={() => setGrayMan(1)}
          />
          <Typography fontWeight={"bold"} marginTop={"30px"}>
            Late Shree. Durlabhji Bhai
          </Typography>
          <Typography fontWeight={"bold"}>
            - The inspiration behind the SDMH
          </Typography>
        </Stack>
      </Stack>
    </ContainerMain>
  );
}
