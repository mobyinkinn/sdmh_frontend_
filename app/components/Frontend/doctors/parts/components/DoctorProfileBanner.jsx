import { Stack, Typography, Box } from "@mui/material";
import doctor from "../assets/doctor1.png";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import {
  ButtonMediumOutline,
  ButtonSmallOutline,
} from "@/app/styledComponents/frontend/Buttons";

export default function DoctorProfileBanner() {
  return (
    <Stack width="100%">
      <Stack
        width="100%"
        height="fit-content"
        direction={{ md: "row" }}
        justifyContent="start"
      >
        <Box
          sx={{
            backgroundImage: `url(${doctor.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "350px",
            width: { md: "30%" },
          }}
        ></Box>
        <Stack
          backgroundColor="#005900"
          padding={{ md: "0 70px", xs: "20px 20px" }}
          justifyContent={"center"}
          gap="5px"
          width={{ md: "70%" }}
        >
          <Head1
            color="white"
            textAlign={{ lg: "left", md: "left", smm: "left", sm: "left" }}
          >
            Dr. Aafreen Siddique
          </Head1>
          <ParaNormal color="white">Consultant, Cardiology</ParaNormal>
          <ParaNormalSmall color="white">
            MBBS, MD, DA, Fellowship in Onco-Anaesthesia and Chronic Cancer Pain
          </ParaNormalSmall>
          <ParaNormalSmall color="white">
            Department: Cardiology{" "}
          </ParaNormalSmall>
          <ParaNormalSmall color="white">
            Years of practice: Cardiology{" "}
          </ParaNormalSmall>
          <Stack
            marginTop="20px"
            display={{ md: "flex", xs: "none" }}
            gap="20px"
            direction="row"
          >
            <ButtonMediumOutline hoverColor="#005900" color="white">
              Make Appointment
            </ButtonMediumOutline>
            <ButtonMediumOutline hoverColor="#005900" color="white">
              Video Consultation
            </ButtonMediumOutline>
          </Stack>
          <Stack
            marginTop="20px"
            display={{ md: "none", xs: "flex" }}
            gap="20px"
            direction="row"
          >
            <ButtonSmallOutline hoverColor="#005900" color="white">
              Make Appointment
            </ButtonSmallOutline>
            <ButtonSmallOutline hoverColor="#005900" color="white">
              Video Consultation
            </ButtonSmallOutline>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
