"use client";
import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage from "@/app/styledComponents/frontend/BannerImage";
import banner from "./parts/assests/banner.png";
import sm_banner from "./parts/assests/sm_banner.png";
import DNBTable from "./parts/DnaCourse";
import InfraAndFacility from "./parts/InfraAndFacility";
import MobileFooter from "../footer/MobileFooter";
import { Box } from "@mui/material";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";
import Spinner from "../../ui/Spinner";

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
  { subject: "Obstetrics & Gynecology", intake: 2, session: "January" },
  { subject: "Orthopedic Surgery", intake: 2, session: "July" },
  { subject: "Paediatrics", intake: 3, session: "January" },
  { subject: "Pathology", intake: 2, session: "January" },
  { subject: "Radio-Diagnosis", intake: 2, session: "January" },
  { subject: "Respiratory Diseases", intake: 2, session: "January" },
];

const rows2 = [
  { subject: "Cardiology", intake: 2, session: "January" },
  { subject: "Gastroenterology", intake: 2, session: "January" },
  { subject: "Neurosurgery", intake: 2, session: "January" },
  { subject: "Neurology", intake: 2, session: "January" },
  { subject: "Surgical Gastroenterology", intake: 2, session: "January" },
  { subject: "Critical Care Medicine", intake: 3, session: "January" },
];
const AcademicsDnb = () => {
  const { data, isLoading, error } = useBannerByPage("academics dnb courses");
  if (isLoading) return <Spinner />;
  return (
    <>
      <Navbar />
      {/* <BannerImage
        align={"left"}
        image={banner.src}
        title="DNB-Courses"
        subTitle="The Hospital That Cares"
        description="Contrary to popular belief,  not simply It has roots in Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked."
        color={"#476C9B"}
        descolor={"black"}
        padding={10}
        textcenter={"left"}
        sm_image={sm_banner.src}
      /> */}
      <Box
        display={{ md: "flex", sm: "none" }}
        minHeight={{ md: "322px", lg: "434px", xl: "600px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Box>

      <Box
        display={{ md: "none", sm: "flex" }}
        minHeight={{ xs: "451px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.mobileBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      ></Box>
      <DNBTable
        rows={rows}
        title={"SDMH Runs an Active"}
        title1={"DNB Training Programme"}
        title2={""}
        title3={"in various Departments Listed Below"}
        column1={"Subjects"}
        column2={"Intake"}
        column3={"Session"}
        name="National Board of Examinations - DNB Post MBBS Program"
        eligibility="Eligibility – MBBS"
        duration="Duration – 3 years"
      />
      <DNBTable
        rows={rows1}
        title={"National Board of Examinations"}
        title1={"DNB Post Diploma Program"}
        title3={""}
        column1={"Subjects"}
        column2={"Intake"}
        column3={"Session"}
        name="National Board of Examinations - DNB Post MBBS Program"
        eligibility="Eligibility – MBBS+Diploma"
        duration="Duration – 2 years"
      />
      <DNBTable
        rows={rows2}
        title={"National Board of Examinations"}
        title1={"DNB Super Specialty Program"}
        title3={""}
        column1={"Subjects"}
        column2={"Intake"}
        column3={"Session"}
        name="National Board of Examinations - DNB Post MBBS Program"
        eligibility="Eligibility – MBBS + MD/MS/DNB"
        duration="Duration – 3 years"
      />
      <InfraAndFacility />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default AcademicsDnb;
