"use client"
import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import DoctorProfileBanner from "./parts/components/DoctorProfileBanner";
import AboutDoctor from "./parts/components/AboutDoctor";
import DoctorTabs from "./parts/components/DoctorTabs";
import Appointment from "./parts/components/Appointment";
import { useParams } from "next/navigation";
import { useDoctorByID } from "../../admin/doctors/parts/useDoctor";

export default function DoctorProfile() {
    const { _id } = useParams();
    const { data, isLoading, error } = useDoctorByID(_id);
    
  return (
    <Stack>
      <Navbar />
      <DoctorProfileBanner data={data} />
      <AboutDoctor data={data} />
      {/* <DoctorTabs /> */}
      <Appointment />
      <Footer />
    </Stack>
  );
}
