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
          About Outreach
        </Head1>
        <ParaNormalSmall textAlign={"center"} width={"90%"}>
          What does Outreach represent to all of us at SDMH? Is it a movement?
          Is it a philosophy? Or is it a vision? Perhaps, it is a bit of all
          three. Outreach is fluid in a sense that a hospital can never be. A
          hospital has structure, permanence, and it is expected that people
          will flock to it in their hour of need.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          Outreach adopts a totally different track. It means walking the extra
          mile, going out and impacting those very lives, those people, those
          children who, perhaps, find the trudge to SDMH too demanding. It means
          going into villages month after month to treat a few thousand rural
          folks who would have struggled, otherwise, to find succour. It means
          tackling the urban slums which proliferate in Indian cities. It means
          working hand in glove with institutions like Disha and Umang which
          have done pioneering work in serving children with special needs. It
          means lending a hand at the SOS Village to help orphans in need. It
          means organizing diverse activities for children who are HIV positive.
          These, and a myriad other activities, are organized so as to help the
          needy. Further, Santokba works very closely with Anganwadis, with the
          Barefoot College, Tilonia; with Nanhi Chhaan, Bal Bhavan etc. The
          mission statement given to Team Outreach, reads, “Where you find
          unhappiness, create happiness; where you find misery, generate joy.”
        </ParaNormalSmall>
      </Stack>
    </ContainerMain>
  );
}
