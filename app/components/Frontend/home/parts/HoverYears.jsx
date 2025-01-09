"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import hoverbg from "../assets/hoverbg.png";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";

const HoverYears = () => {
  const [planetData, setPlanetData] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0); // Track hovered index

  // Years array
  const years = [
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
  ];

  // Responsibility data corresponding to years
  const responsibility = [
    {
      points: [
        { Year: "1998" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "1999" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "2000" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "2001" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "2002" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "2003" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "2004" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "2005" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "2006" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "2007" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "2008" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
    {
      points: [
        { Year: "2009" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
      ],
    },
  ];

  const clickUpArrow = () => {
    if (hoveredIndex > 0) {
      setPlanetData((index) => index - 1);
      setHoveredIndex((index) => index - 1);
    } else {
      setPlanetData(responsibility.length - 1);
      setHoveredIndex(responsibility.length - 1);
    }
  };
  const clickDownArrow = () => {
    if (hoveredIndex < responsibility.length - 1) {
      setPlanetData((index) => index + 1);
      setHoveredIndex((index) => index + 1);
    } else {
      setPlanetData(0);
      setHoveredIndex(0);
    }
  };

  return (
    <ContainerMain bgColor={"#476C9B"}>
      <Typography
        color="#FFFFFF"
        fontSize={{ xs: "20px", smm: "40px", md: "55px" }}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        SDMH Through These Years
      </Typography>
      <Typography
        color="#FFFFFF"
        textAlign={"center"}
        fontSize={{ xs: "15px", smm: "22px", md: "30px" }}
      >
        50 Years of Care & Compassion
      </Typography>
      <Stack
        padding={{ xs: "10px 0px", smm: "40px 80px" }}
        direction={{ xs: "column", md: "row" }}
      >
        <Stack
          gap={{ md: "20px", xs: "10px" }}
          width={{ xs: "100%", md: "40%" }}
          height={{ md: "85vh", xs: "70vh" }}
          paddingLeft={"20px"}
          sx={{
            cursor: "pointer",
            backgroundImage: `url(${hoverbg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            justifyContent: "center",
          }}
        >
          <TfiArrowCircleUp
            color="white"
            style={{
              width: { md: "22px", xs: "10px" },
              height: { md: "22px", xs: "10px" },
            }}
            onClick={clickUpArrow}
          />
          {years.map((year, index) => (
            <Stack
              key={index}
              direction={"row"}
              alignItems={"center"}
              gap={{ md: "10px", xs: "8px" }}
              onClick={() => {
                setPlanetData(index);
                setHoveredIndex(index);
              }}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: hoveredIndex === index ? "22px" : "15px", // Adjusted for better visibility
                  height: hoveredIndex === index ? "22px" : "15px",
                  borderRadius: "100%",
                  border: "2px solid white",
                  backgroundColor: "transparent",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Box
                  sx={{
                    width: "15px", // Adjusted for better visibility
                    height: "15px",
                    borderRadius: "100%",
                    bgcolor: "#fff",
                  }}
                />
              </Stack>
              <Box
                sx={{
                  cursor: "pointer",
                  fontWeight: planetData === index ? "bold" : "normal",
                  color: "white",
                }}
              >
                {year}
              </Box>
            </Stack>
          ))}
          <TfiArrowCircleDown
            color="white"
            style={{ width: "22px", height: "22px" }}
            onClick={clickDownArrow}
          />
        </Stack>
        <Stack
          width={{ xs: "100%", md: "60%" }}
          gap={"20px"}
          padding={5}
          bgcolor={"#FBF6EE"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
        >
          {responsibility[planetData].points.map((el, i) => (
            <Stack key={i}>
              <Typography
                fontWeight={"bold"}
                fontSize={{ xs: "30px", smm: "50px", md: "80px", lg: "100px" }}
              >
                {el.Year}
              </Typography>
              <Typography fontWeight={"bold"}>{el.Title}</Typography>
              <Typography>{el.Desc}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </ContainerMain>
  );
};

export default HoverYears;
