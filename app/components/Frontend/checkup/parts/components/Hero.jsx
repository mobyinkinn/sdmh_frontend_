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
      height={{ lg: "80vh", md: "80vh", sm: "70vh" }}
      backgroundColor={"#E9EEF1"}
      direction={{ lg: "row", md: "column" }}
      gap={4}
      pl={{ lg: 15, md: 0 }}
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
          display={{ lg: "flex", sm: "none" }}
        >
          <Head1 color={"#476C9B"} textAlign={{ lg: "left", md: "center" }}>
            Health Check Up Plans&nbsp;
          </Head1>
        </Stack>

        <Typography
          margin={{ lg: "20px 0px", md: "20px 85px", sm: "20px 20px" }}
          textAlign={{ lg: "left", sm: "center" }}
        >
          Choose from our wide range of Preventive Health
          <br /> Check Plans that are designed keeping your
          <br /> health needs in mind
        </Typography>
        <ButtonMediumOutline color="#379237">Contact Us</ButtonMediumOutline>
      </Stack>
      {/* <Box
        sx={{
          width: "50%",
          height: { lg: "90%", md: "55%", smm: "50%", sm: "45%" },
          backgroundColor: "white",
          borderRadius: "50%",
          display: "flex",
          alignSelf: { lg: "end", md: "center", sm: "center" },
          justifyContent: "center",
          overflow: "hidden", // Ensures the image stays within the circular container
        }}
      >
        <Stack
          sx={{
            backgroundImage: `url(${bannerImg.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            width: "80%",
            height: "80%",
          }}
        ></Stack>
      </Box> */}
      <Stack
        sx={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          alignSelf: { lg: "end", md: "center", sm: "center" },
          width: "50%",
          height: { lg: "90%", md: "55%", smm: "50%", sm: "45%" },
        }}
      ></Stack>
    </Stack>
  );
}
