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
import { useEffect, useState } from "react";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { useRouter } from "next/navigation";
import { useAwards } from "@/app/components/admin/awards/useAwards";
import Spinner from "@/app/components/ui/Spinner";

const initialImages = [
  { img: img1, data: "data 1 for image 1" },
  { img: img2, data: "data 2 for image 2" },
  { img: img3, data: "data 3 for image 3" },
  { img: img4, data: "data 4 for image 4" },
  { img: img5, data: "data 5 for image 5" },
  { img: img6, data: "data 6 for image 6" },
  { img: img7, data: "data 7 for image 7" },
];

export default function Awards() {
  const router = useRouter();
  const { data, isLoading, error } = useAwards();
  const [center, setCenter] = useState(initialImages);
  useEffect(() => {
    function RotateCenter() {
      setCenter((prev) => {
        let n = prev.length;
        return prev.map((_, i) => prev[(i + 1) % n]);
      });
    }

    const interval = setInterval(RotateCenter, 2200);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (isLoading) return <Spinner />;

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
    // let temp = images[a].img.src;
    // images[a].img.src = images[0].img.src;
    // images[0].img.src = temp;
    // setCenter(images);
    let temp = images[a];
    images[a] = images[0];
    images[0] = temp;
    setCenter(images);
  }

  const changeImage = (e) => {
    setTimeout(() => swapImages(Number(e.target.classList[1])), 100);
  };

  return (
    <Stack overflow={"hidden"}>
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
          <Head1 color="black" fontSize={{ lg: "3rem", sm: "0.8rem" }}>
            "HOSMAC" AND "PEOPLE STRONG"
          </Head1>
        </Stack>
        <ParaNormal
          width={{ sm: "100%", smm: "100%", md: "70%", lg: "70%" }}
          textAlign="center"
        >
          {center[0].data}
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
              backgroundImage: `url(${center[0].img.src})`,
              backgroundSize: "cover",
              position: "absolute",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              width: "35%",
              height: "50vh",
              zIndex: "100",
              border: "6px solid #476C9B",
            }}
            // onMouseEnter={changeImage}
            className="0"
          ></Stack>
          <Stack
            sx={{
              backgroundImage: `url(${center[1].img.src})`,
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
            // onMouseEnter={changeImage}
            className="1"
          ></Stack>
          <Stack
            sx={{
              backgroundImage: `url(${center[2].img.src})`,
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
            // onMouseEnter={changeImage}
            className="2"
          ></Stack>
          <Stack
            sx={{
              backgroundImage: `url(${center[3].img.src})`,
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
            // onMouseEnter={changeImage}
            className="3"
          ></Stack>
          <Stack
            sx={{
              backgroundImage: `url(${center[4].img.src})`,
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
            // onMouseEnter={changeImage}
            className="4"
          ></Stack>
          <Stack
            sx={{
              backgroundImage: `url(${center[5].img.src})`,
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
            // onMouseEnter={changeImage}
            className="5"
          ></Stack>
          <Stack
            sx={{
              backgroundImage: `url(${center[6].img.src})`,
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
            // onMouseEnter={changeImage}
            className="6"
          ></Stack>
        </Stack>
        <Stack
          width={"100%"}
          height={"30vh"}
          display={{ md: "none", xs: "flex" }}
        >
          <Slider {...settings}>
            {data.map((award) => (
              <ImageCard key={award._id} img={award.image} />
            ))}
          </Slider>
        </Stack>
        <ButtonMediumOutline
          margin="20px 0"
          color="#007946"
          onClick={() => router.push(`/award`)}
        >
          View More
        </ButtonMediumOutline>
      </ContainerMain>
    </Stack>
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
            backgroundImage: `url(${img})`,
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
