"use client";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const ServiceProvide = () => {
  const data = [
    {
      id: 1,
      item: "Reading Facilities:",
      Desc: "Room and Computer Section is available 24x7. Circulation section remains open between 9.00 am To 5.30 pm. on weekdays. On Sundays and holidays only reading facilities (magazine, newspapers etc.) are provided to the users for 24 hours in the library premises.",
    },
    {
      id: 2,
      item: "Reference Services:",
      Desc: "Reference services are provided to the users. Users can refer printed documents and non printed materials like CD ROM data base, DVDs, video in the library during the specified period.",
    },
    {
      id: 3,
      item: "Internet Facilities:",
      Desc: "Internet facilities are provided to the users for accessing the Web, on line journals, searching facilities 24 hours, a day.",
    },
    {
      id: 4,
      item: "Facilities for outsider:",
      Desc: "outsider: With the permission of Assistant Medical Superintendent and a caution deposit of Rs. 5000/- as security money, the candidate is allowed to use the library as a reader as well as borrow books from the library as per rules.",
    },
    {
      id: 5,
      item: "Self help collections:",
      Desc: "collections: An important addition to our collection has been the materials from various self help groups. These constitutes both publications as well as extensive documentation files of library work, newspaper clippings, hospital news, hospital pictures and albums etc.",
    },
    {
      id: 6,
      item: "Research Paper :",
      Desc: "We maintain a large collection of theses and journal articles on various topics.",
    },
    {
      id: 7,
      item: "Audio Visuals:",
      Desc: "We have a good collection of DVDs/CDs on hospital as well as on its various activities such as outreach programme and workshop.",
    },
  ];
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleData = data.slice(0, visibleCount);
  return (
    <Stack bgcolor={"#D8E0EB"}>
      <Head1
        fontSize={{ sm: "1.5rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
        color="black"
        style={{ padding: "20px 0 0 0" }}
      >
        Service Provided
      </Head1>
      <Stack
        width={"100%"}
        flexWrap={"wrap"}
        padding={4}
        direction={{ xs: "column", md: "row" }}
        gap={2}
        justifyContent={"center"}
        alignItems={{ xs: "center", md: "normal" }}
        display={{ xs: "none", md: "flex" }}
      >
        {data.map((d, i) => {
          return (
            <Stack
              border={"1px solid lightgray"}
              width={{ xs: "90%", md: "45%" }}
              padding={3}
              borderRadius={2}
              key={i}
              sx={{
                "&:hover": {
                  bgcolor: "#C5D1E1",
                },
              }}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={{ xs: "15px", smm: "20px", md: "25px", lg: "30px" }}
              >
                {d.item}
              </Typography>
              <Typography
                fontSize={{ xs: "12px", smm: "16px", md: "20px", lg: "25px" }}
              >
                {d.Desc}
              </Typography>
            </Stack>
          );
        })}
      </Stack>

      <Stack
        width={"100%"}
        flexWrap={"wrap"}
        padding={2}
        direction={{ xs: "column", md: "row" }}
        gap={2}
        justifyContent={"center"}
        alignItems={{ xs: "center", md: "normal" }}
        display={{ xs: "flex", md: "none" }}
      >
        {visibleData.map((d, i) => {
          return (
            <Stack
              border={"1px solid lightgray"}
              width={{ xs: "90%", md: "45%" }}
              padding={3}
              borderRadius={2}
              key={i}
              sx={{
                "&:hover": {
                  bgcolor: "#C5D1E1",
                },
              }}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={{ xs: "15px", smm: "20px", md: "25px", lg: "30px" }}
              >
                {d.item}
              </Typography>
              <Typography
                fontSize={{ xs: "12px", smm: "16px", md: "20px", lg: "25px" }}
              >
                {d.Desc}
              </Typography>
            </Stack>
          );
        })}
        {visibleCount < data.length && (
          <Stack alignItems={{ xs: "center", md: "start" }}>
            <ButtonMediumOutline
              onClick={() => setVisibleCount(visibleCount + 3)}
              margin="10px 50px"
              color="#476C9B"
            >
              View All
            </ButtonMediumOutline>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default ServiceProvide;
