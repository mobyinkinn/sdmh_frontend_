"use client";
import React, { useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const normalStyle = {
  height: "30px",
  cursor: "pointer",
  width: "30px",
  color: "white",
};

const hoverStyle = {
  height: "30px",
  cursor: "pointer",
  width: "30px",
  color: "white",
};
const Designslider = ({
  bannerImages,
  position,
  width,
  slidesToShow,
  bottom,
  groups,
  padding,
  paddinginner,
}) => {
  console.log("bannerImages", bannerImages);
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const DesisliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: false, // Add dots for debugging
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
  };
  const handleDotClick = (index) => {
    setActiveSlide(index);
    DesisliderRef.current.slickGoTo(index);
  };

  return (
    <Stack
      sx={{
        position: { position },
        width: { width },
        right: "0%",
        top: "35%",
        height: "100%",
      }}
    >
      <Box mt={4}>
        {bannerImages.length > 1 ? (
          <Slider ref={DesisliderRef} {...settings}>
            {bannerImages.map((group, groupIndex) => (
              <Box
                key={groupIndex}
                display="flex"
                justifyContent="space-between"
                gap="20px"
                width={"100%"}
              >
                <Stack
                  width={"100%"}
                  direction={"row"}
                  flexWrap={"wrap"}
                  gap={2}
                  justifyContent={"center"}
                >
                  {group?.map((item) => (
                    <Stack
                      direction={"row"}
                      key={item?.id}
                      sx={{
                        width: "45%", // Each card takes 22% to allow spacing
                        padding: "10px",
                        backgroundColor: "#D9EADF",
                        borderRadius: "10px",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          borderRadius: "100%",
                          border: "4px solid",
                          borderColor: "#007946",
                          width: "160px",
                          height: "160px",
                          backgroundImage: `url(${item?.image})`,
                          //   backgroundSize: "cover",
                          //   backgroundPosition: "center",
                          //   borderRadius: "10px",
                        }}
                      />
                      <Typography variant="h6" mt={2}>
                        {item?.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item?.message}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            ))}
          </Slider>
        ) : (
          <Stack
            width={"100%"}
            direction={"row"}
            flexWrap={"wrap"}
            gap={2}
            justifyContent={"center"}
          >
            {groups?.map((item) => (
              <Box
                key={item?.id}
                sx={{
                  width: "45%", // Each card takes 22% to allow spacing
                  padding: "10px",
                  backgroundColor: "#D9EADF",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "150px",
                    backgroundImage: `url(${item?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                  }}
                />
                <Typography variant="h6" mt={2}>
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item?.message}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
      </Box>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        display={bannerImages.length > 1 ? "flex" : "none"}
        gap={2}
        mt={4}
      >
        {bannerImages.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: activeSlide === index ? "70px" : "50px",
              height: "3px",
              backgroundColor: activeSlide === index ? "green" : "#B0B0B0",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleDotClick(index)} // Navigate on click
          />
        ))}
      </Stack>
      <Stack
        direction="row"
        gap="10px"
        position="absolute"
        top={bottom}
        right="10%"
        display={bannerImages.length > 1 ? "block" : "none"}
      >
        <Stack
          sx={{
            border: "2px solid #7AAE8D",
            borderRadius: "100px",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          onClick={() => DesisliderRef.current.slickPrev()}
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
        top={bottom}
        right="7%"
        display={bannerImages.length > 1 ? "block" : "none"}
      >
        <Stack
          sx={{
            border: "2px solid #005900",
            borderRadius: "100px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#005900",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          onClick={() => DesisliderRef.current.slickNext()}
        >
          <IoIosArrowForward
            style={arrowStyle2}
            onMouseEnter={() => setArrowStyle2(hoverStyle)}
            onMouseLeave={() => setArrowStyle2(normalStyle)}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Designslider;
