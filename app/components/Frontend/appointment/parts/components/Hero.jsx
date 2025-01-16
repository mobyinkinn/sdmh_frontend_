import { Box, Stack, Typography } from "@mui/material";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import bannerImg from "../assets/appointment_banner.png";
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
      justifyContent={"center"}
    >
      <Stack
        width={{ lg: "50%", md: "100%" }}
        position={"relative"}
        justifyContent={"center"}
        alignItems={{ lg: "baseline", sm: "center" }}
      >
        <Typography
          //   margin={{ lg: "20px 0px", md: "20px 85px", sm: "20px 20px" }}
          fontSize={{ lg: "30px", md: "25px", sm: "20px" }}
          fontWeight={500}
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
            textAlign={{ lg: "left", md: "center", sm: "center" }}
          >
            Get Appointment&nbsp;
          </Head1>
        </Stack>

        <Typography
          margin={{ lg: "20px 0px", md: "20px 85px", sm: "20px 20px" }}
          textAlign={{ lg: "left", sm: "center" }}
        >
          Contrary to popular belief, not simply It has roots in
          <br /> Richard McClintock, a Latin professor at Hampden-Sydney <br />{" "}
          College in Virginia, looked.
        </Typography>
        <ButtonMediumOutline color="#379237">
          Make Appointment
        </ButtonMediumOutline>
      </Stack>

      <Stack
        sx={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          alignSelf: { lg: "center", md: "center", sm: "center" },
          width: "50%",
          height: { lg: "90%", md: "55%", smm: "50%", sm: "45%" },
        }}
      ></Stack>
    </Stack>
  );
}
