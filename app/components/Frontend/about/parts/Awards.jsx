// "use client";

// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";
// import { autocompleteClasses, Box, Stack } from "@mui/material";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { forwardRef, useEffect, useState } from "react";
// import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
// import { useRouter } from "next/navigation";
// import { useAwards } from "@/app/components/admin/awards/useAwards";
// import Spinner from "@/app/components/ui/Spinner";

// import img1 from "./assets/award1.jpg";
// import img2 from "./assets/award2.jpg";
// import img3 from "./assets/award3.jpg";
// import img4 from "./assets/award4.jpg";
// import img5 from "./assets/award5.jpg";
// import img6 from "./assets/award6.jpg";
// // import img7 from "./assets/award7.png";

// const initialImages = [
//   {
//     img: img1,
//     heading:
//       "Best Places to Work in Healthcare in India by “Hosmac” and “People Strong",
//     data: "SDMH was placed among the top three “Best Places to Work in Healthcare” in India by “Hosmac” and “People Strong” on 10th February, 2013.",
//   },
//   {
//     img: img2,
//     heading: "D.L. Shah Trust Award",
//     data: "SDMH received the D.L. Shah Award from Quality Council of India on the occasion of 12th National Quality Conclave 2017 for its Rehabilitation and Jaipur Foot Project. ",
//   },
//   {
//     img: img3,
//     heading:
//       "Prayatna – effort to eradicate Thalassemia through screening of blood",
//     data: "SDMH was awarded by FICCI for its programme “Prayatna – effort to eradicate Thalassemia through screening of blood” – on 1st September 2014",
//   },
//   {
//     img: img4,
//     heading: "Sat Paul Mittal National Award 2014",
//     data: "SDMH received the prestigious Sat Paul Mittal National Award 2014 for Outstanding Service to Humanity.",
//   },
//   {
//     img: img5,
//     heading: "World’s Best Hospitals 2024 by Newsweek",
//     data: "A HALF-CENTURY OF TRUST, NOW CELEBRATED GLOBALLY. We are excited to share that Santokba Durlabhji Memorial Hospital (SDMH) has been honored as one of the 'World’s Best Hospitals 2024' by Newsweek.",
//   },
//   {
//     img: img6,
//     heading: "Best Multi-Speciality Hospital in Jaipur award by The Week",
//     data: "SDMH has secured the No. 1 position as Jaipur's leading Multispeciality Private Hospital for the fourth consecutive year, receiving the Best Multi-speciality Hospital in Jaipur award from The Week Hansa Research Survey 2023.",
//   },
//   {
//     img: img1,
//     heading:
//       "Best Multi-Specialty Hospital in Rajasthan Award in the 2nd Innate Excellence Award, 2014",
//     data: "SDMH was presented the “Best Multi-Specialty Hospital in Rajasthan Award” in the 2nd Innate Excellence Award, 2014 organised on 7th September, 2014 by Dr. S. S. Agarwal, National President, and Indian Medical Association.",
//   },
// ];

// const Awards = forwardRef((props, ref) => {
//   const router = useRouter();
//   const { data, isLoading, error } = useAwards();
//   const [center, setCenter] = useState(initialImages);

//   useEffect(() => {
//     function RotateCenter() {
//       setCenter((prev) => {
//         let n = prev.length;
//         return prev.map((_, i) => prev[(i + 1) % n]);
//       });
//     }

//     const interval = setInterval(RotateCenter, 1500);
//     return () => clearInterval(interval);
//   }, []);

//   if (isLoading) return <Spinner />;

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1500,
//     arrows: true,
//     slidesToShow: 1,
//     centerMode: true,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     slidesToScroll: 1,
//   };

//   function swapImages(a) {
//     const images = [...center];
//     // let temp = images[a].img.src;
//     // images[a].img.src = images[0].img.src;
//     // images[0].img.src = temp;
//     // setCenter(images);
//     let temp = images[a];
//     images[a] = images[0];
//     images[0] = temp;
//     setCenter(images);
//   }

//   const changeImage = (e) => {
//     setTimeout(() => swapImages(Number(e.target.classList[1])), 100);
//   };

//   return (
//     <Stack overflow={"hidden"}>
//       <ContainerMain
//         ref={ref}
//         padding={{ lg: 0 }}
//         alignItems="center"
//         id="awards"
//       >
//         <Stack
//           gap={"10px"}
//           // padding={{ md: "50px", xs: "20px" }}
//           sx={{
//             paddingBottom: "10px",
//             borderBottom: "1px solid #2D2D2D",
//             width: { md: "90%" },
//           }}
//         >
//           <Head1 fontSize={{ md: "2rem", sm: "1.4rem" }}>
//             Awards & Accreditation
//           </Head1>
//           {/* <Head3 color="black">
//             BEST PLACES TO WORK IN HEALTHCARE IN INDIA BY
//           </Head3>
//           <Head1 color="black" fontSize={{ lg: "3rem", sm: "0.8rem" }}>
//             "HOSMAC" AND "PEOPLE STRONG"
//           </Head1> */}
//         </Stack>
//         <Head4
//           textAlign={{
//             sm: "center",
//             smm: "center",
//             md: "center",
//             lg: "center",
//           }}
//           fontWeight={{ lg: "bold", sm: "bold" }}
//           color="black"
//         >
//           {center[0].heading}
//         </Head4>
//         <ParaNormal
//           width={{ sm: "100%", smm: "100%", md: "70%", lg: "70%" }}
//           textAlign="center"
//         >
//           {center[0].data}
//         </ParaNormal>
        
//         <Stack
//           width={"100%"}
//           height={"30vh"}
//           display={{ md: "none", xs: "flex" }}
//         >
//           <Slider {...settings}>
//             {/* {data.map((award) => (
//               <ImageCard key={award._id} img={award.image} />
//             ))} */}
//             {initialImages.map((img, index) => (
//               <ImageCard key={index} img={img.img} />
//             ))}
//           </Slider>
//         </Stack>
//         {/* <ButtonMediumOutline
//           margin="20px 0"
//           color="#007946"
//           onClick={() => router.push(`/award`)}
//         >
//           View More
//         </ButtonMediumOutline> */}
//       </ContainerMain>
//     </Stack>
//   );
// });

// export default Awards;

// function ImageCard({ img }) {
//   return (
//     <Stack padding="5px">
//       <Stack
//         width="100%"
//         height="30vh"
//         padding="5px"
//         backgroundColor="#476C9B"
//         borderRadius="5px"
//       >
//         <Box
//           sx={{
//             backgroundImage: `url(${img.src})`,
//             backgroundSize: "contain",
//             backgroundPosition: "center center",
//             backgroundRepeat: "no-repeat",
//             height: "100%",
//             width: "100%",
//           }}
//         ></Box>
//       </Stack>
//     </Stack>
//   );
// }



"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Typography, Stack } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import img1 from "./assets/award1.jpg";
import img2 from "./assets/award2.jpg";
import img3 from "./assets/award3.jpg";
import img4 from "./assets/award4.jpg";
import img5 from "./assets/award5.jpg";
import img6 from "./assets/award6.jpg";

const allImages = [
  {
    img: img1,
    heading:
      'Best Places to Work in Healthcare in India by "Hosmac" and "People Strong"',
    data: "SDMH was placed among the top three “Best Places to Work in Healthcare” in India by “Hosmac” and “People Strong” on 10th February, 2013.",
  },
  {
    img: img2,
    heading: "D.L. Shah Trust Award",
    data: "SDMH received the D.L. Shah Award from Quality Council of India on the occasion of 12th National Quality Conclave 2017 for its Rehabilitation and Jaipur Foot Project.",
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
];

const Slider = () => {
  const [images, setImages] = useState(allImages);
  const [direction, setDirection] = useState(null);
  const [currentText, setCurrentText] = useState(allImages[0]);
  const containerRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      slide("next");
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const slide = (dir) => {
    if (direction) return;
    setDirection(dir);

    setTimeout(() => {
      const updated =
        dir === "next"
          ? [...images.slice(1), images[0]]
          : [images[images.length - 1], ...images.slice(0, images.length - 1)];
      setImages(updated);
      setCurrentText(updated[0]);
      setDirection(null);
    }, 500);
  };

  const getCardStyles = (i) => {
    const centerIndex = 2;
    const distance = Math.abs(centerIndex - i);

    let width = 200;
    let height = 260;
    let opacity = 1;

    if (i === centerIndex) {
      width = 240;
      height = 340;
    } else if (distance === 1) {
      height = 300;
      opacity = 0.8;
    } else if (distance === 2) {
      opacity = 0.7;
    }

    return { width, height, opacity };
  };

  return (
    <Stack width="100%" alignItems="center" spacing={2}>
      <Typography variant="h5" textAlign="center" fontWeight={600}>
        {currentText.heading}
      </Typography>
      <Typography variant="body1" maxWidth="800px" textAlign="center">
        {currentText.data}
      </Typography>

      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="relative"
      >
        <IconButton
          onClick={() => slide("prev")}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            zIndex: 10,
            transform: "translateY(-50%)",
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: 1000, overflow: "hidden", position: "relative" }}
        >
          <Box
            ref={containerRef}
            display="flex"
            alignItems="center"
            sx={{
              transform:
                direction === "next"
                  ? "translateX(-200px)"
                  : direction === "prev"
                  ? "translateX(200px)"
                  : "translateX(0)",
              transition: direction ? "transform 0.5s ease-in-out" : "none",
            }}
          >
            {images.map((item, i) => {
              const { width, height, opacity } = getCardStyles(i);

              return (
                <Box
                  key={i}
                  sx={{
                    width,
                    height,
                    flexShrink: 0,
                    opacity,
                    transition: "all 0.5s ease-in-out",
                    boxShadow: i === 2 ? 5 : 1,
                    borderRadius: 2,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={`slide-${i}`}
                    width={width}
                    height={height}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>

        <IconButton
          onClick={() => slide("next")}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            zIndex: 10,
            transform: "translateY(-50%)",
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default Slider;
