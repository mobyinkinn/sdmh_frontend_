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

export default function Patients() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <Care />
      <Rest />
      <Tpa />
      <CheckUp />
      <Policy />
      <Gallery />
      <Suggestions />
      <Footer />
    </Stack>
  );
}
