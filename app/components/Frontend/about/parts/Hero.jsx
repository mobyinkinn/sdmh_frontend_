// "use client";

// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import banner from "./assets/bannerImage.png";
// import { Box, Stack, Typography } from "@mui/material";
// import { Head1, Head2, Head3 } from "@/app/styledComponents/frontend/Headings";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";
// import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";

// const sideNavData = [
//   { id: 0, name: "About", idName: "about" },
//   { id: 1, name: "Overview", idName: "overview" },
//   { id: 2, name: "Inspiration", idName: "inspiration" },
//   { id: 3, name: "Founder", idName: "founder" },
//   { id: 4, name: "Vision And Mission", idName: "vision" },
//   { id: 5, name: "Our Mission", idName: "mission" },
//   { id: 6, name: "Secretery's Message", idName: "message" },
//   { id: 7, name: "Awards", idName: "awards" },
// ];

// export default function Hero() {
//   const { data, isLoading, error } = useBannerByPage("about-us");
//   const handleScroll = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth", // Smooth scrolling
//       block: "start", // Aligns to the top of the section
//     });
//   };

//   return (
//     <ContainerMain
//       gap="0"
//       flexDirection={{ lg: "row", md: "column", smm: "column", sm: "column" }}
//       padding={{lg:"0", md:"20px 0"}}
//       id="about"
//     >
//       {/* <Stack
//         width={{ md: "85%", sm: "90%", smm: "90%" }}
//         height={{ md: "90vh" }}
//         margin="0 auto"
//         sx={{
//           backgroundImage: `url(${data?.banner})`,
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center center",
//         }}
//         justifyContent={"center"}
//         gap={"10px"}
//       >
//         <Stack direction={"row"} margin={"0 auto"}>
//           <Head1 color="black">About&nbsp;</Head1>
//           <Head1 color="#476C9B">SDMH</Head1>
//         </Stack>
//         <ParaNormal textAlign={{ sm: "center", smm: "center", md: "center" }}>
//           It Is a Long Established Fact That a Reader Will Be Distracted By The
//           Readable Content of a Page When Looking At Its Layout. The Point of
//           Using Lorem Ipsum Is That It Has a More-or-less Normal Distribution of
//           Letters, As Opposed To Using 'content Here, Content Here', Making It
//           Look Like Readable English.
//         </ParaNormal>
//       </Stack> */}
//       <Box
//         display={{ md: "flex", sm: "none" }}
//         minHeight={{ md: "322px", lg: "434px", xl: "600px" }}
//         width={"100%"}
//         sx={{
//           backgroundImage: `url(${data?.banner})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//         }}
//       ></Box>

//       <Box
//         display={{ md: "none", sm: "flex" }}
//         minHeight={{ xs: "451px" }}
//         width={"100%"}
//         sx={{
//           backgroundImage: `url(${data?.mobileBanner})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "contain",
//           backgroundPosition: "center center",
//         }}
//       ></Box>
//       <Stack
//         justifyContent={"center"}
//         direction={{ lg: "column", md: "row", sm: "row", xs: "row" }}
//         flexWrap="wrap"
//       >
//         {sideNavData.map((el, i) => {
//           return (
//             <Stack key={i} width={{ lg: "100%", sm: "25%" }}>
//               <Typography
//                 key={i}
//                 textAlign={"center"}
//                 fontSize={{ lg: "1.2rem", sm: "0.7rem" }}
//                 sx={{
//                   padding: { md: "10px 15px", xs: "5px" },
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                   fontSize: { md: "1.2rem", xs: "0.9rem" },
//                   "&:hover": {
//                     backgroundColor: { md: "#007946" },
//                     color: { md: "white", xs: "#007946" },
//                   },
//                 }}
//                 onClick={() => handleScroll(el.idName)}
//               >
//                 {el.name}
//               </Typography>
//             </Stack>
//           );
//         })}
//       </Stack>
//     </ContainerMain>
//   );
// }










"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import banner from "./assets/bannerImage.png";
import { Box, Stack, Typography } from "@mui/material";
import { Head1, Head2, Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";
import styled from "styled-components";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { HiOutlinePlusSmall } from "react-icons/hi2";

const sideNavData = [
  { id: 0, name: "About", idName: "about" },
  { id: 1, name: "Overview", idName: "overview" },
  { id: 2, name: "Inspiration", idName: "inspiration" },
  { id: 3, name: "Founder", idName: "founder" },
  { id: 4, name: "Vision And Mission", idName: "vision" },
  { id: 5, name: "Our Mission", idName: "mission" },
  { id: 6, name: "Secretery's Message", idName: "message" },
  { id: 7, name: "Awards", idName: "awards" },
];
const StyledTitle = styled.li`
  list-style: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0.8rem 0.5rem;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    background-color: #007946;
    color: white;
  }
`;

export default function Hero() {
  const { data, isLoading, error } = useBannerByPage("about-us");
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Aligns to the top of the section
    });
  };

  return (
    <ContainerMain
      gap="0"
      flexDirection={{ lg: "row", md: "column", smm: "column", sm: "column" }}
      padding={{ lg: "0", md: "20px 0" }}
      id="about"
    >
      <Box
        display={{ md: "flex", sm: "none" }}
        minHeight={{ md: "322px", lg: "434px", xl: "600px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Box>

      <Box
        display={{ md: "none", sm: "flex" }}
        minHeight={{ xs: "451px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.mobileBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      ></Box>
      <Stack
        width={{ lg: "21%", sm: "none" }}
        justifyContent={"flex-start"}
        direction={{ lg: "column", md: "row", sm: "row", xs: "row" }}
        flexWrap="wrap"
      >
        <Stack
          bgcolor={"#027845"}
          color={"white"}
          display={{ md: "flex", sm: "none" }}
          className="new active"
          direction={"row"}
          sx={{ justifyContent: "space-between" }}
        >
          About
          <TfiArrowCircleRight style={{ fontSize: "20px", color: "white" }} />
        </Stack>
        {sideNavData.map((el, i) => {
          return (
            <Stack key={i} width={{ lg: "100%", sm: "25%" }}>
              <Typography
                display={"flex"}
                alignItems={"center"}
                justifyContent={{ lg: "space-between", sm: "none" }}
                key={i}
                textAlign={"center"}
                fontSize={{ lg: "0.8rem", sm: "0.7rem" }}
                sx={{
                  padding: { md: "10px 15px", xs: "5px" },
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: { md: "#007946" },
                    color: { md: "white", xs: "#007946" },
                  },
                }}
                onClick={() => handleScroll(el.idName)}
              >
                {el.name}
                <Box display={{ md: "flex", sm: "none" }}>
                  <HiOutlinePlusSmall
                    style={{ fontSize: "20px", color: "white" }}
                  />
                </Box>
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </ContainerMain>
  );
}
