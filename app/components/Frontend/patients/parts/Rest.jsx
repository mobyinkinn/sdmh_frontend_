"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import restroom from "./assets/restroom.png";
import bookShop from "./assets/bookShop.png";
import temple from "./assets/temple.png";
import salon from "./assets/salon.png";
import RestCard from "./RestCard";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import CareCard from "./CareCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const restData = [
  {
    id: 0,
    title: "VishramGrah (Accommodation Facility in Campus)",
    img: restroom,
    data: [
      "Air-conditioned in campus accommodation facility is available for patient attendants inside the campus.",
      "To confirm availability please cont : 141-5110200",
      "Check-in and Check-out time : 12 noon(only two attendants are permitted in one room)",
      "Attendant may pay at admission counter to avail the room facility. However due to heavy demand and limited rooms, attendant may have to wait till a room is vacated.",
      "In case of non-availability of VishramGrah rooms, attendants may avail Bunk-Bed facility which is available on 12 hours basis at very nominal rates, inside hospital campus.",
    ],
  },
  {
    id: 1,
    title: "Book & Newspaper Shop",
    img: bookShop,
    data: [
      "The Book & Newspaper shop is available near the Sarvdharm Temple.",
      "The shop makes available the books and newspapers.",
      "The facility is available Monday to Saturday from 7 am to 9 pm.",
    ],
  },
  {
    id: 2,
    title: "Sarvdharm Temple",
    img: temple,
    data: [
      "Sarvdharm Temple is located near waiting area outside IPD.",
      "The temple is open from 6 am to 8 pm every day.",
    ],
  },
  {
    id: 3,
    title: "Salon",
    img: salon,
    data: [
      "S.D.M.H. encompasses a salon inside the campus.",
      "The facility is available from 6 am to 10 pm every day.",
      "The facility can be contacted at 141-2566251",
    ],
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  centerMode: true,
  slidesToScroll: 1,
};

export default function Rest() {
  const [activeEl, setActiveEl] = useState(0);
  return (
    <ContainerMain
      flexDirection={{
        lg: "column",
        md: "column",
        smm: "column",
        sm: "column",
      }}
      bgColor="#007946"
      gap="50px"
    >
      <Stack
        direction="row"
        display={{ md: "flex", xs: "none" }}
        justifyContent={"space-between"}
      >
        {restData.map((el, i) => {
          return (
            <RestCard
              el={el}
              key={i}
              setActiveEl={setActiveEl}
              activeEl={activeEl}
            />
          );
        })}
      </Stack>
      <Box
        display={{ md: "none", xs: "block" }}
        justifyContent={"space-between"}
      >
        <Slider {...settings}>
          {restData.map((el, i) => {
            return (
              <RestCard
                el={el}
                key={i}
                setActiveEl={setActiveEl}
                activeEl={activeEl}
              />
            );
          })}
        </Slider>
      </Box>
      <CareCard el={restData[activeEl]} type={"white"} />
    </ContainerMain>
  );
}
