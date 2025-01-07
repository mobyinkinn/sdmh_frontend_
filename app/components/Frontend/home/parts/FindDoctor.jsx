import { Stack, Typography } from "@mui/material";
import banner from "../assets/findDoctor.png";
import { Head2 } from "@/app/styledComponents/frontend/Headings";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";

export default function FindDoctor() {
  return (
    <Stack
      bgcolor={"#6A88AF"}
      // height={"60vh"}
      width={"100%"}
      padding={"50px"}
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        alignItems: "center",
      }}
    >
      <Head2 color="#fff">Find your Doctor &</Head2>
      <Head2 color="#fff">Make an Appointment</Head2>
      <Typography
        margin={"20px 0"}
        width={{ xs: "66%", md: "40%" }}
        textAlign={"center"}
        color="#fff"
      >
        Good Heath Metal Physical And So Wel Being Not Just The Absence of
        Strong Connections And Gack Ancese To
      </Typography>
      <ButtonSmallOutline color="#fff">View All</ButtonSmallOutline>
    </Stack>
  );
}
