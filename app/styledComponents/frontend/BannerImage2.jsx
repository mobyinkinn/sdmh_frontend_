"use client";

import { Stack, Typography } from "@mui/material";
import { ContainerMain } from "./Container";
import { Head1 } from "./Headings";
import { ParaNormal } from "./Para";

const BannerImage2 = ({
  image,
  overlayColor,
  title,
  description,
  align,
  textcenter,
  color,
  descolor,
  heights,
  padding,
}) => {
  return (
    <ContainerMain gap="0" dir="row" padding={{ lg: "0" }} id="about">
      <Stack
        width={"100%"}
        height={heights || { xs: "40vh", md: "70vh", lg: "90vh" }}
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
          pl={padding || 0}
        >
          <Stack
            width={{ md: "80%", xs: "100%" }}
            margin={"auto"}
            alignItems={align || "center"}
            gap={1}
          >
            <Stack direction={"row"}>
              <Head1
                fontSize={{
                  sm: "1.1rem",
                  smm: "2rem",
                  md: "2.5rem",
                  lg: "3.5rem",
                }}
                color={color || "white"}
              >
                {title}
              </Head1>
            </Stack>
            <ParaNormal
              width={{ lg: "70%", md: "90%", sm: "90%", smm: "90%" }}
              color={descolor || "white"}
              textAlign={textcenter || "center"}
              fontSize={{ sm: "12px", smm: "15px", md: "18px", lg: "25px" }}
            >
              {description}
            </ParaNormal>
          </Stack>
        </Stack>
      </Stack>
    </ContainerMain>
  );
};

export default BannerImage2;
