"use client";
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
import MobileApp from "./parts/MoblieApp";
import Qr from "./parts/Qr";
import Footer from "../footer/Footer";
import MobileFooter from "../footer/MobileFooter";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";
import MobilePatient from "./parts/MobilePatient";
import { Box } from "@mui/material";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";

const Home = () => {
  const { isLoading } = useNavbar();
  const { data, isLoading: isLoadingBanner } =
    useBannerByPage("find your doctor");
  if (isLoading || isLoadingBanner) return <Spinner />;
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
      <MobilePatient />
      <Todo />
      <Tabs />
      {/* <FindDoctor /> */}
      <Box
        display={{ md: "flex", sm: "none" }}
        minHeight={{ md: "203px", lg: "270px", xl: "379px" }}
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
        minHeight={{ xs: "290px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.mobileBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Box>
      <Blog />
      <Reviews />
      <Enquire />
      <MobileApp />
      <Qr />
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default Home;
