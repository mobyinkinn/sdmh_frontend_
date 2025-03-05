import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import oldMan from "./assets/oldMan.png";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
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
            About PRAYATNA – A Fight Against Thalassemia
          </Head1>
          <ParaNormalSmall textAlign={"left"} width={"90%"}>
            Thousands of young individuals, full of dreams and ambition,
            silently battle thalassemia, a genetic disorder that ties them to
            lifelong transfusions and medical care. For over 25 years, the
            Santokba Thalassemia Centre at SDMH has provided not just treatment
            but a refuge, easing the financial and emotional burden on families.
          </ParaNormalSmall>
          <ParaNormalSmall width={"90%"} textAlign={"left"}>
            However, as more children were diagnosed, it became clear that
            treatment alone wasn’t enough. Prayatna, meaning ‘endeavour,’ was
            born to prevent thalassemia at its roots, sparing future generations
            from its challenges.
          </ParaNormalSmall>
          <Typography textAlign={"left"} width={"90%"} variant="h5">
            A Vision of Prevention
          </Typography>
          <ParaNormalSmall width={"90%"} textAlign={"left"}>
            SDMH took prevention beyond treatment, offering free thalassemia
            screening to students—India’s largest pool of voluntary blood
            donors. Since 2006, over 4 lakh blood samples have been tested,
            identifying 9,020 carriers. Those diagnosed receive not just
            clinical results but guidance to make informed choices.
          </ParaNormalSmall>
          <ParaNormalSmall width={"90%"} textAlign={"left"}>
            The initiative expanded to families, urging relatives of thalassemic
            patients to undergo screening before marriage or pregnancy. SDMH
            also partnered with gynaecologists and paediatricians to ensure
            screening for expectant mothers, intervening before birth.
          </ParaNormalSmall>
          <ParaNormalSmall width={"90%"} textAlign={"left"}>
            A mother who benefited from this initiative shared, "I didn’t know
            about thalassemia until my niece was diagnosed. When I got married,
            SDMH screened me. Today, my child is thalassemia-free."
          </ParaNormalSmall>
        </Stack>
      </ContainerMain>
      <Screened />
      <ContainerMain alignItems={"center"}>
        <Typography textAlign={"left"} width={"90%"} variant="h5">
          Innovation and Hope
        </Typography>
        <ParaNormal textAlign={"left"} width={"90%"}>
          SDMH developed screening software to rapidly detect thalassemia traits
          and offered it freely to blood banks across India, promoting a unified
          prevention effort.
        </ParaNormal>
        <ParaNormal width={"90%"} textAlign={"left"}>
          In 2014, SDMH received the FICCI CSR Award for its contributions to
          thalassemia prevention. However, as Secretary Yogendra Durlabhji
          reflects, "Awards are temporary. But the sight of a healthy child,
          free from thalassemia, is lasting. This work isn’t for
          recognition—it’s for a future without thalassemia."
        </ParaNormal>
      </ContainerMain>
    </Stack>
  );
}
