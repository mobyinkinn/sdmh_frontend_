// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { Stack, Box, Typography } from "@mui/material";

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid2";

// import img1 from "../assets/stories/img1.png";
// import img2 from "../assets/stories/img2.png";
// import img3 from "../assets/stories/img3.png";
// import img4 from "../assets/stories/img4.png";

// export default function PatientStories() {
//   return (
//     <ContainerMain marginTop={"40px"}>
//       <Head1>Patient Stories</Head1>

//       <Stack
//         direction={"row"}
//         height={"70vh"}
//         gap={"20px"}
//         alignItems={"center"}
//         justifyContent={"center"}
//         marginTop={"50px"}
//       >
//         <Stack
//           width={"17%"}
//           height={"40vh"}
//           sx={{
//             backgroundImage: `url(${img3.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             borderRadius: "20px",
//           }}
//         ></Stack>
//         <Stack gap={"20px"} width={"17%"} height={"70vh"}>
//           <Stack
//             height={"40vh"}
//             sx={{
//               backgroundImage: `url(${img1.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               borderRadius: "20px",
//             }}
//           ></Stack>
//           <Stack
//             height={"40vh"}
//             sx={{
//               backgroundImage: `url(${img2.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               borderRadius: "20px",
//             }}
//           ></Stack>
//         </Stack>
//         <Stack
//           width={"17%"}
//           height={"70vh"}
//           sx={{
//             backgroundImage: `url(${img4.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             borderRadius: "20px",
//           }}
//         ></Stack>
//         <Stack gap={"20px"} width={"17%"} height={"70vh"}>
//           <Stack
//             height={"40vh"}
//             sx={{
//               backgroundImage: `url(${img1.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               borderRadius: "20px",
//             }}
//           ></Stack>
//           <Stack
//             height={"40vh"}
//             sx={{
//               backgroundImage: `url(${img2.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               borderRadius: "20px",
//             }}
//           ></Stack>
//         </Stack>
//         <Stack
//           width={"17%"}
//           height={"40vh"}
//           sx={{
//             backgroundImage: `url(${img3.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             borderRadius: "20px",
//           }}
//         ></Stack>
//       </Stack>
//     </ContainerMain>
//   );
// }
"use client";

// import { useState } from "react";
// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { Stack, Box } from "@mui/material";
// import img1 from "../assets/stories/img1.png";
// import img2 from "../assets/stories/img2.png";
// import img3 from "../assets/stories/img3.png";
// import img4 from "../assets/stories/img4.png";

// export default function PatientStories() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   return (
//     <ContainerMain marginTop={"40px"}>
//       <Head1>Patient Stories</Head1>
//       <Stack
//         direction="row"
//         height="70vh"
//         alignItems="center"
//         justifyContent="center"
//         marginTop="50px"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         sx={{
//           position: "relative",
//           width: "80%",
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             left: isHovered ? "0%" : "25%",
//             transition: "all 0.5s ease",
//             width: "50%",
//             height: "100%",
//             backgroundImage: `url(${img1.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "20px",
//             zIndex: isHovered ? 3 : 1,
//           }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             left: isHovered ? "-30%" : "20%",
//             transition: "all 0.5s ease",
//             width: "50%",
//             height: "100%",
//             backgroundImage: `url(${img2.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "20px",
//             zIndex: 2,
//             opacity: isHovered ? 1 : 0,
//           }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             right: isHovered ? "0%" : "25%",
//             transition: "all 0.5s ease",
//             width: "50%",
//             height: "100%",
//             backgroundImage: `url(${img4.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "20px",
//             zIndex: isHovered ? 3 : 1,
//           }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             right: isHovered ? "-30%" : "20%",
//             transition: "all 0.5s ease",
//             width: "50%",
//             height: "100%",
//             backgroundImage: `url(${img3.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "20px",
//             zIndex: 2,
//             opacity: isHovered ? 1 : 0,
//           }}
//         />
//       </Stack>
//     </ContainerMain>
//   );
// }

import { useState } from "react";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Box } from "@mui/material";
import img1 from "../assets/stories/img1.png";
import img2 from "../assets/stories/img2.png";
import img3 from "../assets/stories/img3.png";
import img4 from "../assets/stories/img4.png";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";

export default function PatientStories() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <ContainerMain marginTop={"40px"} alignItems="center">
      <Head1>Patient Stories</Head1>
      <Stack
        onMouseLeave={handleMouseLeave}
        direction="row"
        height="70vh"
        alignItems="center"
        justifyContent="center"
        marginTop="50px"
        sx={{
          position: "relative",
          width: "80%",
        }}
      >
        {/* Center Image - Main */}

        {/* Left Side Image */}
        <Stack
          gap={1}
          width={"25%"}
          sx={{
            transform: isHovered ? "translateX(-10%)" : "translateX(60%)",
            transition: "all 0.5s ease",
          }}
        >
          <Box
            sx={{
              // width: isHovered ? "20%" : "35%",
              height: "34vh",
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              // transform: isHovered ? "translateX(-50%)" : "translateX(-200%)",
              transition: "all 0.5s ease",
              zIndex: 2,
              opacity: isHovered ? 1 : 0.7,
            }}
          />
          <Box
            sx={{
              // width: isHovered ? "20%" : "35%",
              height: "34vh",
              backgroundImage: `url(${img2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              // transform: isHovered ? "translateX(-50%)" : "translateX(-200%)",
              transition: "all 0.5s ease",
              zIndex: 2,
              opacity: isHovered ? 1 : 0.7,
            }}
          />
        </Stack>
        <Box
          onMouseEnter={handleMouseEnter}
          sx={{
            width: "30%",
            height: "70vh",
            backgroundImage: `url(${img4.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            zIndex: 3,
            transition: "all 0.5s ease",
          }}
        />
        {/* Right Side Image */}
        <Stack
          gap={1}
          width={"25%"}
          sx={{
            transform: isHovered ? "translateX(10%)" : "translateX(-60%)",
            transition: "all 0.5s ease",
          }}
        >
          <Box
            sx={{
              // width: "35%",
              height: "34vh",
              backgroundImage: `url(${img2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              // transform: isHovered ? "translateX(50%)" : "translateX(-100%)",
              transition: "all 0.5s ease",
              zIndex: 2,
              opacity: isHovered ? 1 : 0.7,
            }}
          />
          <Box
            sx={{
              // width: "35%",
              height: "34vh",
              backgroundImage: `url(${img3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              // transform: isHovered ? "translateX(50%)" : "translateX(-100%)",
              transition: "all 0.5s ease",
              zIndex: 2,
              opacity: isHovered ? 1 : 0.7,
            }}
          />
        </Stack>

        {/* Left-most Image */}
        <Box
          sx={{
            position: "absolute",
            left: isHovered ? "-10%" : "20%",
            width: "15%",
            height: "35vh",
            backgroundImage: `url(${img4.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            transition: "all 0.5s ease",
            zIndex: 1,
            opacity: isHovered ? 1 : 0.2,
          }}
        />

        {/* Right-most Image */}
        <Box
          sx={{
            position: "absolute",
            right: isHovered ? "-10%" : "20%",
            width: "15%",
            height: "35vh",
            backgroundImage: `url(${img4.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            transition: "all 0.5s ease",
            zIndex: 1,
            opacity: isHovered ? 1 : 0.2,
          }}
        />
      </Stack>
      <Stack alignItems={{ xs: "center", md: "start" }} sx={{ mb: 5 }}>
        <ButtonMediumOutline color="#379237">View All</ButtonMediumOutline>
      </Stack>
    </ContainerMain>
  );
}
