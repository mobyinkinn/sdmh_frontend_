// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";
// import { Box, Stack } from "@mui/material";
// import React from "react";

// const TheDeanery = () => {
//   const data = [
//     {
//       id: 1,
//       des: "Monitors and facilitates DNB programmes (the Associate Dean is also the DNB Coordinator); provides support to the DNB students; facilitates teaching and training; monitors progress and encourages academic development of DNB students and departments.  Maintains an academic calendar on the SDMH website.  Helps scrutinize scientific and ethical standards (with the Scientific & Ethical committees) of DNB thesis protocols, theses, research publications etc.",
//     },
//     {
//       id: 2,
//       des: "Helps upgrade the SDMH library. SDMH library provides rich sources of reference material (books, journals, e-resources) and uses the renowned KOHA Library Management System.  Encourages visiting educational programs by senior faculty from international centres at the UK, USA etc.  Facilitates educational clinical placements at SDMH for visiting residents and students from overseas e.g. Sweden, Netherlands, Denmark, Bangladesh, UK etc.",
//     },
//   ];
//   return (
//     <ContainerMain backgroundColor={"#F9F9F9"}>
//       <Stack direction={"row"} justifyContent={"center"}>
//         <Head1 color="black">The&nbsp;</Head1>
//         <Head1 color="#007946">Deanery</Head1>
//       </Stack>
//       <Stack gap={4}>
//         {data.map((d) => (
//           <Stack direction={"row"} gap={3} bgcolor={"white"} justifyContent={"center"} padding={"30px 0"} borderRadius={"20px"}>
//             <Stack
//               width={"3%"}
//               height={"42px"}
//               bgcolor={"#005900"}
//               borderRadius={"50px"}
//               fontSize={"25px"}
//               color={"white"}
//               alignItems={"center"}
//               justifyContent={"center"}
//             >
//               {d.id}
//             </Stack>
//             <ParaNormal style={{ width: "90%" }}>{d.des}</ParaNormal>
//           </Stack>
//         ))}
//       </Stack>
//     </ContainerMain>
//   );
// };

// export default TheDeanery;

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack } from "@mui/material";
import React from "react";

const TheDeanery = () => {
  const data = [
    {
      id: 1,
      des: "Monitors and facilitates DNB programmes (the Associate Dean is also the DNB Coordinator); provides support to the DNB students; facilitates teaching and training; monitors progress and encourages academic development of DNB students and departments. Maintains an academic calendar on the SDMH website. Helps scrutinize scientific and ethical standards (with the Scientific & Ethical committees) of DNB thesis protocols, theses, research publications etc.",
    },
    {
      id: 2,
      des: "Helps upgrade the SDMH library. SDMH library provides rich sources of reference material (books, journals, e-resources) and uses the renowned KOHA Library Management System. Encourages visiting educational programs by senior faculty from international centres at the UK, USA etc. Facilitates educational clinical placements at SDMH for visiting residents and students from overseas e.g. Sweden, Netherlands, Denmark, Bangladesh, UK etc.",
    },
  ];

  return (
    <ContainerMain backgroundColor={"#F9F9F9"}>
      <Stack direction={"row"} justifyContent={"center"}>
        <Head1 color="black">The&nbsp;</Head1>
        <Head1 color="#007946">Deanery</Head1>
      </Stack>
      <Stack gap={4}>
        {data.map((d) => (
          <Stack
            key={d.id}
            direction={"row"}
            gap={3}
            justifyContent={"center"}
            padding={{ md: "30px" }}
            borderRadius={"20px"}
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "white",

                // Apply hover styles to child elements
                "& .circle": {
                  bgcolor: "#007946", // Change circle background
                  color: "#FFFFFF", // Change text color inside the circle
                },
              },
            }}
          >
            {/* Circle Number */}
            <Stack
              className="circle" // Add class for hover targeting
              width={"42px"}
              height={"42px"}
              borderRadius={"50%"}
              fontSize={"25px"}
              color={"#005900"}
              alignItems={"center"}
              justifyContent={"center"}
              border={"1px solid #E0E0E0"}
              bgcolor={"#FFFFFF"} // Default circle background
              sx={{
                transition: "all 0.3s ease", // Smooth transition for hover effect
              }}
            >
              {d.id}
            </Stack>

            {/* Description */}
            <ParaNormal style={{ width: "90%", lineHeight: "1.5" }}>
              {d.des}
            </ParaNormal>
          </Stack>
        ))}
      </Stack>
    </ContainerMain>
  );
};

export default TheDeanery;
