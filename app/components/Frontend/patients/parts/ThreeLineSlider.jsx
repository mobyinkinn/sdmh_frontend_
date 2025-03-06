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
        "We request our patient/attendant to keep their mobile phones on silent/vibration mode.",
        "Patients and their attendant are requested to avoid overcrowding in patient area / hospital premises.",
        "Patients are requested to avoid self medication.",
        "The medicines prescribed by doctor would be administered by the nursing staff only.",
        "Restlessness, if any, after medication should be immediately reported to nursing staff on duty.",
        "The instructions given by consultant should be strictly followed.",
      ],
      title: "General guidelines",
    },
    {
      id: 2,
      img: registration,
      title: "Waiting lounges for attendants",
      des: [
        "S.D.M.H. Provides air-conditioned 24 x7 waiting lounges in OPD & IPD buildings for attendants at no cost to them.",
        "One dedicated ICU Attendant Lounge is also created for the attendants of ICU patients. The facility is connect with ICUs for transmission of necessary information.",
      ],
    },
    {
      id: 3,
      img: registration,
      title: "ATM and bank",
      des: [
        "Hospital has 24x7 ATM facilities located beneath the Auditorium facility and outside OPD (R.D.M.C) Buildings.",
        "Union Bank of India is also available inside the campus for any necessary transactions required.",
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
