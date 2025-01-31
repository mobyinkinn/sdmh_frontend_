"use client";

import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack, Typography } from "@mui/material";

const Hero = ({
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
  sm_image,
  subtitle,
  marginTop,
}) => {
  return (
    <ContainerMain gap="0" dir="row" padding={{ lg: "0" }} id="about">
      <Stack
        width={"100%"}
        height={heights || "90vh"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        justifyContent={"center"}
        gap={"10px"}
        display={{ xs: "none", lg: "flex" }}
      >
        <Stack
          bgcolor={overlayColor}
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          pl={padding || 0}
        >
          <Stack
            width={"85%"}
            margin={"auto"}
            alignItems={align || "center"}
            gap={1}
          >
            <Typography fontSize={"1.2rem"} fontWeight={400}>
              {subtitle}
            </Typography>
            <Stack direction={"row"}>
              <Head1 color={color || "white"}>{title}</Head1>
            </Stack>
            <ParaNormal
              width={{ lg: "63%", md: "63%", sm: "90%", smm: "90%" }}
              color={descolor || "white"}
              textAlign={textcenter || "center"}
            >
              {description}
            </ParaNormal>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        height={heights || { xs: "90vh", md: "130vh" }}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${sm_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        alignContent={"start"}
        // justifyContent={"center"}
        gap={"10px"}
        display={{ xs: "flex", lg: "none" }}
      >
        <Stack
          bgcolor={overlayColor}
          width={"100%"}
          height={"30%"}
          justifyContent={"center"}
          marginTop={marginTop}
        >
          <Stack
            width={{ md: "80%", xs: "85%" }}
            margin={"auto"}
            alignItems={"center"}
            gap={1}
          >
            <Typography fontSize={{ xs: "13px", md: "17px" }}>
              {subtitle}
            </Typography>
            <Stack direction={"row"}>
              <Head1 color={color || "white"} textAlign={"center"}>
                {title}
              </Head1>
            </Stack>
            <ParaNormal
              width={{ lg: "63%", md: "63%", sm: "90%", smm: "90%" }}
              color={descolor || "white"}
              textAlign={"center"}
            >
              {description}
            </ParaNormal>
            <ButtonMediumOutline color="#379237">
              Make Appointment
            </ButtonMediumOutline>
          </Stack>
        </Stack>
      </Stack>
    </ContainerMain>
  );
};

export default Hero;
