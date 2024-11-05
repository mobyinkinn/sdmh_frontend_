import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head3 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack, Typography } from "@mui/material";

import mail from "../assets/icons/mail.png";
import phone from "../assets/icons/phone.png";
import map from "../assets/icons/map.png";
import Image from "next/image";

import locationMap from "../assets/map.png";

const address = [
  {
    id: 0,
    data: "Bhawani Singh Marg, Near Rambagh circle, Jaipur-302015 (Rajasthan), INDIA",
    img: map,
  },
  { id: 1, data: "0141 352 4444", img: phone },
  { id: 2, data: "info@sdmh.in", img: mail },
];

export default function Enquire() {
  return (
    <ContainerMain bgColor={"#FBF6EE"} dir="row" justifyContent={"center"}>
      <Stack width={"45%"}></Stack>
      <Stack width={"45%"} gap={"15px"}>
        <Head3 color="#379237" textAlign={"left"}>
          How To Reach
        </Head3>
        <Typography fontWeight={"bold"}>
          Santokba Durlabhji Meorial Hospital
        </Typography>
        {address.map((el, i) => {
          return (
            <Stack
              direction={"row"}
              gap={"20px"}
              alignItems={"center"}
              marginBottom={"10px"}
            >
              <Image alt="" src={el.img} width={25} height={25} />
              <Typography>{el.data}</Typography>
            </Stack>
          );
        })}
        <Box
          sx={{
            backgroundImage: `url(${locationMap.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "100%",
            height: "40vh",
          }}
        ></Box>
      </Stack>
    </ContainerMain>
  );
}
