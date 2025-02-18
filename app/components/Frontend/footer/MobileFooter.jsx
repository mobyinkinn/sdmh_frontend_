"use client";
import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import CollapsibleSection from "./parts/CollapsibleSection";
import sdmh from "./parts/assets/bannerImage.png";
import logo from "./parts/assets/logo.png";

export default function MobileFooter() {
  const centerOfExcellence = [
    "Cardiology",
    "Dermatology",
    "Nephrology",
    "Neurology",
  ];
  const patients = [
    "Find a doctor",
    "Make an appointment",
    "Virtual tour",
    "Room tour",
    "Patient testimonial",
    "Timings",
    "Patient guide",
  ];
  const donation = [
    "Avedna Ashram",
    "Help Little Hearts",
    "Outreach",
    "Jaipur Foot & Polio Caliper",
    "SDMH Free Clinic",
    "Thalassemia Centre",
  ];

  const onlineService = [
    "Video Consultation",
    "Lab reports",
    "Download our app",
  ];
  const aboutUs = [
    "Our founders",
    "Vision & mission",
    "Secretary's message",
    "Awards & accreditation",
  ];
  const supportACause = [
    "Avedna Ashram",
    "Help little hearts",
    "Outreach",
    "Jaipur foot",
  ];
  const contactUs = ["Enquiry", "Emergency", "Patient feedback", "Appointment"];
  const quickLinks = [
    "About SDMH",
    "Patient Care & Service",
    "Academics",
    "Appoinment",
    "Blog",
    "Terms & conditions",
  ];
  const social = [
    "Follow us on Instagram",
    "Like us on Facebook",
    "Connect on LinkedIn",
    "Follow us on Twitter",
  ];

  const other = [
    "Enquiry",
    "Career",
    "News & Press Release",
    "Feedback",
    "Health Check-Up plans",
    "Send a Greeting",
  ];

  const footerData = [
    { name: "Quick links", links: quickLinks },
    { name: "Center Of Excellence", links: centerOfExcellence },
    { name: "Donation", links: donation },
    { name: "Other Links", links: other },
  ];

  return (
    <Stack
      width="100%"
      display={{ lg: "none", smm: "flex" }}
      sx={{
        backgroundImage: `url(${sdmh.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
        padding="40px 35px"
        gap="20px"
      >
        <Stack
          height="8vh"
          width="100%"
          sx={{
            backgroundImage: `url(${logo.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></Stack>
        {footerData.map((el, i) => {
          return (
            <Stack key={i}>
              <Typography fontWeight="bold" fontSize="0.9rem">
                {el.name}
              </Typography>
              <Stack direction="row" flexWrap={"wrap"}>
                {el.links.map((ele, i) => {
                  return (
                    <Typography
                      key={i}
                      fontSize={"0.8rem"}
                      marginTop={"6px"}
                      marginRight="15px"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "#379237",
                        },
                      }}
                    >
                      {ele}
                    </Typography>
                  );
                })}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
