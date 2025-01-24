import { Stack, Typography } from "@mui/material";

export default function AboutDoctor() {
  return (
    <Stack
      backgroundColor="#A6C9B2"
      padding={{ md: "50px", xs: "20px" }}
      gap={{ md: "10px", xs: "5px" }}
    >
      <Typography fontWeight="bold">About Dr. Aafreen Siddique</Typography>
      <Typography fontSize={{ md: "1rem", xs: "0.8rem" }}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet.
      </Typography>
    </Stack>
  );
}
