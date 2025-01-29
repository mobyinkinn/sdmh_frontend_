import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import banner from "./parts/assets/bannerImage.png";
import Teaching from "./parts/Teaching";
import MobileFooter from "../footer/MobileFooter";
const AcademicTeaching = () => {
  return (
    <>
      <Navbar />
      <BannerImage2
        image={banner.src}
        overlayColor="#476C9BE5"
        title="Teaching Schedule"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        align="center"
        textcenter={"center"}
      />
      <Teaching />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default AcademicTeaching;
