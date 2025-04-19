import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Topics from "./parts/Topics";
import Hero from "./parts/Hero";
import MobileFooter from "../footer/MobileFooter";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Hero
      />
      <Topics />
      <Footer />
      <MobileFooter/>
    </>
  );
};

export default Blog;
