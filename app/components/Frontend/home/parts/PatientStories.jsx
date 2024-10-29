import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Box, Typography } from "@mui/material";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

import img1 from "../assets/stories/img1.png";
import img2 from "../assets/stories/img2.png";
import img3 from "../assets/stories/img3.png";
import img4 from "../assets/stories/img4.png";

export default function PatientStories() {
  return (
    <ContainerMain marginTop={"40px"}>
      <Head1>Patient Stories</Head1>

      <Stack
        direction={"row"}
        height={"70vh"}
        gap={"20px"}
        alignItems={"center"}
        justifyContent={"center"}
        marginTop={"50px"}
      >
        <Stack
          width={"17%"}
          height={"40vh"}
          sx={{
            backgroundImage: `url(${img3.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "20px",
          }}
        ></Stack>
        <Stack gap={"20px"} width={"17%"} height={"70vh"}>
          <Stack
            height={"40vh"}
            sx={{
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "20px",
            }}
          ></Stack>
          <Stack
            height={"40vh"}
            sx={{
              backgroundImage: `url(${img2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "20px",
            }}
          ></Stack>
        </Stack>
        <Stack
          width={"17%"}
          height={"70vh"}
          sx={{
            backgroundImage: `url(${img4.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "20px",
          }}
        ></Stack>
        <Stack gap={"20px"} width={"17%"} height={"70vh"}>
          <Stack
            height={"40vh"}
            sx={{
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "20px",
            }}
          ></Stack>
          <Stack
            height={"40vh"}
            sx={{
              backgroundImage: `url(${img2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "20px",
            }}
          ></Stack>
        </Stack>
        <Stack
          width={"17%"}
          height={"40vh"}
          sx={{
            backgroundImage: `url(${img3.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "20px",
          }}
        ></Stack>
      </Stack>
    </ContainerMain>
  );
}
