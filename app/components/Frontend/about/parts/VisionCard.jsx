import { Head4 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormalSmall } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import Image from "next/image";

export default function VisionCard({ el }) {
  return (
    <Stack
      width={{lg:"50%", sm:"100%"}}
      backgroundColor="#D8E0EB"
      borderRadius={"10px"}
      padding={{lg:"40px", sm:"25px"}}
      alignItems={"center"}
      gap={"20px"}
    >
      <Image width={166.2} height={140} src={el.img} alt="" />
      <Head4 color="black">{el.name}</Head4>
      <ParaNormalSmall textAlign="center">{el.data}</ParaNormalSmall>
    </Stack>
  );
}
