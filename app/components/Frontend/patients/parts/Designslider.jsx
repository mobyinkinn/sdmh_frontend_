"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Head1 } from "@/app/styledComponents/frontend/Headings";

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
  padding,
  paddinginner,
}) => {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const DesisliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: false, // Add dots for debugging
    infinite: true,
    speed: 500,
    // autoplay: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
  };
  const handleDotClick = (index) => {
    setActiveSlide(index);
    DesisliderRef.current.slickGoTo(index);
  };
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust for your mobile breakpoint
  };

  handleResize(); // Initial check
  window.addEventListener("resize", handleResize); // Listen for window resize

  return () => window.removeEventListener("resize", handleResize); // Cleanup
}, []);

  return (
    <Stack>
      <Box>
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
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
                {/* <Stack
                  gap={2}
                  key={group.id}
                  sx={{
                    width: { md: "50%", xs: "90%" }, // Each card takes 22% to allow spacing
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <Head1
                    color="#005900"
                    style={{ textAlign: "left", fontWeight: "none" }}
                  >
                    {group.title}
                  </Head1>
                  <Stack gap={2}>
                    {group.des.map((d, i) => (
                      <ul key={i}>
                        <li style={{ fontSize: "15px", textAlign: "justify" }}>
                          {d}
                        </li>
                      </ul>
                    ))}
                  </Stack>
                </Stack>
                <Image src={group.img} width={450} height={400} objectFit="cover"/> */}

                <Stack
                  key={group.id}
                  direction={{ xs: "column", md: "row" }}
                  gap={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width="100%"
                  flexWrap="wrap"
                  padding="20px"
                >
                  <Stack
                    sx={{
                      width: { xs: "100%", md: "45%" },
                    }}
                    gap={2}
                  >
                    <Head1
                      color="#005900"
                      style={{ textAlign: "left", fontWeight: "none" }}
                      height={{ sm: "60px" }}
                    >
                      {group.title}
                    </Head1>
                    {/* <Stack gap={2}>
                      {group.des.map((d, i) => (
                        <ul key={i}>
                          <li
                            style={{ fontSize: "15px", textAlign: "justify" }}
                          >
                            {d}
                          </li>
                        </ul>
                      ))}
                    </Stack> */}
                    {/* <Stack
                      gap={1}
                      sx={{
                        position: "relative",
                        maxHeight: expanded[group.id] ? "none" : "100px",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      {group.des.map((d, i) => (
                        <ul key={i}>
                          <li
                            style={{ fontSize: "15px", textAlign: "justify" }}
                          >
                            {d}
                          </li>
                        </ul>
                      ))}

                      {!expanded[group.id] && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "40px",
                          }}
                        />
                      )}
                    </Stack> */}
                    <Stack
                      gap={1}
                      sx={{
                        position: "relative",
                        maxHeight:
                          isMobile && !expanded[group.id] ? "100px" : "none",
                        overflow:
                          isMobile && !expanded[group.id]
                            ? "hidden"
                            : "visible",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      {group.des.map((d, i) => (
                        <ul key={i}>
                          <li
                            style={{ fontSize: "15px", textAlign: "justify" }}
                          >
                            {d}
                          </li>
                        </ul>
                      ))}

                      {isMobile && !expanded[group.id] && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "40px",
                          }}
                        />
                      )}
                    </Stack>

                    {isMobile && (
                      <Typography
                        sx={{
                          mt: 1,
                          cursor: "pointer",
                          color: "green",
                          fontWeight: 500,
                          fontSize: "14px",
                          alignSelf: "flex-start",
                        }}
                        onClick={() => toggleExpand(group.id)}
                      >
                        {expanded[group.id] ? "Show Less ▲" : "Read More ▼"}
                      </Typography>
                    )}

                  </Stack>

                  <Box
                    sx={{
                      width: { xs: "100%", md: "45%" },
                      height: { xs: "250px", md: "400px" },
                      position: "relative",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={group.img}
                      alt={group.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={4}
      >
        {bannerImages.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: activeSlide === index ? "100px" : "50px",
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
    </Stack>
  );
};

export default Designslider;
