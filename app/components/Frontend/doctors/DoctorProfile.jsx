import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import DoctorProfileBanner from "./parts/components/DoctorProfileBanner";

export default function DoctorProfile() {
  return (
    <Stack>
      <Navbar />
      <DoctorProfileBanner />
      <Footer />
    </Stack>
  );
}
