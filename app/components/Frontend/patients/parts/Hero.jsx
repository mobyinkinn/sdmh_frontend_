"use client";
import NavbarAdminVerticle from "@/app/components/admin/navbarAdmin/NavbarAdminVerticle";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack } from "@mui/material";
import NavUserVerticle from "./NavUserVerticle";
import Spinner from "@/app/components/ui/Spinner";
import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";

export default function Hero({ sectionsRef }) {
  const { data, isLoading: isLoadingBanner } = useBannerByPage(
    "patient care and services"
  );
  if (isLoadingBanner) return <Spinner />;
  return (
    <Stack direction={"row"}>
      <Box
        display={{ md: "flex", sm: "none" }}
        minHeight={{ md: "322px", lg: "434px", xl: "600px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Box>

      <Box
        display={{ md: "none", sm: "flex" }}
        minHeight={{ xs: "451px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.mobileBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      ></Box>
      {/* <ContainerMain
        gap={{ lg: "20px", sm: "10px" }}
        alignItems={{ sm: "center", lg: "left" }}
        bgColor="#D2E4D8"
        padding={{
          lg: "100px 70px",
          md: "100px 70px",
          sm: "100px 20px",
          smm: "100px 20px",
        }}
        width={{ lg: "90%", md: "90%", sm: "100%" }}
      >
        <Head1 color="black" textAlign="left">
          The Hospital That
        </Head1>
        <Head1 color="#476C9B" textAlign="left">
          Cares Patient Care & Services
        </Head1>
        <ParaNormal
          width={{ lg: "50%", md: "50%", smm: "90%", sm: "90%" }}
          textAlign={{ sm: "center", smm: "center" }}
        >
          Contrary to popular belief, not simply It has roots in Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked.
        </ParaNormal>
      </ContainerMain> */}
      <NavUserVerticle sectionsRef={sectionsRef} />
    </Stack>
  );
}
