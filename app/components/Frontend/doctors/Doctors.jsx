"use client";
import { Box, Stack } from "@mui/material";
import Banner from "./parts/components/Banner";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import AllDoctors from "./parts/components/AllDoctors";
import MobileFooter from "../footer/MobileFooter";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";

export default function Doctors() {
  const { isLoading } = useNavbar();
  const { data, isLoading: isLoadingPage } = useBannerByPage("find a doctor");

  if (isLoading || isLoadingPage) return <Spinner />;
  return (
    <Stack>
      <Navbar />
      {/* <Banner /> */}
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
      <AllDoctors />
      <Footer />
      <MobileFooter />
    </Stack>
  );
}
