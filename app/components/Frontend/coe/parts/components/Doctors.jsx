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
import { useDoctorById } from "@/app/components/admin/doctors/parts/useDoctor";

const days = ["Sun", "Mon", "Tues", "Wed", "Thrus", "Fri", "Sat"];

export default function Doctors({ departments, _id }) {
  const { data, isLoading, error } = useDoctorById(_id);

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={{ md: "30px", xs: "10px" }}
      justifyContent={"center"}
      marginTop={{ md: "50px", xs: "15px" }}
    >
      {data?.map((el, i) => {
        return (
          <Stack
            key={i}
            height={"100vh"}
            width={{ lg: "30%", md: "45%", xs: "100%" }}
            sx={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <Box
              height={"50%"}
              backgroundColor={"#D9D9D9"}
              width={"100%"}
              position={"relative"}
            >
              <Image
                src={el.image}
                alt=""
                fill
                objectFit="cover"
                objectPosition="center bottom"
              />
            </Box>
            <Stack
              padding={{ lg: "20px 35px", md: "15px 25px", xs: "10px 15px" }}
              gap={"10px"}
              sx={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "0 0 15px 15px",
              }}
            >
              <Head3 textAlign={"left"} color="black">
                {el.name}
              </Head3>
              <Head4 textAlign={"left"} fontWeight={"400"}>
                {el.designation}
              </Head4>
              <Stack>
                <ParaNormal>Department</ParaNormal>
                <ParaNormalSmall>
                  {
                    departments?.filter((ele) => ele._id === el.department)[0]
                      .name
                  }
                </ParaNormalSmall>
              </Stack>
              <Stack>
                <ParaNormal>Expertise</ParaNormal>
                <ParaNormalSmall>{el.about}</ParaNormalSmall>
              </Stack>
              <Stack direction={"row"} gap={"4px"} flexWrap={"wrap"}>
                {days.map((ele, i) => {
                  return (
                    <ButtonVerySmallOutline
                      key={i}
                      color={el.availablity.includes(ele) ? "white" : "#379237"}
                      bgColor={
                        el.availablity.includes(ele) ? "#379237" : "transparent"
                      }
                    >
                      {ele}
                    </ButtonVerySmallOutline>
                  );
                })}
              </Stack>

              <Stack direction={"row"} gap={"10px"} flexWrap={"wrap"}>
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
