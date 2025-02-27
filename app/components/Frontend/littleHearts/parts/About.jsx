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
          About Help Little Hearts
        </Head1>
        <ParaNormalSmall textAlign={"center"} width={"90%"}>
          About 3-4 children in 1000 live births all over the world have
          congenital heart anomaly and about 50% of such cases require medical
          intervention at some point in their life. According to data some 1.75
          lac children are born with Congenital Heart Disease in India every
          year. Nearly 20% of the babies die every year for want of treatment at
          appropriate time.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          Pediatric cardiac care is too expensive for the average Indian family.
          Despite subsidy, it may cost 50,000 -60,000 rupees in government
          hospital and four to five time cost in a private or semi-private
          hospital. Approximately, only 10,000 pediatric cardiac surgeries are
          performed in North India. There is huge dearth of pediatric cardiac
          surgeons in India.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          To address the issue, SDMH with support of doctors from USA help make
          little but life saving contribution in the life of few children
          suffering from Congenital Heart Disease. These children are screened
          and shortlisted for surgery at no cost to them. These children come
          from a family that may not afford payment for a complex surgery. Every
          year a team of doctors visit SDMH and with the team of CTVS and
          Cardiology at SDMH, surgeries are performed in the hospital. To know
          more about such cases, you may download our book on the project Little
          Heart.
        </ParaNormalSmall>
        <ParaNormalSmall width={"90%"} textAlign={"center"}>
          SDMH proudly announces a partnership with Genesis Foundation.
          Together, we are committed to save little hearts and make a
          difference. Together, we shall perform life-saving heart surgeries on
          children with congenital heart defects and whose families would have
          otherwise not been able to afford the cost of treatment. This will be
          at no cost to patient's families.
        </ParaNormalSmall>
      </Stack>
    </ContainerMain>
  );
}
