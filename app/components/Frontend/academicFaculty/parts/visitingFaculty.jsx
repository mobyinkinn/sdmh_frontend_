"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import oldMan from "./assests/1.jpg";
import oldMan2 from "./assests/2.jpg";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useRef, useState } from "react";

const normalStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "white",
};

const hoverStyle = {
  ...normalStyle,
  color: "#ccc", // Change color on hover if needed
};

const Faculty = [
  {
    name: "Dr. David McKee",
    designation: "Consultant Neurologist",
    image: oldMan,
    about:
      "The Santokba Durlabhji Institute of Neurosciences (SDIN) and Santokba Durlabhji Memorial Hospital (SDMH) express their gratitude to Dr. David McKee, Consultant Neurologist and Clinical Lead, Greater Manchester Neurosciences Centre (GMNC). Dr. McKee kindly visited the SDIN from February 13-19, 2016 (inclusive). During this period he delivered a lecture ",
  },
  {
    name: "Dr. Ed Wilkins",
    designation: "Consultant Psychiatrist",
    image: oldMan,
    about:
      "Dr. Ramesh Narayan is a renowned psychiatrist with a profound understanding of mental health. He has been a consultant at the Santokba Durlabhji Institute of Neurosciences and Santokba Durlabhji Memorial Hospital since 2005. He is a strong advocate for mental health and has worked closely with the hospital's staff to improve patient care.",
  },
  {
    name: "Dr. David McKee",
    designation: "Consultant Neurologist",
    image: oldMan,
    about:
      "The Santokba Durlabhji Institute of Neurosciences (SDIN) and Santokba Durlabhji Memorial Hospital (SDMH) express their gratitude to Dr. David McKee, Consultant Neurologist and Clinical Lead, Greater Manchester Neurosciences Centre (GMNC). Dr. McKee kindly visited the SDIN from February 13-19, 2016 (inclusive). During this period he delivered a lecture ",
  },
  {
    name: "Dr. Ed Wilkins",
    designation: "Consultant Psychiatrist",
    image: oldMan,
    about:
      "Dr. Ramesh Narayan is a renowned psychiatrist with a profound understanding of mental health. He has been a consultant at the Santokba Durlabhji Institute of Neurosciences and Santokba Durlabhji Memorial Hospital since 2005. He is a strong advocate for mental health and has worked closely with the hospital's staff to improve patient care.",
  },
];

const visitingFaculty = () => {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const TwosliderRef = useRef(null);

  const lg_Settings = {
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
    <Stack>
      <Stack>
        <Stack direction={"row"} py={3} justifyContent={"center"}>
          <Head1 style={{ textAlign: "center" }}>Visiting&nbsp;</Head1>
          <Head1 color="black">Faculty</Head1>
        </Stack>
        {/** Slider for md and above */}
        {/* <Stack
          justifyContent={"center"}
          p={"30px 0"}
          gap={2}
          display={{ xs: "none", md: "flex" }}
          position="relative"
        >
          <Slider ref={TwosliderRef} {...lg_Settings} >
            {Faculty.map((d, i) => (
              <LgSlider key={i} d={d} />
            ))}
          </Slider>

           <Stack
            direction="row"
            gap="10px"
            position="absolute"
            top="0%"
            right="9%"
            zIndex={1}
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
            top="0%"
            right="5%"
            zIndex={1}
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
        </Stack> */}

        {/** sm slider */}
        <Stack
          justifyContent={"center"}
          gap={2}
          display={{ xs: "flex", md: "none" }}
          position="relative"
        >
          <Slider ref={TwosliderRef} {...sm_Settings}>
            {Faculty.map((d, i) => (
              <SmSlider key={i} d={d} />
            ))}
          </Slider>

          <Stack
            direction="row"
            gap="10px"
            position="absolute"
            top="0%"
            right="9%"
            zIndex={1}
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
            bottom="0%"
            right="5%"
            zIndex={1}
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
      <ContainerMain
        flexDirection={{ lg: "row", sm: "column-reverse" }}
        gap={{ lg: "65px", md: "65%", sm: "20px" }}
      >
        <Stack position="relative" width={{ lg: "41%", sm: "100%" }}>
          <Image
            src={oldMan}
            alt=""
            fill
            objectFit="cover"
            objectPosition="center center"
          />
        </Stack>
        <Stack
          width={{ lg: "56%", sm: "100%" }}
          gap={"10px"}
          alignItems={"left"}
          justifyContent={"left"}
        >
          <Head1
            textAlign={{ lg: "left", md: "left", sm: "center" }}
            color="black"
            fontSize={{ lg: "1.8rem", sm: "1.2rem" }}
          >
            Dr.David McKee
          </Head1>
          <ParaNormalSmall textAlign={"justify"} width={"90%"}>
            The Santokba Durlabhji Institute of Neurosciences (SDIN) and
            Santokba Durlabhji Memorial Hospital (SDMH) express their gratitude
            to Dr. David McKee, Consultant Neurologist and Clinical Lead,
            Greater Manchester Neurosciences Centre (GMNC). Dr. McKee kindly
            visited the SDIN from February 13-19, 2016 (inclusive). During this
            period he delivered a lecture (HIV associated Neurology: a rising
            challenge) to the neurology community of Jaipur, India. The lecture
            was widely appreciated and unanimously applauded for its scientific
            content and educational value. During the rest of the week, Dr.
            McKee kindly conducted teaching ward rounds, saw complex neurology
            patients and visited various department facilities at SDMH. He also
            communicated with the Secretary, S.D. Trust and the HOD SDIN
            discussing various areas which could benefit from mutual
            collaboration between GMNC, SDIN and SDMH. The academics office SDMH
            and faculty of SDIN remain beholden to Dr. McKee for having readily
            given SDIN and SDMH so much of his valuable time. We hope to
            continue this collaboration with Dr. McKee and the GMNC, University
            of Manchester, UK.
          </ParaNormalSmall>
        </Stack>
      </ContainerMain>
      <ContainerMain
        flexDirection={{ lg: "row", sm: "column-reverse" }}
        gap={{ lg: "65px", md: "65%", sm: "20px" }}
      >
        <Stack
          width={{ lg: "56%", sm: "100%" }}
          gap={"10px"}
          alignItems={"end"}
          justifyContent={"end"}
        >
          <Head1
            textAlign="left"
            color="black"
            fontSize={{ lg: "1.8rem", sm: "1.2rem" }}
          >
            Dr. Ed Wilkins
          </Head1>
          <ParaNormalSmall textAlign={"justify"} width={"90%"}>
            The Santokba Durlabhji Institute of Neurosciences (SDIN) and
            Santokba Durlabhji Memorial Hospital (SDMH) express their gratitude
            to Dr. Edmund Wilkins, Senior Consultant and renowned infectious
            diseases specialist at North Manchester General Hospital, NHS Trust,
            United Kingdom. Dr. Wilkins had trained in infectious diseases in
            UK, tropical medicine in Africa, clinical microbiology and virology
            with the UK health Protection Agency. Dr. Edmund Wilkins has
            extensive teaching experience and has many national and
            international papers to his credit. Dr. Wilkins delivered a guest
            lecture on Tuberculosis and Immune Reconstitution Inflammatory
            Syndrome (IRIS) on 10 th October, 2016 Monday at 8.30 p.m. at Hotel
            Country Inn, Khasa Kothi Circle, Jaipur Rajasthan. During the rest
            of the week, Dr. Wilkins kindly conducted teaching ward rounds, took
            teaching classes of Department of Pediatrics and visited various
            department facilities at SDMH. The Academics Office SDMH and faculty
            of SDIN remain beholden to Dr. Wilkins for having readily given SDMH
            so much of his valuable time. We hope to continue this collaboration
            with Dr. Wilkins and the GMNC, University of Manchester, UK.
          </ParaNormalSmall>
        </Stack>
        <Stack position="relative" width={{ lg: "41%", sm: "100%" }}>
          <Image
            src={oldMan2}
            alt=""
            fill
            objectFit="cover"
            objectPosition="center center"
          />
        </Stack>
      </ContainerMain>
    </Stack>
  );
};

const SmSlider = ({ d }) => {
  return (
    <Stack
      width="100%"
      height="35vh"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${d.image.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      gap="10px"
    >
      <Stack
        width="202px"
        bgcolor="#4A4A4A99"
        height="35vh"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Stack alignItems="center">
          <Head1 color="white">{d.name}</Head1>
          <ParaNormal color="white">{d.designation}</ParaNormal>
        </Stack>
      </Stack>
    </Stack>
  );
};

const LgSlider = ({ d }) => {
  return (
    <Stack
      width="300px"
      height="35vh"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${d.image.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      gap="10px"
    >
      <Stack
        width="300px"
        bgcolor="#4A4A4A99"
        height="100%"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Stack alignItems="center">
          <Head1 fontSize={{ lg: "30px" }} color="white">
            {d.name}
          </Head1>
          <ParaNormal color="white">{d.designation}</ParaNormal>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default visitingFaculty;
