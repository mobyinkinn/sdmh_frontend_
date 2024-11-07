import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Stack } from "@mui/material";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import Image from "next/image";

import bannerImg from "../assets/coeBanner.png";
import lines from "../assets/icons/lines.png";

export default function Hero() {
  return (
    <Stack height={"80vh"} backgroundColor={"#FBF6EE"} direction="row">
      <Stack
        width={"50%"}
        position={"relative"}
        justifyContent={"center"}
        marginLeft={"100px"}
      >
        <Head1 color="black" textAlign="left">
          Become
        </Head1>
        <Head1
          color="black"
          textAlign="left"
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
        <Head1 color="black" textAlign="left">
          either field
        </Head1>
        <ParaNormal margin={"20px 0"}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </ParaNormal>
        <ButtonMediumOutline color="#379237">Get Started</ButtonMediumOutline>
      </Stack>
      <Stack
        sx={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          alignSelf: "end",
          width: "50%",
          height: "90%",
        }}
      ></Stack>
    </Stack>
  );
}
