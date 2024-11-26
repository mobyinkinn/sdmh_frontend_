"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack } from "@mui/material";
import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import woman from "./assets/woman.png";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const normalStyle = {
  height: "50px",
  cursor: "pointer",
  width: "50px",
  color: "#007946",
};
const hoverStyle = {
  height: "50px",
  cursor: "pointer",
  width: "50px",
  color: "white",
};

const checkupData = [
  { id: 0, img: woman, title: "Women Health Check Up" },
  { id: 1, img: woman, title: "Women Health Check Up" },
  { id: 2, img: woman, title: "Women Health Check Up" },
  { id: 3, img: woman, title: "Women Health Check Up" },
  { id: 4, img: woman, title: "Women Health Check Up" },
  { id: 5, img: woman, title: "Women Health Check Up" },
  { id: 6, img: woman, title: "Women Health Check Up" },
];

export default function CheckUp() {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 4.15,
    centerMode: true,
    slidesToScroll: 1,
  };

  return (
    <ContainerMain bgColor="#D2E4D8">
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction="row">
          <Head1 color="black">Health&nbsp;</Head1>
          <Head1 color="#007946">Check up Plan</Head1>
        </Stack>
        <Stack direction="row" gap="10px">
          <Stack
            sx={{
              border: "4px solid #007946",
              borderRadius: "100px",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#007946",
              },
            }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <IoIosArrowBack
              style={arrowStyle1}
              onMouseEnter={() => setArrowStyle1(hoverStyle)}
              onMouseLeave={() => setArrowStyle1(normalStyle)}
            />
          </Stack>
          <Stack
            sx={{
              border: "4px solid #007946",
              borderRadius: "100px",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#007946",
              },
            }}
            onClick={() => sliderRef.current.slickNext()}
          >
            <IoIosArrowForward
              style={arrowStyle2}
              onMouseEnter={() => setArrowStyle2(hoverStyle)}
              onMouseLeave={() => setArrowStyle2(normalStyle)}
            />
          </Stack>
        </Stack>
      </Stack>
      <Box>
        <Slider ref={sliderRef} {...settings}>
          {checkupData.map((el, i) => (
            <CheckupCard key={el.id} el={el} />
          ))}
        </Slider>
      </Box>
    </ContainerMain>
  );
}

function CheckupCard({ el }) {
  return (
    <Stack width={"85%"} gap="10px">
      <Stack
        sx={{
          width: "100%",
          height: "30vh",
          backgroundImage: `url(${el.img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Stack>
      <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
        <ParaNormal>{el.title}</ParaNormal>
        <IoIosArrowRoundForward
          style={{
            width: "30px",
            height: "30px",
            color: "#007946",
          }}
        />
      </Stack>
    </Stack>
  );
}
