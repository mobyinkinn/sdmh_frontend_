import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack, Typography } from "@mui/material";
import VisionCard from "./VisionCard";
import vision from "./assets/visionIcon.png";
import mission from "./assets/missionIcon.png";

const visionData = [
  {
    id: 0,
    name: "Vision",
    img: vision,
    data: "Sdmh Shall Be An Integrated Quaternary Healthcare Hub For Delivery Of Affordable Quality Medical Care In An Economically Viable, Regionally, Nationally And Internationally Positioned Institutional Environment.",
  },
  {
    id: 1,
    name: "Mission",
    img: mission,
    data: "Sdmh Shall Be An Integrated Quaternary Healthcare Hub For Delivery Of Affordable Quality Medical Care In An Economically Viable, Regionally, Nationally And Internationally Positioned Institutional Environment.",
  },
];

export default function Vision() {
  return (
    <ContainerMain
      position="relative"
      gap="30px"
      alignItems="center"
      id="vision"
    >
      <Box
        sx={{
          backgroundColor: "#6A88AF",
          height: "40vh",
          width: "80%",
          borderRadius: "10px",
          position: "absolute",
          zIndex: "-1",
        }}
      ></Box>
      <Typography sx={{ height: "40px" }}></Typography>
      <Head1 color="white">Vision & Mission</Head1>
      <Stack
        direction={{ md: "row" }}
        gap={{ md: "70px", xs: "30px" }}
        width={{ md: "70%" }}
        margin={"0 auto"}
        alignItems={"center"}
      >
        {visionData.map((el, i) => {
          return <VisionCard el={el} key={i} />;
        })}
      </Stack>
    </ContainerMain>
  );
}
