import { ContainerMain } from "@/app/styledComponents/frontend/Container";

import logo from "./parts/assets/logo.png";
import { Box, Stack, Typography } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social = [
  { id: 0, data: <FaInstagram /> },
  { id: 1, data: <FaFacebookF /> },
  { id: 2, data: <FaLinkedinIn /> },
  { id: 3, data: <FaXTwitter /> },
];

const address = [
  {
    id: 0,
    data: "Bhawani Singh Marg, Near Rambagh circle, Jaipur-302015 (Rajasthan), INDIA",
  },
  { id: 1, data: "0141 352 4444" },
  { id: 2, data: "info@sdmh.in" },
];

const centerOfExcellence = [
  { id: 0, data: "Cardiology" },
  { id: 1, data: "Dermatology" },
  { id: 2, data: "Nephrology" },
  { id: 3, data: "Neurology" },
];

const supportACause = [
  { id: 0, data: "Avedna Ashram" },
  { id: 1, data: "Help little hearts" },
  { id: 2, data: "Outreach" },
  { id: 3, data: "Jaipur foot" },
];

const Patients = [
  { id: 0, data: "Find a doctor" },
  { id: 1, data: "Make an appointment" },
  { id: 2, data: "Virtual tour" },
  { id: 3, data: "Room tour" },
  { id: 4, data: "Patient testimonial" },
  { id: 5, data: "Timings" },
  { id: 6, data: "Patient guide" },
];

const contactUs = [
  { id: 0, data: "Enquiry" },
  { id: 1, data: "Emergency" },
  { id: 2, data: "Patient feedback" },
  { id: 3, data: "Appointment" },
];

const onlineService = [
  { id: 0, data: "Video Consultation" },
  { id: 1, data: "Lab reports" },
  { id: 2, data: "Download our app" },
];

const quickLinks = [
  { id: 0, data: "Academics" },
  { id: 1, data: "Blog" },
  { id: 2, data: "Events" },
  { id: 3, data: "Terms & conditions" },
  { id: 4, data: "Career" },
  { id: 5, data: "News & press release" },
  { id: 6, data: "Send a greeting" },
];

const aboutUs = [
  { id: 0, data: "Our founders" },
  { id: 1, data: "Vision & mission" },
  { id: 2, data: "Secretary's message" },
  { id: 3, data: "Awards & accredition" },
  { id: 4, data: "Our founders" },
];

export default function Footer() {
  return (
    <ContainerMain
      flexDirection={{ lg: "row" }}
      gap="30px"
      justifyContent={"space-between"}
      display={{ sm: "none", smm: "none", md: "none" }}
    >
      <Stack gap={"50px"} width={"20%"}>
        <Stack
          sx={{
            backgroundImage: `url(${logo.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            width: "247.87px",
            height: "83.11px",
          }}
        ></Stack>
        <Stack>
          {address.map((el, i) => {
            return <ParaNormal key={i}>{el.data}</ParaNormal>;
          })}
        </Stack>
      </Stack>
      <Stack gap={"50px"}>
        <Stack>
          <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
            Center of Excellence
          </ParaNormal>
          {centerOfExcellence.map((el, i) => {
            return <ParaNormal key={i}>{el.data}</ParaNormal>;
          })}
        </Stack>
        <Stack>
          <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
            Support a cause
          </ParaNormal>
          {supportACause.map((el, i) => {
            return <ParaNormal key={i}>{el.data}</ParaNormal>;
          })}
        </Stack>
      </Stack>
      <Stack gap={"50px"}>
        <Stack>
          <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
            Patients & visitors
          </ParaNormal>
          {Patients.map((el, i) => {
            return <ParaNormal key={i}>{el.data}</ParaNormal>;
          })}
        </Stack>
        <Stack>
          <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
            Contact us
          </ParaNormal>
          {contactUs.map((el, i) => {
            return <ParaNormal key={i}>{el.data}</ParaNormal>;
          })}
        </Stack>
      </Stack>
      <Stack gap={"50px"}>
        <Stack>
          <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
            Online service
          </ParaNormal>
          {onlineService.map((el, i) => {
            return <ParaNormal key={i}>{el.data}</ParaNormal>;
          })}
        </Stack>
        <Stack>
          <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
            Quick links
          </ParaNormal>
          {quickLinks.map((el, i) => {
            return <ParaNormal key={i}>{el.data}</ParaNormal>;
          })}
        </Stack>
      </Stack>
      <Stack gap={"50px"}>
        <Stack>
          <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
            About us
          </ParaNormal>
          {aboutUs.map((el, i) => {
            return <ParaNormal key={i}>{el.data}</ParaNormal>;
          })}
        </Stack>
        <Stack>
          <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
            Get in touch
          </ParaNormal>
          <Stack direction={"row"} gap={"5px"}>
            {social.map((el, i) => {
              return (
                <Stack
                  key={i}
                  padding={"10px"}
                  color={"white"}
                  backgroundColor={"#379237"}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100px",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  {el.data}
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </ContainerMain>
  );
}
