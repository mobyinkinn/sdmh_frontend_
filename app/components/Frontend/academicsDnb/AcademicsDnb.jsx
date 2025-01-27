import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage from "@/app/styledComponents/frontend/BannerImage";
import banner from "./parts/assests/banner.png";
import sm_banner from "./parts/assests/sm_banner.png";
import DNBTable from "./parts/DnaCourse";
import InfraAndFacility from "./parts/InfraAndFacility";
import MobileFooter from "../footer/MobileFooter";

const AcademicsDnb = () => {
  const rows = [
    { subject: "Anaesthesiology", intake: 4, session: "January" },
    { subject: "General Medicine", intake: 3, session: "January" },
    {
      subject: "Immunohematology & Transfusion Medicine",
      intake: 1,
      session: "January",
    },
    { subject: "Obstetrics & Gynecology", intake: 2, session: "January" },
    { subject: "Orthopedic Surgery", intake: 2, session: "July" },
    { subject: "Paediatrics", intake: 3, session: "January" },
    { subject: "Pathology", intake: 2, session: "January" },
    { subject: "Radio-Diagnosis", intake: 2, session: "January" },
    { subject: "Respiratory Diseases", intake: 2, session: "January" },
  ];

  const rows1 = [
    { subject: "Anaesthesiology", intake: 4, session: "January" },
    { subject: "General Medicine", intake: 3, session: "January" },
    {
      subject: "Immunohematology & Transfusion Medicine",
      intake: 1,
      session: "January",
    },
    { subject: "Obstetrics & Gynecology", intake: 2, session: "January" },
    { subject: "Orthopedic Surgery", intake: 2, session: "July" },
    { subject: "Paediatrics", intake: 3, session: "January" },
    { subject: "Pathology", intake: 2, session: "January" },
  ];

  return (
    <>
      <Navbar />
      <BannerImage
        align={"left"}
        image={banner.src}
        title="DNB-Courses"
        description="Contrary to popular belief,  not simply It has roots in Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked."
        color={"#476C9B"}
        descolor={"black"}
        padding={10}
        textcenter={"left"}
        sm_image={sm_banner.src}
      />
      <DNBTable
        rows={rows}
        title={"SDMH Runs an Active"}
        title1={"DNB Training Programme"}
        title2={""}
        title3={"in various Departments Listed Below"}
        column1={"Subjects"}
        column2={"Intake"}
        column3={"Session"}
      />
      <DNBTable
        rows={rows1}
        title={"National Board of Examinations"}
        title1={"DNB Post Diploma Program"}
        title3={""}
        column1={"Subjects"}
        column2={"Intake"}
        column3={"Session"}
      />
      <DNBTable
        rows={rows1}
        title={"National Board of Examinations"}
        title1={"DNB Super Specialty Program"}
        title3={""}
        column1={"Subjects"}
        column2={"Intake"}
        column3={"Session"}
      />
      <InfraAndFacility />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default AcademicsDnb;
