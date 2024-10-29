import { Stack, Typography } from "@mui/material";
import banner from "../assets/findDoctor.png";
import { Head2 } from "@/app/styledComponents/frontend/Headings";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";

export default function FindDoctor() {
  return (
    <Stack
      height={"60vh"}
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
      <Head2 color="black">Find your Doctor &</Head2>
      <Head2 color="black">Make an Appointment</Head2>
      <Typography margin={"20px 0"} width={"40%"} textAlign={"center"}>
        Good Heath Metal Physical And So Wel Being Not Just The Absence of
        Strong Connections And Gack Ancese To
      </Typography>
      <ButtonSmallOutline color="#379237">View All</ButtonSmallOutline>
    </Stack>
  );
}
