import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Stack } from "@mui/material";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";

import img from "../assets/mobile.png";
import play from "../assets/icons/googlePlay.png";
import app from "../assets/icons/appStore.png";
import Image from "next/image";

export default function MobileApp() {
  return (
    <ContainerMain dir="row" bgColor="#A6C9B2">
      <Stack
        sx={{
          width: "50%",
          height: "80vh",
          backgroundImage: `url(${img.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></Stack>
      <Stack
        sx={{
          width: "50%",
          height: "80vh",
          gap: "20px",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <Head3 color="black" textAlign={"left"}>
          Download the
        </Head3>
        <Head1 textAlign={"left"} color="#007946">
          SDMH Mobile App
        </Head1>
        <Stack direction={"row"} gap={1}>
          {/* <Image
            src={app}
            alt=""
            sx={{
              width: { xs: "50%", sm: "auto" }, // Responsive width
              maxWidth: "282.73px", // Maximum width
              height: "auto", // Maintain aspect ratio
            }}
            height={83.8}
          />
          <Image
            src={play}
            alt=""
            sx={{
              width: { xs: "50%", sm: "auto" }, // Responsive width
              maxWidth: "282.73px", // Maximum width
              height: "auto", // Maintain aspect ratio
            }}
            height={83.8}
          /> */}
          <Stack
            direction={"row"}
            gap={"10px"}
            height={"20vh"}
            width={{ md: "40%", xs: "90%" }}
            sx={{
              backgroundImage: `url(${app.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></Stack>
          <Stack
            direction={"row"}
            gap={"10px"}
            height={"20vh"}
            width={{ md: "40%", xs: "90%" }}
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
