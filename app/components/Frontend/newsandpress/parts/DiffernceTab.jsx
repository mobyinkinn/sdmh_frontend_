"use client";

import React, { useState } from "react";
import { Box, Stack, Typography, Tabs, Tab, Button } from "@mui/material";
import Image from "next/image";
import image from "./assests/Img1.png";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";
import { useRouter } from "next/navigation";

const data = [
  {
    id: 1,
    mediaType: "PrintMedia",
    formatType: "Image",
    img: image,
    title: "Blood Donation Camp Through JSG GEM CITY",
    slug: "Blood-Donation-Camp",
  },
  {
    id: 2,
    mediaType: "PrintMedia",
    formatType: "Image",
    img: image,
    title: "Blood Donation Camp Through JSG GEM CITY",
    slug: "Blood-Donation-Camp2",
  },
  {
    id: 10,
    mediaType: "PrintMedia",
    formatType: "Image",
    img: image,
    title: "Blood Donation Camp Through JSG GEM CITY",
    slug: "Blood-Donation-Camp3",
  },
  {
    id: 11,
    mediaType: "PrintMedia",
    formatType: "Image",
    img: image,
    title: "Blood Donation Camp Through JSG GEM CITY",
    slug: "Blood-Donation-Camp4",
  },
  {
    id: 3,
    mediaType: "PrintMedia",
    formatType: "Video",
    img: image,
    title: "Blood Donation Camp Through JSG GEM CITY",
    slug: "Blood-Donation-Camp5",
  },
  {
    id: 4,
    mediaType: "PrintMedia",
    formatType: "PDF",
    img: image,
    title: "Blood Donation Camp Through JSG GEM CITY",
    slug: "Blood-Donation-Camp6",
  },
  {
    id: 5,
    mediaType: "PrintMedia",
    formatType: "YTVideo",
    img: image,
    title: "Blood Donation Camp Through JSG GEM CITY",
    slug: "Blood-Donation-Camp7",
  },
  {
    id: 6,
    mediaType: "DigitalMedia",
    formatType: "Image",
    img: image,
    title: "Digital Media Campaign",
    slug: "Blood-Donation-Camp8",
  },
  {
    id: 7,
    mediaType: "DigitalMedia",
    formatType: "Video",
    img: image,
    title: "Digital Workshop on Healthcare",
    slug: "Blood-Donation-Camp9",
  },
  {
    id: 8,
    mediaType: "DigitalMedia",
    formatType: "PDF",
    img: image,
    title: "Monthly Healthcare Report",
    slug: "Blood-Donation-Camp",
  },
  {
    id: 9,
    mediaType: "DigitalMedia",
    formatType: "YTVideo",
    img: image,
    title: "Online Training Session",
    slug: "Blood-Donation-Camp",
  },
];

const DiffernceTab = () => {
  const [mediaType, setMediaType] = useState("PrintMedia");
  const [formatType, setFormatType] = useState("Image");
  const router = useRouter();

  const filteredData = data.filter(
    (item) => item.mediaType === mediaType && item.formatType === formatType
  );

  return (
    <Box bgcolor={"#EDF5E1"} p={{ md: 4, xs: 2 }}>
      {/* Top Tabs: Media Type */}
      <Stack
        direction={{ md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={{ md: 2, xs: 1 }}
        mt={{ md: 3 }}
        sx={{
          "& .MuiButton-root": {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "20px",
          },
        }}
      >
        <Button
          variant={mediaType === "PrintMedia" ? "contained" : "outlined"}
          onClick={() => setMediaType("PrintMedia")}
          sx={{
            backgroundColor:
              mediaType === "PrintMedia" ? "#2A803C" : "transparent",
            color: mediaType === "PrintMedia" ? "#fff" : "#2A803C",
            borderColor: "#2A803C",
            "&:hover": {
              backgroundColor: "#1E5E2C",
              color: "#fff",
            },
          }}
        >
          Print Media
        </Button>
        <Button
          variant={mediaType === "DigitalMedia" ? "contained" : "outlined"}
          onClick={() => setMediaType("DigitalMedia")}
          sx={{
            backgroundColor:
              mediaType === "DigitalMedia" ? "#2A803C" : "transparent",
            color: mediaType === "DigitalMedia" ? "#fff" : "#2A803C",
            borderColor: "#2A803C",
            "&:hover": {
              backgroundColor: "#1E5E2C",
              color: "#fff",
            },
          }}
        >
          Digital Media
        </Button>
      </Stack>

      {/* Secondary Tabs: Format Type */}
      <Tabs
        value={formatType}
        onChange={(e, value) => setFormatType(value)}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{
          mt: 2,
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: { md: "16px", xs: "12px" },
            fontWeight: "600",
            color: "#2A803C",
            minWidth: "auto",
            padding: { md: "30px", xs: "10px" },
            "&.Mui-selected": {
              color: "#2A803C",
            },
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#2A803C",
          },
        }}
      >
        <Tab label="Picture" value="Image" />
        <Tab label="Video" value="Video" />
        <Tab label="PDF" value="PDF" />
        <Tab label="Youtube Video" value="YTVideo" />
      </Tabs>

      {/* Grid of Cards */}
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        p={3}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                width: "400px",
                height: "280px",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                style={{ filter: "brightness(0.8)" }}
              />
              <Stack>
                <Typography
                  width={"70%"}
                  sx={{
                    position: "absolute",
                    bottom: "40%",
                    left: "42%",
                    transform: "translateX(-50%)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {item.title}
                </Typography>
                <ButtonSmallOutline
                  style={{
                    backgroundColor: "white",
                    border: "1px solid white",
                    position: "absolute",
                    bottom: "20%",
                    left: "22%",
                    transform: "translateX(-50%)",
                  }}
                  onClick={() =>
                    router.push(`/news-press-release/${item.slug}`)
                  }
                >
                  Read More
                </ButtonSmallOutline>
              </Stack>
            </Box>
          ))
        ) : (
          <Typography variant="h6" color="textSecondary">
            No data available for this selection.
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default DiffernceTab;
