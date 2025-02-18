"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head2, Head3 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import quotes from "../assets/icons/quotes.png";
import cert from "../assets/cert.png";
import { BorderTop } from "@mui/icons-material";

const reviewData = [
  {
    id: 0,
    name: "Delip Joshi",
    data: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
  },
  {
    id: 1,
    name: "Delip Joshi",
    data: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
  },
  {
    id: 3,
    name: "Delip Joshi",
    data: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
  },
  {
    id: 4,
    name: "Delip Joshi",
    data: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
  },
];

export default function Reviews() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContainerMain bgColor={"#fff"} margin="20px 0">
      <Stack direction={"row"} margin={"0 auto"}>
        <Head1 color="black">What Our &nbsp;</Head1>
        <Head1>Patients Say</Head1>
      </Stack>
      <Box
        component="img"
        src={quotes.src}
        alt=""
        sx={{
          width: { xs: "100px", md: "150px", lg: "206px" },
          height: { xs: "48px", md: "75px", lg: "98.43px" },
        }}
        style={{ margin: "20px auto" }}
      />
      <Slider {...settings}>
        {reviewData.map((el, i) => (
          <ReviewCard el={el} key={i} />
        ))}
      </Slider>
    </ContainerMain>
  );
}

function ReviewCard({ el }) {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      gap={{ xs: "10px", lg: "10px" }}
      width={{ md: "70%", xs: "100%" }}
      margin={{ md: "0 auto" }}
      alignItems={"center"}
    >
      <Box
        component="img"
        src={cert.src}
        alt=""
        sx={{
          width: { xs: "210px", lg: "243.95px" },
          height: { xs: "215px", lg: "256.49px" },
        }}
        style={{
          padding: "10px 30px",
          paddingRight: "50px",
        }}
      />

      <Stack
        sx={{
          borderLeft: { lg: "3px solid #379237" },
          borderTop: { xs: "3px solid #379237", lg: "none" },
        }}
        gap={"10px"}
        padding={"10px 30px"}
        alignItems={{ xs: "center", lg: "normal" }}
      >
        <Typography
          fontSize={{ xs: "0.8rem", lg: "1.2rem" }}
          // width={{ xs: "90%", lg: "100%" }}
          textAlign={{ md: "left", xs: "center" }}
        >
          {el.data}
        </Typography>
        <Head3 color="black" textAlign={"left"}>
          {el.name}
        </Head3>
        <Typography fontSize={".9rem"} color={"#379237"}>
          Happy Customer
        </Typography>
      </Stack>
    </Stack>
  );
}
