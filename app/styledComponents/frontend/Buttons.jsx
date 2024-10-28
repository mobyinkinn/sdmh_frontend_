"use client";

import styled from "@emotion/styled";

const DarkGreenButtonSmall = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: "1px solid #005900",
  backgroundColor: "#005900",
  padding: "5px 10px",
  color: "white",
  cursor: "pointer",
  borderRadius: props.borderRadius || "10px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  transition: "all 0.3s ease",
  "&:hover": {},
}));

const DarkGreenButtonSmallOutline = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: "1px solid #005900",
  padding: "5px 20px",
  color: "#005900",
  cursor: "pointer",
  borderRadius: "10px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#005900",
    color: "white",
  },
}));

export { DarkGreenButtonSmall, DarkGreenButtonSmallOutline };
