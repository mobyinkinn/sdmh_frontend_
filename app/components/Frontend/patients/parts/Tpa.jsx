"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cert1 from "./assets/cert1.png";
import cert2 from "./assets/cert2.png";
import { Box, Stack } from "@mui/material";
import { Height } from "@mui/icons-material";

const certs = [
  { id: 0, img: cert1 },
  { id: 2, img: cert2 },
  { id: 3, img: cert1 },
  { id: 4, img: cert2 },
  { id: 5, img: cert1 },
  { id: 6, img: cert2 },
  { id: 7, img: cert1 },
];

export default function Tpa() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <ContainerMain bgColor="#6A88AF">
      <Head1 color="white">Tpa Affiliations</Head1>
      <Box>
        <Slider {...settings}>
          {certs.map((el, i) => (
            <CertCard key={el.id} el={el} />
          ))}
        </Slider>
      </Box>
    </ContainerMain>
  );
}

function CertCard({ el }) {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${el.img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: "10px",
        height: "30vh",
        width: "90%",
      }}
    ></Stack>
  );
}
