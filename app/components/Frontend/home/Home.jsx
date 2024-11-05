import React from "react";
import HoverYears from "./parts/HoverYears";
import Navbar from "../navbar/Nav";
import Hero from "./parts/Hero";
import PatientStories from "./parts/PatientStories";
import Todo from "./parts/Todo";
import Tabs from "./parts/Tabs";
import FindDoctor from "./parts/FindDoctor";
import Blog from "./parts/Blog";
import FilterSection from "./parts/FilterSection";
import Departments from "./parts/Departments";
import Achievements from "./parts/Achievements";
import About from "./parts/About";
import View from "./parts/360View";
import Reviews from "./parts/Reviews";
import Enquire from "./parts/Enquire";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <Hero />
      <FilterSection />
      <Departments />
      <Achievements />
      <About />
      <View />
      <HoverYears />
      <PatientStories />
      <Todo />
      <Tabs />
      <FindDoctor />
      <Blog />
      <Reviews />
      <Enquire />
    </div>
  );
};

export default Home;
