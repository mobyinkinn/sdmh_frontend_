import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";
import { Stack } from "@mui/material";

import founder from "./assets/founder.png";

export default function Founder() {
  return (
    <ContainerMain
      flexDirection={{ lg: "row", sm: "column" }}
      bgColor="#276923"
      padding={"50px 50px 0 50px"}
      id="founder"
    >
      <Stack width={{lg:"60%", sm:"100%"}} justifyContent={"center"} gap="20px">
        <Head1 color="white">Our Founder</Head1>
        <Head3 color="white">Late Padmashri Khailshankar Durlabhji</Head3>
      </Stack>
      <Stack
        sx={{
          height: "60vh",
          width: {lg:"40%", sm:"100%"},
          backgroundImage: `url(${founder.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
      ></Stack>
    </ContainerMain>
  );
}
