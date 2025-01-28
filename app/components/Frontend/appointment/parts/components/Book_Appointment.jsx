"use client";
import { Stack, Typography } from "@mui/material";
import banner from "../assets/book_appointment.png";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import {
  ButtonMediumOutline,
  ButtonSmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const appointmentSteps = [
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
    heading: "Appointment Done",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
  },
];

export default function BookAppointment() {
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
      bgcolor={"white"}
      width={"100%"}
      padding={{ md: "50px", xs: "30px 15px" }}
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        alignItems: "center",
      }}
    >
      <Typography
        fontSize={{ lg: "30px", md: "25px", smm: "20px", sm: "13px" }}
        fontWeight={500}
        textAlign={{ lg: "left", sm: "center" }}
      >
        How to Book an
      </Typography>

      <Head1 color="#005900" fontSize={{ md: "2.5rem", sm: "1.5rem" }}>
        Appointment
      </Head1>
      {/* non slider */}
      <Stack
        direction={"column"}
        justifyContent={"center"}
        marginTop={"20px"}
        width="100%"
        // maxWidth="800px"
        display={{ xs: "flex", md: "none" }}
      >
        {appointmentSteps.map((el, i) => {
          if (i >= 4) return null;
          return (
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
          );
        })}
        <Stack alignItems={{ xs: "center", md: "start" }}>
          <ButtonMediumOutline margin="10px 50px" color="#476C9B">
            View All
          </ButtonMediumOutline>
        </Stack>
      </Stack>

      {/* slider*/}
      <Stack
        direction={"row"}
        justifyContent={"center"}
        marginTop={"20px"}
        width="100%"
        // maxWidth="800px"
        display={{ xs: "none", md: "flex" }}
      >
        <Slider
          {...settings}
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          {appointmentSteps.map((el, i) => (
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
}
