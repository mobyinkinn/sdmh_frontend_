import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage from "@/app/styledComponents/frontend/BannerImage";
import banner from "./parts/assests/banner.png";
import sm_banner from "./parts/assests/sm_banner.png";
import DNBTable from "../academicsDnb/parts/DnaCourse";
import InfraAndFacility from "../academicsDnb/parts/InfraAndFacility";
import MobileFooter from "../footer/MobileFooter";

const AcademicsFnb = () => {
  const rows1 = [
    {
      subject: "Minimal Access Surgery",
      intake: 1,
      session: "January",
    },
  ];
  return (
    <>
      <Navbar />
      <BannerImage
        align={"left"}
        image={banner.src}
        title="FNB-Courses"
        subTitle="The Hospital That Cares"
        description="Contrary to popular belief,  not simply It has roots in Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked."
        color={"#476C9B"}
        descolor={"black"}
        padding={10}
        textcenter={"left"}
        sm_image={sm_banner.src}
      />
      <DNBTable
        rows={rows1}
        title={"National Board of Examinations"}
        title1={"FNB Fellowship PROGRAM"}
        title3={""}
        title4={""}
        column1={"First"}
        column2={"Last"}
        column3={"Handle"}
        name="FNB Fellowship Program"
        eligibility="Eligibility – MS/MD/MCh/DNB in broad or super specialty"
        duration="Duration – 2 years"
      />
      <InfraAndFacility />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default AcademicsFnb;
