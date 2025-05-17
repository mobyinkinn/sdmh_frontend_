"use client"
import { Box, Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/components/Hero";
import Grid from "./parts/components/Grid";
import MobileFooter from "../footer/MobileFooter";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";

export default function Award() {
  const { isLoading } = useNavbar();
  const { data, isLoading: isLoadingBanner } = useBannerByPage("award");
  if (isLoading) return <Spinner />;
  return (
    <Stack>
      <Navbar />
      <Stack direction={"row"}>
        <Box
          display={{ md: "flex", sm: "none" }}
          minHeight={{ md: "276px", lg: "386px", xl: "557px" }}
          sx={{
            backgroundImage: `url(${data?.images})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "100%",
          }}
        ></Box>
        <Box
          display={{ md: "none", sm: "flex" }}
          minHeight={{ xs: "385px" }}
          width={"100%"}
          sx={{
            backgroundImage: `url(${data?.mobileimages})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center center",
          }}
        ></Box>
      </Stack>
      <Grid />
      <Footer />
      <MobileFooter />
    </Stack>
  );
}
