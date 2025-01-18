// import React from 'react'
// import { careData } from "./CareData";
// import Card from './Card';
// const TabData = () => {
//   return (
//     <>
//       {careData.map((project, i) => {
//         return (
//           <Card
//             key={`p_${i}`}
//             i={i}
//             {...project}
//           />
//         );
//       })}
//     </>
//   );
// }

// export default TabData

// "use client";
// import React, { useState } from "react";
// import { careData } from "./CareData";
// import Card from "./Card";
// import { Stack, Tabs, Tab } from "@mui/material";
// import "./card.css";

// const TabData = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <>
//       {/* Tabs for navigation */}
//       <Tabs
//         value={activeTab}
//         onChange={handleTabChange}
//         indicatorColor="primary"
//         textColor="primary"
//         variant="scrollable"
//         scrollButtons="auto"
//         sx={{
//           marginBottom: "20px",
//           borderBottom: "1px solid #ddd",
//         }}
//       >
//         {careData.map((item, index) => (
//           <Tab key={index} label={item.title} />
//         ))}
//       </Tabs>

//       {/* Dynamic content rendering */}
//       {careData
//         .filter((_, i) => i === activeTab)
//         .map((project, i) => (
//           <Card key={`p_${i}`} i={i} {...project} />
//         ))}
//     </>
//   );
// };

// export default TabData;

"use client";
import React, { useState } from "react";
import { careData } from "./CareData";
import Card from "./Card";
import { Stack, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import "./card.css";

const TabData = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Stack alignItems={"center"} bgcolor={"#F9F9F9"}>
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
              backgroundColor: activeTab === index ? "#2e7d32" : "transparent",
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
  );
};

export default TabData;
