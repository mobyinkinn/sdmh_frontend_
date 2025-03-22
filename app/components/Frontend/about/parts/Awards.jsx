"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { autocompleteClasses, Box, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { forwardRef, useEffect, useState } from "react";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { useRouter } from "next/navigation";
import { useAwards } from "@/app/components/admin/awards/useAwards";
import Spinner from "@/app/components/ui/Spinner";

import img1 from "./assets/award1.jpg";
import img2 from "./assets/award2.jpg";
import img3 from "./assets/award3.jpg";
import img4 from "./assets/award4.jpg";
import img5 from "./assets/award5.jpg";
import img6 from "./assets/award6.jpg";
// import img7 from "./assets/award7.png";

const initialImages = [
  {
    img: img1,
    heading:
      "Best Places to Work in Healthcare in India by “Hosmac” and “People Strong",
    data: "SDMH was placed among the top three “Best Places to Work in Healthcare” in India by “Hosmac” and “People Strong” on 10th February, 2013.",
  },
  {
    img: img2,
    heading: "D.L. Shah Trust Award",
    data: "SDMH received the D.L. Shah Award from Quality Council of India on the occasion of 12th National Quality Conclave 2017 for its Rehabilitation and Jaipur Foot Project. ",
  },
  {
    img: img3,
    heading:
      "Prayatna – effort to eradicate Thalassemia through screening of blood",
    data: "SDMH was awarded by FICCI for its programme “Prayatna – effort to eradicate Thalassemia through screening of blood” – on 1st September 2014",
  },
  {
    img: img4,
    heading: "Sat Paul Mittal National Award 2014",
    data: "SDMH received the prestigious Sat Paul Mittal National Award 2014 for Outstanding Service to Humanity.",
  },
  {
    img: img5,
    heading: "World’s Best Hospitals 2024 by Newsweek",
    data: "A HALF-CENTURY OF TRUST, NOW CELEBRATED GLOBALLY. We are excited to share that Santokba Durlabhji Memorial Hospital (SDMH) has been honored as one of the 'World’s Best Hospitals 2024' by Newsweek.",
  },
  {
    img: img6,
    heading: "Best Multi-Speciality Hospital in Jaipur award by The Week",
    data: "SDMH has secured the No. 1 position as Jaipur's leading Multispeciality Private Hospital for the fourth consecutive year, receiving the Best Multi-speciality Hospital in Jaipur award from The Week Hansa Research Survey 2023.",
  },
  {
    img: img1,
    heading:
      "Best Multi-Specialty Hospital in Rajasthan Award in the 2nd Innate Excellence Award, 2014",
    data: "SDMH was presented the “Best Multi-Specialty Hospital in Rajasthan Award” in the 2nd Innate Excellence Award, 2014 organised on 7th September, 2014 by Dr. S. S. Agarwal, National President, and Indian Medical Association.",
  },
];

const Awards = forwardRef((props, ref) => {
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
    return () => clearInterval(interval);
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
      <ContainerMain
        ref={ref}
        padding={{ lg: 0 }}
        alignItems="center"
        id="awards"
      >
        <Stack
          gap={"10px"}
          // padding={{ md: "50px", xs: "20px" }}
          sx={{
            paddingBottom: "10px",
            borderBottom: "1px solid #2D2D2D",
            width: { md: "90%" },
          }}
        >
          <Head1 fontSize={{ md: "2rem", sm: "1.4rem" }}>
            Awards & Accreditation
          </Head1>
          {/* <Head3 color="black">
            BEST PLACES TO WORK IN HEALTHCARE IN INDIA BY
          </Head3>
          <Head1 color="black" fontSize={{ lg: "3rem", sm: "0.8rem" }}>
            "HOSMAC" AND "PEOPLE STRONG"
          </Head1> */}
        </Stack>
        <Head4
          textAlign={{
            sm: "center",
            smm: "center",
            md: "center",
            lg: "center",
          }}
          fontWeight={{ lg: "bold", sm: "bold" }}
          color="black"
        >
          {center[0].heading}
        </Head4>
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
              height: "60vh",
              zIndex: "100",
              border: "6px solid #476C9B",
            }}
            className="0"
          ></Stack>
          <Stack
            sx={{
              backgroundImage: `url(${center[1].img.src})`,
              backgroundSize: "cover",
              position: "absolute",
              backgroundPosition: "center center",
              border: "6px solid #476C9B",
              backgroundRepeat: "no-repeat",
              width: "15%",
              height: "40vh",
              zIndex: "90",
              left: "60%",
            }}
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
            className="6"
          ></Stack>
        </Stack>
        <Stack
          width={"100%"}
          height={"30vh"}
          display={{ md: "none", xs: "flex" }}
        >
          <Slider {...settings}>
            {/* {data.map((award) => (
              <ImageCard key={award._id} img={award.image} />
            ))} */}
            {initialImages.map((img, index) => (
              <ImageCard key={index} img={img.img} />
            ))}
          </Slider>
        </Stack>
        {/* <ButtonMediumOutline
          margin="20px 0"
          color="#007946"
          onClick={() => router.push(`/award`)}
        >
          View More
        </ButtonMediumOutline> */}
      </ContainerMain>
    </Stack>
  );
});

export default Awards;

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
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}
        ></Box>
      </Stack>
    </Stack>
  );
}
