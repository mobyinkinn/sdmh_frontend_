
// import { Stack } from "@mui/material";
// import CollapsibleSection from "./parts/CollapsibleSection";

// export default function MobileFooter() {
//     const centerOfExcellence = [
//       "Cardiology",
//       "Dermatology",
//       "Nephrology",
//       "Neurology",
//     ];
//     const patients = [
//       "Find a doctor",
//       "Make an appointment",
//       "Virtual tour",
//       "Room tour",
//       "Patient testimonial",
//       "Timings",
//       "Patient guide",
//     ];
//     const onlineService = [
//       "Video Consultation",
//       "Lab reports",
//       "Download our app",
//     ];
//     const aboutUs = [
//       "Our founders",
//       "Vision & mission",
//       "Secretary's message",
//       "Awards & accreditation",
//     ];
//     const supportACause = [
//       "Avedna Ashram",
//       "Help little hearts",
//       "Outreach",
//       "Jaipur foot",
//     ];
//     const contactUs = [
//       "Enquiry",
//       "Emergency",
//       "Patient feedback",
//       "Appointment",
//     ];
//     const quickLinks = [
//       "Academics",
//       "Blog",
//       "Events",
//       "Terms & conditions",
//       "Career",
//       "News & press release",
//       "Send a greeting",
//     ];
//     const social = [
//       "Follow us on Instagram",
//       "Like us on Facebook",
//       "Connect on LinkedIn",
//       "Follow us on Twitter",
//     ];
//   return (
//     <Stack gap={{md:3,smm:2, sm:1}} padding={"24px 40px"} sx={{ backgroundColor: "#fff" }} display={{lg:"none", sm:"flex"}}>
//       <CollapsibleSection
//         title="Centre of Excellence"
//         items={centerOfExcellence}
//       />
//       <CollapsibleSection title="Patients & Visitors" items={patients} />
//       <CollapsibleSection title="Online Service" items={onlineService} />
//       <CollapsibleSection title="About Us" items={aboutUs} />
//       <CollapsibleSection title="Support a Cause" items={supportACause} />
//       <CollapsibleSection title="Contact Us" items={contactUs} />
//       <CollapsibleSection title="Quick Links" items={quickLinks} />
//       <CollapsibleSection
//         title="Get in Touch"
//         items={social}
//       />
//     </Stack>
//   );
// }

"use client";
import { useState } from "react";
import { Stack } from "@mui/material";
import CollapsibleSection from "./parts/CollapsibleSection";

export default function MobileFooter() {
  const [openSection, setOpenSection] = useState(null); // Tracks the currently open section

  const handleSectionClick = (section) => {
    // Toggle the clicked section and close others
    setOpenSection(openSection === section ? null : section);
  };

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
    "Academics",
    "Blog",
    "Events",
    "Terms & conditions",
    "Career",
    "News & press release",
    "Send a greeting",
  ];
  const social = [
    "Follow us on Instagram",
    "Like us on Facebook",
    "Connect on LinkedIn",
    "Follow us on Twitter",
  ];

  return (
    <Stack
      gap={{ md: 3, smm: 2, sm: 1 }}
      padding={"24px 40px"}
      sx={{ backgroundColor: "#fff" }}
      display={{ lg: "none", sm: "flex" }}
    >
      <CollapsibleSection
        title="Centre of Excellence"
        items={centerOfExcellence}
        isOpen={openSection === "Centre of Excellence"}
        onClick={() => handleSectionClick("Centre of Excellence")}
      />
      <CollapsibleSection
        title="Patients & Visitors"
        items={patients}
        isOpen={openSection === "Patients & Visitors"}
        onClick={() => handleSectionClick("Patients & Visitors")}
      />
      <CollapsibleSection
        title="Online Service"
        items={onlineService}
        isOpen={openSection === "Online Service"}
        onClick={() => handleSectionClick("Online Service")}
      />
      <CollapsibleSection
        title="About Us"
        items={aboutUs}
        isOpen={openSection === "About Us"}
        onClick={() => handleSectionClick("About Us")}
      />
      <CollapsibleSection
        title="Support a Cause"
        items={supportACause}
        isOpen={openSection === "Support a Cause"}
        onClick={() => handleSectionClick("Support a Cause")}
      />
      <CollapsibleSection
        title="Contact Us"
        items={contactUs}
        isOpen={openSection === "Contact Us"}
        onClick={() => handleSectionClick("Contact Us")}
      />
      <CollapsibleSection
        title="Quick Links"
        items={quickLinks}
        isOpen={openSection === "Quick Links"}
        onClick={() => handleSectionClick("Quick Links")}
      />
      <CollapsibleSection
        title="Get in Touch"
        items={social}
        isOpen={openSection === "Get in Touch"}
        onClick={() => handleSectionClick("Get in Touch")}
      />
    </Stack>
  );
}
