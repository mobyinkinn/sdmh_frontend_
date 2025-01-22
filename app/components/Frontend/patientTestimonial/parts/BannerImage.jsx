"use client";

import {
  ButtonSmallOutline,
  ButtonVerySmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import Image from "next/image";

const BannerImage = ({
  image,
  overlayColor,
  title,
  description,
  align,
  textcenter,
  color,
  descolor,
  padding,
}) => {
  return (
    <ContainerMain gap="0" dir="row" padding="0" id="about">
      <Stack
        width={"100%"}
        height={"90vh"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
      >
        <Stack
          bgcolor={overlayColor}
          width={"100%"}
          height={"100%"}
          justifyContent={"space-evenly"}
          pl={padding || 0}
          direction={{ md: "row", xs: "column" }}
          alignItems={"center"}
          paddingTop={{ xs: "30px", md: "0" }}
        >
          <Stack
            justifyContent={align || "center"}
            alignItems={{ sm: "center", md: "flex-start" }}
            gap={1}
            width={{ md: "50%", xs: "80%" }}
          >
            <ParaNormal
              textAlign={{
                lg: "left",
                md: "left",
                smm: "center",
                sm: "center",
              }}
            >
              What our
            </ParaNormal>
            <Stack direction={"row"} margin={{ xs: "0 auto", md: "0" }}>
              <Head1 color={color || "white"}>{title}</Head1>
            </Stack>
            <ParaNormal
              textAlign={{
                lg: "left",
                md: "left",
                smm: "center",
                sm: "center",
              }}
              width={{ lg: "63%", md: "63%", smm: "90%", sm: "90%" }}
              color={descolor || "white"}
            >
              {description}
            </ParaNormal>
            <ButtonSmallOutline
              color="#007946"
              style={{ border: "1px solid #007946" }}
            >
              View More
            </ButtonSmallOutline>
          </Stack>
          <Stack position="relative" width={"30%"} height={"100%"}>
            <Image
              src={image}
              fill
              objectFit="contain"
              objectPosition="center center"
            />
          </Stack>
        </Stack>
      </Stack>
    </ContainerMain>
  );
};

export default BannerImage;
