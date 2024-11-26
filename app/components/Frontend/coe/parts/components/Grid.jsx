import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import ballon from "../assets/hotAirBaloon.png";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import Image from "next/image";
import { Height } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";

const coeData = [
  {
    id: 0,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 1,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },

  {
    id: 2,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 3,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 4,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 5,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 6,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 7,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 8,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 9,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 10,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 11,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
];

export default function Grid() {
  return (
    <ContainerMain bgColor="#fff">
      <Stack direction={"row"} justifyContent={"center"} gap={1}>
        <Head1 color="black">Center of</Head1>
        <Head1 color="#005900"> Excellence</Head1>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={"50px"}
        justifyContent={"space-between"}
        marginTop={"20px"}
      >
        {coeData.map((el, i) => {
          return <CoeCard el={el} />;
        })}
      </Stack>
    </ContainerMain>
  );
}

function CoeCard({ el }) {
  return (
    <Stack width={"30%"} gap={"10px"}>
      <Box
        sx={{
          height: "300px",
          width: "100%",
          position: "relative",
        }}
      >
        <Image src={el.img} alt="" fill objectFit="cover" />
      </Box>
      <ParaNormal>{el.data}</ParaNormal>
      <ButtonSmallOutline color="#000000">Read More</ButtonSmallOutline>
    </Stack>
  );
}
