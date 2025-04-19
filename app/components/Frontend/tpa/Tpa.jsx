"use client";
import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage from "@/app/styledComponents/frontend/BannerImage";
import banner from "./assets/bannerImage.png";
import Tabs from "./parts/Tabs";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";
import { Box } from "@mui/material";
import Spinner from "../../ui/Spinner";
import MobileFooter from "../footer/MobileFooter";

const Tpa = () => {
  const { data, isLoading: isLoadingBanner } = useBannerByPage("tpas");
  if (isLoadingBanner) return <Spinner />;
  return (
    <>
      <Navbar />
      {/* <BannerImage
        overlayColor="#476C9BE5"
        title="Tpas"
        image={banner.src}
        description="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      /> */}
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
      <Tabs />
      <Footer />
      <MobileFooter/>
    </>
  );
};

export default Tpa;
