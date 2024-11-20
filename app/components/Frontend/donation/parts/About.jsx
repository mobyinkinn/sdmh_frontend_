import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import oldMan from "./assets/oldMan.png";
import { Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import Image from "next/image";
import { Stack } from "@mui/material";

export default function About() {
  return (
    <ContainerMain dir="row">
      <Stack position="relative" height={"40vh"} width="40%">
        <Image
          src={oldMan}
          alt=""
          fill
          objectFit="contain"
          objectPosition="center center"
        />
      </Stack>
      <Stack width="60%" gap={"10px"}>
        <Head3 textAlign="left" color="black">
          About Avedna Asharam
        </Head3>
        <ParaNormalSmall>
          The Avedna Ashram is a 100-bedded hospice, a home for patients with
          terminal illness and a shelter for people in pain. Unlike developed
          countries (where the state is mandated to providing such a facility),
          Avedna – as one of the few private hospices in India – fills the void
          by providing board, lodging and palliative care to terminally-ill
          patients or to those who are in the last stages of cancer or
          paralysis. So far, over 9845 patients have been benefited from the
          Ashram and a total of 4,00,469 days of patient care services in
          provided to its inmates.
        </ParaNormalSmall>
        <ParaNormalSmall>
          Avedna steps in when family and friends grow weary, as a place where
          care and compassion are free but life is rationed. We, at Avedna, have
          learnt to cherish ‘today’ for we know that ‘tomorrow’ may be a distant
          dream.
        </ParaNormalSmall>
      </Stack>
    </ContainerMain>
  );
}
