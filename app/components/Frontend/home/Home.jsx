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

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <Hero />
      <FilterSection />
      <Departments />
      <HoverYears />
      <PatientStories />
      <Todo />
      <Tabs />
      <FindDoctor />
      <Blog />
    </div>
  );
};

export default Home;
