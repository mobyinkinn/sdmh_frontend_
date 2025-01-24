"use client";
import { Box, Stack, Typography } from "@mui/material";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import banner from "../assets/video_consultation.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ConsultationSteps = [
  {
    id: 0,
    heading: "Choose Your Doctor",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
  },
  {
    id: 1,
    heading: "Select Your Date & Time",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
  },
  {
    id: 2,
    heading: "Confirm & Pay",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
  },
  {
    id: 3,
    heading: "Review & Schedule",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
  },
  {
    id: 4,
    heading: "Consultation Done",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
  },
];

const Video_Consultation = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true,
    infinite: true,
    arrows: true, // Enable arrows for better navigation
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Stack
      bgcolor={"#007946"}
      width={"100%"}
      padding={{ md: "50px", xs: "30px 15px" }}
      alignItems={"center"}
    >
      <Head1 color="#FFFFFF">Online Video Consultation</Head1>
      <Typography color="#FFFFFF" fontSize={"1.5rem"}>
        Even during the pandemic, the health and safety of our patients is of
        utmost importance. Numerous
      </Typography>
      <Typography color="#FFFFFF" fontSize={"1.5rem"}>
        safety protocols are in place at all Max Hospitals to limit the spread
        of infection.
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
          height: { xs: "29vh", md: "48vh", lg: "80vh" },
          my: "30px",
        }}
      ></Box>
      <Typography
        fontSize={"2.5rem"}
        color={"#FFFFFF"}
        fontWeight={"bold"}
        alignSelf={"start"}
      >
        To Start Online Consultation
      </Typography>
      <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
        <Typography color="#FFFFFF" fontWeight={500} fontSize={"2rem"}>
          Please Follow These Steps
        </Typography>
        <Typography color="#FFFFFF" fontWeight={500} fontSize={"2rem"}>
          View All Steps
        </Typography>
      </Stack>
      {/* slider*/}
      <Stack
        direction={"row"}
        justifyContent={"center"}
        marginTop={"20px"}
        width="100%"
        // maxWidth="800px"
        display={{ xs: "flex", lg: "flex" }}
      >
        <Slider
          {...settings}
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          {ConsultationSteps.map((el, i) => (
            <Stack
              height={"fit-content"}
              key={i}
              width={"100%"}
              sx={{
                padding: "20px ",
              }}
            >
              <Stack
                backgroundColor={"white"}
                padding={"20px"}
                gap={"10px"}
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  fontSize={"1.2rem"}
                  color={"#476C9B"}
                  fontWeight={"bold"}
                >
                  {el.id + 1}.
                </Typography>
                <Typography
                  fontSize={"1.3rem"}
                  color={"#379237"}
                  fontWeight={"bold"}
                >
                  {el.heading}
                </Typography>
                <Typography>{el.body}</Typography>
              </Stack>
            </Stack>
          ))}
        </Slider>
      </Stack>
    </Stack>
  );
};

export default Video_Consultation;
