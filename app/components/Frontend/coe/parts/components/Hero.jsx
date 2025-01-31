import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Stack, Typography } from "@mui/material";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import Image from "next/image";

import bannerImg from "../assets/coeBanner.png";
import lines from "../assets/icons/lines.png";

export default function Hero() {
  return (
    <Stack
      height={{ lg: "80vh", md: "80vh", sm:"70vh" }}
      backgroundColor={"#D2E4D8"}
      direction={{ lg: "row", md: "column" }}
      gap={4}
      pl={{lg:15,md:0}}
    >
      <Stack
        width={{ lg: "50%", md: "100%" }}
        position={"relative"}
        justifyContent={"center"}
        alignItems={{lg:"baseline",sm:"center"}}
      >
        <Stack
          width={"100%"}
          direction={{ md: "row", lg: "column" }}
          display={{ lg: "flex", sm: "none" }}
        >
          <Head1 color="black" textAlign={{ lg: "left", md: "center" }}>
            Become&nbsp;
          </Head1>
          <Head1
            color="black"
            textAlign={{ lg: "left", md: "center" }}
            position={"relative"}
            width={"fit-content"}
          >
            a professional in
            <Image
              src={lines}
              alt=""
              height={32}
              width={45}
              style={{ position: "absolute", top: "-15px", right: "-30px" }}
            />
          </Head1>
          <Head1 color="black" textAlign={{ lg: "left", md: "center" }}>
            either field
          </Head1>
        </Stack>
        <Stack
          direction={{ md: "row", lg: "column" }}
          display={{ md: "flex", lg: "none" }}
          alignItems={"center"}
          width={{md:"58%",smm:"85%", sm:"85%"}}
          justifyContent={"center"}
          pt={2}
        >
          <Head1 color="black" fontSize={{lg:"35px", md:"30px", sm:"20px"}}>
            Become&nbsp;a professional in&nbsp;either field
          </Head1>
        </Stack>
        <Typography
          margin={{ lg: "20px 0px", md: "20px 85px", sm:"20px 20px" }}
          textAlign={{ lg: "left", sm: "center" }}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </Typography>
        <ButtonMediumOutline color="#379237">Get Started</ButtonMediumOutline>
      </Stack>
      <Stack
        sx={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          alignSelf: { lg: "end", md: "center", sm:"center" },
          width: "50%",
          height: { lg: "90%", md: "55%", smm:"50%", sm:"45%" },
        }}
      ></Stack>
    </Stack>
  );
}
