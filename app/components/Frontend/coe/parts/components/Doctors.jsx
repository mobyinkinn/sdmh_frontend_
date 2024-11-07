import { Box, Stack, Typography } from "@mui/material";

import img from "../assets/doc.png";
import Image from "next/image";
import { Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import {
  ButtonMediumOutline,
  ButtonSmallOutline,
  ButtonVerySmallOutline,
} from "@/app/styledComponents/frontend/Buttons";

const doctorsData = [
  {
    id: 0,
    name: "Dr. Yogesh Sewada",
    designation: "MBBS",
    department: "Accident & Emergency",
    img: img,
    about:
      "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
    availablity: [1, 0, 0, 0, 0, 0, 0],
  },
];

const days = ["Sun", "Mon", "Tues", "Wed", "Thrus", "Fri", "Sat"];

export default function Doctors() {
  return (
    <Stack>
      {doctorsData.map((el, i) => {
        return (
          <Stack
            padding={"30px"}
            height={"90vh"}
            width={"30%"}
            sx={{ border: "1px solid #F1EEEA" }}
          >
            <Box height={"50%"} width={"100%"} position={"relative"}>
              <Image
                src={el.img}
                alt=""
                fill
                objectFit="contain"
                objectPosition="center bottom"
              />
            </Box>
            <Stack marginTop={"20px"} gap={"10px"}>
              <Head3 textAlign={"left"} color="black">
                {el.name}
              </Head3>
              <Head4 textAlign={"left"} fontWeight={"400"}>
                {el.designation}
              </Head4>
              <Stack>
                <ParaNormal>Department</ParaNormal>
                <ParaNormalSmall>{el.department}</ParaNormalSmall>
              </Stack>
              <Stack>
                <ParaNormal>Expertise</ParaNormal>
                <ParaNormalSmall>{el.about}</ParaNormalSmall>
              </Stack>
              <Stack direction={"row"} gap={"4px"}>
                {days.map((ele, i) => {
                  return (
                    <ButtonVerySmallOutline
                      color={el.availablity[i] === 1 ? "white" : "#379237"}
                      bgColor={
                        el.availablity[i] === 1 ? "#379237" : "transparent"
                      }
                    >
                      {ele}
                    </ButtonVerySmallOutline>
                  );
                })}
              </Stack>

              <Stack direction={"row"} gap={"20px"}>
                <ButtonSmallOutline color={"#379237"}>
                  Appointment
                </ButtonSmallOutline>
                <ButtonSmallOutline color={"#000000"}>
                  View Profile
                </ButtonSmallOutline>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
