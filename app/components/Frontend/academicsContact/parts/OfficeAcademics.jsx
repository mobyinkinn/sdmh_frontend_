import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import durlabhji from "./assests/sdmhContact.png";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiHome4Line } from "react-icons/ri";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

const OfficeAcademics = () => {
  const data = [
    {
      icon: SlLocationPin,
      text: "Santokba Durlabhji Memorial Hospital, Bhawani Singh Marg, Rambagh Circle, 302015",
    },
    {
      icon: MdOutlineWifiCalling3,
      text: "0141-2566251-58",
    },
    {
      icon: HiOutlineMailOpen,
      text: "info@sdmh.in",
    },
    {
      icon: RiHome4Line,
      text: "378",
    },
  ];
  return (
    <Stack bgcolor={"#CEDDCC"} alignItems={"center"} gap={1}>
      <Stack direction={"row"} p={2}>
        <Head1 color="black">Office of the &nbsp;</Head1>
        <Head1 style={{ textAlign: "center" }}>Dean Academics,</Head1>
      </Stack>
      <Stack
        width={"100%"}
        alignItems={"center"}
        p={"0 16px 20% 16px"}
        position={"relative"}
      >
        <Image src={durlabhji.src} width={1200} height={500} />
        <Stack
          bgcolor={"white"}
          width={"65%"}
          flexWrap={"wrap"}
          direction={"row"}
          position={"absolute"}
          bottom={100}
          borderRadius={2}
        >
          {data.map((d, i) => (
            <Stack
              key={i}
              width={"50%"}
              direction={"row"}
              p={"27px"}
              alignItems={"center"}
              gap={2}
            >
              <Stack bgcolor={"#007946"} p={"18px"} borderRadius={2}>
                <d.icon size={60} color="white" />
              </Stack>
              <ParaNormal>{d.text}</ParaNormal>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OfficeAcademics;
