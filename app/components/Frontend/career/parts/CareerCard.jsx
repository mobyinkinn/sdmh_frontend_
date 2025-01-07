"use client";

import { Head4 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormalSmall } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import img from "./assets/doc.png";
import hoverImg from "./assets/docHover.png";
import {
  ButtonMediumOutline,
  ButtonSmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CareerCard({ career }) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
   const truncatedContent = career.jd.slice(0, 50);
  return (
    <Stack
      direction={"row"}
      gap={"30px"}
      alignItems={"center"}
      width={"80vw"}
      onClick={() => router.push(`/career/${career._id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        color: "black",
        padding: "30px 30px",
        borderRadius: "5px",
        border: "1px solid #476C9B",
        cursor: "pointer",
        "&:hover": {
          color: "white",
          backgroundColor: "#476C9B",
        },
      }}
    >
      <Stack
        width={"30%"}
        height={"25vh"}
        sx={{
          backgroundImage: `url(${hovered ? hoverImg.src : img.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          "& :hover": {
            backgroundImage: `url(${hoverImg.src})`,
          },
        }}
      ></Stack>
      <Stack gap={"5px"} width={"70%"}>
        <Head4 textAlign="left" color="inherit">
          {career.position}
        </Head4>
        {/* <ParaNormalSmall color="inherit">{career.jd}</ParaNormalSmall> */}
        <ParaNormalSmall
          color="inherit"
          dangerouslySetInnerHTML={{ __html: truncatedContent }}
        />
        <Stack direction={"row"} marginBottom={"20px"} gap={"40px"}>
          <ParaNormalSmall color="inherit">
            Seats: <b> {career.seats}</b>
          </ParaNormalSmall>
          <ParaNormalSmall color="inherit">
            Last Date:<b> {career.lastDate}</b>
          </ParaNormalSmall>
          <ParaNormalSmall color="inherit">
            Program coordinator:<b> {career.programmer}</b>
          </ParaNormalSmall>
        </Stack>
        <ButtonSmallOutline
          onClick={() => router.push(`/career/${career._id}`)}
          color={hovered ? "white" : "#476C9B"}
          hoverColor="#476C9B"
        >
          Apply Now
        </ButtonSmallOutline>
      </Stack>
    </Stack>
  );
}
