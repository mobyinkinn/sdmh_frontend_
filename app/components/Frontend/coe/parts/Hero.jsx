"use client";
import { Box, Stack, Typography } from "@mui/material";
import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";
import Spinner from "@/app/components/ui/Spinner";
import { useRouter } from "next/navigation";
import Slider from "react-slick"; // Importing the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

const Hero = () => {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const sliderRef = useRef(null);
  const { data, isLoading, error } = useBannerByPage("centre of excellence");

  if (isLoading) return <Spinner />;

  console.log("Image URLs:", data?.images);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = Array.isArray(data?.images) ? data?.images : [];
  const mobileImages = Array.isArray(data?.mobileimages)
    ? data?.mobileimages
    : [];

  return (
    <Stack width={"100%"}>
      <Box
        display={{
          xxl: "block",
          xl: "block",
          lg: "block",
          md: "block",
          sm: "none",
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <Stack
              key={index}
              width="100vw"
              height="100vh"
              sx={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover", // ✅ Fills the height completely
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                display: "flex",
              }}
            ></Stack>
          ))}
        </Slider>
      </Box>
      <Box display={{ md: "none", sm: "block" }} height={"470px"}>
        <Slider {...settings}>
          {mobileImages.map((img, index) => (
            <Stack
              key={index}
              width="100vw"
              height="100vh"
              sx={{
                backgroundImage: `url(${img})`, // Directly use the image path
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "flex",
              }}
            ></Stack>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
};

export default Hero;
