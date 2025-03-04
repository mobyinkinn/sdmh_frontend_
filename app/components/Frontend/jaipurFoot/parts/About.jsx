import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import oldMan from "./assets/oldMan.png";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import Image from "next/image";
import { Stack } from "@mui/material";

export default function About() {
  return (
    <ContainerMain flexDirection={{ lg: "row", sm: "column-reverse" }}>
      <Stack
        position="relative"
        height={"40vh"}
        width={{ lg: "40%", sm: "100%" }}
      >
        <Image
          src={oldMan}
          alt=""
          fill
          objectFit="contain"
          objectPosition="center center"
        />
      </Stack>
      <Stack
        width={{ lg: "60%", sm: "100%" }}
        gap={"10px"}
        alignItems={"center"}
      >
        <Head1
          textAlign="left"
          color="black"
          fontSize={{ lg: "1.8rem", sm: "1.2rem" }}
        >
          About Jaipur Foot & Polio Caliper
        </Head1>
        <ParaNormalSmall textAlign={"center"} width={"90%"}>
          Dr. P.K. Sethi, a renowned orthopaedic surgeon and a Magsaysay Award
          winner, set up the Rehabilitation Aids and Limb Fitting Centre (RALFC)
          in 1985, soon after he retired from SMS Hospital. He had, earlier,
          pioneered the legendary Jaipur Foot; subsequently, he continued his
          good work at SDMH. At the heart of the Centre is a desire to create
          and develop low-cost thermoplastic, light-weight rehabilitation aids
          which attach seamlessly onto patients, and are also easy to use. Poor
          patients are treated totally free or at heavily subsidized rates.
          RALFC also organizes free camps for the underprivileged. Several camps
          have been organized as part of community-based rehabilitation within
          150 kms of Jaipur. Hundreds of such patients have been fitted with
          appliances, free of cost, and have also received free surgical
          intervention. Nearly 13,000 artificial limbs and 1 lac calipers have
          been fitted so far by the centre since its beginning. Manned by
          dedicated doctors, the Centre trains all recipients to function
          independently, to lead fully functional and confident lives.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          SDMH, though its project named “Pangu giri langhe” tries to identify
          those patients who can lead normal life by making a customized Jaipur
          Foot or Polio Caliper.
        </ParaNormalSmall>
      </Stack>
    </ContainerMain>
  );
}
