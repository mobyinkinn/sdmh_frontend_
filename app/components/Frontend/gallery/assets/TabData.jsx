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
       img: image,
       title: "Registration Desk",
       imgrotate: [image1, image2],
     },
     {
       id: 1,
       img: image,
       title: "Registration Desk",
       imgrotate: [image1, image2],
     },
     {
       id: 2,
       img: image,
       title: "Registration Desk",
     },
     {
       id: 3,
       img: image,
       title: "Exterior",
     },
     {
       id: 4,
       img: image,
       title: "Interior",
     },
     {
       id: 5,
       img: image,
       title: "Interior",
     },
     {
       id: 6,
       img: image,
       title: "Blood Donation Camp Through JSG GEM CITY",
     },
     {
       id: 7,
       img: image,
       title: "Blood Donation Camp Through JSG GEM CITY",
     },
     {
       id: 8,
       img: image,
       title: "Blood Donation Camp Through JSG GEM CITY",
     },
     {
       id: 9,
       img: image,
       title: "Blood Donation Camp Through JSG GEM CITY",
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

      {/* View More */}
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
