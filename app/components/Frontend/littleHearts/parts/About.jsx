import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import hearts from "./assets/hearts.jpg";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <ContainerMain
      flexDirection={{ lg: "row", md: "column-reverse", sm: "column-reverse" }}
      alignItems={"center"}
    >
      <Stack
        position="relative"
        height={"500px"}
        width={{ lg: "600px", sm: "100%" }}
      >
        <Image
          src={hearts}
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
          About Help Little Hearts
        </Head1>
        <ParaNormalSmall textAlign={"left"} width={"90%"}>
          Every heartbeat carries the promise of life, yet for many children
          with Congenital Heart Disease (CHD), this promise is at risk. In
          India, 175,000 children are born with CHD annually, and nearly 20% die
          due to a lack of access to treatment. Recognizing this gap, SDMH
          launched Project Little Hearts—ensuring no child is denied life-saving
          cardiac surgery due to financial constraints.
        </ParaNormalSmall>
        <Typography textAlign={"left"} width={"90%"} variant="h5">
          Making a Difference, One Heart at a Time
        </Typography>
        <ParaNormalSmall width={"90%"} textAlign={"left"}>
          The project began in 2017 with two paediatric cardiac surgery camps at
          SDMH, in collaboration with U.S. doctors. Over two years, 38 complex
          surgeries were performed free of cost, giving children from Rajasthan
          and beyond a second chance at life.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"left"}>
          Project Little Hearts relies on a robust screening process,
          identifying children from underprivileged families through rural and
          urban healthcare centers. SDMH’s comprehensive paediatric cardiac
          team—including paediatricians, cardiologists, anaesthetists, and
          surgeons—ensures a holistic approach to treatment.
        </ParaNormalSmall>
        <Typography textAlign={"left"} width={"90%"} variant="h5">
          A Story of Hope: Divya’s Journey
        </Typography>
        <ParaNormalSmall width={"90%"} textAlign={"left"}>
          Divya, an eight-year-old from Haryana, suffered from Patent Ductus
          Arteriosus (PDA), causing fatigue and frequent illness. Her family
          couldn’t afford surgery—until Project Little Hearts intervened. With
          support from Genesis Foundation, she underwent a one-hour PDA Device
          Closure at SDMH’s Cath Lab. Within two days, she was discharged, her
          life transformed.
        </ParaNormalSmall>
        <Typography textAlign={"left"} width={"90%"} variant="h5">
          A Mission of Compassion
        </Typography>
        <ParaNormalSmall width={"90%"} textAlign={"left"}>
          With 100 surgeries performed and Rs. 40 lakh provided in subsidies and
          freeships, Project Little Hearts has become a beacon of hope. SDMH
          partners with NGOs and Rajasthan’s Bal Swasthya Karyakram to extend
          its reach, stepping in when sponsorship isn’t available.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"left"}>
          More than a program, Project Little Hearts is a movement—driven by
          expertise, compassion, and an unwavering commitment to saving little
          hearts. Because every child deserves a chance to live.
        </ParaNormalSmall>
      </Stack>
    </ContainerMain>
  );
}
