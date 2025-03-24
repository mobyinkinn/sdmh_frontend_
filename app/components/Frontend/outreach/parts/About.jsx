import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import outreach from "./assets/outreach.jpg";
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
          src={outreach}
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
          About Rural Outreach
        </Head1>
        <ParaNormalSmall textAlign={"center"} width={"90%"}>
          In 2008, as SDMH prepared to celebrate the golden jubilee of the
          Santokba Durlabhji Trust, Secretary Yogi Durlabhji posed a vital
          question: "Are we truly living up to our mission of serving the poor
          and needy, who may not even afford to reach us?" This reflection led
          to the birth of Outreach—an initiative to bring structured healthcare
          to Rajasthan’s most underserved areas. It wasn’t just about medical
          aid but about bridging the gap between despair and hope.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          The first rural camps were an eye-opener. In forgotten hamlets, where
          healthcare was a distant dream, the SDMH team encountered people
          suffering in silence. The overwhelming need demanded immediate action.
          A dedicated team of doctors, nurses, and administrators, led by the
          Secretary himself, began traveling far and wide. Armed with essential
          medicines and diagnostic tools like ECG machines and blood sugar kits,
          they ventured into remote areas, offering specialized care,
          on-the-spot treatment, and investigations.
        </ParaNormalSmall>
        <ParaNormalSmall textAlign={"center"} width={"90%"}>
          As word spread, requests poured in from across the state, but SDMH
          remained focused on the most isolated communities. Over the years,
          Outreach has touched 250,000 lives through 250 camps across Rajasthan
          and parts of Haryana. But it didn’t stop at healthcare. The initiative
          partnered with NGOs to sponsor education, conduct free surgical camps,
          provide limb fittings, and support critical surgeries for those in
          need.
        </ParaNormalSmall>
        <ParaNormalSmall textAlign={"center"} width={"90%"}>
          More than just a program, Outreach became a movement of
          compassion—ensuring no one, regardless of location or financial
          status, was left behind in the pursuit of health and dignity. SDMH’s
          legacy of service only grew stronger, guided by its principle: “Where
          you find unhappiness, create happiness; where you find misery,
          generate joy.”
        </ParaNormalSmall>
      </Stack>
    </ContainerMain>
  );
}
