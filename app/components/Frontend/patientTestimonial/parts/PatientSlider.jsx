"use client";
import React, { useRef, useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "../parts/assets/quotes.png";
const normalStyle = {
  height: "28px",
  cursor: "pointer",
  width: "28px",
  color: "white",
};

const hoverStyle = {
  height: "28px",
  cursor: "pointer",
  width: "28px",
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
  console.log("bannerImages", groups);
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
      <Box mt={4} display={{ lg: "block", sm: "none" }}>
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
                      padding={"40px 20px"}
                      direction={"row"}
                      key={item?.id}
                      sx={{
                        width: "45%", // Each card takes 22% to allow spacing
                        padding: "10px",
                        backgroundColor: "#D9EADF",
                        borderRadius: "10px",
                      }}
                    >
                      <Stack alignItems={"Center"}>
                        <Box
                          component="img"
                          src={quote.src} // Use src here directly
                          alt="quote"
                          sx={{
                            width: "25%",
                            height: "140px",
                            objectFit: "contain", // or "cover" depending on how you want it to fit
                          }}
                        />

                        <Stack
                          direction={"row"}
                          gap={"20px"}
                          alignItems={"center"}
                        >
                          <Box
                            component="img"
                            sx={{
                              borderRadius: "100%",
                              border: "4px solid",
                              borderColor: "#007946",
                              width: "20%",
                              height: "115px",
                              backgroundImage: `url(${item?.image})`,
                              backgroundSize: "cover",
                            }}
                          />
                          <Divider
                            sx={{
                              borderColor: "#2F5D45",
                              borderWidth: 1,
                              height: "110px",
                            }}
                          />
                          <Stack width={"75%"}>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              dangerouslySetInnerHTML={{
                                __html: item?.message,
                              }}
                            />
                            <Typography variant="h6" mt={1}>
                              {item?.name}
                            </Typography>
                            <Typography fontSize={"10px"}>
                              {item?.designation}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
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
            {groups.map((item, groupIndex) => (
              <Box
                key={groupIndex}
                display="flex"
                justifyContent="space-between"
                gap="20px"
                width={"48%"}
              >
                <Stack
                  width={"100%"}
                  direction={"row"}
                  flexWrap={"wrap"}
                  gap={2}
                  justifyContent={"center"}
                >
                    <Stack
                      padding={"40px 20px"}
                      direction={"row"}
                      key={item?.id}
                      sx={{
                        width: "100%", // Each card takes 22% to allow spacing
                        padding: "10px",
                        backgroundColor: "#D9EADF",
                        borderRadius: "10px",
                      }}
                    >
                      <Stack alignItems={"Center"}>
                        <Box
                          component="img"
                          src={quote.src} // Use src here directly
                          alt="quote"
                          sx={{
                            width: "25%",
                            height: "140px",
                            objectFit: "contain", // or "cover" depending on how you want it to fit
                          }}
                        />

                        <Stack
                          direction={"row"}
                          gap={"20px"}
                          alignItems={"center"}
                        >
                          <Box
                            component="img"
                            sx={{
                              borderRadius: "100%",
                              border: "4px solid",
                              borderColor: "#007946",
                              width: "20%",
                              height: "115px",
                              backgroundImage: `url(${item?.image})`,
                              backgroundSize: "cover",
                            }}
                          />
                          <Divider
                            sx={{
                              borderColor: "#2F5D45",
                              borderWidth: 1,
                              height: "110px",
                            }}
                          />
                          <Stack width={"75%"}>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              dangerouslySetInnerHTML={{
                                __html: item?.message,
                              }}
                            />
                            <Typography variant="h6" mt={1}>
                              {item?.name}
                            </Typography>
                            <Typography fontSize={"10px"}>
                              {item?.designation}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>
        )}
      </Box>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        display={{ lg: bannerImages.length > 1 ? "flex" : "none", sm: "none" }}
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
        display={{ lg: bannerImages.length > 1 ? "block" : "none", sm: "none" }}
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
        display={{ lg: bannerImages.length > 1 ? "block" : "none", sm: "none" }}
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

      <Box mt={4} display={{ lg: "none", sm: "block" }}>
        <Slider ref={DesisliderRef} {...settings}>
          {groups.map((item, groupIndex) => (
            <Box p={1}>
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
                  <Stack
                    padding={"40px"}
                    direction={"row"}
                    key={item?.id}
                    sx={{
                      width: "100%", // Each card takes 22% to allow spacing
                      padding: "10px",
                      backgroundColor: "#A6C9B2",
                      borderRadius: "10px",
                    }}
                  >
                    <Stack alignItems={"Center"}>
                      <Box
                        py={2}
                        component="img"
                        src={quote.src} // Use src here directly
                        alt="quote"
                        sx={{
                          width: "25%",
                          objectFit: "contain", // or "cover" depending on how you want it to fit
                        }}
                      />

                      <Stack
                        direction={"row"}
                        gap={"20px"}
                        alignItems={"center"}
                      >
                        <Stack width={"100%"}>
                          <Typography
                            variant="body2"
                            textAlign={"center"}
                            color="textSecondary"
                            dangerouslySetInnerHTML={{
                              __html: item?.message,
                            }}
                          />
                          <Typography
                            variant="h6"
                            mt={1}
                            textAlign={"center"}
                            color="black"
                          >
                            {item?.name}
                          </Typography>
                          <Typography
                            fontSize={"10px"}
                            textAlign={"center"}
                            color="#005900"
                          >
                            {item?.designation}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
};

export default Designslider;
