import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import oldMan from "./assets/oldMan.jpg";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <ContainerMain flexDirection={{ lg: "row", sm: "column-reverse" }}>
      <Stack
        position="relative"
        height={"40vh"}
        width={{ lg: "40%", sm: "100%" }}
        borderRadius={"10px"}
        sx={{
            height: { md: "60vh", xs: "40vh" },
            margin: { md: "0 0 0 50px", xs: "auto" },
            width: { md: "40%", xs: "90%" },
            backgroundImage: `url(${oldMan.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
          }}
      >
        {/* <Image
          src={oldMan}
          alt=""
          fill
          objectFit="contain"
          objectPosition="center center"
          style={{borderRadius:"10px"}}
        /> */}
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
          About PROJECT JYOTI – BRINGING LIGHT TO LIVES
        </Head1>
        <ParaNormalSmall textAlign={"left"} width={"90%"}>
          Cataract, the leading cause of blindness in India, affects millions,
          yet 85% of cases are reversible with a simple surgery. Unfortunately,
          for many, the cost makes treatment impossible. To bridge this gap,
          SDMH launched Project Jyoti—restoring vision for the underprivileged,
          one surgery at a time.
        </ParaNormalSmall>
        <Typography textAlign={"left"} width={"90%"} variant="h5">
          The Journey Begins
        </Typography>
        <ParaNormalSmall width={"90%"} textAlign={"left"}>
          During SDMH’s rural outreach camps, our team met patients who had
          accepted vision loss as fate, unaware their blindness was curable.
          Many couldn’t afford intraocular lenses, let alone surgery.
          Recognizing this, SDMH took action. Generous donors stepped in to fund
          surgeries, ensuring financial constraints didn’t stand in the way of
          sight.
        </ParaNormalSmall>
        <Typography textAlign={"left"} width={"90%"} variant="h5">
          A Commitment to Quality and Care
        </Typography>
        <ParaNormalSmall width={"90%"} textAlign={"left"}>
          Project Jyoti employs Phacoemulsification, a modern, sutureless
          technique using only a microincision. This painless procedure requires
          no injections, ensuring quick recovery and minimal
          discomfort—especially for patients who had never undergone medical
          treatment before. Beyond surgery, SDMH provides post-operative
          medications and protective glasses, all free of charge, ensuring
          dignified and holistic care.
        </ParaNormalSmall>
        <Typography textAlign={"left"} width={"90%"} variant="h5">
          Impact and Legacy
        </Typography>
        <ParaNormalSmall width={"90%"} textAlign={"left"}>
          Since inception, Project Jyoti has restored vision to over 225
          patients, granting them independence and transforming lives. What
          began as a small initiative is now a beacon of hope, proving that
          small steps can lead to life-changing outcomes. SDMH remains committed
          to reaching those who cannot reach us, bringing light to those in
          avoidable darkness.
        </ParaNormalSmall>
      </Stack>
    </ContainerMain>
  );
}
