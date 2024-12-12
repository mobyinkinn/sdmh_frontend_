"use client"
import React, { useState } from "react";
import "./ScrollingImages.css"; // CSS file for styles
import Image1 from "./assets/1.jpg";
import Image2 from "./assets/2.jpg";
import Image3 from "./assets/3.jpg";
import Image4 from "./assets/4.jpg";
import Image5 from "./assets/5.jpg";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const ScrollingImages = () => {
  const [activeCard, setActiveCard] = useState(0); // State to track active card

  const lists = [
    {
      src: Image1,
      Title: "Management",
      Description: "In Mobile App Marketing",
    },
    { src: Image2, Title: "Staff", Description: "In Digital Marketing" },
    {
      src: Image3,
      Title: "Students/Admissions",
      Description: "Client Retention",
    },
  ];

  return (
    <Stack
      display={{
        xs: "none",
        lg: "flex",
      }}
      alignItems={"center"}
      bgcolor={"#476C9B"}
    >
      <Stack direction={"row"} width={"90%"} justifyContent={"center"} pt={5}>
        {lists.map((d, index) => (
          <div
            key={index}
            className={`card ${activeCard === index ? "active" : ""}`}
            onMouseEnter={() => setActiveCard(index)}
          >
            <Image src={d.src} alt={`Image ${index}`} layout="fill" />
            {activeCard === index && (
              <div className="content">
                <Stack bgcolor={"white"} borderRadius={4} p={"0 20px"}>
                  <Typography className="title" color="black" >{d.Title}</Typography>
                </Stack>
              </div>
            )}
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default ScrollingImages;
