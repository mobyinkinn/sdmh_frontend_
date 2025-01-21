import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import { FaCircle } from "react-icons/fa";

import pencil from "./assets/pencil.png";

export default function Suggestions() {
  return (
    <ContainerMain
      alignItems="center"
      bgColor="#005900"
      flexDirection={{ lg: "row", md: "row", sm: "column", smm: "column" }}
    >
      <Stack width={{ md: "70%" }} gap={"5px"}>
        <Head1 color="white" textAlign="left">
          Your suggestions are welcome at
        </Head1>
        <ParaNormal color="white">
          If you wish to lodge a complaint/suggestion about any aspect of the
          services you have received, you may do so verbally or in writing at
        </ParaNormal>
        <Stack
          color={"white"}
          gap="10px"
          alignItems={"baseline"}
          direction="row"
        >
          <FaCircle style={{ height: "15px", width: "15px" }} />
          <ParaNormal color="white">Reception (OPD & IPD Building)</ParaNormal>
        </Stack>
        <Stack
          color={"white"}
          gap="10px"
          alignItems={"baseline"}
          direction="row"
        >
          <FaCircle style={{ height: "15px", width: "15px" }} />
          <ParaNormal color="white">Mail ID: info@sdmh.in</ParaNormal>
        </Stack>
        <Stack
          color={"white"}
          gap="10px"
          alignItems={"baseline"}
          direction="row"
        >
          <FaCircle style={{ height: "15px", width: "15px" }} />
          <ParaNormal color="white">
            99296-07110 (Patient Welfare Officer), 98290-79494 (Feedback No.)
          </ParaNormal>
        </Stack>
        <Stack
          color={"white"}
          gap="10px"
          alignItems={"baseline"}
          direction="row"
        >
          <FaCircle style={{ height: "15px", width: "15px" }} />
          <ParaNormal color="white">
            You can also drop your suggestion in suggestions box.
          </ParaNormal>
        </Stack>
      </Stack>
      <Stack
        width={"30%"}
        height="35vh"
        sx={{
          backgroundImage: `url(${pencil.src})`,
          backgroundPosition: "center center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></Stack>
    </ContainerMain>
  );
}
