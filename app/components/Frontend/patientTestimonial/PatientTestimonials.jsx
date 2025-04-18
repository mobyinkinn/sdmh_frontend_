"use client";
import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import banner from "./parts/assets/BannerRight.png";
import BannerImage from "./parts/BannerImage";
import Testimonialslider from "./parts/Testimonialslider";
import PatientStories from "./parts/PatientStories";
import MobileFooter from "../footer/MobileFooter";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";
import { Box, Stack } from "@mui/material";
import Reviews from "./parts/Reviews";

const PatientTestimonials = () => {
  const { isLoading } = useNavbar();
  const { data, isLoading: isLoadingBanner } = useBannerByPage(
    "patient testimonial"
  );
  if (isLoading) return <Spinner />;
  return (
    <>
      <Navbar />
      <Stack direction={"row"}>
        <Box
          display={{ md: "flex", sm: "none" }}
          minHeight={{ md: "276px", lg: "386px", xl: "557px" }}
          sx={{
            backgroundImage: `url(${data?.banner})`,
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
            backgroundImage: `url(${data?.mobileBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center center",
          }}
        ></Box>
      </Stack>
      {/* <BannerImage
        title="Patient Says"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        color={"#476C9B"}
        descolor={"black"}
        overlayColor={"#FFFFFB"}
        image={banner}
        textcenter={"left"}
      /> */}
      <Testimonialslider />
      <Reviews />
      <PatientStories />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default PatientTestimonials;
