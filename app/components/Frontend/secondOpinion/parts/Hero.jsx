import { Stack, Typography } from "@mui/material";
import banner from "./assets/bannerImage.png";

export default function Hero() {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      color="white"
      height={{ md: "90vh", xs: "70vh" }}
    >
      <Stack
        height="100%"
        alignItems="center"
        justifyContent="center"
        gap="10px"
        sx={{ backgroundColor: "rgba(71, 108, 155, 0.9)" }}
      >
        <Typography fontSize={{ md: "1rem", xs: "0.8rem" }}>Want To</Typography>
        <Typography fontWeight="bold" fontSize={{ md: "2rem", xs: "1.5rem" }}>
          Second Opinion?
        </Typography>
        <Typography
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          width={{ md: "70%", xs: "90%" }}
          textAlign="center"
        >
          Submit your reports and get a free second opinion from SDMH Doctors.
          We understand that advancements in medicine are happening everyday.
          There are times during your diagnosis, that getting a second opinion
          can make a big difference to the outcome. The second opinion program
          helps you get a verified opinion from our experts after a detailed
          review of your reports.
        </Typography>
      </Stack>
    </Stack>
  );
}
