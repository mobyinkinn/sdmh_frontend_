"use client";
import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage from "@/app/styledComponents/frontend/BannerImage";
import banner from "./parts/assests/banner.png";
import sm_banner from "./parts/assests/sm_banner.png";
import MobileFooter from "../footer/MobileFooter";
import VisitingFaculty from "./parts/visitingFaculty";
import { Box } from "@mui/material";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";
import Spinner from "../../ui/Spinner";

const AcademicsDnb = () => {
  const { data, isLoading: isLoadingBanner } = useBannerByPage(
    "academics visiting faculty"
  );
  if (isLoadingBanner) return <Spinner />;
  return (
    <>
      <Navbar />

      {/* <BannerImage
        align={"left"}
        image={banner.src}
        title="Visiting Faculty"
        subTitle="The Hospital That Cares"
        description="Contrary to popular belief,  not simply It has roots in Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked."
        color={"#476C9B"}
        descolor={"black"}
        padding={10}
        textcenter={"left"}
        sm_image={sm_banner.src}
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
      <VisitingFaculty />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default AcademicsDnb;
