import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { Stack, Typography } from "@mui/material";
import bgImage from "../assets/sdmh.png";

export default function Appointment() {
  return (
    <Stack
      sx={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: "cover" }}
    >
      <Stack
        sx={{
          backgroundColor: "rgba(0, 121, 70, 0.898)",
          justifyContent: "center",
          alignItems: "center",
          padding: { md: "100px", xs: "20px" },
          gap: "20px",
        }}
      >
        <Typography color="white">We are available 24/7</Typography>
        <Typography
          fontSize={{ md: "2.5rem", xs: "1.5rem" }}
          width={{ md: "60%", xs: "90%" }}
          textAlign={"center"}
          color="white"
        >
          Trust Us Be There To Help All & Make Things Well Done
        </Typography>
        <ButtonMediumOutline
          hcolor="white"
          color="white"
          hoverColor="rgb(0, 121, 70)"
        >
          Make Appointment
        </ButtonMediumOutline>
      </Stack>
    </Stack>
  );
}
