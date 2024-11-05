import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head2, Head3 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack, Typography } from "@mui/material";

import mail from "../assets/icons/mail.png";
import phone from "../assets/icons/phone.png";
import map from "../assets/icons/map.png";
import Image from "next/image";

import locationMap from "../assets/map.png";
import {
  Label,
  TextArea,
  TextInput,
} from "@/app/styledComponents/frontend/Inputs";
import {
  ButtonMediumOutline,
  DarkGreenButton,
  DarkGreenButtonSmall,
} from "@/app/styledComponents/frontend/Buttons";

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
    <ContainerMain
      bgColor={"#FBF6EE"}
      dir="row"
      justifyContent={"center"}
      gap={"70px"}
    >
      <Stack width={"45%"}>
        <Head1 color="#379237" textAlign={"left"}>
          Enquire Now
        </Head1>
        <Stack
          marginTop={"20px"}
          padding={"30px"}
          border={"1px solid rgba(45, 45, 45, 0.2)"}
          borderRadius={"30px"}
        >
          <Label>Full Name</Label>
          <TextInput placeholder="Enter Your Full Name" bgColor={"#FBF6EE"} />
          <Label>Phone No.</Label>
          <TextInput
            placeholder="Enter Your Phone Number"
            bgColor={"#FBF6EE"}
          />
          <Label>Email ID</Label>
          <TextInput
            placeholder="Enter Your Email Address"
            bgColor={"#FBF6EE"}
          />
          <Label>Message</Label>
          <TextArea placeholder="Message" rows={7} bgColor={"#FBF6EE"} />

          <Label>Captcha</Label>
          <Stack
            marginBottom={"20px"}
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <TextInput
              placeholder="Enter Your Email Address"
              bgColor={"#FBF6EE"}
              width={"70%"}
            />
            <ButtonMediumOutline color="green">Captcha</ButtonMediumOutline>
          </Stack>
          <DarkGreenButton bgColor={"#379237"} borderRadius={"100px"}>
            Submit
          </DarkGreenButton>
        </Stack>
      </Stack>
      <Stack width={"45%"} gap={"15px"}>
        <Head1 color="#379237" textAlign={"left"}>
          How To Reach
        </Head1>
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
            height: "60vh",
            borderRadius: "10px",
          }}
        ></Box>
      </Stack>
    </ContainerMain>
  );
}
