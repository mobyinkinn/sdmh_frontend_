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

const DarkGreenButton = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: "1px solid",
  borderColor: props.bgColor || "#005900",
  backgroundColor: props.bgColor || "#005900",
  padding: props.padding || "15px 45px",
  margin: props.margin,
  fontSize: "1.2rem",
  color: props.color || "white",
  cursor: "pointer",
  borderRadius: props.borderRadius || "10px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "transparent",
    color: props.bgColor || "#005900",
  },
}));

const DarkGreenButtonSmallOutline = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: "1px solid #005900",
  padding: props.padding || "5px 20px",
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

const ButtonVerySmallOutline = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: `1px solid ${props.color}`,
  padding: "5px 10px",
  color: props.color,
  cursor: "pointer",
  borderRadius: "200px",
  fontSize: "0.6rem",
  display: "flex",
  backgroundColor: props.bgColor,
  gap: "8px",
  alignItems: "center",
  transition: "all 0.3s ease",
}));

const ButtonSmallOutline = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: `1px solid #486c9c`,
  padding: props.padding || "10px 30px",
  color: props.color,
  cursor: "pointer",
  borderRadius: "200px",
  fontSize: "0.8rem",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#486c9c",
    color: props.hoverColor || "#486c9c",
  },

  "@media (max-width: 600px)": {
    padding: "10px 20px", // padding for smaller screens
  },
}));

const ButtonMediumOutline = styled.button((props) => ({
  backgroundColor: props.backgroundColor || "transparent",
  width: props.width || "fit-content",
  outline: "none",
  border: props.border || "1px solid #007946",
  padding: props.padding || "15px 40px",
  fontSize: props.fontSize || "1rem",
  color: props.color,
  cursor: "pointer",
  borderRadius: "200px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  transition: "all 0.3s ease",
  margin: props.margin,
  marginBottom: props.marginBottom,
  "&:hover": {
    backgroundColor: props.hcolor || "white",
    color: props.hoverColor || "white",
  },

  "@media (max-width: 600px)": {
    padding: "8px 35px", // padding for smaller screens
  },
}));

const ButtonSmallOutlineWithoutHover = styled.button((props) => ({
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
}));

export {
  DarkGreenButtonSmall,
  DarkGreenButton,
  DarkGreenButtonSmallOutline,
  ButtonVerySmallOutline,
  ButtonSmallOutline,
  ButtonMediumOutline,
  ButtonSmallOutlineWithoutHover,
};
