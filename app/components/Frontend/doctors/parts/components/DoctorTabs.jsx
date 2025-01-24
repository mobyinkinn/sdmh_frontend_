"use client";

import { Stack, Typography } from "@mui/material";
import { useState } from "react";

const tabs = [
  {
    id: 0,
    title: "Experience",
    data: "Exp She was trained and has worked in premiere and busy institutes of Mumbai for the last 8 years. Having worked in D Y Patil hospital, which has high patient load and long working hours, she is confident about her basic clinical skills as an anaesthetist. She had the opportunity to work at Tata memorial hospital for more than 2 years, where she enhanced her clinical skills especially difficult airway skills, thoracic surgery, orthopaedic cancer surgeries. She is competent at handling a wide range of cases in oncosurgery, orthopaedic surgery, urology and robotic surgery, thoracic surgery and Lung isolation Techniques, general and laparoscopic surgery gynaecology and interventional radiology, acute pain management and peri-operative care.",
  },
  {
    id: 1,
    title: "Education & Training",
    data: "Edu She was trained and has worked in premiere and busy institutes of Mumbai for the last 8 years. Having worked in D Y Patil hospital, which has high patient load and long working hours, she is confident about her basic clinical skills as an anaesthetist. She had the opportunity to work at Tata memorial hospital for more than 2 years, where she enhanced her clinical skills especially difficult airway skills, thoracic surgery, orthopaedic cancer surgeries. She is competent at handling a wide range of cases in oncosurgery, orthopaedic surgery, urology and robotic surgery, thoracic surgery and Lung isolation Techniques, general and laparoscopic surgery gynaecology and interventional radiology, acute pain management and peri-operative care.",
  },
  {
    id: 2,
    title: "Expertise",
    data: "Exper She was trained and has worked in premiere and busy institutes of Mumbai for the last 8 years. Having worked in D Y Patil hospital, which has high patient load and long working hours, she is confident about her basic clinical skills as an anaesthetist. She had the opportunity to work at Tata memorial hospital for more than 2 years, where she enhanced her clinical skills especially difficult airway skills, thoracic surgery, orthopaedic cancer surgeries. She is competent at handling a wide range of cases in oncosurgery, orthopaedic surgery, urology and robotic surgery, thoracic surgery and Lung isolation Techniques, general and laparoscopic surgery gynaecology and interventional radiology, acute pain management and peri-operative care.",
  },
  {
    id: 3,
    title: "Professinal Highlights",
    data: "Pro She was trained and has worked in premiere and busy institutes of Mumbai for the last 8 years. Having worked in D Y Patil hospital, which has high patient load and long working hours, she is confident about her basic clinical skills as an anaesthetist. She had the opportunity to work at Tata memorial hospital for more than 2 years, where she enhanced her clinical skills especially difficult airway skills, thoracic surgery, orthopaedic cancer surgeries. She is competent at handling a wide range of cases in oncosurgery, orthopaedic surgery, urology and robotic surgery, thoracic surgery and Lung isolation Techniques, general and laparoscopic surgery gynaecology and interventional radiology, acute pain management and peri-operative care.",
  },
];

export default function DoctorTabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Stack gap="40px" padding="50px 0" backgroundColor="#6A88AF">
      <Stack
        margin="0 auto"
        padding="15px"
        borderRadius={"300px"}
        gap="30px"
        backgroundColor="white"
        direction="row"
      >
        {tabs.map((tab) => (
          <Typography
            key={tab.id}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "#6A88AF",
              },
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </Typography>
        ))}
      </Stack>
      <Stack
        margin="0 auto"
        padding="10px"
        borderRadius={"5px"}
        width="80vw"
        backgroundColor="#476C9B"
      >
        <Typography color="white">{tabs[activeTab].data}</Typography>
      </Stack>
    </Stack>
  );
}
