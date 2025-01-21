import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import image from "./assests/Img1.png"; // Replace this with your actual image imports
import Image from "next/image";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";

const PmDm = () => {
  const data = [
    {
      id: 1,
      img: image,
      title: "Blood Donation Camp Through JSG GEM CITY",
    },
    {
      id: 2,
      img: image,
      title: "Blood Donation Camp Through JSG GEM CITY",
    },
    {
      id: 3,
      img: image,
      title: "Blood Donation Camp Through JSG GEM CITY Lab",
    },
    {
      id: 4,
      img: image,
      title: "Blood Donation Camp Through JSG GEM CITYm",
    },
    {
      id: 5,
      img: image,
      title: "Blood Donation Camp Through JSG GEM CITY",
    },
    {
      id: 6,
      img: image,
      title: "Blood Donation Camp Through JSG GEM CITY",
    },
  ];

  return (
    <Stack p={{ md: 5, xs: 2 }}>
      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
        <Head1 color="#007946">Print Media&nbsp;</Head1>
        <Head1 color="black">Releases and&nbsp;</Head1>
        <Head1 color="#007946">Digital Media</Head1>
      </Stack>
      <ParaNormal style={{ textAlign: "center" }}>
        Breaking News, World & Multimedia
      </ParaNormal>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        p={{ md: 3, xs: "10px 0" }}
      >
        {data.map((item) => (
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
              >
                Read More
              </ButtonSmallOutline>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default PmDm;
