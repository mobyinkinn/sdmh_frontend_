"use client";
import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import MobileFooter from "../footer/MobileFooter";
import Hero from "./parts/Hero";
import banner from "./parts/assets/contact_banner.png";
import sm_banner from "./parts/assets/sm_contact_banner.png";
import Enquire_Now from "./parts/Enquire_Now";
import Available from "./parts/Available";
import Reach from "./parts/Reach";
import Ambu from "./parts/Ambu";
import { Box, Stack } from "@mui/material";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";

const Greeting = () => {
  const { isLoading } = useNavbar();
  const {
    data,
    isLoading: isLoadingBanner,
    error,
  } = useBannerByPage("contact us");

  if (isLoading || isLoadingBanner) return <Spinner />;
  return (
    <>
      <Navbar />
      {/* <Hero
        align={"left"}
        image={banner.src}
        subtitle="We are here for your care."
        title="Best Care & Better Doctor"
        description="Contrary to popular belief,  not simply It has roots in Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked."
        color={"#476C9B"}
        descolor={"black"}
        sm_image={sm_banner.src}
        textcenter={"left"}
        marginTop={"50px"}
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
      <Enquire_Now />
      <Available />
      <Reach />
      <Ambu />
      <Stack height={"90vh"} width="100%">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.290646873121!2d75.81001647504931!3d26.894269476658202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db69ecfd32ee7%3A0x3423f6c55d37fd06!2sSantokba%20Durlabhji%20Memorial%20Hospital%20(SDMH)!5e0!3m2!1sen!2sin!4v1738411881993!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Stack>
      <Footer />
      <MobileFooter />
    </>
  );
};

export default Greeting;
