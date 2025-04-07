"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import hoverbg from "../assets/years.jpg";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import img1 from "../assets/HoverYears/1958.jpg";
import img2 from "../assets/HoverYears/1963.jpg";
import img3 from "../assets/HoverYears/1969.jpg";
import img4 from "../assets/HoverYears/1971.jpg";
import img5 from "../assets/HoverYears/1976.jpg";
import img6 from "../assets/HoverYears/1985.jpg";
import img7 from "../assets/HoverYears/1996.jpg";
import img8 from "../assets/HoverYears/2008.jpg";
import img9 from "../assets/HoverYears/2011.jpg";
import img10 from "../assets/HoverYears/2014.jpg";
import img11 from "../assets/HoverYears/2016.jpg";
import img12 from "../assets/HoverYears/2017.jpg";
import img13 from "../assets/HoverYears/2018.jpg";
import img14 from "../assets/HoverYears/2019.jpg";
import img15 from "../assets/HoverYears/2020.jpg";

import Image from "next/image";
const HoverYears = () => {
  const [planetData, setPlanetData] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0); // Track hovered index

  // Years array
  const years = [
    "1958",
    "1963",
    "1969",
    "1971",
    "1976",
    "1985",
    "1996",
    "2008",
    "2011",
    "2014",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

 
const responsibility = [
  {
    Year: "1958",
    Title: "Santokba Durlabhji Trust Created",
    Desc: "Santokba Durlabhji Trust was created with an objective to help mankind. The Trust was named after Late. Smt. Santokba and Late Shree Durlabhji Bhai.",
    img: img1,
    height: "50vh",
  },
  {
    Year: "1963",
    Title: "Santokba Durlabhji Diagnostic Clinic established",
    Desc: "As the modest beginning, a diagnostic clinic was established in front of SMS Hospital.",
    img: img2,
    height: "54vh",
  },
  {
    Year: "1969",
    Title: "Nursing Home started for three specialties",
    Desc: "The trust started a Nursing Home with only three specialties.",
    img: img3,
    height: "58vh",
  },
  {
    Year: "1971",
    Title: "Santoka Durlabhji Memorial Hospital started",
    Desc: "Santokba Durlabhji Memorial Hospital, the institute that redefined healthcare in Rajasthan was inaugurated with only six specialties and 70 beds by then Prime Minister Smt. Indira Gandhi.",
    img: img4,
    height: "47vh",
  },
  {
    Year: "1976",
    Title: "Nursing School founded",
    Desc: "Santokba Durlabhji School of Nursing was founded to train Florence Nightingales of future. The school helped provide quality Nursing Care in the hospital.",
    img: img5,
    height: "50vh",
  },
  {
    Year: "1985",
    Title: "Rehabilitation Aids and Limb Fitting Centre Founded",
    Desc: "The Department of Rehabilitation Aids and Limb Fitting Centre was founded in SDMH by Dr. P. K. Sethi, the founder of Jaipur Foot.",
    img: img6,
    height: "50vh",
  },
  {
    Year: "1996",
    Title: "Avedna Ashram started",
    Desc: "One of the few hospices in the country, Avedna Ashram was started in SDMH to help provide free care and accommodation to the terminally ill",
    img: img7,
    height: "50vh",
  },
  {
    Year: "2008",
    Title: "NABL Accreditation",
    Desc: "2008 – NABL Accreditation SDMH Laboratories were among the first to be recognized by NABL for its high standards.",
    img: img8,
    height: "53vh",
  },
  {
    Year: "2011",
    Title: "Inauguration of RDMC",
    Desc: "The only dedicated OPD building of the state, Rashmikant Durlabhji Medi Centre, was started.",
    img: img9,
    height: "53vh",
  },
  {
    Year: "2014",
    Title: "NABH Accreditation",
    Desc: "The hospital received NABH Accreditation, an accreditation provided by Quality Council of India certifying the adherence to standard protocols for quality care to patients.",
    img: img10,
    height: "50vh",
  },
  {
    Year: "2016",
    Title: "New Emergency",
    Desc: "SDMH started its new Emergency Wing with an enhanced number of beds and improved infrastructure to cater to any medical emergency.",
    img: img11,
    height: "50vh",
  },
  {
    Year: "2017",
    Title: "Free OPD Clinic",
    Desc: "In addition to the Outreach Services, SDMH also started Free OPD Clinic, one of the very few clinics in the state to provide quality medical service to the weaker section of society at no cost to them",
    img: img12,
    height: "46vh",
  },
  {
    Year: "2018",
    Title: "Inauguration of Nursing College",
    Desc: "SDMH inaugurated its new offering to the state, Santokba Durlabhji College of Nursing and Paramedical Sciences to provide quality nursing and para-medical education.",
    img: img13,
    height: "49vh",
  },
  {
    Year: "2019",
    Title: "Telemedicine",
    Desc: "SDMH has initiated the introduction of Telemedicine in different villages of the state, and also in neighboring states, so that the gap between rural and urban care is greatly reduced. Connect with doctors of SDMH digitally. Download SDMH Teleconsultation App from playstore. https://youtu.be/vX1_m9or5cs",
    img: img14,
    height: "43vh",
  },
  {
    Year: "2020",
    Title: "",
    Desc: "SDMH, the biggest and oldest private hospital of the state, added another feather in its cap today when it introduced its own IPD pharmacy services named ‘SDMH Pharmacy’ on Ground, 3rd and 4th floor. The pharmacy services shall function 24 x7 to provide the quality medicine at reasonable prices. Bedside medicine delivery to admitted patients will provide comfort to patient’s attendants during the tough time.",
    img: img15,
    height: "39vh",
  },
];



  const clickUpArrow = () => {
    if (hoveredIndex > 0) {
      setPlanetData((index) => index - 1);
      setHoveredIndex((index) => index - 1);
    } else {
      setPlanetData(responsibility.length - 1);
      setHoveredIndex(responsibility.length - 1);
    }
  };
  const clickDownArrow = () => {
    if (hoveredIndex < responsibility.length - 1) {
      setPlanetData((index) => index + 1);
      setHoveredIndex((index) => index + 1);
    } else {
      setPlanetData(0);
      setHoveredIndex(0);
    }
  };

//   return (
//     <ContainerMain bgColor={"#476C9B"}>
//       <Typography
//         color="#FFFFFF"
//         fontSize={{ xs: "20px", smm: "40px", md: "55px" }}
//         textAlign={"center"}
//         fontWeight={"bold"}
//       >
//         SDMH Through These Years
//       </Typography>
//       <Typography
//         color="#FFFFFF"
//         textAlign={"center"}
//         fontSize={{ xs: "15px", smm: "22px", md: "30px" }}
//       >
//         50 Years of Care & Compassion
//       </Typography>
//       <Stack
//         padding={{ xs: "10px 0px", smm: "40px 80px" }}
//         direction={{ xs: "column", md: "row" }}
//       >
//         <Stack
//           gap={{ md: "13px", xs: "10px" }}
//           width={{ xs: "100%", md: "50%" }}
//           height={{ md: "96vh", xs: "70vh" }}
//           paddingLeft={"20px"}
//           sx={{
//             cursor: "pointer",
//             backgroundImage: `url(${hoverbg.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             justifyContent: "center",
//           }}
//         >
//           <TfiArrowCircleUp
//             color="green"
//             style={{
//               width: { md: "22px", xs: "10px" },
//               height: { md: "22px", xs: "10px" },
//             }}
//             onClick={clickUpArrow}
//           />
//           {years.map((year, index) => (
//             <Stack
//               key={index}
//               direction={"row"}
//               alignItems={"center"}
//               gap={{ md: "10px", xs: "8px" }}
//               onClick={() => {
//                 setPlanetData(index);
//                 setHoveredIndex(index);
//               }}
//             >
//               <Stack
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 sx={{
//                   width: hoveredIndex === index ? "22px" : "15px", // Adjusted for better visibility
//                   height: hoveredIndex === index ? "22px" : "15px",
//                   borderRadius: "100%",
//                   border: "2px solid green",
//                   backgroundColor: "transparent",
//                   transition: "all 0.3s ease-in-out",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: "15px", // Adjusted for better visibility
//                     height: "15px",
//                     borderRadius: "100%",
//                     bgcolor: "green",
//                   }}
//                 />
//               </Stack>
//               <Box
//                 sx={{
//                   cursor: "pointer",
//                   fontWeight: planetData === index ? "bold" : "normal",
//                   color: "green",
//                 }}
//               >
//                 {year}
//               </Box>
//             </Stack>
//           ))}
//           <TfiArrowCircleDown
//             color="green"
//             style={{ width: "22px", height: "22px" }}
//             onClick={clickDownArrow}
//           />
//         </Stack>
//         <Stack
//           width={{ xs: "100%", md: "50%" }}
//           height={{ md: "96vh", xs: "70vh" }}
//           gap={"12px"}
//           padding={"30px 30px 10px 30px"}
//           bgcolor={"#FBF6EE"}
//           fontSize={{ md: "1rem", xs: "0.8rem" }}
//         >
//           {responsibility.map((el, i) => {
//             console.log("el:", el);
//             return (
//               <Stack key={i}>
//                 <Typography
//                   fontWeight={"bold"}
//                   fontSize={{
//                     xs: "30px",
//                     smm: "50px",
//                     md: "80px",
//                     lg: "100px",
//                   }}
//                 >
//                   {el.Year}
//                 </Typography>
//                 <Typography fontWeight={"bold"}>{el.Title}</Typography>
//                 <Typography>{el.Desc}</Typography>
//                 {console.log("el.height:", el.height)}
//                 <Box>
//                   {console.log("Height:", el.height)} {/* Log the height */}
//                   {el.img && (
//                     <Box
//                       mt={2}
//                       sx={{
//                         backgroundImage: `url(${el.img.src})`,
//                         backgroundPosition: "center center",
//                         backgroundSize: "cover",
//                         width: { xs: "40%", md: "50%", lg: "100%" },
//                         height: {
//                           xs: "121px",
//                           md: "142px",
//                           lg: "340px",
//                           xl: el.height,
//                         },
//                       }}
//                     >
//                       {console.log("Height value applied:", el.height)}
//                     </Box>
//                   )}
//                 </Box>
//                 {/* <Image src={el.img} alt="" fill objectFit="contain" /> */}
//               </Stack>
//             );
// })}
//         </Stack>
//       </Stack>
//     </ContainerMain>
//   );
return (
  <ContainerMain bgColor={"#476C9B"}>
    <Typography
      color="#FFFFFF"
      fontSize={{ xs: "20px", smm: "40px", md: "55px" }}
      textAlign={"center"}
      fontWeight={"bold"}
    >
      SDMH Through These Years
    </Typography>
    <Typography
      color="#FFFFFF"
      textAlign={"center"}
      fontSize={{ xs: "15px", smm: "22px", md: "30px" }}
    >
      50 Years of Care & Compassion
    </Typography>
    <Stack
      padding={{ xs: "10px 0px", smm: "40px 80px" }}
      direction={{ xs: "column", md: "row" }}
    >
      <Stack
        gap={{ md: "13px", xs: "10px" }}
        width={{ xs: "100%", md: "50%" }}
        height={{ md: "96vh", xs: "70vh" }}
        paddingLeft={"20px"}
        sx={{
          cursor: "pointer",
          backgroundImage: `url(${hoverbg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          justifyContent: "center",
        }}
      >
        <TfiArrowCircleUp
          color="green"
          style={{
            width: { md: "22px", xs: "10px" },
            height: { md: "22px", xs: "10px" },
          }}
          onClick={clickUpArrow}
        />
        {years.map((year, index) => (
          <Stack
            key={index}
            direction={"row"}
            alignItems={"center"}
            gap={{ md: "10px", xs: "8px" }}
            onClick={() => {
              setPlanetData(index); // Set the active year data
              setHoveredIndex(index);
            }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: hoveredIndex === index ? "22px" : "15px",
                height: hoveredIndex === index ? "22px" : "15px",
                borderRadius: "100%",
                border: "2px solid green",
                backgroundColor: "transparent",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Box
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "100%",
                  bgcolor: "green",
                }}
              />
            </Stack>
            <Box
              sx={{
                cursor: "pointer",
                fontWeight: planetData === index ? "bold" : "normal",
                color: "green",
              }}
            >
              {year}
            </Box>
          </Stack>
        ))}
        <TfiArrowCircleDown
          color="green"
          style={{ width: "22px", height: "22px" }}
          onClick={clickDownArrow}
        />
      </Stack>
      <Stack
        width={{ xs: "100%", md: "50%" }}
        height={{ md: "96vh", xs: "70vh" }}
        gap={"12px"}
        padding={"30px 30px 10px 30px"}
        bgcolor={"#FBF6EE"}
        fontSize={{ md: "1rem", xs: "0.8rem" }}
      >
        {/* Conditionally render only the data for the selected year */}
        <Stack>
          <Typography
            fontWeight={"bold"}
            fontSize={{
              xs: "30px",
              smm: "50px",
              md: "80px",
              lg: "100px",
            }}
          >
            {responsibility[planetData].Year}
          </Typography>
          <Typography fontWeight={"bold"}>
            {responsibility[planetData].Title}
          </Typography>
          <Typography>{responsibility[planetData].Desc}</Typography>
          <Box>
            {responsibility[planetData].img && (
              <Box
                mt={2}
                sx={{
                  backgroundImage: `url(${responsibility[planetData].img.src})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  width: { xs: "40%", md: "50%", lg: "100%" },
                  height: responsibility[planetData].height, // Use the height of the selected year
                }}
              />
            )}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  </ContainerMain>
);

};

export default HoverYears;
