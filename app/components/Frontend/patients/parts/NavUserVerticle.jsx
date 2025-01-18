"use client";
import styled from "styled-components";
import { Stack } from "@mui/material";

const navData = [
  { id: "tabData", name: "Tab Data" },
  { id: "threeLineSlider", name: "Three Line Slider" },
  { id: "policy", name: "Policy" },
  { id: "rest", name: "Rest" },
  { id: "suggestions", name: "Suggestions" },
];

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem;
`;

const StyledNavItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    background-color: #d2e4d8;
  }
`;

export default function NavUserVerticle({ sectionsRef }) {
  const handleScrollToSection = (sectionId) => {
    sectionsRef[sectionId].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Stack bgcolor={"#f4f4f4"} display={{lg:"flex", sm:"none"}}>
      <NavList>
        {navData.map((item) => (
          <StyledNavItem
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
          >
            {item.name}
          </StyledNavItem>
        ))}
      </NavList>
    </Stack>
  );
}
