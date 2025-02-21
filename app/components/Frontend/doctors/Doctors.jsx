"use client"
import { Stack } from "@mui/material";
import Banner from "./parts/components/Banner";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import AllDoctors from "./parts/components/AllDoctors";
import MobileFooter from "../footer/MobileFooter";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";

export default function Doctors() {
    const { isLoading } = useNavbar();
    if (isLoading) return <Spinner />;
  return (
    <Stack>
      <Navbar />
      <Banner />
      <AllDoctors />
      <Footer />
      <MobileFooter/>
    </Stack>
  );
}
