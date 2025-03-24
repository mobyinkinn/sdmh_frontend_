import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import avedna from "./assets/avedna.jpg";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import Image from "next/image";
import { Stack } from "@mui/material";

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
          src={avedna}
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
          About Avedna Asharam
        </Head1>
        <ParaNormalSmall textAlign={"center"} width={"90%"}>
          For someone undergoing chemotherapy for 15 years, Ramdayal is
          remarkably fit—fit enough to hoist the national flag at SDMH on
          January 26. Honouring resilience, Santokba entrusted this role to him,
          one of Avedna Ashram’s oldest residents.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          A decade ago, Ramdayal arrived at Avedna after battling alveolar
          cancer, a rare lung cancer. A woodcutter from Alwar, he had consulted
          doctors, undergone surgery, and was eventually referred to SMS
          Hospital, which led him to Avedna Ashram—a 100-bed hospice offering
          refuge and palliative care to the terminally ill. Despite his
          condition, he embraced Avedna as his home, contributing to its upkeep
          with quiet dedication.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          In developed countries, the state provides hospice care, but in India,
          such facilities are rare. Avedna fills this gap, offering free
          shelter, food, and palliative care to terminally ill individuals—many
          in the last stages of cancer or paraplegia. It stands as a sanctuary
          for those abandoned by family or unable to afford care. For many, it
          is their final home, where they take their last breath with dignity.
          Even beyond life, Avedna ensures their last rites are performed with
          respect.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          Founded in 1996 in memory of Khailshanker Durlabhji, Avedna was
          designed to embrace light and fresh air, nurturing both body and
          spirit. Within its premises, the Ananth Bhandari Day Centre caters to
          senior citizens' intellectual and creative needs through yoga,
          meditation, music, reading, and lectures. It fosters community, offers
          subsidized lunches, and organizes special programs for women.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          Beyond medical care, Avedna provides free lodging, personalized
          nursing, nutritious meals, and access to books, music, games,
          television, counselling, and acupressure. The greatest reward is
          witnessing the comfort and smiles of residents, living up to its
          name—Avedna, the alleviator of pain.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          Since its inception, Avedna has become more than a hospice; it is a
          sanctuary where compassion and dignity intertwine. This 100-bed
          facility has provided palliative care to over 10,000 individuals,
          delivering more than 4.21 lakh days of care—all free of charge. Each
          day at Avedna is a testament to hope, courage, and the enduring spirit
          of human resilience.
        </ParaNormalSmall>
      </Stack>
    </ContainerMain>
  );
}
