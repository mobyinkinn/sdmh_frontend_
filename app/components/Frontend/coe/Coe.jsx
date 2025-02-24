"use client";
import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/components/Hero";
import Grid from "./parts/components/Grid";
import MobileFooter from "../footer/MobileFooter";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";

export default function Coe() {
  const { isLoading } = useNavbar();
  if (isLoading) return <Spinner />;
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
