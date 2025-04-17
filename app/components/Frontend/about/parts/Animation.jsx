
// "use client";
// import React, { useState } from "react";
// import { Box, IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import Image from "next/image";
// import img1 from "./assets/award1.jpg";
// import img2 from "./assets/award2.jpg";
// import img3 from "./assets/award3.jpg";
// import img4 from "./assets/award4.jpg";
// import img5 from "./assets/award5.jpg";

// const allImages = [img1, img2, img3, img4, img5];

// const Slider = () => {
//   const [images, setImages] = useState(allImages);

//   const handleNext = () => {
//     const updated = [...images.slice(1), images[0]];
//     setImages(updated);
//   };

//   const handlePrev = () => {
//     const updated = [
//       images[images.length - 1],
//       ...images.slice(0, images.length - 1),
//     ];
//     setImages(updated);
//   };

//   const getCardStyles = (i) => {
//     const centerIndex = 2;
//     const distance = Math.abs(centerIndex - i);

//     let width = 200;
//     let height = 260;
//     let opacity = 1;

//     if (i === centerIndex) {
//       width = 240;
//       height = 340;
//     } else if (distance === 1) {
//       height = 300;
//       opacity = 0.8;
//     } else if (distance === 2) {
//       opacity = 0.7;
//     }

//     return { width, height, opacity };
//   };

//   return (
//     <Box
//     my={20}
//     position={"relative"}
//       width="100%"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       overflow="hidden"
//     >
//       <IconButton
//         onClick={handlePrev}
//         sx={{
//           position: "absolute",
//           left: 16,
//           top: "50%",
//           zIndex: 10,
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ArrowBackIos />
//       </IconButton>

//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         sx={{ overflow: "hidden", position: "relative" }}
//       >
//         {images.map((src, i) => {
//           const { width, height, opacity } = getCardStyles(i);

//           return (
//             <Box
//               key={i}
//               sx={{
//                 width,
//                 height,
//                 flexShrink: 0,
//                 opacity,
//                 transition: "all 0.6s ease-in-out",
//                 boxShadow: i === 2 ? 5 : 1,
//                 borderRadius: 2,
//                 overflow: "hidden",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Image
//                 src={src}
//                 alt={`slide-${i}`}
//                 width={width}
//                 height={height}
//                 style={{ objectFit: "cover", width: "100%", height: "100%" }}
//               />
//             </Box>
//           );
//         })}
//       </Box>

//       <IconButton
//         onClick={handleNext}
//         sx={{
//           position: "absolute",
//           right: 16,
//           top: "50%",
//           zIndex: 10,
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ArrowForwardIos />
//       </IconButton>
//     </Box>
//   );
// };

// export default Slider;


// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Box, IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import Image from "next/image";
// import img1 from "./assets/award1.jpg";
// import img2 from "./assets/award2.jpg";
// import img3 from "./assets/award3.jpg";
// import img4 from "./assets/award4.jpg";
// import img5 from "./assets/award5.jpg";

// const allImages = [img1, img2, img3, img4, img5];

// const Slider = () => {
//   const [images, setImages] = useState(allImages);
//   const [transitioning, setTransitioning] = useState(false);
//   const containerRef = useRef();

//   const slide = (direction) => {
//     if (transitioning) return;
//     setTransitioning(true);

//     const slider = containerRef.current;
//     if (!slider) return;

//     slider.style.transition = "transform 0.5s ease-in-out";
//     slider.style.transform = `translateX(${
//       direction === "next" ? -200 : 200
//     }px)`;

//     setTimeout(() => {
//       slider.style.transition = "none";
//       slider.style.transform = "translateX(0)";
//       const updated =
//         direction === "next"
//           ? [...images.slice(1), images[0]]
//           : [images[images.length - 1], ...images.slice(0, images.length - 1)];
//       setImages(updated);
//       setTransitioning(false);
//     }, 500);
//   };

//   const getCardStyles = (i) => {
//     const centerIndex = 2;
//     const distance = Math.abs(centerIndex - i);

//     let width = 200;
//     let height = 260;
//     let opacity = 1;

//     if (i === centerIndex) {
//       width = 240;
//       height = 340;
//     } else if (distance === 1) {
//       height = 300;
//       opacity = 0.8;
//     } else if (distance === 2) {
//       opacity = 0.7;
//     }

//     return { width, height, opacity };
//   };

//   return (
//     <Box
//       width="100%"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       overflow="hidden"
//       position={"relative"}
//     >
//       <IconButton
//         onClick={() => slide("prev")}
//         sx={{
//           position: "absolute",
//           left: 16,
//           top: "50%",
//           zIndex: 10,
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ArrowBackIos />
//       </IconButton>

//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         sx={{ width: 1000, overflow: "hidden", position: "relative" }}
//       >
//         <Box ref={containerRef} display="flex">
//           {images.map((src, i) => {
//             const { width, height, opacity } = getCardStyles(i);

//             return (
//               <Box
//                 key={i}
//                 sx={{
//                   width,
//                   height,
//                   flexShrink: 0,
//                   opacity,
//                   transition: "all 0.6s ease-in-out",
//                   boxShadow: i === 2 ? 5 : 1,
//                   borderRadius: 2,
//                   overflow: "hidden",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Image
//                   src={src}
//                   alt={`slide-${i}`}
//                   width={width}
//                   height={height}
//                   style={{ objectFit: "cover", width: "100%", height: "100%" }}
//                 />
//               </Box>
//             );
//           })}
//         </Box>
//       </Box>

//       <IconButton
//         onClick={() => slide("next")}
//         sx={{
//           position: "absolute",
//           right: 16,
//           top: "50%",
//           zIndex: 10,
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ArrowForwardIos />
//       </IconButton>
//     </Box>
//   );
// };

// export default Slider;



// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Box, IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import Image from "next/image";
// import img1 from "./assets/award1.jpg";
// import img2 from "./assets/award2.jpg";
// import img3 from "./assets/award3.jpg";
// import img4 from "./assets/award4.jpg";
// import img5 from "./assets/award5.jpg";

// const allImages = [img1, img2, img3, img4, img5];

// const Slider = () => {
//   const [images, setImages] = useState(allImages);
//   const [direction, setDirection] = useState(null);
//   const containerRef = useRef();

//   const slide = (dir) => {
//     if (direction) return;
//     setDirection(dir);

//     setTimeout(() => {
//       const updated =
//         dir === "next"
//           ? [...images.slice(1), images[0]]
//           : [images[images.length - 1], ...images.slice(0, images.length - 1)];
//       setImages(updated);
//       setDirection(null);
//     }, 500);
//   };

//   const getCardStyles = (i) => {
//     const centerIndex = 2;
//     const distance = Math.abs(centerIndex - i);

//     let width = 200;
//     let height = 260;
//     let opacity = 1;

//     if (i === centerIndex) {
//       width = 240;
//       height = 340;
//     } else if (distance === 1) {
//       height = 300;
//       opacity = 0.8;
//     } else if (distance === 2) {
//       opacity = 0.7;
//     }

//     return { width, height, opacity };
//   };

//   return (
//     <Box
// my={10}
//       width="100%"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       overflow="hidden"
//       position={"relative"}
//     >
//       <IconButton
//         onClick={() => slide("prev")}
//         sx={{
//           position: "absolute",
//           left: 16,
//           top: "50%",
//           zIndex: 10,
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ArrowBackIos />
//       </IconButton>

//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         sx={{overflow: "hidden", position: "relative" }}
//       >
//         <Box
//           ref={containerRef}
//           display="flex"
//           alignItems={"center"}
//           sx={{
//             transform:
//               direction === "next"
//                 ? "translateX(-200px)"
//                 : direction === "prev"
//                 ? "translateX(200px)"
//                 : "translateX(0)",
//             transition: direction ? "transform 0.5s ease-in-out" : "none",
//           }}
//         >
//           {images.map((src, i) => {
//             const { width, height, opacity } = getCardStyles(i);

//             return (
//               <Box
//                 key={i}
//                 sx={{
//                   width,
//                   height,
//                   flexShrink: 0,
//                   opacity,
//                   transition: "all 0.5s ease-in-out",
//                   boxShadow: i === 2 ? 5 : 1,
//                   borderRadius: 2,
//                   overflow: "hidden",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Image
//                   src={src}
//                   alt={`slide-${i}`}
//                   width={width}
//                   height={height}
//                   style={{ objectFit: "cover", width: "100%", height: "100%" }}
//                 />
//               </Box>
//             );
//           })}
//         </Box>
//       </Box>

//       <IconButton
//         onClick={() => slide("next")}
//         sx={{
//           position: "absolute",
//           right: 16,
//           top: "50%",
//           zIndex: 10,
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ArrowForwardIos />
//       </IconButton>
//     </Box>
//   );
// };

// export default Slider;



"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import img1 from "./assets/award1.jpg";
import img2 from "./assets/award2.jpg";
import img3 from "./assets/award3.jpg";
import img4 from "./assets/award4.jpg";
import img5 from "./assets/award5.jpg";
import { Head1 } from "@/app/styledComponents/frontend/Headings";

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
];
const Slider = () => {
  const [images, setImages] = useState(allImages);
  const [direction, setDirection] = useState(null);
    const [currentText, setCurrentText] = useState(allImages[0]);
  
  const containerRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      slide("next");
    }, 1500); // auto-slide every 3 seconds
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
      setDirection(null);
         setCurrentText(updated[0]);
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
    <Stack width="100%" alignItems="center" spacing={2} py={10}>
       <Head1 fontSize={{ md: "2rem", sm: "1.4rem" }}>
              Awards & Accreditation 
            </Head1>
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
        position={"relative"}
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
          sx={{ overflow: "hidden", position: "relative" }}
        >
          <Box
            ref={containerRef}
            display="flex"
            alignItems={"center"}
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
            {images.map((src, i) => {
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
                    src={src.img}
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