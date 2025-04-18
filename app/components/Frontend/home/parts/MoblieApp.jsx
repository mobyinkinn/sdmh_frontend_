import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Stack } from "@mui/material";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";

import img from "../assets/mobile.png";
import play from "../assets/icons/googlePlay.png";
import app from "../assets/icons/appStore.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MobileApp() {
  const router = useRouter();
  return (
    <ContainerMain
      flexDirection={{ lg: "row", md: "row", sm: "column", smm: "column" }}
      bgColor="#A6C9B2"
      gap={{sm:"5px"}}
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
          alignItems:"center"
        }}
      >
        <Head3 color="black" textAlign={{ md: "left", sm: "center" }}>
          Download the
        </Head3>
        <Head1 textAlign={{ lg: "left", sm: "center" }} color="#007946">
          SDMH Mobile App
        </Head1>
      </Stack>
      <Stack
        direction={"row"}
        gap={"10px"}
        marginTop={{ xs: "20px", md: "0" }}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          height={{ md: "20vh", xs: "7vh" }}
          width={{ md: "40%", xs: "50%" }}
          onClick={() =>
            router.push(
              "https://apps.apple.com/in/app/santokba-durlabhji-patient-app/id6740079657"
            )
          }
          sx={{
            cursor: "pointer",
            backgroundImage: `url(${app.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></Stack>
        <Stack
          direction={"row"}
          height={{ md: "20vh", xs: "7vh" }}
          width={{ md: "40%", xs: "50%" }}
          onClick={() =>
            router.push(
              "https://play.google.com/store/apps/details?id=com.sdmh_patient_app"
            )
          }
          sx={{
            cursor: "pointer",
            backgroundImage: `url(${play.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></Stack>
      </Stack>
    </ContainerMain>
  );
}
