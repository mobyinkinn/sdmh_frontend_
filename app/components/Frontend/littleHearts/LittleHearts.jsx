import { Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
// import Banner from "./parts/Banner";
// import About from "./parts/About";
// import Help from "./parts/Help";
import MobileFooter from "../footer/MobileFooter";

export default function Donation() {
  return (
    <Stack>
      <Navbar />
      {/* <Banner /> */}
      {/* <About /> */}
      {/* <Help /> */}
      <Footer />
      <MobileFooter />
    </Stack>
  );
}
