import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack } from "@mui/material";
import React from "react";
import doctor from "../parts/assets/doctor.png";
import Image from "next/image";
const CategoriesMember = () => {
  const data = [
    {
      img: doctor,
      title: "Doctor",
    },
    {
      img: doctor,
      title: "Doctor",
    },
    {
      img: doctor,
      title: "Doctor",
    },
  ];

  return (
    <Stack bgcolor={"#007946"} gap={1}>
      <Head1 color="white" style={{ paddingTop: "10px" }}>
        Categories for membership
      </Head1>
      <ParaNormal color="white" style={{ textAlign: "center" }}>
        Library membership will be classified into 3 categories
      </ParaNormal>
      <Stack direction={"row"} gap={2} justifyContent={"center"} p={"30px 0"}>
        {data.map((d, i) => (
          //   <Box width={"30%"} height={"100%"}>
          //     <Image
          //       src={d.img}
          //       alt="Sky Textiles"
          //       style={{ cursor: "pointer", width: "100%"}}
          //     />

          //   </Box>
          <Stack
            key={i}
            width={"24%"}
            height={"50vh"}
            alignItems={"center"}
            sx={{
              backgroundImage: `url(${d.img.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            justifyContent={"center"}
            gap={"10px"}
          >
            <Stack
              bgcolor={"#4A4A4A99"}
              width={"90%"}
              height={"100%"}
              borderRadius={"10px"}
              justifyContent={"center"}
            >
              <Stack alignItems={"center"}>
                <Stack direction={"row"}>
                  <Head1 color="white">{d.title}</Head1>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default CategoriesMember;
