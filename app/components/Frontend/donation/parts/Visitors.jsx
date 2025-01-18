import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import * as React from "react";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img7 from "./assets/7.png";
import img8 from "./assets/8.png";
import { Stack } from "@mui/material";
import VisitorCard from "./VisitorCard";

const visitorsData = [
  {
    id: 0,
    name: "Dr Apj Abdul Kalam",
    img: img8,
    content:
      "It is inspiring, divine and dynamic. The Durlabhji Avedna Ashram is the work of God.",
  },
  {
    id: 0,
    name: "Dr Apj Abdul Kalam",
    img: img7,
    content:
      "It is inspiring, divine and dynamic. The Durlabhji Avedna Ashram is the work of God.",
  },
  {
    id: 0,
    name: "Dr Apj Abdul Kalam",
    img: img6,
    content:
      "It is inspiring, divine and dynamic. The Durlabhji Avedna Ashram is the work of God.",
  },
  {
    id: 0,
    name: "Dr Apj Abdul Kalam",
    img: img4,
    content:
      "It is inspiring, divine and dynamic. The Durlabhji Avedna Ashram is the work of God.",
  },
  {
    id: 0,
    name: "Dr Apj Abdul Kalam",
    img: img5,
    content:
      "It is inspiring, divine and dynamic. The Durlabhji Avedna Ashram is the work of God.",
  },
];

export default function Visitors() {
  return (
    <ContainerMain bgColor="#6A88AF">
      <Head1 color="white">Some Comments by Visitors</Head1>
      <ParaNormal color="white" width={{lg:"60%",sm:"100%"}} textAlign={{lg:"center",sm:"center"}} margin="0 auto">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </ParaNormal>
      <Stack alignItems={"center"}>
        <AvatarGroup total={5} spacing="small">
          <Avatar
            alt="Remy Sharp"
            sx={{ height: 64, width: 64 }}
            src={img4.src}
          />
          <Avatar
            alt="Travis Howard"
            sx={{ height: 64, width: 64 }}
            src={img5.src}
          ></Avatar>
          <Avatar
            alt="Trevor Henderson"
            sx={{ height: 64, width: 64 }}
            src={img6.src}
          ></Avatar>
          <Avatar
            alt="Trevor Henderson"
            sx={{ height: 64, width: 64 }}
            src={img7.src}
          ></Avatar>
          <Avatar
            alt="Trevor Henderson"
            sx={{ height: 64, width: 64 }}
            src={img8.src}
          ></Avatar>
        </AvatarGroup>
      </Stack>
      <Stack
        margin={"0 auto"}
        gap={"30px"}
        marginTop={{lg:"50px",sm:"10px"}}
        direction={"row"}
        flexWrap={"wrap"}
        width={{lg:"80%",sm:"100%"}}
        justifyContent={"space-between"}
      >
        {visitorsData.map((el, i) => (
          <VisitorCard visitor={el} />
        ))}
      </Stack>
    </ContainerMain>
  );
}
