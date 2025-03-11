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
      category: "Upcoming",
      img: image,
      title: "Registration Desk",
    },
    {
      id: 1,
      category: "Recent",
      img: image,
      title: "Registration Desk",
    },
    {
      id: 2,
      category: "New",
      img: image,
      title: "Registration Desk",
    },
    {
      id: 3,
      category: "public",
      img: image,
      title: "Exterior",
    },
    {
      id: 4,
      category: "Mobyink",
      img: image,
      title: "Interior",
    },
    {
      id: 5,
      category: "Mobyink",
      img: image,
      title: "Interior",
    },
    {
      id: 6,
      category: "Mobyink",
      img: image,
      title: "Blood Donation Camp Through JSG GEM CITY",
    },
    {
      id: 7,
      category: "Mobyink",
      img: image,
      title: "Blood Donation Camp Through JSG GEM CITY",
    },
    {
      id: 8,
      category: "Mobyink",
      img: image,
      title: "Blood Donation Camp Through JSG GEM CITY",
    },
    {
      id: 9,
      category: "Mobyink",
      img: image,
      title: "Blood Donation Camp Through JSG GEM CITY",
    },
  ];
  const categories = [
    "All",
    ...new Set(eventData.map((event) => event.category)),
  ];

  // Filter event data based on the selected category
  const filteredData =
    selectedCategory === "All"
      ? eventData
      : eventData.filter((event) => event.category === selectedCategory);
  const visibleData = filteredData.slice(0, visibleCount);

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
        direction="row"
        flexWrap={"wrap"}
        gap={{ md: 2, xs: 1 }}
        padding={{ md: 5, xs: 2 }}
        justifyContent="center"
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => {
              setSelectedCategory(category);
              setVisibleCount(6); // Reset visible count when changing category
            }}
            sx={{
              padding: "5px 30px",
              backgroundColor:
                selectedCategory === category ? "#2A803C" : "transparent",
              color: selectedCategory === category ? "#fff" : "#2A803C",
              borderColor: "#2A803C",
              borderRadius: "30px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1E5E2C",
                color: "#fff",
              },
            }}
          >
            {category}
          </Button>
        ))}
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
        {visibleData.map((el, i) => (
          <GalleryCard key={el.id} career={el} />
        ))}
      </Stack>
      {visibleCount < filteredData.length && (
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
    </Stack>
  );
};

export default TabData;
