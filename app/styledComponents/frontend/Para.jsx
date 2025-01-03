
// const ParaNormal = styled.span((props) => ({
//   color: props.color || "black",
//   fontWeight: props.fontWeight,
//   textAlign: props.textAlign || "left",
//   width: props.width,
//   margin: props.margin,
//   lineHeight: props.lineHeight || "1.5",
//   fontSize: "1.2rem",

//   @media (max-width: 600px) {
//     margin: ${props.margin?.sm || "10px"};
//     text-align: ${props.textAlign?.sm || "right"};
//   }

// }));
"use client";

import styled from "@emotion/styled";

const breakpoints = {
  sm: "@media (min-width: 300px) and (max-width: 430px)", // Mobile
  smm: "@media (min-width: 430px) and (max-width: 600px)", // Mobile
  md: "@media (min-width: 601px) and (max-width: 1024px)", // Tablet
  lg: "@media (min-width: 1025px)", // Desktop
};

const ParaNormal = styled.span((props) => ({
  color: props.color || "black",
  fontWeight: props.fontWeight,
  width: props.width,
  lineHeight: props.lineHeight || "1.5",

  // Default values
  textAlign: props.textAlign?.lg || "left",
  margin: props.margin?.lg || "0",
  fontSize: props.fontSize || "1.2rem",

  // Breakpoint-specific values for textAlign
  [breakpoints.md]: {
    textAlign: props.textAlign?.md || "center",
    margin: props.margin?.md || "0",
  },
  [breakpoints.smm]: {
    textAlign: props.textAlign?.smm || "center",
    margin: props.margin?.smm || "0",
  },
  [breakpoints.sm]: {
    textAlign: props.textAlign?.sm || "center",
    margin: props.margin?.sm || "0",
  },
}));




const ParaNormalSmall = styled.span((props) => ({
  color: props.color || "black",
  fontWeight: props.fontWeight,
  textAlign: props.textAlign || "left",
  width: props.width,
  margin: props.margin,
  lineHeight: props.lineHeight || "1.5",
  fontSize: "1rem",
}));

export { ParaNormal, ParaNormalSmall };
