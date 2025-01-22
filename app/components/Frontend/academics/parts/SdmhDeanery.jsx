import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import React from "react";
import Imag from "./assets/deanery.png";
import Image from "next/image";

const SdmhDeanery = () => {
  const bannerImage = [Imag, Imag, Imag, Imag];
  return (
    <>
      <ContainerMain style={{ backgroundColor: "#D2E4D8" }}>
        <Stack direction={"row"} justifyContent={"center"}>
          <Head1 color="#005900">Academics Deanery,&nbsp;</Head1>
          <Head1 color="black">SDMH</Head1>
        </Stack>
        <ParaNormal
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px",
          }}
          textAlign={"center"}
        >
          The academic wing of Santokba Durlabhji Memorial Hospital and Research
          Centre is administered by the Academics Deanery: Dean of Academics,
          Dr. Anupam Chaturvedi; Associate Dean, Dr. Ravi Sharma; and Academics
          Administrator, Ms. Shiby K. John. Dr. Chaturvedi serves as HOD and
          Senior Consultant in Paediatrics & Neonatology. Dr. Ravi Sharma also
          holds the position of Consultant, in Paediatric Intensive Care at
          SDMH.
        </ParaNormal>
        <Stack
          width={"100%"}
          height={{ md: "40vh" }}
          direction={{ md: "row", xs: "column" }}
          gap={2}
        >
          {bannerImage.map((d, i) => (
            <Stack
              position={"relative"}
              width={{ md: "25%" }}
              height={{ md: "100%", xs: "40vh" }}
              key={i}
            >
              <Image src={d.src} fill objectFit="contain" />
            </Stack>
          ))}
        </Stack>
      </ContainerMain>
      <Stack bgcolor={"#007946"} padding={{ md: 10, xs: 3 }} gap={1}>
        <Head1 color="white" textAlign="center" margin="0 auto">
          Contact Details
        </Head1>
        <ParaNormal color="white" textAlign={"center"}>
          Office of the Dean Academics, Room A2, Administration Wing (Basement),
          Santokba Durlabhji Memorial Hospital, Bhawani Singh Marg, Jaipur
          302015 email deansdmh@gmail.com, dean@sdmh.in Tel: 0141-2566251-58
          extension 378. Academics are a core activity at the SDMH & Research
          Centre. The Deanery oversees academic activities at SDMH & RC.
        </ParaNormal>
      </Stack>
    </>
  );
};

export default SdmhDeanery;
