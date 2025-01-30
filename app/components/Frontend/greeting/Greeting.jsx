import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import MobileFooter from "../footer/MobileFooter";
import banner from "./assets/greeting_banner.png";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import Greet from "./parts/Greet";

const Greeting = () => {
  return (
    <>
      <Navbar />
      <BannerImage2 image={banner.src} />
      <Greet />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default Greeting;
