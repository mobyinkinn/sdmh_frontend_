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
      direction={{ md: "row" }}
      gap={"30px"}
      alignItems={"center"}
      width={{ md: "80vw", xs: "90vw" }}
      onClick={() => router.push(`/career/${career._id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        color: "black",
        padding: { md: "30px 30px", xs: "10px" },
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
        width={{ md: "30%", xs: "50%" }}
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
      <Stack gap={"5px"} width={{ md: "70%", xs: "90%" }}>
        <Head4
          textAlign={{ lg: "left", md: "left", smm: "center", sm: "center" }}
          color="inherit"
        >
          {career.position}
        </Head4>
        {/* <ParaNormalSmall color="inherit">{career.jd}</ParaNormalSmall> */}
        <ParaNormalSmall
          color="inherit"
          textAlign={{ lg: "left", md: "left", smm: "center", sm: "center" }}
          dangerouslySetInnerHTML={{ __html: truncatedContent }}
        />
        <Stack
          direction={{ md: "row" }}
          marginBottom={{ md: "20px", xs: "10px" }}
          gap={{ md: "40px", xs: "5px" }}
        >
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
