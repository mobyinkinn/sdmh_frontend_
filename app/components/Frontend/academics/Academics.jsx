import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import SdmhDeanery from "./parts/SdmhDeanery";
import TheDeanery from "./parts/TheDeanery";
import MobileFooter from "../footer/MobileFooter";

const Academics = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SdmhDeanery />
      <TheDeanery />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default Academics;
