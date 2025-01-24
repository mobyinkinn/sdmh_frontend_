import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/components/Hero";
import Grid from "./parts/components/Grid";
import MobileFooter from "../footer/MobileFooter";

export default function Coe() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <Grid />
      <Footer />
      <MobileFooter />
    </Stack>
  );
}
