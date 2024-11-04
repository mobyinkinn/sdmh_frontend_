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
const ButtonSmallOutline = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: `1px solid ${props.color}`,
  padding: "10px 30px",
  color: props.color,
  cursor: "pointer",
  borderRadius: "200px",
  fontSize: "0.8rem",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: props.color,
    color: "white",
  },
}));

const ButtonMediumOutline = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: `1px solid ${props.color}`,
  padding: "15px 40px",
  fontSize: "1.2rem",
  color: props.color,
  cursor: "pointer",
  borderRadius: "200px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  transition: "all 0.3s ease",
  margin: props.margin,
  "&:hover": {
    backgroundColor: props.color,
    color: "white",
  },
}));

export {
  DarkGreenButtonSmall,
  DarkGreenButtonSmallOutline,
  ButtonSmallOutline,
  ButtonMediumOutline,
};
