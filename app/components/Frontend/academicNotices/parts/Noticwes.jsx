import { Box, Stack } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import logo from "./assets/Abode.png"
import { ParaNormal } from '@/app/styledComponents/frontend/Para';
const Noticwes = () => {
    const data = [
      {
        img: logo,
        title:
          "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
      },
      {
        img: logo,
        title:
          "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
      },
      {
        img: logo,
        title:
          "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
      },
      {
        img: logo,
        title:
          "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
      },
      {
        img: logo,
        title:
          "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
      },
      {
        img: logo,
        title:
          "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
      },
    ];
  return (
    <Stack bgcolor={"#F9F9F9"} direction={"row"} justifyContent={"center"} flexWrap={"wrap"} p={4} gap={3}>
      {data.map((d) => (
        <Stack width={"30%"} bgcolor={"white"} borderRadius={"20px"} alignItems={"center"} p={5}>
          <Box width={"30%"}>
            <Image
              src={d.img}
              alt="Sky Textiles"
              style={{ cursor: "pointer", width: "100%", height: "80px" }}
            />
          </Box>
            <ParaNormal style={{textAlign:"center"}}>{d.title}</ParaNormal>
        </Stack>
      ))}
    </Stack>
  );
}

export default Noticwes