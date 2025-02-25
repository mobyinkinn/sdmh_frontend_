import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import React from "react";

const Functions = () => {
  const data = [
    {
      id: 1,
      desc: "Sixty students are admitted every year in the month of September. After three months of admission, the students are examined to judge their suitability for continuing the training through PTS examination.",
    },
    {
      id: 2,
      desc: "For every batch of students, a lamp lighting and capping ceremony is held and the successful students are given proper uniform and they take the Florence Nightingale pledge.",
    },
    {
      id: 3,
      desc: "There is a Students Nurses association which is a subsidiary of Students Nurses association, Delhi at the national level.",
    },
    {
      id: 4,
      desc: "For holistic development of the nurses, due importance is given on students participation in various cultural activities and celebration of special occasions such as Independence Day, Republic Day etc.",
    },
    {
      id: 5,
      desc: "Academic periodical tests and examinations are conducted from time to time for the evaluation of the students.",
    },
    {
      id: 6,
      desc: "We have a total strength of 240 students on roll.",
    },
    {
      id: 7,
      desc: "Evaluation of the students through internal assessment",
    },
    {
      id: 8,
      desc: "State examinations are conducted as and when announced by Rajasthan Nursing Council.",
    },
  ];
  return (
    <Stack bgcolor={"#F9F9F9"} paddingTop={"30px"}>
      <Head1
        fontSize={{ sm: "1.5rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
        color="black"
      >
        Functions
      </Head1>
      <Stack gap={4} marginY={"30px"}>
        {data.map((d) => (
          <Stack
            key={d.id}
            direction={"row"}
            gap={3}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={"30px"}
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

export default Functions;
