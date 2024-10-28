import React from "react";
import HoverYears from "./parts/HoverYears";
import Navbar from "../navbar/Nav";
import Hero from "./parts/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HoverYears />
    </>
  );
};

export default Home;
