import { Stack } from "@mui/material";
import Banner from "./parts/components/Banner";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import AllDoctors from "./parts/components/AllDoctors";
import MobileFooter from "../footer/MobileFooter";

export default function Doctors() {
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
