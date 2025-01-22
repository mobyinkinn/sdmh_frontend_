import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import DoctorProfileBanner from "./parts/components/DoctorProfileBanner";
import AboutDoctor from "./parts/components/AboutDoctor";
import DoctorTabs from "./parts/components/DoctorTabs";
import Appointment from "./parts/components/Appointment";

export default function DoctorProfile() {
  return (
    <Stack>
      <Navbar />
      <DoctorProfileBanner />
      <AboutDoctor />
      {/* <DoctorTabs /> */}
      <Appointment />
      <Footer />
    </Stack>
  );
}
