import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";

import img1 from "./assets/efficiency.png";
import img2 from "./assets/empthy.png";
import img3 from "./assets/intigrity.png";
import img4 from "./assets/progress.png";
import img5 from "./assets/trust.png";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import Image from "next/image";
import { Stack } from "@mui/material";

const valueData = [
  { id: 0, name: "Efficiency", icon: img1 },
  { id: 1, name: "Empathy", icon: img2 },
  { id: 2, name: "Integrity", icon: img3 },
  { id: 3, name: "Progressiveness", icon: img4 },
  { id: 4, name: "Trust", icon: img5 },
];

export default function Values() {
  return (
    <ContainerMain bgColor="#4B9369" id="mission">
      <Head1 color="white">Our values</Head1>
      <Stack
        flexWrap={"wrap"}
        direction={"row"}
        gap={"20px"}
        justifyContent={"center"}
      >
        {valueData.map((el, i) => {
          return (
            <Stack
              width={{ md: "15%", xs: "45%" }}
              alignItems={"center"}
              gap={"10px"}
              padding={"20px"}
              sx={{
                cursor: "pointer",
                border: "1px solid white",
                borderRadius: "10px",
                "&:hover": {
                  border: "none",
                  backgroundColor: "#007946",
                },
              }}
            >
              <Stack
                width={"100%"}
                height={{ lg: "15vh", sm: "10vh" }}
                position={"relative"}
              >
                <Image
                  fill
                  src={el.icon}
                  objectFit="contain"
                  objectPosition="center center"
                />
              </Stack>
              <ParaNormalSmall color="white">{el.name}</ParaNormalSmall>
            </Stack>
          );
        })}
      </Stack>
    </ContainerMain>
  );
}
