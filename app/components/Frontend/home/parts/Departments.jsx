"use client";

import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";

import img1 from "../assets/departments/topLeft.png";
import img2 from "../assets/departments/topRight.png";
import img3 from "../assets/departments/center.png";
import img4 from "../assets/departments/bottomLeft.png";
import img5 from "../assets/departments/bottomRight.png";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const departments = [
  { id: 0, name: "Heart", data: "Best In California", img: img1 },
  { id: 1, name: "Cancer", data: "Best In California", img: img2 },
  {
    id: 2,
    name: "Pediatrics at Guerin",
    data: "Best In California",
    img: img3,
  },
  { id: 3, name: "Neurology & Neuro", data: "Best In California", img: img4 },
  { id: 4, name: "Orthopaedics", data: "Best In California", img: img5 },
  {
    id: 5,
    name: "Obstetrics & Gynecology",
    data: "Best In California",
    img: img1,
  },
  {
    id: 6,
    name: "Pediatrics at Guerin",
    data: "Best In California",
    img: img2,
  },
  { id: 7, name: "Orthopaedics", data: "Best In California", img: img3 },
  {
    id: 8,
    name: "Obstetrics & Gynecology",
    data: "Best In California",
    img: img4,
  },
];

export default function Departments() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  return (
    <Stack padding={"50px"} backgroundColor={"#FBF6EE"} gap={"20px"}>
      <Head1 color="black">World-class Speciality Care</Head1>
      <Head1>At Your Fingertips</Head1>

      <Stack
        width={"100%"}
        height={"fit-content"}
        direction={"row"}
        gap={"30px"}
        justifyContent={"center"}
      >
        <Stack width={"45%"} gap={"40px"}>
          <Stack width={"100%"} sx={{ overflowY: "scroll" }} height={"75vh"}>
            {departments.map((el, i) => {
              return (
                <Stack
                  direction={"row"}
                  padding={"20px 50px"}
                  margin={"0 10px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={
                    el.id === activeTab
                      ? {
                          color: "white",
                          backgroundColor: "#007946",
                          border: "none",
                          cursor: "pointer",
                        }
                      : {
                          borderBottom: "1px solid black",
                        }
                  }
                  onMouseEnter={() => setActiveTab(el.id)}
                  onClick={() => router.push("/")}
                >
                  <Stack>
                    <Typography fontSize={"1.5rem"}>{el.name}</Typography>
                    <Typography fontSize={"1.2rem"}>{el.data}</Typography>
                  </Stack>
                  <Stack>
                    <FaArrowRight size={30} />
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
          <ButtonMediumOutline margin="0 50px" color="#379237">
            View All
          </ButtonMediumOutline>
        </Stack>
        <Stack
          width={"45%"}
          height={"60vh"}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={departments[activeTab].img}
            fill
            objectFit="contain"
            alt=""
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
