// "use client";
// import Image from "next/image";
// import "./card.css";
// import { useTransform, motion, useScroll } from "framer-motion";
// import { useRef } from "react";
// import { Stack } from "@mui/material";
// import { Head3 } from "@/app/styledComponents/frontend/Headings";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";

// const Card = ({
//   i,
//   title,
//   data,
//   img,
// }) => {

//   return (
//     <Stack direction={"row"} p={5}>
//         <Stack width={"70%"} gap={"20px"}>
//           <Head3 color="black" textAlign="left">
//             {title}
//           </Head3>
//           <Stack gap={"10px"}>
//             {data.map((ele, i) => {
//               return (
//                 <ParaNormal fontSize={"20px"} key={i}>
//                   {ele}
//                 </ParaNormal>
//               );
//             })}
//           </Stack>
//         </Stack>

//         <Stack
//           sx={{
//             backgroundImage: `url(${img.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             height: "70vh",
//             width: "35%",
//             borderRadius: "20px",
//           }}
//         ></Stack>

//     </Stack>
//   );
// };

// export default Card;

"use client";
import React from "react";
import Image from "next/image";
import { Stack } from "@mui/material";
import { Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

const Card = ({ i, title, data, img }) => {
  return (
    <Stack
      direction={{ md: "row", xs: "column-reverse" }}
      p={5}
      justifyContent={"space-around"}
      gap={"20px"}
    >
      <Stack
        sx={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: { md: "70vh", xs: "40vh" },
          width: { md: "35%" },
          borderRadius: "20px",
        }}
      ></Stack>
      <Stack width={{ md: "60%" }} gap={"20px"}>
        <Head3 color="#007946" textAlign="left">
          {title}
        </Head3>
        <Stack gap={"10px"}>
          {data.map((ele, i) => (
            <ParaNormal
              fontSize={"20px"}
              key={i}
              style={{ textAlign: "justify" }}
            >
              {ele}
            </ParaNormal>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card;
