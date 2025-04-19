"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import Image1 from "./assets/i1.png";
import Image2 from "./assets/i4.png";
import Image3 from "./assets/i3.png";
import Image from "next/image";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Scholarship = () => {
  const data = [Image1, Image2, Image3];
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const TwosliderRef = useRef(null);

  const sm_Settings = {
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Stack
      bgcolor={"#CEDDCC"}
      p={{ xs: "30px 25px", md: "30px 100px" }}
      gap={1}
    >
      <Stack direction={"row"} p={2} justifyContent={"center"}>
        <Head1
          fontSize={{ sm: "1.3rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
          style={{ textAlign: "center" }}
        >
          Scholarship&nbsp;
        </Head1>
        <Head1
          fontSize={{ sm: "1.3rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
          color="black"
        >
          And&nbsp;
        </Head1>
        <Head1
          fontSize={{ sm: "1.3rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
          style={{ textAlign: "center" }}
        >
          Awards
        </Head1>
      </Stack>
      <ParaNormal
        fontSize={{ sm: "14px", smm: "16px", md: "18px", lg: "25px" }}
        paddingLeft={"16px"}
        paddingRight={"16px"}
        paddingBottom={"16px"}
        textAlign={"center"}
      >
        Since 1995, two students are being awarded a scholarship of Rs.200/- per
        month for a period of 12 months during second and third year from the
        Damyanti Devi Bhanwarlal Mathur Trust. Every year one student is
        selected for Best Student Award on the basis of merit and is awarded
        with Shri Shiv Shanker Sharma award.
      </ParaNormal>
      <Stack
        direction={"row"}
        gap={{ lg: 2, xl: 8 }}
        justifyContent={"center"}
        display={{ xs: "none", lg: "flex" }}
      >
        {data.map((d, i) => (
          <Stack key={i}>
            <Box
              sx={{
                width: "320px",
                height: "485px",

                backgroundImage: `url(${d.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover"
                // backgroundPosition: "center",
              }}
            ></Box>
          </Stack>
        ))}
      </Stack>
      {/* slider sm */}
      <Stack
        width={"100%"}
        position={"relative"}
        gap={1}
        display={{ xs: "flex", lg: "none" }}
      >
        <Slider ref={TwosliderRef} {...sm_Settings}>
          {data.map((d, i) => (
            <SmSlider key={i} d={d} />
          ))}
        </Slider>

        <Stack
          direction="row"
          gap="10px"
          position="absolute"
          bottom="50%"
          left={{ sm: "-4%", md: "0%" }}
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
          right={{ sm: "-4%", md: "0%" }}
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
  );
};

const SmSlider = ({ d, i }) => {
  return (
    <Stack key={i} justifyContent={"center"} alignItems={"center"}>
      <Image src={d} width={262} height={344} />
    </Stack>
  );
};

export default Scholarship;
