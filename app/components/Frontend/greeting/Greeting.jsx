"use client"
import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import MobileFooter from "../footer/MobileFooter";
import banner from "./assets/greeting_banner.png";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import Greet from "./parts/Greet";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";
import Spinner from "../../ui/Spinner";
import { Box } from "@mui/material";

const Greeting = () => {
   const { data, isLoading: isLoadingBanner } = useBannerByPage(
     "send a greeting"
   );
   if (isLoadingBanner) return <Spinner />;
  return (
    <>
      <Navbar />
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
      <Greet />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default Greeting;
