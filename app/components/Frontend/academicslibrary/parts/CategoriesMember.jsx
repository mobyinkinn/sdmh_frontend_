"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import doctor from "../parts/assets/doctor.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const normalStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "white",
};

const hoverStyle = {
  ...normalStyle,
  color: "#ccc", // Change color on hover if needed
};

const CategoriesMember = () => {
  const data = [
    {
      img: doctor,
      title: "Doctor",
    },
    {
      img: doctor,
      title: "All other staff",
    },
    {
      img: doctor,
      title: "Special members ",
      subtitle: "(Non- employee medical outsiders)",
    },
  ];

  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const TwosliderRef = useRef(null);

  const sm_Settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Stack bgcolor={"#007946"} gap={1} position="relative">
      <Head1
        color="white"
        style={{ paddingTop: "10px" }}
        fontSize={{ sm: "1.3rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
      >
        Categories for membership
      </Head1>
      <ParaNormal
        color="white"
        style={{ textAlign: "center" }}
        fontSize={{ xs: "15px", smm: "17px", md: "20px", lg: "25px" }}
      >
        Library membership will be classified into 3 categories
      </ParaNormal>
      <Stack
        direction={"row"}
        gap={2}
        justifyContent={"center"}
        p={"30px 0"}
        display={{ xs: "none", md: "flex" }}
      >
        {data.map((d, i) => (
          <Stack
            key={i}
            width={"24%"}
            height={"50vh"}
            alignItems={"center"}
            sx={{
              backgroundImage: `url(${d.img.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            justifyContent={"center"}
            gap={"10px"}
          >
            <Stack
              bgcolor={"#4A4A4A99"}
              width={{ xs: "100%", lg: "100%", xl: "90%" }}
              height={{ xs: "67%", lg: "86%", xl: "100%" }}
              borderRadius={"10px"}
              justifyContent={"center"}
            >
              <Stack alignItems={"center"}>
                <Stack>
                  <Head1
                    color="white"
                    fontSize={{
                      xs: "15px",
                      smm: "20px",
                      md: "25px",
                      lg: "30px",
                    }}
                  >
                    {d.title}
                  </Head1>
                </Stack>
                <Stack alignItems="center">
                  {d.subtitle && (
                    <ParaNormal color="white">{d.subtitle}</ParaNormal>
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>

      {/* slider sm */}
      <Stack
        justifyContent={"center"}
        p={"30px 0"}
        gap={2}
        display={{ xs: "flex", md: "none" }}
        position="relative"
      >
        <Slider ref={TwosliderRef} {...sm_Settings}>
          {data.map((d, i) => (
            <SmSlider key={i} d={d} />
          ))}
        </Slider>

        <Stack
          direction="row"
          gap="10px"
          position="absolute"
          bottom="50%"
          left="9%"
          zIndex={1}
        >
          <Stack
            bgcolor={"#005900"}
            sx={{
              border: "2px solid #005900",
              borderRadius: "100px",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#005900",
              },
            }}
            onClick={() => TwosliderRef.current.slickPrev()}
          >
            <IoIosArrowBack
              style={arrowStyle1}
              onMouseEnter={() => setArrowStyle1(hoverStyle)}
              onMouseLeave={() => setArrowStyle1(normalStyle)}
            />
          </Stack>
        </Stack>

        <Stack
          direction="row"
          gap="10px"
          position="absolute"
          bottom="50%"
          right="9%"
          zIndex={1}
        >
          <Stack
            bgcolor={"#005900"}
            sx={{
              border: "2px solid #005900",
              borderRadius: "100px",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#005900",
              },
            }}
            onClick={() => TwosliderRef.current.slickNext()}
          >
            <IoIosArrowForward
              style={arrowStyle2}
              onMouseEnter={() => setArrowStyle2(hoverStyle)}
              onMouseLeave={() => setArrowStyle2(normalStyle)}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const SmSlider = ({ d }) => {
  return (
    <Stack
      width="100%"
      height="35vh"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${d.img.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      gap="10px"
    >
      <Stack
        width="202px"
        bgcolor="#4A4A4A99"
        height="35vh"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Stack alignItems="center">
          <Head1 color="white">{d.title}</Head1>
          {d.subtitle && <ParaNormal color="white">{d.subtitle}</ParaNormal>}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CategoriesMember;
