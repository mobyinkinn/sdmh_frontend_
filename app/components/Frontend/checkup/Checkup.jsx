"use client";
import { Box, Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/components/Hero";
import Grid from "./parts/components/Grid";
import MobileFooter from "../footer/MobileFooter";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";
import Spinner from "../../ui/Spinner";

export default function Coe() {
  const { data, isLoading: isLoadingBanner } =
    useBannerByPage("health check up");
  if (isLoadingBanner) return <Spinner />;
  return (
    <Stack>
      <Navbar />
      {/* <Hero /> */}
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
      <Grid />
      <Footer />
      <MobileFooter />
    </Stack>
  );
}
