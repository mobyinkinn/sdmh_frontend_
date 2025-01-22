import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";

import appointment from "../assets/icons/appointment.png";
import book from "../assets/icons/book.png";
import consult from "../assets/icons/consult.png";
import lab from "../assets/icons/lab.png";
import Image from "next/image";

const todoData = [
  { id: 0, title: "Book Appointment", icon: appointment },
  { id: 1, title: "Book Health Check-up", icon: book },
  { id: 2, title: "Consult Online", icon: consult },
  { id: 3, title: "Lab Report", icon: lab },
];

export default function Todo() {
  return (
    <ContainerMain bgColor={"#8EA5C3"}>
      <Stack direction={{ xs: "column", lg: "row" }} justifyContent={"center"}>
        <Head1 color="#000000">What would you like&nbsp;</Head1>
        <Head1 color="#ffffff">To Do today?</Head1>
      </Stack>
      <Stack
        marginTop={{ md: "30px" }}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ md: "20px", xs: "10px" }}
        flexWrap={"wrap"}
      >
        {todoData.map((el, i) => {
          return (
            <Stack
              key={i}
              backgroundColor={"white"}
              borderRadius={"10px"}
              padding={"30px 10px"}
              alignItems={"center"}
              width={{ md: "200px", xs: "140px" }}
              height={"180px"}
              gap={{ md: "20px", xs: "5px" }}
              justifyContent={"center"}
            >
              <Image src={el.icon} width={60} height={60} alt="" />
              <Typography
                fontSize={{ md: "1rem", xs: "0.8rem" }}
                textAlign={"center"}
              >
                {el.title}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </ContainerMain>
  );
}
