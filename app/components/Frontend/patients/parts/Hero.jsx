"use client"
import NavbarAdminVerticle from "@/app/components/admin/navbarAdmin/NavbarAdminVerticle";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import NavUserVerticle from "./NavUserVerticle";

export default function Hero({ sectionsRef }) {
  return (
    <Stack direction={"row"}>
      <ContainerMain
        alignItems="left"
        bgColor="#D2E4D8"
        padding="100px 70px"
        style={{ width: "90%" }}
      >
        <Head1 color="black" textAlign="left">
          The Hospital That
        </Head1>
        <Head1 color="#476C9B" textAlign="left">
          Cares Patient Care & Services
        </Head1>
        <ParaNormal width="50%">
          Contrary to popular belief, not simply It has roots in Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked.
        </ParaNormal>
      </ContainerMain>
      <NavUserVerticle sectionsRef={sectionsRef} />
    </Stack>
  );
}
