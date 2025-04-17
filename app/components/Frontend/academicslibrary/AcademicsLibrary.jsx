import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import banner from "./parts/assets/bannerImage.png";
import SdmhLibrary from "./parts/SdmhLibrary";
import KohaSection from "./parts/KohaSection";
import ServiceProvide from "./parts/ServiceProvide";
import CategoriesMember from "./parts/CategoriesMember";
import MobileFooter from "../footer/MobileFooter";
import Hero from "./parts/Hero";

const AcademicsLibrary = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <SdmhLibrary />
      <KohaSection />
      <ServiceProvide />
      {/* <CategoriesMember /> */}
      <Footer />
      <MobileFooter />
    </>
  );
};

export default AcademicsLibrary;
