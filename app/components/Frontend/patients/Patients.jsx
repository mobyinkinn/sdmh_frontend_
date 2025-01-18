"use client";
import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import Care from "./parts/Care";
import Rest from "./parts/Rest";
import Tpa from "./parts/Tpa";
import CheckUp from "./parts/CheckUp";
import Policy from "./parts/Policy";
import Gallery from "./parts/Gallery";
import Suggestions from "./parts/Suggestions";
import CardScroll from "./parts/CardsScroll";
import TabData from "./parts/TabData";
import ThreeLineSlider from "./parts/ThreeLineSlider";
import NavbarAdminVerticle from "@/app/components/admin/navbarAdmin/NavbarAdminVerticle";
import { useRef } from "react";

export default function Patients() {
  const sectionsRef = {
    tabData: useRef(null),
    threeLineSlider: useRef(null),
    policy: useRef(null),
    rest: useRef(null),
    suggestions: useRef(null),
  };

  return (
    <Stack>
      <Navbar />
      <Hero sectionsRef={sectionsRef} />

      {/* Sections with refs */}
      <div ref={sectionsRef.tabData}>
        <TabData />
      </div>
      <div ref={sectionsRef.threeLineSlider}>
        <ThreeLineSlider />
      </div>
      <div ref={sectionsRef.policy}>
        <Policy />
      </div>
      <div ref={sectionsRef.rest}>
        <Rest />
      </div>
      <div ref={sectionsRef.suggestions}>
        <Suggestions />
      </div>
      <Footer />
    </Stack>
  );
}
