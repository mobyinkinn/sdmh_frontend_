import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Banner from "./parts/Banner";
import About from "./parts/About";
import Visitors from "./parts/Visitors";

export default function Donation() {
  return (
    <Stack>
      <Navbar />
      <Banner />
      <About />
      <Visitors />
      <Footer />
    </Stack>
  );
}
