import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage from "@/app/styledComponents/frontend/BannerImage";
import banner from "./parts/assests/banner.png";
import sm_banner from "./parts/assests/sm_banner.png";
import OfficeAcademics from "./parts/OfficeAcademics";
import MobileFooter from "../footer/MobileFooter";

const AcademicContact = () => {
  return (
    <>
      <Navbar />
      <BannerImage
        align={"left"}
        image={banner.src}
        title="Best Care & Better Doctor"
        description="Contrary to popular belief,  not simply It has roots in Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked."
        color={"#476C9B"}
        descolor={"black"}
        padding={10}
        sm_image={sm_banner.src}
        textcenter={"left"}
      />
      <OfficeAcademics />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default AcademicContact;
