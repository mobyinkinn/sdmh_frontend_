import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack, Typography } from "@mui/material";

import holi from "../assets/holi.png";
import blood from "../assets/bloodDonation.png";
import Image from "next/image";
import {
  ButtonSmallOutline,
  DarkGreenButton,
} from "@/app/styledComponents/frontend/Buttons";

const blogData = [
  {
    id: 0,
    title: "SDMH College of Nursing",
    data: "In Publishing And Graphic Design, Lorem Ipsum Is a Placeholder t is a long established fact that a reader will be distracted by",
    date: "28-04-2024",
    tag: "Typesetting, Industry",
    img: holi,
  },
  {
    id: 1,
    title: "SDMH College of Nursing",
    data: "In Publishing And Graphic Design, Lorem Ipsum Is a Placeholder t is a long established fact that a reader will be distracted by",
    date: "28-04-2024",
    tag: "Typesetting, Industry",
    img: holi,
  },
  {
    id: 2,
    title: "SDMH College of Nursing",
    data: "In Publishing And Graphic Design, Lorem Ipsum Is a Placeholder t is a long established fact that a reader will be distracted by",
    date: "28-04-2024",
    tag: "Typesetting, Industry",
    img: holi,
  },
];

export default function Blog() {
  return (
    <ContainerMain bgColor={"#276923"} alignItems="center">
      <Head1 color="#FCF9C6">Blog</Head1>
      <Typography
        width={"80%"}
        textAlign={"center"}
        color={"white"}
        fontSize={"1.4rem"}
        display={{ md: "block", xs: "none" }}
      >
        Providing Best Health Services With Expert Diagnoses & Treatment Plans
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Stack
        width={"100%"}
        justifyContent={"center"}
        height={"fit-content"}
        direction={{ xs: "column", md: "row" }}
        gap={"50px"}
        alignItems={{ xs: "center", md: "normal" }}
      >
        <Stack
          width={{ xs: "100%", md: "45%" }}
          height={"100%"}
          display={{ md: "flex", xs: "none" }}
        >
          <Box width={"100%"} height={"400px"} position={"relative"}>
            <Image src={blood} alt="" fill objectFit="cover" />
          </Box>
          <Stack backgroundColor={"white"} padding={"30px"} gap={"20px"}>
            <Head3 align="left">Blood Donation Camp Through Jsg Gem City</Head3>
            <Typography fontSize={"1rem"}>
              Following The Legacy Of 20 Years Of Saving Lives By Blood Donation
              At Sdmh Through Jsg Gem City Blood Donation Camp.
            </Typography>
            <Stack direction={"row"} gap={"10px"} justifyContent={"center"}>
              <ButtonSmallOutline color="#379237">
                28-04-2024
              </ButtonSmallOutline>
              <ButtonSmallOutline color="#379237">
                Typesetting Industry
              </ButtonSmallOutline>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          width={{ xs: "100%", md: "45%" }}
          gap={{ xs: "20px", md: "20px", lg: "20px" }}
          justifyContent={{ xs: "space-between", md: "unset" }}
          display={{ md: "flex", xs: "none" }}
        >
          {blogData.map((el, i) => {
            return <BlogCard el={el} key={i}></BlogCard>;
          })}
        </Stack>
        <Stack
          width={{ xs: "100%", md: "45%" }}
          gap={"20px"}
          justifyContent={"space-between"}
          display={{ xs: "flex", md: "none" }}
          bgcolor={"white"}
          padding="15px"
          borderRadius="5px"
        >
          {blogData.map((el, i) => {
            return <BlogCard key={i} el={el}></BlogCard>;
          })}

          <Stack display={{ md: "none" }} margin="0px auto" marginTop="20px">
            <DarkGreenButton borderRadius="300px">View All</DarkGreenButton>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        alignItems={{ xs: "center", md: "start" }}
        display={{ md: "flex", xs: "none" }}
      >
        <ButtonSmallOutline color="#fff">View All</ButtonSmallOutline>
      </Stack>
    </ContainerMain>
  );
}

function BlogCard({ el }) {
  return (
    <Stack
      direction={"row"}
      borderRadius={"5px"}
      // overflow="hidden"
      boxShadow={"2px 2px 8px 2px rgba(0, 0, 0, 0.1)"}
      height={"100%"}
    >
      <Box
        width={"80%"}
        height={{ xs: "none", md: "217px", lg: "213px", xl: "206px" }}
        position={"relative"}
      >
        <Image src={el.img} alt="" fill objectFit="cover" />
      </Box>
      <Stack
        backgroundColor={"white"}
        padding={"10px"}
        gap={"5px"}
        // height={{ xs: "100%", md: "35vh", lg: "30vh", xl: "30vh" }}
        justifyContent={{ xs: "unset", lg: "space-evenly" }}
      >
        <Typography align="left" fontSize="0.8rem">
          {el.title}
        </Typography>
        <Typography fontSize={{ md: "0.9rem", xs: "0.6rem" }}>
          {el.data}
        </Typography>
        <Stack
          direction={"row"}
          gap={"10px"}
          display={{ md: "flex", xs: "none" }}
        >
          <ButtonSmallOutline color="#379237">{el.date}</ButtonSmallOutline>
          <ButtonSmallOutline color="#379237">{el.tag}</ButtonSmallOutline>
        </Stack>
      </Stack>
    </Stack>
  );
}

function BlogCardSmall({ el }) {
  return (
    <Stack direction={"row"}>
      <Box
        width={"400px"}
        height={{ md: "250px", xs: "200px" }}
        position={"relative"}
      >
        <Image src={el.img} alt="" fill objectFit="cover" />
      </Box>
      <Stack backgroundColor={"white"} padding={"20px"} gap={"15px"}>
        <Head4 align="left">{el.title}</Head4>
        <Typography fontSize={{ md: "0.9rem", xs: "0.7rem" }}>
          {el.data}
        </Typography>
        <Stack
          direction={"row"}
          gap={"10px"}
          display={{ md: "flex", xs: "none" }}
        >
          <ButtonSmallOutline color="#379237">{el.date}</ButtonSmallOutline>
          <ButtonSmallOutline color="#379237">{el.tag}</ButtonSmallOutline>
        </Stack>
      </Stack>
    </Stack>
  );
}
