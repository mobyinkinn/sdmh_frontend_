import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import CareerForm from "./parts/CareerForm";

export default function CareerInner() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <CareerForm />
      <Footer />
    </Stack>
  );
}
