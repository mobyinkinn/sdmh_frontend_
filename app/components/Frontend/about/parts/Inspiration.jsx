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
      <Head1 color="black" fontSize={{ sm: "1.5rem" }}>
        Inspiration
      </Head1>
      <Head3
        width={{ md: "100%", sm: "95%" }}
        margin="0 auto"
        color="#486c9c"
        fontSize={{ sm: "1.2rem" }}
      >
        Behind Santokba Durlabhji Memorial Hospital
      </Head3>
      <ParaNormal width="80%" margin="0 auto" textAlign="center">
        Sdmh Is A Private, Trust-managed, Autonomous, Fee-for-services And
        Not-for-profit Hospital. It Is A Multidisciplinary, 525-bed, Tertiary
        Care Hospital. It Houses Several Wards, Operation Theatres, Icus,
        Laboratories, Utility Services, Specialties And Super Specialties,
        Including One Of The Best Blood Banks In The Country, Catering To The
        Entire State Of Rajasthan And To Neighbouring States As Well.
      </ParaNormal>
      <Stack
        direction={{ md: "row" }}
        justifyContent={"center"}
        gap={{ md: "100px", xs: "30px" }}
      >
        <Stack alignItems={"center"} position={"relative"}>
          <Box
            width={160}
            height={320}
            backgroundColor="#476C9B"
            display={{ md: "block", xs: "none" }}
            sx={{
              position: "absolute",
              top: -10,
              left: -10,
              zIndex: 1,
            }}
          ></Box>
          <Box
            padding={{ xs: "7px", md: "0" }}
            backgroundColor={{ xs: "#476c9b", md: "transparent" }}
            borderRadius={"5px"}
            sx={{ zIndex: 10 }}
          >
            <Image
              src={woman}
              height={290}
              width={290}
              alt=""
              style={{
                cursor: "pointer",
                filter: `grayscale(${grayWoman})`,
                zIndex: 10,
              }}
              onMouseEnter={() => setGrayWoman(0)}
              onMouseLeave={() => setGrayWoman(1)}
            />
          </Box>
          <Typography
            fontWeight={"bold"}
            marginTop={{ md: "30px", xs: "15px" }}
          >
            Late Smt. Santokba
          </Typography>
          <Typography
            textAlign={{ xs: "center", md: "left" }}
            fontWeight={"bold"}
          >
            - The inspiration behind the SDMH
          </Typography>
        </Stack>

        <Stack position={"relative"} alignItems={"center"}>
          <Box
            width={160}
            height={320}
            backgroundColor="#476C9B"
            display={{ md: "block", xs: "none" }}
            sx={{
              position: "absolute",
              top: -10,
              right: -10,
              zIndex: 1,
            }}
          ></Box>
          <Box
            padding={{ xs: "7px", md: "0" }}
            sx={{ zIndex: 10 }}
            backgroundColor={{ xs: "#476c9b", md: "transparent" }}
            borderRadius={"5px"}
          >
            <Image
              src={man}
              height={290}
              width={290}
              alt=""
              style={{
                cursor: "pointer",
                zIndex: 10,
                filter: `grayscale(${grayMan})`,
              }}
              onMouseEnter={() => setGrayMan(0)}
              onMouseLeave={() => setGrayMan(1)}
            />
          </Box>
          <Typography
            fontWeight={"bold"}
            marginTop={{ md: "30px", xs: "15px" }}
          >
            Late Shree. Durlabhji Bhai
          </Typography>
          <Typography
            textAlign={{ xs: "center", md: "left" }}
            fontWeight={"bold"}
          >
            - The inspiration behind the SDMH
          </Typography>
        </Stack>
      </Stack>
    </ContainerMain>
  );
}
