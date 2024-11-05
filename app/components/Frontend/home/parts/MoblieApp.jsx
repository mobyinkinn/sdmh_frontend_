import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Stack } from "@mui/material";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";

import img from "../assets/mobile.png";
import play from "../assets/icons/googlePlay.png";
import app from "../assets/icons/appStore.png";
import Image from "next/image";

export default function MobileApp() {
  return (
    <ContainerMain dir="row" bgColor="#A8DF8E">
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
        <Head1 textAlign={"left"}>SDMH Mobile App</Head1>
        <Stack direction={"row"} gap={"10px"}>
          <Image src={app} alt="" width={282.73} height={83.8} />
          <Image src={play} alt="" width={282.73} height={83.8} />
        </Stack>
      </Stack>
    </ContainerMain>
  );
}
