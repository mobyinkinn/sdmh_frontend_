"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import logo from "./parts/assets/logo.png";
import { Box, Stack, Typography } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import sdmh from "./parts/assets/bannerImage.png";

const social = [
  {
    id: 0,
    data: <FaInstagram />,
    link: "https://www.instagram.com/sdmhjaipur?igsh=OHVvMGFhd3hwMjBy",
  },
  {
    id: 1,
    data: <FaFacebookF />,
    link: "https://www.facebook.com/santokbadurlabhji?mibextid=ZbWKwL",
  },
  {
    id: 2,
    data: <FaLinkedinIn />,
    link: "https://in.linkedin.com/company/santokba-durlabhji-memorial-hospital-jaipur",
  },
  { id: 3, data: <PiYoutubeLogoBold />, link: "https://youtube.com/@SDMHCARE" },
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
  {
    id: 0,
    data: "Cardiology",
    link: "/center-of-excellence/67c148e9323e35a829c5697d",
  },
  {
    id: 1,
    data: "Dermatology",
    link: "/center-of-excellence/67c04514d797f40db8325e88",
  },
  {
    id: 2,
    data: "Nephrology",
    link: "/center-of-excellence/67c15ac9323e35a829c56a0e",
  },
  {
    id: 3,
    data: "Neurology",
    link: "/center-of-excellence/67c15aca323e35a829c56a12",
  },
];

const supportACause = [
  { id: 0, data: "Avedna Ashram", link: "/support-a-cause/avedna-ashram" },
  {
    id: 1,
    data: "Help little hearts",
    link: "/support-a-cause/help-little-hearts",
  },
  { id: 2, data: "Outreach", link: "/support-a-cause/outreach" },
  {
    id: 3,
    data: "Jaipur foot",
    link: "/support-a-cause/jaipur-foot-polio-caliper",
  },
];

const Patients = [
  { id: 0, data: "Find a doctor", link: "/find-a-doctor" },
  { id: 1, data: "Make an appointment", link: "" },
  { id: 2, data: "Virtual tour", link: "" },
  { id: 3, data: "Room tour", link: "" },
  { id: 4, data: "Patient testimonial", link: "/patient-testimonials" },
  { id: 5, data: "Timings", link: "" },
  { id: 6, data: "Patient guide", link: "" },
];

const contactUs = [
  { id: 0, data: "Enquiry", link: "/contact-us" },
  { id: 1, data: "Emergency", link: "/contact-us" },
  { id: 2, data: "Patient testimonial", link: "/patient-testimonials" },
  { id: 3, data: "Appointment", link: "" },
];

const onlineService = [
  { id: 0, data: "Video Consultation", link: "" },
  { id: 1, data: "Lab reports", link: "" },
  { id: 2, data: "Download our app", link: "" },
];

const quickLinks = [
  { id: 0, data: "Academics", link: "/academics/academics-deanery" },
  { id: 1, data: "Blog", link: "/blog" },
  { id: 2, data: "Events", link: "/event" },
  { id: 3, data: "Terms & conditions", link: "/terms-and-conditions" },
  { id: 4, data: "Career", link: "/career" },
  { id: 5, data: "News & press release", link: "/news-press-release" },
  { id: 6, data: "Send a greeting", link: "/send-a-greeting" },
];

const aboutUs = [
  { id: 0, data: "Our founders", link: "/about#founder" },
  { id: 1, data: "Vision & mission", link: "/about#vision" },
  { id: 2, data: "Secretary's message", link: "/about#message" },
  { id: 3, data: "Awards & accreditation", link: "/about#awards" },
];

export default function Footer() {
  const router = useRouter();
  return (
    <Stack
      width="100%"
      sx={{
        backgroundImage: `url(${sdmh.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
        padding="40px 35px"
        gap="20px"
      >
        <ContainerMain
          flexDirection={{ lg: "row" }}
          gap="30px"
          justifyContent={"space-between"}
          display={{ sm: "none", smm: "none", md: "none" }}
        >
          <Stack gap={"10px"} width={"20%"}>
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
                Centre of Excellence
              </ParaNormal>
              {centerOfExcellence.map((el, i) => {
                return (
                  <ParaNormal
                    cursor="pointer"
                    hoverColor="#379237"
                    key={i}
                    onClick={() => router.push(`${el.link}`)}
                  >
                    {el.data}
                  </ParaNormal>
                );
              })}
            </Stack>
            <Stack>
              <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
                Support a cause
              </ParaNormal>
              {supportACause.map((el, i) => {
                return (
                  <ParaNormal
                    cursor="pointer"
                    hoverColor="#379237"
                    key={i}
                    onClick={() => router.push(`${el.link}`)}
                  >
                    {el.data}
                  </ParaNormal>
                );
              })}
            </Stack>
          </Stack>
          <Stack gap={"50px"}>
            <Stack>
              <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
                Patients & visitors
              </ParaNormal>
              {Patients.map((el, i) => {
                return (
                  <ParaNormal
                    cursor="pointer"
                    hoverColor="#379237"
                    key={i}
                    onClick={() => router.push(`${el.link}`)}
                  >
                    {el.data}
                  </ParaNormal>
                );
              })}
            </Stack>
            <Stack>
              <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
                Contact us
              </ParaNormal>
              {contactUs.map((el, i) => {
                return (
                  <ParaNormal
                    cursor="pointer"
                    hoverColor="#379237"
                    key={i}
                    onClick={() => router.push(`${el.link}`)}
                  >
                    {el.data}
                  </ParaNormal>
                );
              })}
            </Stack>
          </Stack>
          <Stack gap={"50px"}>
            <Stack>
              <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
                Online service
              </ParaNormal>
              {onlineService.map((el, i) => {
                return (
                  <ParaNormal
                    cursor="pointer"
                    hoverColor="#379237"
                    key={i}
                    onClick={() => router.push(`${el.link}`)}
                  >
                    {el.data}
                  </ParaNormal>
                );
              })}
            </Stack>
            <Stack>
              <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
                Quick links
              </ParaNormal>
              {quickLinks.map((el, i) => {
                return (
                  <ParaNormal
                    cursor="pointer"
                    hoverColor="#379237"
                    key={i}
                    onClick={() => router.push(`${el.link}`)}
                  >
                    {el.data}
                  </ParaNormal>
                );
              })}
            </Stack>
          </Stack>
          <Stack gap={"50px"}>
            <Stack>
              <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
                About us
              </ParaNormal>
              {aboutUs.map((el, i) => {
                return (
                  <ParaNormal
                    cursor="pointer"
                    hoverColor="#379237"
                    key={i}
                    onClick={() => router.push(`${el.link}`)}
                  >
                    {el.data}
                  </ParaNormal>
                );
              })}
            </Stack>
            <Stack>
              <ParaNormal margin={"0 0 10px 0"} fontWeight="bold">
                Get in touch
              </ParaNormal>
              <Stack direction={"row"} gap={"5px"}>
                {social.map((el, i) => {
                  return (
                    <a
                      key={i}
                      href={el.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Stack
                        padding={"10px"}
                        color={"white"}
                        backgroundColor={"#379237"}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "100px",
                          width: "40px",
                          height: "40px",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#4CAF50",
                          },
                        }}
                      >
                        {el.data}
                      </Stack>
                    </a>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
        </ContainerMain>
      </Stack>
    </Stack>
  );
}
