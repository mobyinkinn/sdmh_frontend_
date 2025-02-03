import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import Topics from "./parts/Topics";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Hero
        heights={"60vh"}
        color={"#476C9B"}
        descolor={"black"}
        overlayColor="#D8E0EB"
        title="Write Your Ideas And Spread to the World"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
      />
      <Topics />
      <Footer />
    </>
  );
};

export default Blog;
