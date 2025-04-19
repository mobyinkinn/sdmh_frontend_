import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import durlabhji from "./assests/academic_contact_us.jpg";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiHome4Line } from "react-icons/ri";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

const OfficeAcademics = () => {
  const data = [
    {
      icon: MdOutlineWifiCalling3,
      text: "0141-2566251-58 (378)",
    },

    {
      icon: HiOutlineMailOpen,
      text: "deansdmh@gmail.com",
    },
    {
      icon: SlLocationPin,
      text: "Santokba Durlabhji Memorial Hospital, Bhawani Singh Marg, Rambagh Circle, 302015",
    },
  ];
  return (
    <Stack bgcolor={"#CEDDCC"} alignItems={"center"} gap={1}>
      <Stack direction={"row"} p={"30px 16px"}>
        <Head1 color="black" fontSize={{ sm: "1.2rem" }}>
          Office of the &nbsp;
        </Head1>
        <Head1 style={{ textAlign: "center" }} fontSize={{ sm: "1.2rem" }}>
          Dean Academics
        </Head1>
      </Stack>
      <Stack
        width={"100%"}
        alignItems={"center"}
        p={"0 16px 20% 16px"}
        position={"relative"}
        display={{ xs: "none", lg: "flex" }}
      >
        <Box
          component="img"
          src={durlabhji.src}
          alt="Durlabhji"
          sx={{
            width: { md: "700px", lg: "925px", xl: "1200px" },
            height: 500,
            objectFit: "cover",
          }}
        />
        <Stack
          bgcolor={"white"}
          width={"65%"}
          flexWrap={"wrap"}
          direction={"row"}
          justifyContent={"center"}
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
              <ParaNormal textAlign={{ lg: "center" }}>{d.text}</ParaNormal>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack
        bgcolor={"white"}
        width={"80%"}
        bottom={100}
        borderRadius={2}
        display={{ xs: "flex", lg: "none" }}
        marginBottom={5}
      >
        {data.map((d, i) => (
          <Stack
            key={i}
            width={"100%"}
            direction={"row"}
            p={"27px"}
            alignItems={"center"}
            gap={2}
          >
            <Stack
              bgcolor={"#007946"}
              p={"12px"}
              borderRadius={2}
              width={47}
              height={47}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <d.icon size={25} color="white" />
            </Stack>
            <ParaNormal>{d.text}</ParaNormal>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default OfficeAcademics;
