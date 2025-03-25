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
    name: "DR APJ ABDUL KALAM",
    img: img8,
    content:
      "It is inspiring, divine and dynamic. The Durlabhji Avedna Ashram is the work of God.",
  },
  {
    id: 0,
    name: "DILIP KUMAR AND SAIRA BANU",
    img: img7,
    content:
      "A heart-warming experience! Our visit to Avedna was most moving; in a sense, it touched the innermost chords of humanism.",
  },
  {
    id: 0,
    name: "ELA R BHATT",
    img: img6,
    content:
      "Avedna Ashram is the living embodiment of Gandhiji’s trusteeship philosophy. The Durlabhji family has carried forward the tradition of the rich sharing and caring for the poorest and neediest in society.",
  },
  {
    id: 0,
    name: "LEANDER PAES",
    img: img4,
    content:
      "The greatest joy in life, is life itself...and the care and love that you give. Your patients and staff members make life worth living. My heart and prayers go out to each one of you for the service you are doing towards humanity. I am truly humbled. Keep up the extraordinary work you do.",
  },
  {
    id: 0,
    name: "MR. NARAYANA MURTHY",
    img: img5,
    content:
      "Visiting Avedna Ashram was one of the most moving experiences of my life. The kindness of the family and the nurses is extraordinary.",
  },
];

export default function Visitors() {
  return (
    <ContainerMain bgColor="#6A88AF">
      <Head1 color="white">Some Comments by Visitors</Head1>
      {/* <ParaNormal
        color="white"
        width={{ lg: "60%", sm: "100%" }}
        textAlign={{ lg: "center", sm: "center" }}
        margin="0 auto"
      >
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </ParaNormal> */}
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
        marginTop={{ lg: "50px", sm: "10px" }}
        direction={"row"}
        flexWrap={"wrap"}
        width={{ lg: "80%", sm: "100%" }}
        justifyContent={"space-between"}
      >
        {visitorsData.map((el, i) => (
          <VisitorCard visitor={el} key={i} />
        ))}
      </Stack>
    </ContainerMain>
  );
}
