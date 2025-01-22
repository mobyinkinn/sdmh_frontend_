import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";
import { Stack } from "@mui/material";

import founder from "./assets/founder.png";

export default function Founder() {
  return (
    <ContainerMain
      flexDirection={{ md: "row", smm: "column", sm: "column" }}
      bgColor="#276923"
      padding={{
        lg: "50px 50px 0 50px",
        md: "50px 50px 0 50px",
        smm: "20px 20px 0px 20px",
        sm: "20px 20px 0px 20px",
      }}
      id="founder"
    >
      <Stack
        width={{ md: "60%", xs: "100%" }}
        justifyContent={"center"}
        gap={{ md: "20px", xs: "10px" }}
      >
        <Head1 color="white">Our Founder</Head1>
        <Head3 color="white" fontWeight={"regular"}>
          Late Padmashri Khailshankar Durlabhji
        </Head3>
      </Stack>
      <Stack
        sx={{
          height: { md: "60vh", xs: "40vh" },
          margin: { md: "0 0 0 50px", xs: "auto" },
          width: { md: "40%", xs: "90%" },
          backgroundImage: `url(${founder.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
      ></Stack>
    </ContainerMain>
  );
}
