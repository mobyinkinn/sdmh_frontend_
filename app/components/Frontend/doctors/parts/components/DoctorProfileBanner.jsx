import { Stack, Typography, Box } from "@mui/material";
import doctor from "../assets/doctor1.png";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";

export default function DoctorProfileBanner() {
  return (
    <Stack width="100%">
      <Stack
        width="100%"
        height="80vh"
        direction={"row"}
        padding="50px"
        gap="50px"
      >
        <Box
          sx={{
            backgroundImage: `url(${doctor.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "1000px",
            height: "300px",
            width: "300px",
          }}
        ></Box>
        <Stack>
          <Head1
            color="black"
            textAlign={{ lg: "left", md: "left", xs: "left" }}
          >
            Dr. Aafreen Siddique
          </Head1>
          <ParaNormal>Consultant, Cardiology</ParaNormal>
          <ParaNormalSmall>
            MBBS, MD, DA, Fellowship in Onco-Anaesthesia and Chronic Cancer Pain
          </ParaNormalSmall>
          <ParaNormalSmall>Department: Cardiology </ParaNormalSmall>
          <ParaNormalSmall>Years of practice: Cardiology </ParaNormalSmall>
        </Stack>
      </Stack>
    </Stack>
  );
}
