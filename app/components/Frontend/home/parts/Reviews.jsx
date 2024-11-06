"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head2, Head3 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import quotes from "../assets/icons/quotes.png";
import cert from "../assets/cert.png";

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
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContainerMain bgColor={"#C7EEC3"}>
      <Stack direction={"row"} margin={"0 auto"}>
        <Head1 color="black">What Our &nbsp;</Head1>
        <Head1>Patients Say</Head1>
      </Stack>
      <Image
        src={quotes}
        alt=""
        width={206}
        height={98.43}
        style={{ margin: "20px auto" }}
      />
      <Slider {...settings}>
        {reviewData.map((el, i) => (
          <ReviewCard el={el} />
        ))}
      </Slider>
    </ContainerMain>
  );
}

function ReviewCard({ el }) {
  return (
    <Stack direction={"row"} gap={"50px"} width={"70%"} margin={"0 auto"}>
      <Image
        src={cert}
        alt=""
        width={243.95}
        height={256.49}
        style={{
          padding: "10px 30px",
          paddingRight: "50px",
          borderRight: "3px solid #379237",
        }}
      />
      <Stack gap={"10px"} padding={"10px"}>
        <Typography fontSize={"1.2rem"}>{el.data}</Typography>
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
