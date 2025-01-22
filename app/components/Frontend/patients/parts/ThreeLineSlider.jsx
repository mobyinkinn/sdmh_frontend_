import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import React from "react";
import Designslider from "./Designslider";
import registration from "./assets/registration.png";
import admission from "./assets/admission.png";

const ThreeLineSlider = () => {
  const bannerImages = [
    {
      id: 1,
      img: registration,
      des: [
        "If consultant recommends admission of patient, it would be mentioned on the OPD sheet, which needs to be shown at Admission Counter placed in Emergency and IPD Building.",
        "The Hospital has different kinds of bed and room categories that patient/attendant can choose from. wever, the allotment is subjected to availability on the date of admission. An advance of three days of accommodation charges shall need to be paid in advance while booking.",
        "Financial counseling & consent for admission is taken at time of admissions.",
        "On confirmation of bed/room availability, receptionist checks all papers and asks for mode of payment, i.e. cash/credit card/mediclaim/from empanelled organization. Admission is done accordingly.",
        "If patient is willing to avail Mediclaim facility for admission, the Mediclaim office will verify the approval / denial of the same.",
      ],
      title: "Waiting Lounges for Attendants",
    },
    {
      id: 2,
      img: registration,
      title: "Waiting Lounges for Attendants1",
      des: [
        "If consultant recommends admission of patient, it would be mentioned on the OPD sheet, which needs to be shown at Admission Counter placed in Emergency and IPD Building.",
        "The Hospital has different kinds of bed and room categories that patient/attendant can choose from. wever, the allotment is subjected to availability on the date of admission. An advance of three days of accommodation charges shall need to be paid in advance while booking.",
        "Financial counseling & consent for admission is taken at time of admissions.",
        "On confirmation of bed/room availability, receptionist checks all papers and asks for mode of payment, i.e. cash/credit card/mediclaim/from empanelled organization. Admission is done accordingly.",
        "If patient is willing to avail Mediclaim facility for admission, the Mediclaim office will verify the approval / denial of the same.",
      ],
    },
    {
      id: 3,
      img: registration,
      title: "Waiting Lounges for Attendants2",
      des: [
        "If consultant recommends admission of patient, it would be mentioned on the OPD sheet, which needs to be shown at Admission Counter placed in Emergency and IPD Building.",
        "The Hospital has different kinds of bed and room categories that patient/attendant can choose from. wever, the allotment is subjected to availability on the date of admission. An advance of three days of accommodation charges shall need to be paid in advance while booking.",
        "Financial counseling & consent for admission is taken at time of admissions.",
        "On confirmation of bed/room availability, receptionist checks all papers and asks for mode of payment, i.e. cash/credit card/mediclaim/from empanelled organization. Admission is done accordingly.",
        "If patient is willing to avail Mediclaim facility for admission, the Mediclaim office will verify the approval / denial of the same.",
      ],
    },
    {
      id: 4,
      img: registration,
      title: "Waiting Lounges for Attendants3",
      des: [
        "If consultant recommends admission of patient, it would be mentioned on the OPD sheet, which needs to be shown at Admission Counter placed in Emergency and IPD Building.",
        "The Hospital has different kinds of bed and room categories that patient/attendant can choose from. wever, the allotment is subjected to availability on the date of admission. An advance of three days of accommodation charges shall need to be paid in advance while booking.",
        "Financial counseling & consent for admission is taken at time of admissions.",
        "On confirmation of bed/room availability, receptionist checks all papers and asks for mode of payment, i.e. cash/credit card/mediclaim/from empanelled organization. Admission is done accordingly.",
        "If patient is willing to avail Mediclaim facility for admission, the Mediclaim office will verify the approval / denial of the same.",
      ],
    },
  ];

  return (
    <Stack bgcolor={"#D8E0EB"} p={5}>
      <Designslider
        bannerImages={bannerImages}
        position={"relative"}
        width={"100%"}
        slidesToShow={1} // Show 4 slides at a time
        bottom={"-6%"} // Adjust based on your design
        padding={"20px"} // Space between slides
        paddinginner={"10px"} // Inner padding for each slide
      />
    </Stack>
  );
};

export default ThreeLineSlider;
