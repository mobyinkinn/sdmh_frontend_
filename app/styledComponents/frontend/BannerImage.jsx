"use client";

import { Stack, Typography } from "@mui/material";
import { ContainerMain } from "./Container";
import { Head1 } from "./Headings";
import { ParaNormal } from "./Para";

const BannerImage = ({
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
  subTitle,
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
            width={{ md: "80%", xs: "85%" }}
            margin={"auto"}
            alignItems={align || "center"}
            gap={1}
          >
            <Typography fontSize={"1.2rem"} fontWeight={400}>
              {subTitle}
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
        // alignContent={"center"}
        justifyContent={"center"}
        gap={"10px"}
        display={{ xs: "flex", lg: "none" }}
      >
        <Stack
          bgcolor={overlayColor}
          width={"100%"}
          height={"30%"}
          justifyContent={"center"}
          // pl={padding || 0}
        >
          <Stack
            width={{ md: "80%", xs: "90%" }}
            margin={"auto"}
            alignItems={"center"}
            gap={1}
          >
            {/* <Typography fontSize={{ xs: "13px", md: "17px" }}>
              The Hospital That Cares
            </Typography> */}
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
          </Stack>
        </Stack>
      </Stack>
    </ContainerMain>
    // <Stack
    //   height={{ lg: "80vh", md: "115vh", sm: "70vh" }}
    //   backgroundColor={"#D8E0EB"}
    //   direction={{ lg: "row", md: "column" }}
    //   gap={4}
    //   pl={{ lg: 15, md: 0 }}
    //   pt={{ xs: "10px", lg: 0 }}
    //   justifyContent={{ xs: "center", sm: "end", lg: "center" }}
    // >
    //   <Stack
    //     width={{ lg: "50%", md: "100%" }}
    //     position={"relative"}
    //     justifyContent={"center"}
    //     alignItems={{ lg: "baseline", sm: "center" }}
    //   >
    //     <Typography
    //       // margin={{ lg: "20px 0px", md: "20px 85px", sm: "20px 20px" }}
    //       fontSize={{ lg: "30px", md: "25px", smm: "20px", sm: "13px" }}
    //       fontWeight={{ smm: 500, xs: 400 }}
    //       textAlign={{ lg: "left", sm: "center" }}
    //     >
    //       The Hospital That Cares
    //     </Typography>
    //     <Stack
    //       width={"100%"}
    //       direction={{ md: "row", lg: "column" }}
    //       display={{ lg: "flex", sm: "block" }}
    //       textAlign={{ lg: "left", sm: "center" }}
    //     >
    //       <Head1
    //         color={"#476C9B"}
    //         textAlign={{ lg: "left", md: "left", sm: "center" }}
    //         fontSize={{ md: "2.5rem", sm: "1.5rem" }}
    //       >
    //         Get Appointment&nbsp;
    //       </Head1>
    //     </Stack>

    //     <Typography
    //       margin={{ lg: "20px 0px", md: "20px 85px", sm: "10px 20px" }}
    //       textAlign={{ lg: "left", sm: "center" }}
    //       fontSize={{ lg: "30px", md: "25px", smm: "20px", sm: "13px" }}
    //       fontWeight={400}
    //     >
    //       Contrary to popular belief, not simply It has roots in Richard
    //       McClintock, a Latin professor at Hampden-Sydney College in Virginia,
    //       looked.
    //     </Typography>
    //   </Stack>

    //   <Stack
    //     sx={{
    //       display: { lg: "block", xs: "none" },
    //       backgroundImage: `url(${image})`,
    //       backgroundSize: "contain",
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "center ",
    //       alignSelf: { lg: "center", md: "center", sm: "center" },
    //       width: "50%",
    //       height: { lg: "90%", md: "55%", smm: "50%", sm: "45%" },
    //     }}
    //   ></Stack>
    //   <Stack
    //     sx={{
    //       display: { lg: "none", xs: "block" },
    //       backgroundImage: `url(${image})`,
    //       backgroundSize: "contain",
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "center",
    //       alignSelf: { lg: "center", md: "center", sm: "center" },
    //       width: { xs: "50%" },
    //       height: { xs: "50vh" },
    //     }}
    //   ></Stack>
    // </Stack>
  );
};

export default BannerImage;
