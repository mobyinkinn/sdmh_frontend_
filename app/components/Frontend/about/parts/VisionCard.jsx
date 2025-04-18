import { Head4 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormalSmall } from "@/app/styledComponents/frontend/Para";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

export default function VisionCard({ el }) {
  return (
    <Stack
      width={{ md: "50%", xs: "80%" }}
      backgroundColor="#D8E0EB"
      borderRadius={"10px"}
      padding={{ md: "40px", xs: "15px" }}
      alignItems={"center"}
      gap={"20px"}
      height={{ lg: "480px", xs: "0" }}
    >
      <Box
        position={"relative"}
        width={{ lg: "100%", sm: "40%" }}
        backgroundColor={"#476D9B"}
        borderRadius={"10px"}
        height={{ md: "140px", xs: "80px" }}
      >
        <Image fill objectFit="contain" src={el.img} alt="" />
      </Box>
      <Head4 color="black" fontWeight={{sm:"bold"}}>
        {el.name}
      </Head4>
      <ParaNormalSmall textAlign="center">{el.data}</ParaNormalSmall>
    </Stack>
  );
}
