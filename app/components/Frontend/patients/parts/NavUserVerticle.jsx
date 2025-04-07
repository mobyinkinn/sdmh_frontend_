// // "use client";
// // import styled from "styled-components";
// // import { Stack } from "@mui/material";

// // const navData = [
// //   { id: "tabData", name: "Tab Data" },
// //   { id: "threeLineSlider", name: "Three Line Slider" },
// //   { id: "policy", name: "Policy" },
// //   { id: "rest", name: "Rest" },
// //   { id: "suggestions", name: "Suggestions" },
// // ];

// // const NavList = styled.ul`
// //   display: flex;
// //   flex-direction: column;
// //   gap: 0.4rem;
// //   padding: 1rem;
// // `;

// // const StyledNavItem = styled.li`
// //   list-style: none;
// //   cursor: pointer;
// //   padding: 0.8rem 1.5rem;
// //   border-radius: 8px;
// //   transition: background-color 0.3s;

// //   &:hover {
// //     background-color: #e0e0e0;
// //   }

// //   &.active {
// //     background-color: #d2e4d8;
// //   }
// // `;

// // export default function NavUserVerticle({ sectionsRef }) {
// //   const handleScrollToSection = (sectionId) => {
// //     sectionsRef[sectionId].current.scrollIntoView({ behavior: "smooth" });
// //   };

// //   return (
// //     <Stack bgcolor={"#f4f4f4"} display={{lg:"flex", sm:"none"}}>
// //       <NavList>
// //         {navData.map((item) => (
// //           <StyledNavItem
// //             key={item.id}
// //             onClick={() => handleScrollToSection(item.id)}
// //           >
// //             {item.name}
// //           </StyledNavItem>
// //         ))}
// //       </NavList>
// //     </Stack>
// //   );
// // }
// "use client";
// import styled from "styled-components";
// import { Stack } from "@mui/material";
// import { TfiArrowCircleRight } from "react-icons/tfi"; // Arrow icon
// import { useState } from "react";

// const navData = [
//   { id: "tabData", name: "Registration" },
//   { id: "threeLineSlider", name: "Admission" },
//   { id: "policy", name: "Discharge" },
//   { id: "rest", name: "Payment Guidelines" },
//   { id: "suggestions", name: "General Guidelines" },
//   { id: "suggestions", name: "Lounge Attandants" },
//   { id: "suggestions", name: "ATM & Withdrawal" },
//   { id: "suggestions", name: "Visitors Policy" },
//   { id: "suggestions", name: "Vishram Garh" },
//   { id: "suggestions", name: "Visitors Policy" },
// ];

// const NavList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 0.4rem;
//   padding: 1rem 0;
// `;

// const StyledNavItem = styled.li`
//   list-style: none;
//   cursor: pointer;
//   padding: 0.8rem 1.5rem;
//   transition: background-color 0.3s;
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   &:hover {
//     background-color: #e0e0e0;
//   }

//   &.active {
//     background-color: #007946;
//     color: white;
//   }
// `;

// export default function NavUserVerticle({ sectionsRef }) {
//   const [activeSection, setActiveSection] = useState(navData[0].id); // Default first item selected

//   const handleScrollToSection = (sectionId) => {
//     sectionsRef[sectionId].current.scrollIntoView({ behavior: "smooth" });
//     setActiveSection(sectionId); // Set the clicked item as active
//   };

//   return (
//     <Stack bgcolor={"#f4f4f4"} display={{ lg: "flex", sm: "none" }}>
//       <NavList>
//         {navData.map((item) => (
//           <StyledNavItem
//             key={item.id}
//             onClick={() => handleScrollToSection(item.id)}
//             className={activeSection === item.id ? "active" : ""}
//           >
//             {item.name}
//               <TfiArrowCircleRight
//                 style={{ fontSize: "20px", color: "white" }}
//               />
//           </StyledNavItem>
//         ))}
//       </NavList>
//     </Stack>
//   );
// }

"use client";
import styled from "styled-components";
import { Stack } from "@mui/material";
import { TfiArrowCircleRight } from "react-icons/tfi"; // Arrow icon
import { useState } from "react";

const navData = [
  { id: "tabData", name: "Registration" },
  { id: "admission", name: "Admission" },
  { id: "discharge", name: "Discharge" },
  { id: "rest", name: "Payment Guidelines" },
  { id: "threeLineSlider", name: "General Guidelines" }, // Fixed ID
  { id: "loungeAttendants", name: "Lounge Attendants" }, // Fixed ID
  { id: "atmWithdrawal", name: "ATM & Withdrawal" }, // Fixed ID
  { id: "policy", name: "Visitors Policy" }, // Fixed ID
  { id: "vishram", name: "Vishram Garh" }, // Fixed ID
];

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StyledNavItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content:space-between;

  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    background-color: #007946;
    color: white;
  }
`;
const StyledTitle = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0.8rem 0.5rem;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  text-align:center;
  justify-content: space-between;

  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    background-color: #007946;
    color: white;
  }
`;

export default function NavUserVerticle({ sectionsRef }) {
  const [activeSection, setActiveSection] = useState(); // Default first item selected

  const handleScrollToSection = (sectionId) => {
    sectionsRef[sectionId].current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId); // Set the clicked item as active
  };

  return (
    <Stack bgcolor={"#f4f4f4"} display={{ lg: "flex", sm: "none" }} width={"18%"}>
      <NavList>
        <StyledTitle
            className="active" style={{justifyContent:"center"}}
            
          >
            Patient Care & Services
          </StyledTitle>
        {navData.map((item) => (
          <StyledNavItem
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
            className={activeSection === item.id ? "active" : ""}
          >
            {item.name}
            <TfiArrowCircleRight style={{ fontSize: "20px", color: "white" }} />
          </StyledNavItem>
        ))}
      </NavList>
    </Stack>
  );
}
