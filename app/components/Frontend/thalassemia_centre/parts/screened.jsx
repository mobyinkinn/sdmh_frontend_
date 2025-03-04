import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import React from "react";

const Screened = () => {
  const data = [
    {
      id: 1,
      desc: "Approximately 240 million people are carrier of beta thalassemia worldwide.",
    },
    {
      id: 2,
      desc: "In India alone, the carrier population is pegged at about 30 million.",
    },
    {
      id: 3,
      desc: "Nearly 12,000 infants are born with hemoglobin-related disorders every year in India.",
    },
    {
      id: 4,
      desc: "Every hour one child is born who will suffer from genetic disorder.",
    },
    {
      id: 5,
      desc: "The carrier rate for beta thalassemia varies from 1-17 percent in India, with an average of 3.2 percent.",
    },
    {
      id: 6,
      desc: "This means 1 in every 25 Indian is a carrier. Reimplantation.",
    },
    {
      id: 7,
      desc: "The thalassemia gene is non uniform in India, its prevalence higher in certain communities and tribes in northern, western and eastern parts.",
    },
  ];
  return (
    <Stack bgcolor={"#F9F9F9"} paddingTop={"30px"}>
      <Head1
        fontSize={{ sm: "1.5rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
        color="#005900"
      >
        Over two lakh people have been screened in the last 09 years.
      </Head1>
      <Stack gap={4} marginY={"30px"}>
        {data.map((d) => (
          <Stack
            key={d.id}
            direction={"row"}
            gap={3}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={{ xs: "10px", md: "30px" }}
            borderRadius={"20px"}
            bgcolor={"#F6F6FF6"}
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "white",

                // Apply hover styles to child elements
                "& .circle": {
                  bgcolor: "#007946", // Change circle background
                  color: "#FFFFFF", // Change text color inside the circle
                },
              },
            }}
          >
            {/* Circle Number */}
            <Stack
              className="circle" // Add class for hover targeting
              width={"42px"}
              height={"42px"}
              borderRadius={"50%"}
              fontSize={"25px"}
              // color={"#005900"}
              alignItems={"center"}
              justifyContent={"center"}
              border={"1px solid #E0E0E0"}
              bgcolor={"#FFFFFF"} // Default circle background
              sx={{
                transition: "all 0.3s ease", // Smooth transition for hover effect
              }}
              display={{ sm: "none", md: "flex" }}
            >
              {d.id}
            </Stack>

            {/* Description */}
            <ParaNormal
              style={{ width: "90%", lineHeight: "1.5" }}
              // backgroundColor="white"
              padding="10px"
            >
              {d.desc}
            </ParaNormal>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Screened;
