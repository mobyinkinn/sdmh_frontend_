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
    <ContainerMain
      bgColor="#D8E0EB"
      flexDirection={{ lg: "row", sm: "column-reverse" }}
      alignItems={{ lg: "center", sm: "center" }}
    >
      <Stack
        width={{ lg: "60%", sm: "100%" }}
        height={{ lg: "70vh", sm: "none" }}
        justifyContent={"center"}
      >
        <Stack
          gap={"10px"}
          width={{ lg: "70%", sm: "100%" }}
          marginLeft={{ lg: "30px", sm: "0" }}
          alignItems={"center"}
        >
          <Head4
            color="black"
            textAlign={{ lg: "left", sm: "center" }}
            fontWeight={{ lg: "bold", sm: "normal" }}
          >
            Help The Poor Patient
          </Head4>
          <Head1
            color="#476C9B"
            textAlign="left"
            width={{ lg: "100%", sm: "70%" }}
          >
            Give hope, change lives, spread love
          </Head1>
          <ParaNormalSmall
            width={{ lg: "100%", sm: "80%" }}
            textAlign={{ lg: "left", sm: "center" }}
          >
            Contrary to popular belief, not simply random text. It has roots in
            Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked.
          </ParaNormalSmall>
          <Stack
            direction={{ lg: "row", sm: "column" }}
            gap={{ lg: "10px", sm: "20px" }}
            alignItems={"center"}
          >
            <Stack>
              <AvatarGroup total={103}>
                <Avatar alt="Remy Sharp" src={img1.src} />
                <Avatar alt="Travis Howard" src={img2.src}></Avatar>
                <Avatar alt="Trevor Henderson" src={img3.src}></Avatar>
              </AvatarGroup>
              <ParaNormal>
                <b>Happy Patients</b>
              </ParaNormal>
            </Stack>
            <ButtonSmallOutline color="#007946">Help Now</ButtonSmallOutline>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        position={"relative"}
        width={{ lg: "40%", sm: "85%" }}
        height={"70vh"}
      >
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
