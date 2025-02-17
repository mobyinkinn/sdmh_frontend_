import { Stack, Typography } from "@mui/material";

export default function AboutDoctor({data}) {
  return (
    <Stack
      backgroundColor="#A6C9B2"
      padding={{ md: "50px", xs: "20px" }}
      gap={{ md: "10px", xs: "5px" }}
    >
      <Typography fontWeight="bold">About Dr. {data?.name}</Typography>
      <Typography fontSize={{ md: "1rem", xs: "0.8rem" }}>
        {data?.about}
      </Typography>
    </Stack>
  );
}
