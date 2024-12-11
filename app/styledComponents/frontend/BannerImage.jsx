"use client";

import { Stack } from "@mui/material";
import { ContainerMain } from "./Container";
import { Head1 } from "./Headings";
import { ParaNormal } from "./Para";

const BannerImage = ({ image, overlayColor, title, description }) => {
  return (
    
    <ContainerMain gap="0" dir="row" padding="0" id="about">
      <Stack
        width={"100%"}
        height={"90vh"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        justifyContent={"center"}
        gap={"10px"}
      >
        <Stack
          bgcolor={overlayColor}
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
        >
          <Stack alignItems={"center"}>
            <Stack direction={"row"}>
              <Head1 color="white">{title}</Head1>
            </Stack>
            <ParaNormal width="63%" color="white" textAlign={"center"}>
              {description}
            </ParaNormal>
          </Stack>
        </Stack>
      </Stack>

    </ContainerMain>
  );
};

export default BannerImage;
