"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";

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
    <ContainerMain alignItems="center" id="awards">
      <Stack
        gap={"10px"}
        sx={{
          paddingBottom: "20px",
          borderBottom: "1px solid #2D2D2D",
          width: "90%",
        }}
      >
        <Head1>Awards & Accreditation</Head1>
        <Head1 color="black" fontSize={{ lg: "3rem", sm: "0.8rem" }}>
          BEST PLACES TO WORK IN HEALTHCARE IN INDIA BY
        </Head1>
        <Head1 color="black" fontSize={{ lg: "3rem", sm: "0.8rem" }}>
          "HOSMAC" AND "PEOPLE STRONG"
        </Head1>
      </Stack>
      <ParaNormal width={{lg:"70%", sm:"90%"}} textAlign={{lg:"center", sm:"justify"}}>
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
      <ButtonMediumOutline color="#007946">View More</ButtonMediumOutline>
    </ContainerMain>
  );
}
