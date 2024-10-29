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
    <ContainerMain bgColor={"#A8DF8E"}>
      <Stack direction={"row"} justifyContent={"center"}>
        <Head1 color="#000000">What would you like&nbsp;</Head1>
        <Head1 color="#005900">to do today?</Head1>
      </Stack>
      <Stack
        marginTop={"30px"}
        direction={"row"}
        justifyContent={"center"}
        gap={"20px"}
      >
        {todoData.map((el, i) => {
          return (
            <Stack
              backgroundColor={"white"}
              borderRadius={"10px"}
              padding={"30px 15px"}
              alignItems={"center"}
              width={"200px"}
              gap={"20px"}
            >
              <Image src={el.icon} width={60} height={60} alt="" />
              <Typography textAlign={"center"}>{el.title}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </ContainerMain>
  );
}
