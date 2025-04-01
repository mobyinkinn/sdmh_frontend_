"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormalSmall } from "@/app/styledComponents/frontend/Para";
import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import image from "./bannerImage.png";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";

const TabData = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const eventData = [
    {
      id: 0,
      img: image,
      title: "Registration Desk",
    },
    {
      id: 1,
      img: image,
      title: "Registration Desk",
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
      <Stack pt={3} alignItems={"center"} gap={1}>
        <ParaNormalSmall>Photo Gallery</ParaNormalSmall>
        <Head1
          width={{ lg: "40%", md: "40%", sm: "90%", smm: "90%" }}
          color="#476C9B"
        >
          Relationship We Have With You Special
        </Head1>
      </Stack>


      <Stack
        alignItems="center"
        pt={2}
        justifyContent={"center"}
        width={"100%"}
        flexWrap={"wrap"}
        direction={"row"}
        gap={{ md: 3, xs: 1 }}
      >
        {eventData.map((el, i) => (
          <GalleryCard key={el.id} career={el} />
        ))}
      </Stack>
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
    </Stack>
  );
};

export default TabData;
