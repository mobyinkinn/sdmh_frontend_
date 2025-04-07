import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import banner from "./parts/assets/bannerImage.png";
import SdmhLibrary from "./parts/SdmhLibrary";
import KohaSection from "./parts/KohaSection";
import ServiceProvide from "./parts/ServiceProvide";
import CategoriesMember from "./parts/CategoriesMember";
import MobileFooter from "../footer/MobileFooter";

const AcademicsLibrary = () => {
  return (
    <>
      <Navbar />
      <BannerImage2
        align={"center"}
        textcenter={"center"}
        image={banner.src}
        overlayColor="#476C9BE5"
        title="Academic Library"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <SdmhLibrary />
      <KohaSection />
      <ServiceProvide />
      {/* <CategoriesMember /> */}
      <Footer />
      <MobileFooter />
    </>
  );
};

export default AcademicsLibrary;
