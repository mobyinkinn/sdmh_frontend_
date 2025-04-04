"use client";
import { Stack, Typography } from "@mui/material";
import sdmh from "./parts/assets/bannerImage.png";
import logo from "./parts/assets/logo.png";
import { useRouter } from "next/navigation";

export default function MobileFooter() {
  const router = useRouter();

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

  const donation = [
    { id: 0, data: "Avedna Ashram", link: "/support-a-cause/avedna-ashram" },
    {
      id: 1,
      data: "Help Little Hearts",
      link: "/support-a-cause/help-little-hearts",
    },
    { id: 2, data: "Outreach", link: "/support-a-cause/outreach" },
    {
      id: 3,
      data: "Jaipur Foot & Polio Caliper",
      link: "/support-a-cause/jaipur-foot-polio-caliper",
    },
    {
      id: 4,
      data: "SDMH Free Clinic",
      link: "/support-a-cause/sdmh-free-clinic",
    },
    {
      id: 5,
      data: "Thalassemia Centre",
      link: "/support-a-cause/thalassemia-centre",
    },
  ];

  const quickLinks = [
    { id: 0, data: "About SDMH", link: "/about" },
    { id: 1, data: "Patient Care & Service", link: "/patients" },
    { id: 2, data: "Academics", link: "/academics/academics-deanery" },
    { id: 3, data: "Appoinment", link: "" },
    { id: 4, data: "Blog", link: "/blog" },
    { id: 5, data: "Terms & conditions", link: "/terms-and-conditions" },
  ];

  const other = [
    { id: 0, data: "Enquiry", link: "/contact-us" },
    { id: 1, data: "Career", link: "/career" },
    { id: 2, data: "News & Press Release", link: "/news-press-release" },
    { id: 3, data: "Feedback", link: "/contact-us" },
    { id: 4, data: "Health Check-Up plans", link: "/health-checkup" },
    { id: 5, data: "Send a Greeting", link: "/send-a-greeting" },
  ];

  const footerData = [
    { name: "Quick links", links: quickLinks },
    { name: "Centre Of Excellence", links: centerOfExcellence },
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
                      marginRight={"15px"}
                      onClick={() => router.push(ele.link)}
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "#379237",
                        },
                      }}
                    >
                      {ele.data}
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
