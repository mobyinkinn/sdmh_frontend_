import { Stack, Typography } from "@mui/material";
import ambulance from "./assets/ambulance.png";
import Image from "next/image";

export default function Ambu() {
  return (
    <Stack alignItems="center" padding="40px 0" gap="10px">
      <Image src={ambulance} alt="adf" height={"200px"} width={"400px"} />
      <Typography color="#005900">For Emergency Contact</Typography>
      <Typography
        color="#005900"
        fontSize={{ md: "3rem", xs: "2rem" }}
        fontWeight={"bold"}
      >
        0141 352 4444
      </Typography>
    </Stack>
  );
}
