import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import {
  Head1,
  Head2,
  Head3,
  Head4,
} from "@/app/styledComponents/frontend/Headings";
import { Box, Stack } from "@mui/material";

import doc1 from "../assets/doctor1.png";
import doc2 from "../assets/doctor2.png";
import doc3 from "../assets/doctor3.png";
import doc4 from "../assets/doctor4.png";
import doc5 from "../assets/doctor5.png";
import doc6 from "../assets/doctor6.png";

export default function Banner() {
  return (
    <ContainerMain bgColor="#FBF4E9">
      {/* <Head1 color="black">We Always Care</Head1>
      <Stack direction={"row"} margin={"0 auto"}>
        <Head1 color="black">About Your Health&nbsp;</Head1>
        <Head1>Appointment Now</Head1>
      </Stack> */}

      <Head1>
        <span style={{ color: "black" }}>We Always Care About Your Health</span>{" "}
        Appointment Now
      </Head1>
      <Stack
        width={"80%"}
        gap={"10px"}
        height={"80vh"}
        direction={"row"}
        margin={"0 auto"}
      >
        <Stack
          gap={"10px"}
          height={"80vh"}
          width={"25%"}
          justifyContent={"center"}
          padding={"5px"}
        >
          <Box
            sx={{
              backgroundImage: `url(${doc3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "40vh",
              width: "100%",
            }}
          ></Box>
        </Stack>
        <Stack gap={"10px"} width={"50%"} height={"80vh"}>
          <Stack gap={"10px"} direction={"row"} alignItems={"end"}>
            <Box
              sx={{
                backgroundImage: `url(${doc1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "40vh",
                width: "70%",
              }}
            ></Box>
            <Box
              sx={{
                backgroundImage: `url(${doc5.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "20vh",
                width: "30%",
              }}
            ></Box>
          </Stack>
          <Stack gap={"10px"} direction={"row"}>
            <Box
              sx={{
                backgroundImage: `url(${doc6.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "20vh",
                width: "30%",
              }}
            ></Box>
            <Box
              sx={{
                backgroundImage: `url(${doc2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "40vh",
                width: "70%",
              }}
            ></Box>
          </Stack>
        </Stack>
        <Stack height={"80vh"} width={"25%"} justifyContent={"center"}>
          <Box
            sx={{
              backgroundImage: `url(${doc4.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "40vh",
              width: "100%",
            }}
          ></Box>
        </Stack>
      </Stack>
    </ContainerMain>
  );
}
