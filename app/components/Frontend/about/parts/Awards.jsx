"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { autocompleteClasses, Box, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "./assets/award1.png";
import img2 from "./assets/award2.png";
import img3 from "./assets/award3.png";
import img4 from "./assets/award4.png";
import img5 from "./assets/award5.png";
import img6 from "./assets/award6.png";
import img7 from "./assets/award7.png";
import { useState } from "react";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";

const initialImages = [img1, img2, img3, img4, img5, img6, img7];

export default function Awards() {
  const [center, setCenter] = useState(initialImages);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };

  function swapImages(a) {
    const images = [...center];
    let temp = images[a].src;
    images[a].src = images[0].src;
    images[0].src = temp;
    setCenter(images);
  }

  const changeImage = (e) => {
    setTimeout(() => swapImages(Number(e.target.classList[1])), 100);
  };

  return (
    <ContainerMain padding="0" alignItems="center" id="awards">
      <Stack
        gap={"10px"}
        padding={{ md: "50px", xs: "20px" }}
        sx={{
          paddingBottom: "20px",
          borderBottom: "1px solid #2D2D2D",
          width: { md: "90%" },
        }}
      >
        <Head1 fontSize={{ md: "2rem", sm: "1.4rem" }}>
          Awards & Accreditation
        </Head1>
        <Head3 color="black">
          BEST PLACES TO WORK IN HEALTHCARE IN INDIA BY
        </Head3>
        <Head3 color="black">"HOSMAC" AND "PEOPLE STRONG"</Head3>
      </Stack>
      <ParaNormal
        width={{ sm: "100%", smm: "100%", md: "70%", lg: "70%" }}
        textAlign="center"
      >
        SDMH was placed among the top three "Best Places to Work in 2
        Healthcare" in India by "Hosmac" and "People Strong on 10th February,
        2013.
      </ParaNormal>
      <Stack
        width={"100%"}
        position={"relative"}
        height="60vh"
        alignItems={"center"}
        justifyContent={"end"}
        marginTop={"30px"}
        marginBottom={"40px"}
        display={{ md: "flex", xs: "none" }}
      >
        <Stack
          sx={{
            backgroundImage: `url(${center[0].src})`,
            backgroundSize: "cover",
            position: "absolute",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "35%",
            height: "50vh",
            zIndex: "100",
            border: "6px solid #476C9B",
          }}
          onMouseEnter={changeImage}
          className="0"
        ></Stack>
        <Stack
          sx={{
            backgroundImage: `url(${center[1].src})`,
            backgroundSize: "cover",
            position: "absolute",
            backgroundPosition: "center top",

            border: "6px solid #476C9B",
            backgroundRepeat: "no-repeat",
            width: "15%",
            height: "40vh",
            zIndex: "90",
            left: "60%",
          }}
          onMouseEnter={changeImage}
          className="1"
        ></Stack>
        <Stack
          sx={{
            backgroundImage: `url(${center[2].src})`,
            backgroundSize: "cover",
            position: "absolute",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "15%",
            border: "6px solid #476C9B",
            height: "30vh",
            zIndex: "80",
            left: "68%",
          }}
          onMouseEnter={changeImage}
          className="2"
        ></Stack>
        <Stack
          sx={{
            backgroundImage: `url(${center[3].src})`,
            backgroundSize: "cover",
            zIndex: "70",
            position: "absolute",
            border: "6px solid #476C9B",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "15%",
            height: "20vh",
            zIndex: "70",
            left: "75%",
          }}
          onMouseEnter={changeImage}
          className="3"
        ></Stack>
        <Stack
          sx={{
            backgroundImage: `url(${center[4].src})`,
            zIndex: "60",
            backgroundSize: "cover",
            border: "6px solid #476C9B",
            position: "absolute",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "15%",
            height: "40vh",
            zIndex: "70",
            right: "60%",
          }}
          onMouseEnter={changeImage}
          className="4"
        ></Stack>
        <Stack
          sx={{
            backgroundImage: `url(${center[5].src})`,
            backgroundSize: "cover",
            zIndex: "50",
            border: "6px solid #476C9B",
            position: "absolute",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "15%",
            height: "30vh",
            zIndex: "60",
            right: "68%",
          }}
          onMouseEnter={changeImage}
          className="5"
        ></Stack>
        <Stack
          sx={{
            backgroundImage: `url(${center[6].src})`,
            backgroundSize: "cover",
            zIndex: "50",
            position: "absolute",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            border: "6px solid #476C9B",
            width: "15%",
            height: "20vh",
            zIndex: "50",
            right: "75%",
          }}
          onMouseEnter={changeImage}
          className="6"
        ></Stack>
      </Stack>
      <Stack
        width={"100%"}
        height={"30vh"}
        display={{ md: "none", xs: "flex" }}
      >
        <Slider {...settings}>
          {initialImages.map((img, index) => (
            <ImageCard key={index} img={img} />
          ))}
        </Slider>
      </Stack>
      <ButtonMediumOutline margin="20px 0" color="#007946">
        View More
      </ButtonMediumOutline>
    </ContainerMain>
  );
}

function ImageCard({ img }) {
  return (
    <Stack padding="5px">
      <Stack
        width="100%"
        height="30vh"
        padding="5px"
        backgroundColor="#476C9B"
        borderRadius="5px"
      >
        <Box
          sx={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100%",
            width: "100%",
          }}
        ></Box>
      </Stack>
    </Stack>
  );
}
