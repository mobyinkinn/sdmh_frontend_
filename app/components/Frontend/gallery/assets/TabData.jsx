"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormalSmall } from "@/app/styledComponents/frontend/Para";
import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import image from "./bannerImage.png";
import image1 from "./1.jpg";
import image2 from "./22.jpg";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";
import GalleryModal from "./GalleryModal";
import Gallerychnage from "./Gallery";
import canteen from "../assets/gallery/canteen.jpg";
import conference_center from "../assets/gallery/conference_center.jpg";
import emergency from "../assets/gallery/emergency.jpg";
import entrance_reception from "../assets/gallery/entrance_reception.jpg";
import executive_room from "../assets/gallery/executive_room.jpg";
import temple from "../assets/gallery/temple.jpg";
import vishram_grah from "../assets/gallery/temple.jpg";
import two from "../assets/gallery/two.jpg";
import pharmacy from "../assets/gallery/pharmacy.jpg";
import physiotherapy from "../assets/gallery/physiotherapy.jpg";
import reception from "../assets/gallery/reception.jpg";
import royal_suits from "../assets/gallery/royal_suits.jpg";
import semi_deluxe_room from "../assets/gallery/semi_deluxe_room.jpg";
import steel_OT from "../assets/gallery/steel_OT.jpg";
import Canteen1 from "../assets/SDMH/Canteen/1.jpg";
import Canteen2 from "../assets/SDMH/Canteen/2.jpg";
import Conference1 from "../assets/SDMH/Canteen/1.jpg";
import Conference2 from "../assets/SDMH/Canteen/2.jpg";
import Emergency1 from "../assets/SDMH/Conference-Center/1.jpg";
import Emergency2 from "../assets/SDMH/EMERGENCY/2.jpg";
import Emergency3 from "../assets/SDMH/EMERGENCY/3.jpg";
import Room1 from "../assets/SDMH/Executive-Romm/1.jpg";
import Room2 from "../assets/SDMH/Executive-Romm/2.jpg";
import Room3 from "../assets/SDMH/Executive-Romm/3.jpg";
import Room4 from "../assets/SDMH/Executive-Romm/4.jpg";
import Room5 from "../assets/SDMH/Executive-Romm/5.jpg";
import Room6 from "../assets/SDMH/Executive-Romm/6.jpg";
import Room7 from "../assets/SDMH/Executive-Romm/7.jpg";
import Room8 from "../assets/SDMH/Executive-Romm/8.jpg";
import img1 from "../assets/SDMH/Pharmacy/1.jpg";
import img2 from "../assets/SDMH/Pharmacy/2.jpg";
import img3 from "../assets/SDMH/physiotherapy-Center/1.jpg";
import img4 from "../assets/SDMH/physiotherapy-Center/2.jpg";
import img5 from "../assets/SDMH/physiotherapy-Center/3.jpg";

import img6 from "../assets/SDMH/RECEPTION/OPD-RECEPTION/1.jpg";
import img7 from "../assets/SDMH/RECEPTION/OPD-RECEPTION/2.jpg";
import img8 from "../assets/SDMH/RECEPTION/entrance/1.jpg";
import img9 from "../assets/SDMH/RECEPTION/entrance/2.jpg";

import img10 from "../assets/SDMH/Royal-Suites/1.jpg";
import img11 from "../assets/SDMH/Royal-Suites/2.jpg";

import img12 from "../assets/SDMH/Semi-Deluxe-Room/1.jpg";
import img13 from "../assets/SDMH/Semi-Deluxe-Room/2.jpg";

import img14 from "../assets/SDMH/Steel-OT/1.jpg";
import img15 from "../assets/SDMH/TEMPLE/1.jpg";

import img16 from "../assets/SDMH/VISHRAMGRAH/1.jpg";


const TabData = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // for later if you want different images

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedItem(null);
  };

  const eventData = [
    {
      id: 0,
      img: canteen,
      title: "Canteen",
      imgrotate: [Canteen1, Canteen2],
    },
    {
      id: 1,
      img: conference_center,
      title: "Conference Center",
      imgrotate: [Conference1, Conference2],
    },
    {
      id: 2,
      img: emergency,
      title: "Emergency",
      imgrotate: [Emergency1, Emergency2, Emergency3],
    },
    {
      id: 3,
      img: entrance_reception,
      title: "Entrance Reception",
      imgrotate: [Room1, Room2, Room3, Room4, Room5, Room6, Room7, Room8],
    },
    {
      id: 4,
      img: executive_room,
      title: "Executive Room",
      imgrotate: [Room1, Room2, Room3, Room4, Room5, Room6, Room7, Room8],
    },
    {
      id: 5,
      img: temple,
      title: "Temple",
      imgrotate: [img15],
    },
    {
      id: 6,
      img: vishram_grah,
      title: "Vishram Grah",
      imgrotate: [img16],
    },
    {
      id: 8,
      img: pharmacy,
      title: "Pharmacy",
      imgrotate: [img1, img2],
    },
    {
      id: 9,
      img: physiotherapy,
      title: "Physiotherapy",
      imgrotate: [img3, img4, img5],
    },
    {
      id: 10,
      img: reception,
      title: "Reception",
      imgrotate: [img6, img7, img8, img9],
    },
    {
      id: 11,
      img: royal_suits,
      title: "Royal Suits",
      imgrotate: [img10, img11],
    },
    {
      id: 12,
      img: semi_deluxe_room,
      title: "Semi Deluxe Room",
      imgrotate: [img12, img13],
    },
    {
      id: 13,
      img: steel_OT,
      title: "Steel OT",
      imgrotate: [img14],
    },
  ];

  return (
    <Stack bgcolor={"#F9F9F9"}>
      {/* Heading */}
      {/* <Stack pt={3} alignItems={"center"} gap={1}>
        <ParaNormalSmall>Photo Gallery</ParaNormalSmall>
        <Head1
          width={{ lg: "40%", md: "40%", sm: "90%", smm: "90%" }}
          color="#476C9B"
        >
          Relationship We Have With You Special
        </Head1>
      </Stack> */}

      {/* Cards */}
      <Stack
        alignItems="center"
        py={{lg:10, sm:3}}
        justifyContent={"center"}
        width={"100%"}
        flexWrap={"wrap"}
        direction={"row"}
        gap={{ md: 3, xs: 1 }}
      >
        {eventData.map((el) => (
          <div
            key={el.id}
            onClick={() => handleCardClick(el)}
            style={{ cursor: "pointer" }}
          >
            <GalleryCard career={el} />
          </div>
        ))}
      </Stack>


      {/* 3D View Modal */}
      {openModal && (
        <GalleryModal open={openModal} handleClose={handleClose}>
          <Gallerychnage image={selectedItem?.imgrotate} />
        </GalleryModal>
      )}
    </Stack>
  );
};

export default TabData;
