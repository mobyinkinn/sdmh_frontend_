import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage from "@/app/styledComponents/frontend/BannerImage";
import banner from "./parts/assests/banner.png";
import sm_banner from "./parts/assests/sm_banner.png";
import MobileFooter from "../footer/MobileFooter";
import VisitingFaculty from "./parts/visitingFaculty";

const AcademicsDnb = () => {
  return (
    <>
      <Navbar />
      <BannerImage
        align={"left"}
        image={banner.src}
        title="Visiting Faculty"
        subTitle="The Hospital That Cares"
        description="Contrary to popular belief,  not simply It has roots in Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked."
        color={"#476C9B"}
        descolor={"black"}
        padding={10}
        textcenter={"left"}
        sm_image={sm_banner.src}
      />
      <VisitingFaculty />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default AcademicsDnb;
