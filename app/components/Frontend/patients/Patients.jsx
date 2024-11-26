import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import Care from "./parts/Care";
import Rest from "./parts/Rest";
import Tpa from "./parts/Tpa";

export default function Patients() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <Care />
      <Rest />
      <Tpa />
      <Footer />
    </Stack>
  );
}
