// import { Head1 } from '@/app/styledComponents/frontend/Headings'
// import { ParaNormal } from '@/app/styledComponents/frontend/Para';
// import { Stack } from '@mui/material'
// import React from 'react'
// import img1 from "./assets/img1.png"
// import Image from 'next/image';
// const PatientStories = () => {
//     const data = [
//       {
//         id: 1,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 2,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 3,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 4,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//     ];
//   return (
//     <Stack bgcolor={"#D8E0EB"}>
//       <Stack alignItems={"center"} p={4}>
//         <Head1 color="#005900">Patient Stories</Head1>
//         <ParaNormal color="black" style={{ width: "50%", textAlign: "center" }}>
//           It is a long established fact that a reader will be distracted by the
//           readable
//         </ParaNormal>
//       </Stack>
//       <Stack direction={"row"} flexWrap={"wrap"} gap={3} justifyContent={"center"}>
//         {data.map((d) => (
//           <Stack>
//             <Image src={d.image} width={300}/>
//           </Stack>
//         ))}
//       </Stack>
//     </Stack>
//   );
// }

// export default PatientStories
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import React from "react";
import img1 from "./assets/img1.png";
import Image from "next/image";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";

const PatientStories = () => {
  const data = [
    { id: 1, image: img1, title: "Pre-term Babies" },
    { id: 2, image: img1, title: "Pre-term Babies" },
    { id: 3, image: img1, title: "Pre-term Babies" },
    { id: 4, image: img1, title: "Pre-term Babies" },
    { id: 5, image: img1, title: "Pre-term Babies" },
    { id: 6, image: img1, title: "Pre-term Babies" },
    { id: 7, image: img1, title: "Pre-term Babies" },
    { id: 8, image: img1, title: "Pre-term Babies" },
    { id: 9, image: img1, title: "Pre-term Babies" },
    { id: 10, image: img1, title: "Pre-term Babies" },
    { id: 11, image: img1, title: "Pre-term Babies" },
    { id: 12, image: img1, title: "Pre-term Babies" },
  ];

  // Function to split data into alternating rows
  const splitData = (data) => {
    const rows = [];
    let toggle = true;
    for (let i = 0; i < data.length; ) {
      rows.push(data.slice(i, i + (toggle ? 4 : 3)));
      i += toggle ? 4 : 3;
      toggle = !toggle;
    }
    return rows;
  };

  const rows = splitData(data);

  return (
    <Stack bgcolor={"#D8E0EB"} padding={4}>
      <Stack alignItems={"center"} mb={4}>
        <Head1 color="#005900">Patient Stories</Head1>
        <ParaNormal
          color="black"
          width={{ lg: "50%", md: "50%", smm: "90%", sm: "90%" }}
          style={{ textAlign: "center" }}
        >
          It is a long established fact that a reader will be distracted by the
          readable
        </ParaNormal>
      </Stack>
      {rows.map((row, index) => {
        return (
          <Stack
            key={index}
            direction={"row"}
            gap={3}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            {row.map((item) => (
              <Stack
                key={item.id}
                alignItems={"center"}
                sx={{
                  padding: 2,
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={item.image}
                  width={220}
                  height={300}
                  alt={item.title}
                />
                <ParaNormal>{item.title}</ParaNormal>
              </Stack>
            ))}
          </Stack>
        );
      })}
      <Stack alignItems={"center"}>
        <ButtonSmallOutline
          color="#007946"
          style={{ border: "1px solid #007946" }}
        >
          View All
        </ButtonSmallOutline>
      </Stack>
    </Stack>
  );
};

export default PatientStories;
