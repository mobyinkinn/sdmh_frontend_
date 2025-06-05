"use client"
import React from "react";
import banner from "./parts/assests/banner.png";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Tabdata from "./parts/Tabdata";
import MobileFooter from "../footer/MobileFooter";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import Spinner from "../../ui/Spinner";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";
import { Box } from "@mui/material";
import { getUrl } from "@/app/utils/getUrl";

const Event = () => {
   const { data, isLoading: isLoadingBanner } =
     useBannerByPage("Latest happening");
   if (isLoadingBanner) return <Spinner />;


  return (
    <>
      <Navbar />
      <Box
        display={{ md: "flex", sm: "none" }}
        minHeight={{ md: "322px", lg: "434px", xl: "600px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${getUrl(data?.banner)})`,
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
          backgroundImage: `url(${getUrl(data?.mobileBanner)})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      ></Box>
      <Tabdata />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default Event;
