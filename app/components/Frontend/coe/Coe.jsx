"use client";
import { Box, Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/components/Hero";
import Grid from "./parts/components/Grid";
import MobileFooter from "../footer/MobileFooter";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";

export default function Coe() {
  const { isLoading } = useNavbar();
  const {
    data,
    isLoading: isLoadingBanner,
    error,
  } = useBannerByPage("centre of excellence");
  if (isLoading || isLoadingBanner) return <Spinner />;
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
