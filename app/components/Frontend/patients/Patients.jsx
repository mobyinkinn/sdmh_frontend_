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
import { useCallback, useRef } from "react";
import MobileFooter from "../footer/MobileFooter";

export default function Patients() {
  const sectionsRef = {
    tabData: useRef(null),
    admission: useRef(null),
    discharge: useRef(null),
    rest: useRef(null),
    threeLineSlider: useRef(null),
    loungeAttendants: useRef(null),
    atmWithdrawal: useRef(null),
    policy: useRef(null),
    vishram: useRef(null),
    suggestions: useRef(null),
  };
const setAdmissionAndDischargeRef = useCallback((node) => {
  if (node) {
    sectionsRef.tabData.current = node;
    sectionsRef.admission.current = node;
    sectionsRef.discharge.current = node;
    sectionsRef.rest.current = node;
  }
}, []);
const setSecondSection = useCallback((node) => {
  if (node) {
    sectionsRef.threeLineSlider.current = node;
    sectionsRef.loungeAttendants.current = node;
    sectionsRef.atmWithdrawal.current = node;
  }
}, []);

  return (
    <Stack>
      <Navbar />
      <Hero sectionsRef={sectionsRef} />

      {/* Sections with refs */}
      <div ref={setAdmissionAndDischargeRef}>
        <TabData />
      </div>
      <div ref={setSecondSection}>
        <ThreeLineSlider />
      </div>
      <div ref={sectionsRef.policy}>
        <Policy />
      </div>
      <div ref={sectionsRef.vishram}>
        <Rest />
      </div>
      <div ref={sectionsRef.suggestions}>
        <Suggestions />
      </div>
      <Footer />
      <MobileFooter/>
    </Stack>
  );
}
