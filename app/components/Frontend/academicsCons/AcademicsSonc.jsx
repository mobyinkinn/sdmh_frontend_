import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import { Stack } from "@mui/material";
import React from "react";
import banner from "./parts/assets/bannerImage.png";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Philosophy from "./parts/Philosophy";
import PhysicalSetup from "./parts/PhysicalSetup";
import Functions from "./parts/Functions";
import ScrollingImages from "./parts/ScrollingImages";
import Scholarship from "./parts/Scholarship";
import Achievements from "./parts/Achievements";
import MobileFooter from "../footer/MobileFooter";

const AcademicsSonc = () => {
  return (
    <Stack>
      <Navbar />
      <BannerImage2
        image={banner.src}
        overlayColor="#476C9BE5"
        title="SDMH College of Nursing"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <Philosophy />
      <PhysicalSetup />
      <Functions />
      <ScrollingImages />
      <Scholarship />
      <Achievements />
      <Footer />
      <MobileFooter />
    </Stack>
  );
};

export default AcademicsSonc;
