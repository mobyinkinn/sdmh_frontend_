"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import hoverbg from "../assets/hoverbg.png";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import img1 from "../assets/HoverYears/1958.png"
import img2 from "../assets/HoverYears/1963.png";
import img3 from "../assets/HoverYears/1969.png";
import img4 from "../assets/HoverYears/1971.png";

import Image from "next/image";
const HoverYears = () => {
  const [planetData, setPlanetData] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0); // Track hovered index

  // Years array
  const years = [
    "1958",
    "1963",
    "1969",
    "1971",
    "1976",
    "1985",
    "1996",
    "2008",
    "2011",
    "2014",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  // Responsibility data corresponding to years
  const responsibility = [
    {
      points: [
        { Year: "1958" },
        { Title: "Santokba Durlabhji Trust Created" },
        {
          Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai ",
        },
        { img: img1 },
      ],
    },
    {
      points: [
        { Year: "1963" },
        { Title: "Santokba Durlabhji Diagnostic Clinic established" },
        {
          Desc: "As the modest beginning, a diagnostic clinic was established in front of SMS Hospital.",
        },
        { img: img2 },
      ],
    },
    {
      points: [
        { Year: "1969" },
        { Title: "Nursing Home started for three specialities" },
        {
          Desc: "The trust started a Nursing Home with only three specialties.",
        },
        { img: img3 },
      ],
    },
    {
      points: [
        { Year: "1971" },
        { Title: "Santoka Durlabhji Memorial Hospital started" },
        {
          Desc: "Santokba Durlabhji Memorial Hospital, the institute that redefined healthcare in Rajasthan was inaugurated with only six specialties and 70 beds by then Prime Minister Smt. Indira Gandhi.",
        },
        { img: img4 },
      ],
    },
    {
      points: [
        { Year: "1976" },
        { Title: "Nursing School founded" },
        {
          Desc: "Santokba Durlabhji School of Nursing was founded to train Florence Nightingales of future. The school helped provide quality Nursing Care in the hospital.",
        },
      ],
    },
    {
      points: [
        { Year: "1985" },
        { Title: "Rehabilitation Aids and Limb Fitting Centre Founded" },
        {
          Desc: "The Department of Rehabilitation Aids and Limb Fitting Centre was founded in SDMH by Dr. P. K. Sethi, the founder of Jaipur Foot.",
        },
      ],
    },
    {
      points: [
        { Year: "1996" },
        { Title: "Avedna Ashram started" },
        {
          Desc: "One of the few hospices in the country, Avedna Ashram was started in SDMH to help provide free care and accommodation to the terminally ill",
        },
      ],
    },
    {
      points: [
        { Year: "2008" },
        { Title: "NABL Accreditation" },
        {
          Desc: "2008 – NABL Accreditation SDMH Laboratories were among the first to be recognized by NABL for it high standards.",
        },
      ],
    },
    {
      points: [
        { Year: "2011" },
        { Title: "Inauguration of RDMC" },
        {
          Desc: "The only dedicated OPD building of the state, Rashmikant Durlabhji Medi Centre, was started.",
        },
      ],
    },
    {
      points: [
        { Year: "2014" },
        { Title: "NABH Accreditation" },
        {
          Desc: "The hospital received NABH Accreditation, an accreditation provided by Quality Council of India certifying the adherence to standard protocols for quality care to patients.",
        },
      ],
    },
    {
      points: [
        { Year: "2016" },
        { Title: "New Emergency" },
        {
          Desc: "SDMH started its new Emergency Wing with an enhanced number of beds and improve infrastructure to cater to any medical emergency.",
        },
      ],
    },
    {
      points: [
        { Year: "2017" },
        { Title: "Free OPD Clinic" },
        {
          Desc: "In addition to the Outreach Services, SDMH also started Free OPD Clinic, one of the very few clinics in the state to provide quality medical service to the weaker section of society at no cost to them",
        },
      ],
    },
    {
      points: [
        { Year: "2018" },
        { Title: "Inauguration of Nursing College" },
        {
          Desc: "SDMH inaugurated its new offering to the state, Santokba Durlabhji College of Nursing and Paramedical Sciences to provide quality nursing and para-medical education.",
        },
      ],
    },
    {
      points: [
        { Year: "2019" },
        { Title: "Telemedicine" },
        {
          Desc: "SDMH has initiated the introduction of Telemedicine in different villages of the state, and also in neighboring states, so that the gap between rural and urban care is greatly reduced. Connect with doctors of SDMH digitally. Download SDMH Teleconsultation App from playstore. https://youtu.be/vX1_m9or5cs",
        },
      ],
    },
    {
      points: [
        { Year: "2020" },
        { Title: "" },
        {
          Desc: "SDMH, the biggest and oldest private hospital of the state, added another feather in its cap today when it introduced its own IPD pharmacy services named ‘SDMH Pharmacy’ on Ground, 3rd and 4th floor. The pharmacy services shall function 24 x7 to provide the quality medicine at reasonable prices. Bedside medicine delivery to admitted patients will provide comfort to patient’s attendants during the tough time.",
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
          gap={{ md: "13px", xs: "10px" }}
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
          gap={"12px"}
          padding={"40px 40px 10px 40px"}
          bgcolor={"#FBF6EE"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
        >
          {responsibility[planetData].points.map((el, i) => (
            <Stack key={i}>
              <Typography
                fontWeight={"bold"}
                fontSize={{
                  xs: "30px",
                  smm: "50px",
                  md: "80px",
                  lg: "100px",
                }}
              >
                {el.Year}
              </Typography>
              <Typography fontWeight={"bold"}>{el.Title}</Typography>
              <Typography>{el.Desc}</Typography>
              {el.img && (
                <Box mt={2}>
                  <Image
                    src={el.img}
                    alt={el.Title || "Image"}
                    width={350} // Adjust width as per design needs
                    height={250} // Adjust height as per design needs
                    objectFit="contain"
                  />
                </Box>
              )}
              {/* <Image src={el.img} alt="" fill objectFit="contain" /> */}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </ContainerMain>
  );
};

export default HoverYears;
