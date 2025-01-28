// import { Head1 } from '@/app/styledComponents/frontend/Headings'
// import { ParaNormal } from '@/app/styledComponents/frontend/Para';
// import { Stack } from '@mui/material'
// import React from 'react'
// import image from "./assests/image1.png"
// import Image from 'next/image';
// const InfraAndFacility = () => {
//     const data = [
//       {
//         id: 1,
//         img: image,
//       },
//       {
//         id: 2,
//         img: image,
//       },
//       {
//         id: 3,
//         img: image,
//       },
//       {
//         id: 4,
//         img: image,
//       },
//       {
//         id: 5,
//         img: image,
//       },
//     ];
//   return (
//     <>
//       <Stack bgcolor={"#F9F9F9"} p={5} gap={1}>
//         <Head1 color="#476C9B">Infrastructure & Facilities</Head1>
//         <ParaNormal
//           color="black"
//           style={{ textAlign: "center", padding: "0 100px" }}
//         >
//           Sixty students are admitted every year in the month of September.
//           After three months of admission, the students are examined to judge
//           their suitability for continuing the training through PTS examination.
//         </ParaNormal>
//       </Stack>
//       <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"} gap={2}>
//         {data.map(() => (
//           <Image src={image} width={300}/>
//         ))}
//       </Stack>
//     </>
//   );
// }

// export default InfraAndFacility

import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import image from "./assests/image1.png"; // Replace this with your actual image imports
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";

const InfraAndFacility = () => {
  const data = [
    {
      id: 1,
      img: image,
      title: "Training Facilities",
    },
    {
      id: 2,
      img: image,
      title: "Auditorium",
    },
    {
      id: 3,
      img: image,
      title: "Simulation Lab",
    },
    {
      id: 4,
      img: image,
      title: "PPG Training Room",
    },
    {
      id: 5,
      img: image,
      title: "Counselling Room",
    },
    {
      id: 6,
      img: image,
      title: "SIM Room",
    },
    {
      id: 7,
      img: image,
      title: "Covid Training",
    },
    {
      id: 8,
      img: image,
      title: "Statistician Services",
    },
  ];

  return (
    <>
      <Stack bgcolor={"#F9F9F9"} px={5} pt={5} gap={1}>
        <Head1 color="#476C9B">Infrastructure & Facilities</Head1>
        <ParaNormal
          padding={{ xs: "0", lg: "0 100px" }}
          color="black"
          style={{ textAlign: "center" }}
        >
          Sixty students are admitted every year in the month of September.
          After three months of admission, the students are examined to judge
          their suitability for continuing the training through PTS examination.
        </ParaNormal>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        p={3}
        display={{ xs: "flex", md: "none" }}
      >
        {data.map((item) => {
          if (item.id >= 5) return null;
          return (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                width: "300px",
                height: "200px",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                style={{ filter: "brightness(0.3)" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          );
        })}

        <ButtonSmallOutline color="#007946">View All</ButtonSmallOutline>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        p={3}
        display={{ xs: "none", md: "flex" }}
      >
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              position: "relative",
              width: "300px",
              height: "200px",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src={item.img}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              style={{ filter: "brightness(0.3)" }}
            />
            <Typography
              sx={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default InfraAndFacility;
