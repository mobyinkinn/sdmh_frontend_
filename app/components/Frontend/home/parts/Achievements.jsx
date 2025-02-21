
"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head2, Head3 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";
import CountUp from "react-countup";
import aids from "../assets/icons/aids.png";
import findDoctor from "../assets/icons/findDoctor.png";
import robot from "../assets/icons/robot.png";
import liver from "../assets/icons/liver.png";
import Image from "next/image";

const achievementData = [
  { id: 0, count: 21022, data: "Complex Cancer Surgeries", img: aids },
  { id: 1, count: 410, data: "Doctors From All Departments", img: findDoctor },
  { id: 2, count: 283, data: "Liver Transplants", img: liver },
  { id: 3, count: 3615, data: "Robotic Surgeries", img: robot },
];

export default function () {
  return (
    <ContainerMain bgColor={"#276923"} dir="column">
      <Head3 color="white" textAlign={"center"} fontWeight={"400"}>
        Our
      </Head3>
      <Head1 color="#FCF9C6" textAlign={"center"}>
        Unmatched Achievements
      </Head1>
      <Head3 color="white" textAlign={"center"} fontWeight={"400"}>
        in the Medical Field
      </Head3>

      <Stack
        justifyContent={"space-around"}
        marginTop={"50px"}
        direction={"row"}
        gap={"40px"}
        flexWrap={"wrap"}
      >
        {achievementData.map((el, i) => {
          return (
            <Stack key={i} gap={"10px"} alignItems={"center"} width={"20%"}>
              <Image src={el.img} alt="" height={70} width={70} />
              <CountUp
                start={0}
                end={el.count}
                duration={2}
                suffix="+"
                useEasing
                enableScrollSpy
              >
                {({ countUpRef }) => (
                  <Head1 color={"white"} ref={countUpRef}></Head1>
                )}
              </CountUp>
              <Typography
                color={"white"}
                fontSize={{ lg: "1.2rem", md: "1rem", sm: "0.8rem" }}
                textAlign={"center"}
              >
                {el.data}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </ContainerMain>
  );
}
