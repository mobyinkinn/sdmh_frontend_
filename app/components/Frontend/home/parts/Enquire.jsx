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
      bgColor={"#D8E0EB"}
      dir="row"
      justifyContent={"center"}
      gap={"70px"}
      flexDirection={{ sm: "column", smm: "column", md: "column", lg: "row" }}
    >
      <Stack
        width={{ sm: "100%", lg: "45%" }}
        // alignItems={{ xs: "center", md: "left" }}
      >
        <Head1
          color="#005900"
          textAlign={{
            sm: "center",
            smm: "center",
            md: "start",
            lg: "start",
          }}
        >
          Enquire Now
        </Head1>
        <Stack
          marginTop={"20px"}
          padding={{ xs: "20px", md: "30px" }}
          border={"1px solid rgba(45, 45, 45, 0.2)"}
          borderRadius={"30px"}
        >
          <Label>Full Name</Label>
          <TextInput
            padding={{
              xs: "6px 15px",
              sm: "10px 25px",
              smm: "10px 25px",
              md: "10px 25px",
              lg: "15px 30px",
            }}
            placeholder="Enter Your Full Name"
            bgColor={"#EFF3F8"}
          />
          <Label>Phone No.</Label>
          <TextInput
            padding={{
              xs: "6px 15px",
              sm: "10px 25px",
              smm: "10px 25px",
              md: "10px 25px",
              lg: "15px 30px",
            }}
            placeholder="Enter Your Phone Number"
            bgColor={"#EFF3F8"}
          />
          <Label>Email ID</Label>
          <TextInput
            padding={{
              xs: "6px 15px",
              sm: "10px 25px",
              smm: "10px 25px",
              md: "10px 25px",
              lg: "15px 30px",
            }}
            placeholder="Enter Your Email Address"
            bgColor={"#EFF3F8"}
          />
          <Label>Message</Label>
          <TextArea placeholder="Message" rows={7} bgColor={"#EFF3F8"} />

          <Label>Captcha</Label>
          <Stack
            marginBottom={"20px"}
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <TextInput
              placeholder="Enter Your Captcha Code"
              bgColor={"#EFF3F8"}
              width={"70%"}
            />
            <ButtonMediumOutline color="green">Captcha</ButtonMediumOutline>
          </Stack>
          <DarkGreenButton bgColor={"#379237"} borderRadius={"100px"}>
            Submit
          </DarkGreenButton>
        </Stack>
      </Stack>
      <Stack width={{ sm: "100%", lg: "45%" }} gap={"15px"}>
        <Head1
          color="#005900"
          textAlign={{
            sm: "center",
            smm: "center",
            md: "start",
            lg: "start",
          }}
        >
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
