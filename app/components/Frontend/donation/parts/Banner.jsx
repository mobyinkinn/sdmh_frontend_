import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import banner from "./assets/bannerImage.png";
import Image from "next/image";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";

export default function Banner() {
  return (
    <ContainerMain bgColor="#D8E0EB" dir="row">
      <Stack width={"60%"} height="70vh" justifyContent={"center"}>
        <Stack gap={"10px"} width={"70%"} marginLeft={"30px"}>
          <Head4 color="black" textAlign="left">
            Help The Poor Patient
          </Head4>
          <Head1 color="#476C9B" textAlign="left">
            Give hope, change lives, spread love
          </Head1>
          <ParaNormalSmall>
            Contrary to popular belief, not simply random text. It has roots in
            Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked.
          </ParaNormalSmall>
          <Stack direction="row" gap={"10px"} alignItems={"center"}>
            <ButtonSmallOutline color="#007946">Help Now</ButtonSmallOutline>
            <AvatarGroup total={103} sx={{ marginLeft: "60px" }}>
              <Avatar alt="Remy Sharp" src={img1.src} />
              <Avatar alt="Travis Howard" src={img2.src}></Avatar>
              <Avatar alt="Trevor Henderson" src={img3.src}></Avatar>
            </AvatarGroup>
            <ParaNormal>
              <b>Happy Patients</b>
            </ParaNormal>
          </Stack>
        </Stack>
      </Stack>
      <Stack position={"relative"} width={"40%"} height={"70vh"}>
        <Image
          src={banner}
          alt=""
          fill
          objectFit="contain"
          objectPosition="center center"
        />
      </Stack>
    </ContainerMain>
  );
}
