"use client";

import { Head2, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import img from "./assests/doc.png";
import hoverImg from "./assests/docHover.png";
import {
  ButtonMediumOutline,
  ButtonSmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EventCard({ career }) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const extractDate = (isoString) => {
    return isoString.split("T")[0]; // Extracts only the date part
  };
  const dateOnly = extractDate(career.date);
  return (
    <Stack
      direction={{ md: "row", xs: "column" }}
      gap={"30px"}
      alignItems={"center"}
      width={{ md: "90vw", xs: "100vw" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        color: "black",
        padding: "30px 30px",
        borderRadius: "5px",
        cursor: "pointer",
        "&:hover": {
          color: "white",
          backgroundColor: "#476C9B",
        },
      }}
    >
      <Stack
        border={"1px solid lightgrey"}
        width={{ md: "30%", xs: "100%" }}
        height={{ md: "25vh", xs: "35vh" }}
        sx={{
          backgroundImage: `url(${hovered ? career.image : career.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          "& :hover": {
            backgroundImage: `url(${career.image})`,
          },
        }}
      ></Stack>
      <Stack gap={1} width={{lg:"70%", sm:"100%"}}>
        <ParaNormalSmall color="inherit">{career.tag}</ParaNormalSmall>
        <Head3 textAlign="left" color="inherit">
          {career.title}
        </Head3>
        <ParaNormalSmall color="inherit">
          {career.smallDescription}
        </ParaNormalSmall>
        <Stack direction={"row"} gap={{ md: 3, xs: 1 }}>
          <ButtonSmallOutline
            color={hovered ? "white" : "#476C9B"}
            hoverColor="#476C9B"
          >
            {dateOnly}
          </ButtonSmallOutline>
          <ButtonSmallOutline
            onClick={() => router.push(`/event/${career._id}`)}
            color={hovered ? "white" : "#476C9B"}
            hoverColor="#476C9B"
          >
            View Event details
          </ButtonSmallOutline>
        </Stack>
      </Stack>
    </Stack>
  );
}
