import { Stack, Typography } from "@mui/material";
import banner from "./assets/findDoctor.png";
import { Head2, Head1 } from "@/app/styledComponents/frontend/Headings";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";

export default function Available() {
  return (
    <Stack
      bgcolor={"#6A88AF"}
      // height={"60vh"}
      width={"100%"}
      padding={{ md: "50px", xs: "30px 15px" }}
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        alignItems: "center",
      }}
    >
      <Typography color="#fff">We are available 24/7</Typography>
      <Head1 color="#fff">Trust Us Be There To Help All</Head1>
      <Head1 color="#fff">& Make Things Well Again.</Head1>
      <Typography
        margin={"20px 0"}
        width={{ xs: "90%", md: "40%" }}
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
