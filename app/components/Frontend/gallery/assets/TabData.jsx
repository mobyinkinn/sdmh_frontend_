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

const TabData = () => {
  const [visibleCount, setVisibleCount] = useState(6);
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
      imgrotate: [image1, image2],
    },
    {
      id: 1,
      img: conference_center,
      title: "Conference Center",
      imgrotate: [image1, image2],
    },
    {
      id: 2,
      img: emergency,
      title: "Emergency",
    },
    {
      id: 3,
      img: entrance_reception,
      title: "Entrance Reception",
    },
    {
      id: 4,
      img: executive_room,
      title: "Executive Room",
    },
    {
      id: 5,
      img: temple,
      title: "Temple",
    },
    {
      id: 6,
      img: vishram_grah,
      title: "Vishram Grah",
    },
    {
      id: 7,
      img: two,
      title: "2",
    },
    {
      id: 8,
      img: pharmacy,
      title: "Pharmacy",
    },
    {
      id: 9,
      img: physiotherapy,
      title: "Physiotherapy",
    },
    {
      id: 10,
      img: reception,
      title: "Reception",
    },
    {
      id: 11,
      img: royal_suits,
      title: "Royal Suits",
    },
    {
      id: 12,
      img: semi_deluxe_room,
      title: "Semi Deluxe Room",
    },
    {
      id: 13,
      img: steel_OT,
      title: "Steel OT",
    },
  ];

  return (
    <Stack bgcolor={"#F9F9F9"}>
      {/* Heading */}
      <Stack pt={3} alignItems={"center"} gap={1}>
        <ParaNormalSmall>Photo Gallery</ParaNormalSmall>
        <Head1
          width={{ lg: "40%", md: "40%", sm: "90%", smm: "90%" }}
          color="#476C9B"
        >
          Relationship We Have With You Special
        </Head1>
      </Stack>

      {/* Cards */}
      <Stack
        alignItems="center"
        pt={2}
        justifyContent={"center"}
        width={"100%"}
        flexWrap={"wrap"}
        direction={"row"}
        gap={{ md: 3, xs: 1 }}
      >
        {eventData.slice(0, visibleCount).map((el) => (
          <div
            key={el.id}
            onClick={() => handleCardClick(el)}
            style={{ cursor: "pointer" }}
          >
            <GalleryCard career={el} />
          </div>
        ))}
      </Stack>

      {/* View More */}
      {visibleCount < eventData.length && (
        <Stack alignItems={"center"} pt={2}>
          <ButtonSmallOutline
            onClick={() => setVisibleCount(visibleCount + 3)}
            style={{
              backgroundColor: "white",
              border: "1px solid green",
              color: "black",
            }}
          >
            View More
          </ButtonSmallOutline>
        </Stack>
      )}

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
