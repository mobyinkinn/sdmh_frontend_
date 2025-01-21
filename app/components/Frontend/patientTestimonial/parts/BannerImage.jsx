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
        >
          <Stack justifyContent={align || "center"} gap={1} width={"50%"}>
            <ParaNormal>What our</ParaNormal>
            <Stack direction={"row"}>
              <Head1 color={color || "white"}>{title}</Head1>
            </Stack>
            <ParaNormal
              width="63%"
              color={descolor || "white"}
              textAlign={textcenter || "center"}
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
          <Image src={image} width={400} />
        </Stack>
      </Stack>
    </ContainerMain>
  );
};

export default BannerImage;
