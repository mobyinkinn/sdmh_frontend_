"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import hoverbg from "../assets/hoverbg.png";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { TfiArrowCircleDown } from "react-icons/tfi";

const HoverYears = () => {
  const [planetData, setPlanetData] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0); // Track hovered index

  // Years array
  const years = ["1998", "1999", "2000", "2001", "2002"];

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
    <Stack bgcolor={"#54B435"}>
      <Typography color="#FCF9C6" fontSize={"55px"} textAlign={"center"}>
        SDMH Through These Years
      </Typography>
      <Typography color="#FFFFFF" textAlign={"center"} fontSize={"25px"}>
        50 Years of Care & Compassion
      </Typography>
      <Stack padding={"40px 80px"} direction={"row"}>
        <Stack
          gap="20px"
          width={"40%"}
          height={"85vh"}
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
            style={{ width: "22px", height: "22px" }}
            onClick={clickUpArrow}
          />
          {years.map((year, index) => (
            <Stack
              key={index}
              direction={"row"}
              alignItems={"center"}
              gap={"10px"}
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
          width={"60%"}
          gap={"20px"}
          padding={5}
          bgcolor={"#FBF6EE"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
        >
          {responsibility[planetData].points.map((el, i) => (
            <Stack key={i}>
              <Typography fontWeight={"bold"} fontSize={"100px"}>
                {el.Year}
              </Typography>
              <Typography>{el.Title}</Typography>
              <Typography>{el.Desc}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HoverYears;
