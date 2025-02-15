import { Box, Stack, Typography } from "@mui/material";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import bannerImg from "../assets/checkup_banner.png";
import Image from "next/image";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

export default function Hero() {
  return (
    <Stack
      paddingTop={{ xs: 4, lg: 0 }}
      height={{ lg: "80vh", md: "80vh", sm: "70vh" }}
      backgroundColor={"#E9EEF1"}
      direction={{ lg: "row", md: "column" }}
      gap={4}
      pl={{ lg: 15, md: 0 }}
      justifyContent={"center"}
    >
      <Stack
        width={{ lg: "50%", md: "100%" }}
        position={"relative"}
        justifyContent={"center"}
        alignItems={{ lg: "baseline", sm: "center" }}
      >
        <Stack
          width={"100%"}
          direction={{ md: "row", lg: "column" }}
          display={{ lg: "flex", sm: "block" }}
          textAlign={{ lg: "left", sm: "center" }}
        >
          <Head1
            color={"#476C9B"}
            textAlign={{ lg: "left", md: "center", sm: "center" }}
            fontSize={{ sm: "1.3rem", smm: "2rem", md: "2.2rem", lg: "3.4rem" }}
          >
            Awards&nbsp;
          </Head1>
        </Stack>

        <Typography
          margin={{ lg: "20px 0px", md: "20px 85px", sm: "20px 20px" }}
          textAlign={{ lg: "left", sm: "center" }}
          fontSize={{ sm: "15px", smm: "20px", md: "24px", lg: "30px" }}
        >
          We have received numerous awards for our services and products. We
          will continue to provide you with our services and products.
        </Typography>
        <ButtonMediumOutline color="#379237">Contact Us</ButtonMediumOutline>
      </Stack>

      <Stack
        sx={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          alignSelf: { lg: "end", md: "center", sm: "center" },
          width: "50%",
          height: { lg: "90%", md: "55%", smm: "52%", sm: "50%" },
        }}
      ></Stack>
    </Stack>
  );
}
