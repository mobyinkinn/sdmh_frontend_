import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import oldMan from "./assets/oldMan.png";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import Image from "next/image";
import { Stack } from "@mui/material";
import Screened from "./screened";

export default function About() {
  return (
    <Stack>
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
            About Thalassemia Centre
          </Head1>
          <ParaNormalSmall textAlign={"center"} width={"90%"}>
            SDMH Blood Bank carries out regular transfusion for almost 100
            children, free of cost. SDMH has taken initiative to eradicate
            Thalassemia by screening 2.5 Lac units of blood that comes to SDMH
            at no cost to patients.
          </ParaNormalSmall>
          <ParaNormalSmall width={"90%"} textAlign={"center"}>
            Similarly, the Santokba Durlabhji Thalassemia Centre was set up in
            2002. It is the only source of NAT-tested blood in Rajasthan which
            screens a patient for HIV, Hepatitis and other blood - borne agents.
            Test facilities for screening of Thalassemia Major and Minor are
            also available. Blood transfusion takes place in a dedicated,
            congenial ward. The Centre carries out regular transfusion for
            almost 100 children annually, free of cost. Every year, a
            Thalassemia camp is also held at SDMH where blood is tested on the
            spot. Over two lakh people have been screened in the last 09 years.
          </ParaNormalSmall>
        </Stack>
      </ContainerMain>
      <Screened />
      <ContainerMain alignItems={"center"}>
        <ParaNormal textAlign={"center"} width={"90%"}>
          SDMH started Thalassemia Centre in the hospital in 1990, we recognized
          that even though Thalassemia was a rare disorder, it wasn’t uncommon.
          But the awareness was abysmal. Infrequent transfusion was the norm,
          and a majority of children were not surviving.
        </ParaNormal>
        <ParaNormal width={"90%"} textAlign={"center"}>
          Through its project Prayatna, SDMH decided to make effort in
          eradicating Thalassemia, even though patient had very little
          information about it. SDMH started free blood screening for
          thalassemia train among all patients and blood donors. Counseling was
          done for those who had the trait. FICCI has recently recognised our
          Thalassemia screening Project as the “Best CSR Project in the Country”
        </ParaNormal>
        <ParaNormal width={"90%"} textAlign={"center"}>
          To know more about our contribution in providing better life for
          thalassemic patients and create awareness, you may get a copy of our
          book on Thalassemia.
        </ParaNormal>
      </ContainerMain>
    </Stack>
  );
}
