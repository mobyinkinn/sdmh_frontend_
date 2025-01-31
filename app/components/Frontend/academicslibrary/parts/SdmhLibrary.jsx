"use client";
import { Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Imag from "./assets/deanery.png";
import Image from "next/image";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const normalStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "white",
};

const hoverStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "white",
};
const bannerImage = [Imag, Imag, Imag, Imag];
const data = [
  {
    id: 1,
    title: "Books",
    des: "Approximately 20000",
  },
  {
    id: 2,
    title: "Books",
    des: "Approximately 20000",
  },
  {
    id: 3,
    title: "Books",
    des: "Approximately 20000",
  },
  {
    id: 4,
    title: "Books",
    des: "Approximately 20000",
  },
  {
    id: 5,
    title: "Books",
    des: "Approximately 20000",
  },
  {
    id: 6,
    title: "Books",
    des: "Approximately 20000",
  },
];
const SdmhLibrary = () => {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const TwosliderRef = useRef(null);
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const sm_Settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <ContainerMain style={{ backgroundColor: "#D2E4D8" }}>
        <Stack direction={"row"} marginLeft={1}>
          <Head1 color="black">About&nbsp;</Head1>
          <Head1 color="#005900">Library</Head1>
        </Stack>
        <Stack bgcolor={"white"} p={5} borderRadius={"20px"}>
          <ParaNormal
            style={{
              borderRadius: "10px",
              padding: "10px",
            }}
            textAlign={"left"}
          >
            The academic wing of Santokba Durlabhji Memorial Hospital and
            Research Centre is administered by the Academics Deanery: Dean of
            Academics, Dr. Anupam Chaturvedi; Associate Dean, Dr. Ravi Sharma;
            and Academics Administrator, Ms. Shiby K. John. Dr. Chaturvedi
            serves as HOD and Senior Consultant in Paediatrics & Neonatology.
            Dr. Ravi Sharma also holds the position of Consultant, in Paediatric
            Intensive Care at SDMH.
            <br /> <br />
            Library also provides trusted, evidence based, clinical decisions
            support tool - BMJ Best Practice(CDSS Tool) to improve patient
            outcomes. Access is available through web and app to facilitate
            Online and offline Access.
          </ParaNormal>
          {/* slider lg */}
          <Stack
            width={"100%"}
            position={"relative"}
            gap={1}
            display={{ xs: "none", lg: "flex" }}
          >
            <Slider ref={TwosliderRef} {...settings}>
              {bannerImage.map((img, index) => (
                <Stack
                  key={index}
                  width="100vw"
                  height="30vh"
                  sx={{
                    backgroundImage: `url(${img.src})`, // Directly use the image path
                    backgroundSize: "contain",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                  }}
                >
                  {/* <Stack
                  height="100%"
                  direction="column"
                  justifyContent="end"
                  alignItems="start"
                  //   position={"absolute"}
                  gap="10px"
                  sx={{ color: "white" }}
                  pl={4}
                  //   top={"40%"}
                  //   left={"30%"}
                >
                  <Typography fontSize={"60px"}>{img.title}</Typography>
                  <Typography fontSize={"23px"} pl={0.5}>
                    {img.Desc}
                  </Typography>
                </Stack> */}
                </Stack>
              ))}
            </Slider>

            <Stack
              direction="row"
              gap="10px"
              position="absolute"
              bottom="50%"
              left="-1%"
            >
              <Stack
                bgcolor={"#005900"}
                sx={{
                  border: "2px solid #005900",
                  borderRadius: "100px",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#005900",
                  },
                }}
                onClick={() => TwosliderRef.current.slickPrev()}
              >
                <IoIosArrowBack
                  style={arrowStyle1}
                  onMouseEnter={() => setArrowStyle1(hoverStyle)}
                  onMouseLeave={() => setArrowStyle1(normalStyle)}
                />
              </Stack>
            </Stack>

            <Stack
              direction="row"
              gap="10px"
              position="absolute"
              bottom="50%"
              right="-1%"
            >
              <Stack
                bgcolor={"#005900"}
                sx={{
                  border: "2px solid #005900",
                  borderRadius: "100px",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#005900",
                  },
                }}
                onClick={() => TwosliderRef.current.slickNext()}
              >
                <IoIosArrowForward
                  style={arrowStyle2}
                  onMouseEnter={() => setArrowStyle2(hoverStyle)}
                  onMouseLeave={() => setArrowStyle2(normalStyle)}
                />
              </Stack>
            </Stack>
          </Stack>
          {/* slider sm */}
          <Stack
            width={"100%"}
            position={"relative"}
            gap={1}
            display={{ xs: "flex", lg: "none" }}
          >
            <Slider ref={TwosliderRef} {...sm_Settings}>
              {bannerImage.map((img, index) => (
                <Stack
                  key={index}
                  width="100vw"
                  height="30vh"
                  sx={{
                    backgroundImage: `url(${img.src})`, // Directly use the image path
                    backgroundSize: "contain",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                  }}
                >
                  {/* <Stack
                  height="100%"
                  direction="column"
                  justifyContent="end"
                  alignItems="start"
                  //   position={"absolute"}
                  gap="10px"
                  sx={{ color: "white" }}
                  pl={4}
                  //   top={"40%"}
                  //   left={"30%"}
                >
                  <Typography fontSize={"60px"}>{img.title}</Typography>
                  <Typography fontSize={"23px"} pl={0.5}>
                    {img.Desc}
                  </Typography>
                </Stack> */}
                </Stack>
              ))}
            </Slider>

            <Stack
              direction="row"
              gap="10px"
              position="absolute"
              bottom="50%"
              left="-9%"
            >
              <Stack
                bgcolor={"#005900"}
                sx={{
                  border: "2px solid #005900",
                  borderRadius: "100px",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#005900",
                  },
                }}
                onClick={() => TwosliderRef.current.slickPrev()}
              >
                <IoIosArrowBack
                  style={arrowStyle1}
                  onMouseEnter={() => setArrowStyle1(hoverStyle)}
                  onMouseLeave={() => setArrowStyle1(normalStyle)}
                />
              </Stack>
            </Stack>

            <Stack
              direction="row"
              gap="10px"
              position="absolute"
              bottom="50%"
              right="-9%"
            >
              <Stack
                bgcolor={"#005900"}
                sx={{
                  border: "2px solid #005900",
                  borderRadius: "100px",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#005900",
                  },
                }}
                onClick={() => TwosliderRef.current.slickNext()}
              >
                <IoIosArrowForward
                  style={arrowStyle2}
                  onMouseEnter={() => setArrowStyle2(hoverStyle)}
                  onMouseLeave={() => setArrowStyle2(normalStyle)}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </ContainerMain>

      <Stack bgcolor={"#007946"} padding={{ xs: 7, md: 5, lg: 10 }} gap={1}>
        <Head1
          fontSize={{ sm: "1.5rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
          color="white"
        >
          Library Collection
        </Head1>
        <Stack
          gap={{ xs: 2, md: 4 }}
          direction={{ xs: "column", md: "row" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {data.map((d) => (
            <Stack
              key={d.id}
              width={{ xs: "100%", md: "45%", lg: "42%", xl: "30%" }}
              direction={"row"}
              gap={3}
              justifyContent={{ xs: "left", lg: "center" }}
              padding={{ xs: "20px", lg: "30px" }}
              borderRadius={"20px"}
              bgcolor={"white"}
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#D2E4D8",
                },
              }}
            >
              {/* Circle Number */}
              <Stack
                className="circle" // Add class for hover targeting
                width={{ xs: "42px", lg: "80px" }}
                height={{ xs: "42px", lg: "80px" }}
                borderRadius={"50%"}
                fontSize={{ xs: "25px", lg: "40px" }}
                color={"white"}
                alignItems={"center"}
                justifyContent={"center"}
                border={"1px solid #E0E0E0"}
                bgcolor={"#005900"} // Default circle background
                sx={{
                  transition: "all 0.3s ease", // Smooth transition for hover effect
                }}
              >
                {d.id}
              </Stack>
              <Stack>
                <ParaNormal
                  fontWeight={600}
                  fontSize={{ sm: "15px", smm: "25px", md: "27px", lg: "30px" }}
                >
                  {d.title}
                </ParaNormal>
                <ParaNormal
                  fontSize={{ sm: "12px", smm: "15px", md: "18px", lg: "22px" }}
                  style={{
                    lineHeight: "1.5",
                  }}
                >
                  {d.des}
                </ParaNormal>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default SdmhLibrary;
