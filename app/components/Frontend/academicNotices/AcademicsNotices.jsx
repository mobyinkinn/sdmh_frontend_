import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import banner from "./parts/assets/bannerImage.png";
import Noticwes from "./parts/Noticwes";
import MobileFooter from "../footer/MobileFooter";
import Hero from "./parts/Hero";
const AcademicsNotices = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Noticwes />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default AcademicsNotices;
