// "use client";

// import { useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import { Box } from "@mui/material";
// import img1 from "./assets/1.png";
// import img2 from "./assets/1.png";
// import img3 from "./assets/1.png";
// import img4 from "./assets/1.png";
// import img5 from "./assets/1.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ScrollSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     arrows: false,
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     beforeChange: (oldIndex, newIndex) => {
//       setActiveIndex(newIndex);
//     },
//   };

//   const data = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

//   return (
//     <Box sx={{ py: 10 }}>
//       <Slider {...settings}>
//         {data.map((img, index) => {
//           const isActive = index === activeIndex;

//           return (
//             <Box
//               key={index}
//               p={1}
//               sx={{
//                 transition: "all 0.3s ease",
//                 transform: isActive ? "scale(1.1)" : "scale(0.9)",
//                 opacity: isActive ? 1 : 0.4,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Image
//                 src={img}
//                 alt={`Slide ${index}`}
//                 width={200}
//                 style={{
//                   borderRadius: "12px",
//                 }}
//               />
//             </Box>
//           );
//         })}
//       </Slider>
//     </Box>
//   );
// }


"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box } from "@mui/material";
import img1 from "./assets/1.png";
import img2 from "./assets/1.png";
import img3 from "./assets/1.png";
import img4 from "./assets/1.png";
import img5 from "./assets/1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ScrollSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex);
    },
  };

  const data = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

  return (
    <Box sx={{ py: 10 }}>
      <Slider {...settings}>
        {data.map((img, index) => {
          const position = Math.abs(index - activeIndex);

          // Adjust appearance based on position relative to active
          let scale = 0.8;
          let opacity = 0.3;

          if (position === 0) {
            scale = 1.1;
            opacity = 1;
          } else if (position === 1) {
            scale = 0.95;
            opacity = 0.7;
          } else if (position === 2) {
            scale = 0.85;
            opacity = 0.5;
          }

          return (
            <Box
              key={index}
              p={1}
              sx={{
                transition: "all 0.3s ease",
                transform: `scale(${scale})`,
                opacity: opacity,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={img}
                alt={`Slide ${index}`}
                width={200}
                style={{
                  borderRadius: "12px",
                }}
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}



// "use client";

// import { useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import { Box, Stack } from "@mui/material";
// import img1 from "./assets/award1.jpg";
// import img2 from "./assets/award2.jpg";
// import img3 from "./assets/award3.jpg";
// import img4 from "./assets/award4.jpg";
// import img5 from "./assets/award5.jpg";
// import img6 from "./assets/award6.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ScrollSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     arrows: false,
//     // autoplay:true,
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     beforeChange: (oldIndex, newIndex) => {
//       setActiveIndex(newIndex);
//     },
//   };

// const data = [
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
//     img: img2,
//     heading:
//       "Best Multi-Specialty Hospital in Rajasthan Award in the 2nd Innate Excellence Award, 2014",
//     data: "SDMH was presented the “Best Multi-Specialty Hospital in Rajasthan Award” in the 2nd Innate Excellence Award, 2014 organised on 7th September, 2014 by Dr. S. S. Agarwal, National President, and Indian Medical Association.",
//   },
// ];

//   return (
//     <Box
//       sx={{
//         mt: -6, // Pull it upward
//         px: 0,
//         py: 0,
//         position: "relative",
//         zIndex: 1,
//       }}
//     >
//       <Slider {...settings}>
//         {data.map((img, index) => {
//           let relativePosition = Math.abs(index - activeIndex);
//           const half = Math.floor(data.length / 2);
//           if (relativePosition > half) {
//             relativePosition = data.length - relativePosition;
//           }

//           let scale = 0.8;
//           let opacity = 0.3;

//           if (relativePosition === 0) {
//             scale = 1.2;
//             opacity = 1;
//           } else if (relativePosition === 1) {
//             scale = 1;
//             opacity = 0.7;
//           } else if (relativePosition === 2) {
//             scale = 0.95;
//             opacity = 0.5;
//           }

//           return (
//             <Stack alignItems={"center"} justifyContent={"center"} key={index}>
//               <Stack
//                 p={1}
//                 sx={{
//                   transition: "all 0.3s ease",
//                   transform: `scale(${scale})`,
//                   opacity,
//                   filter: "blur(0.3px)", // optional
//                 }}
//               >
//                 <Image
//                   src={img.img}
//                   alt={`Slide ${index}`}
//                   width={250}
//                   height={250}
//                   style={{ borderRadius: "12px" }}
//                 />
//               </Stack>
//             </Stack>
//           );
//         })}
//       </Slider>
//     </Box>
//   );
// }


// "use client";

// import { useState } from "react";
// import { Box, Stack, IconButton } from "@mui/material";
// import Image from "next/image";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// import img1 from "./assets/award1.jpg";
// import img2 from "./assets/award2.jpg";
// import img3 from "./assets/award3.jpg";
// import img4 from "./assets/award4.jpg";
// import img5 from "./assets/award5.jpg";
// import img6 from "./assets/award6.jpg";

// const data = [img1, img2, img3, img4, img5, img6, img1];

// export default function LayeredSlider() {
//   const [activeIndex, setActiveIndex] = useState(2); // Start from middle

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % data.length);
//   };

//   return (
//     <Box sx={{ position: "relative", height: 400, overflow: "visible" }}>
//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         spacing={0}
//       >
//         {data.map((img, index) => {
//           let relativePos = index - activeIndex;

//           if (relativePos < -Math.floor(data.length / 2)) {
//             relativePos += data.length;
//           } else if (relativePos > Math.floor(data.length / 2)) {
//             relativePos -= data.length;
//           }

//        let scale = 0.8;
//        let opacity = 0.3;
//        let zIndex = 1;
//        let translateX = 0;

//        const baseLeft = 50;
//        const offset = 10;
//        let left = `${baseLeft + relativePos * offset}%`;

//        if (relativePos === 0) {
//          scale = 1;
//          opacity = 1;
//          zIndex = 3;
//        } else if (Math.abs(relativePos) === 1) {
//          scale = 0.9;
//          opacity = 0.6;
//          zIndex = 2;
//        }


//           return (
//             <Box
//               key={index}
//               sx={{
//                 position: "absolute",
//                 top: 0,
//                 left,
//                 transform: `translateX(${translateX}px) scale(${scale})`,
//                 opacity,
//                 zIndex,
//                 transition: "all 0.5s ease",
//               }}
//             >
//               <Image
//                 src={img}
//                 alt={`Slide ${index}`}
//                 width={280}
//                 height={360}
//                 style={{
//                   borderRadius: "20px",
//                   boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
//                 }}
//               />
//             </Box>
//           );
//         })}
//       </Stack>

//       {/* Navigation Buttons */}
//       <IconButton
//         onClick={handlePrev}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: 10,
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ArrowBackIosNewIcon />
//       </IconButton>
//       <IconButton
//         onClick={handleNext}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           right: 10,
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ArrowForwardIosIcon />
//       </IconButton>
//     </Box>
//   );
// }
