"use client";
import React, { useState } from "react";
import { careData } from "./CareData";
import Card from "./Card";
import { Stack, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./card.css";

const TabData = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Stack
        alignItems={"center"}
        bgcolor={"#F9F9F9"}
        display={{ md: "flex", xs: "none" }}
      >
        {/* Tabs for navigation */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          TabIndicatorProps={{
            style: { display: "none" }, // Hide the default indicator
          }}
          sx={{
            backgroundColor: "#476C9B",
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginTop: "30px",
          }}
        >
          {careData.map((item, index) => (
            <Tab
              key={index}
              label={
                <Stack
                  direction="column"
                  color="#fff"
                  alignItems="center"
                  fontSize={"15px"}
                >
                  {item.title}
                </Stack>
              }
              sx={{
                backgroundColor:
                  activeTab === index ? "#2e7d32" : "transparent",
                color: activeTab === index ? "#fff" : "#fff",
                textTransform: "none",
                padding: "40px 20px",
              }}
            />
          ))}
        </Tabs>

        {/* Dynamic content rendering */}
        <Box mt={4}>
          {careData
            .filter((_, i) => i === activeTab)
            .map((project, i) => (
              <Card key={`p_${i}`} i={i} {...project} />
            ))}
        </Box>
      </Stack>
      <Stack display={{ md: "none", xs: "block" }}>
        <Stack
          onChange={handleTabChange}
          variant="fullWidth"
          TabIndicatorProps={{
            style: { display: "none" }, // Hide the default indicator
          }}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "0 auto",
            width: "80%",
            marginTop: "30px",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {careData.map((item, index) => (
            <Stack
              direction="column"
              width="40%"
              color="#fff"
              padding="20px"
              alignItems="center"
              fontSize={"15px"}
              justifyContent="center"
              backgroundColor={activeTab === index ? "#2e7d32" : "#476C9B"}
              onClick={() => setActiveTab(index)}
            >
              <Typography textAlign="center">{item.title}</Typography>
            </Stack>
          ))}
        </Stack>
        <Box mt={4}>
          {careData
            .filter((_, i) => i === activeTab)
            .map((project, i) => (
              <Card key={`p_${i}`} i={i} {...project} />
            ))}
        </Box>
      </Stack>
    </>
  );
};

export default TabData;
