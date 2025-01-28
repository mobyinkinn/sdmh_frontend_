import { Box, Stack, Typography } from "@mui/material";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import bannerImg from "../assets/appointment_banner.png";
import sm_bannerImg from "../assets/sm_banner.png";
import Image from "next/image";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

export default function Hero() {
  return (
    <Stack
      height={{ lg: "80vh", md: "115vh", sm: "70vh" }}
      backgroundColor={"#D8E0EB"}
      direction={{ lg: "row", md: "column" }}
      gap={4}
      pl={{ lg: 15, md: 0 }}
      pt={{ xs: "10px", lg: 0 }}
      justifyContent={{ xs: "center", sm: "end", lg: "center" }}
    >
      <Stack
        width={{ lg: "50%", md: "100%" }}
        position={"relative"}
        justifyContent={"center"}
        alignItems={{ lg: "baseline", sm: "center" }}
      >
        <Typography
          // margin={{ lg: "20px 0px", md: "20px 85px", sm: "20px 20px" }}
          fontSize={{ lg: "30px", md: "25px", smm: "20px", sm: "13px" }}
          fontWeight={{ smm: 500, xs: 400 }}
          textAlign={{ lg: "left", sm: "center" }}
        >
          The Hospital That Cares
        </Typography>
        <Stack
          width={"100%"}
          direction={{ md: "row", lg: "column" }}
          display={{ lg: "flex", sm: "block" }}
          textAlign={{ lg: "left", sm: "center" }}
        >
          <Head1
            color={"#476C9B"}
            textAlign={{ lg: "left", md: "left", sm: "center" }}
            fontSize={{ md: "2.5rem", sm: "1.5rem" }}
          >
            Get Appointment&nbsp;
          </Head1>
        </Stack>

        <Typography
          margin={{ lg: "20px 0px", md: "20px 85px", sm: "10px 20px" }}
          textAlign={{ lg: "left", sm: "center" }}
          fontSize={{ lg: "30px", md: "25px", smm: "20px", sm: "13px" }}
          fontWeight={400}
        >
          Contrary to popular belief, not simply It has roots in Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked.
        </Typography>
        <ButtonMediumOutline color="#379237">
          Make Appointment
        </ButtonMediumOutline>
      </Stack>

      <Stack
        sx={{
          display: { lg: "block", xs: "none" },
          backgroundImage: `url(${bannerImg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          alignSelf: { lg: "center", md: "center", sm: "center" },
          width: "50%",
          height: { lg: "90%", md: "55%", smm: "50%", sm: "45%" },
        }}
      ></Stack>
      <Stack
        sx={{
          display: { lg: "none", xs: "block" },
          backgroundImage: `url(${sm_bannerImg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          alignSelf: { lg: "center", md: "center", sm: "center" },
          width: { xs: "50%" },
          height: { xs: "50vh" },
        }}
      ></Stack>
    </Stack>
  );
}
