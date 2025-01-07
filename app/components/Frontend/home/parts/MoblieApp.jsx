import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Stack } from "@mui/material";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";

import img from "../assets/mobile.png";
import play from "../assets/icons/googlePlay.png";
import app from "../assets/icons/appStore.png";
import Image from "next/image";

export default function MobileApp() {
  return (
    <ContainerMain
      flexDirection={{ lg: "row", md: "row", sm: "column", smm: "column" }}
      bgColor="#A6C9B2"
    >
      <Stack
        sx={{
          width: { md: "40%", xs: "100%" },
          height: { md: "80vh", xs: "50vh" },
          backgroundImage: `url(${img.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></Stack>
      <Stack
        sx={{
          width: { md: "50%" },
          height: { md: "80vh" },
          gap: { md: "20px", xs: "10px" },
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <Head3 color="black" textAlign={{ md: "left", sm: "center" }}>
          Download the
        </Head3>
        <Head1 textAlign={{ lg: "left", sm: "center" }} color="#007946">
          SDMH Mobile App
        </Head1>
        <Stack
          direction={"row"}
          gap={"10px"}
          marginTop={{ xs: "20px", md: "0" }}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            height={{ md: "20vh", xs: "5vh" }}
            width={{ md: "40%", xs: "50%" }}
            sx={{
              backgroundImage: `url(${app.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></Stack>
          <Stack
            direction={"row"}
            height={{ md: "20vh", xs: "5vh" }}
            width={{ md: "40%", xs: "50%" }}
            sx={{
              backgroundImage: `url(${play.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></Stack>
        </Stack>
      </Stack>
    </ContainerMain>
  );
}
