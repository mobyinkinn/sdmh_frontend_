"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import img from "../assets/heartInHands.png";

const tabs = [
  {
    id: 0,
    name: "Donations",
    data: [
      {
        subId: 0,
        head: "donation3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "donation2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "donation3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "donation4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
  {
    id: 1,
    name: "Latest Happenings",
    data: [
      {
        subId: 0,
        head: "latest 1",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "latest 2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "latest 3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "latest 4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
  {
    id: 2,
    name: "Health Check-up Plans",
    data: [
      {
        subId: 0,
        head: "check 1",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "check 2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "check 3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "check 4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
  {
    id: 3,
    name: "TPA's",
    data: [
      {
        subId: 0,
        head: "Tpa 1",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "tpa 2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "tpa 3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "tpa 4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <ContainerMain bgColor={"#C7EEC3"}>
      <Stack
        direction={"row"}
        backgroundColor={"white"}
        sx={{
          borderRadius: "200px",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        {tabs.map((el, i) => {
          return (
            <Typography
              padding={"20px 45px"}
              fontSize={"1.3rem"}
              color={el.id === activeTab && "#54B435"}
              // fontWeight={el.id === activeTab && "bold"}
              sx={{
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  color: "#54B435",
                },
              }}
              onClick={() => setActiveTab(el.id)}
            >
              {el.name}
            </Typography>
          );
        })}
      </Stack>
      <Stack
        direction={"row"}
        gap={"20px"}
        justifyContent={"center"}
        marginTop={"30px"}
      >
        {tabs[activeTab].data.map((el, i) => {
          return (
            <Stack
              width={"20%"}
              backgroundColor={"#FBF6EE"}
              sx={{
                borderRadius: "10px",
              }}
            >
              <Box
                width={"100%"}
                height={"200px"}
                sx={{
                  backgroundImage: `url(${el.image.src})`,
                  backgroundSize: "cover",
                  borderRadius: "10px 10px 0 0",
                  backgroundPosition: "center center",
                }}
              ></Box>
              <Stack padding={"20px"} gap={"10px"} alignItems={"center"}>
                <Typography
                  fontSize={"1.2rem"}
                  textAlign={"center"}
                  color={"#379237"}
                  fontWeight={"bold"}
                >
                  {el.head}
                </Typography>
                <Typography textAlign={"center"}>{el.body}</Typography>
                <Typography
                  sx={{
                    border: "1px solid black",
                    padding: "10px 40px",
                    borderRadius: "200px",
                    cursor: "pointer",
                  }}
                >
                  Know More
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </ContainerMain>
  );
}
