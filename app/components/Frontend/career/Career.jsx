import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import CareerPosts from "./parts/CareerPosts";

export default function Career() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <CareerPosts />
      <Footer />
    </Stack>
  );
}
