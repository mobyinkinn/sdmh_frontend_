"use client";

import styled from "@emotion/styled";

const breakpoints = {
  sm: "@media (min-width: 300px) and (max-width: 430px)", // Mobile
  smm: "@media (min-width: 430px) and (max-width: 600px)", // Mobile
  md: "@media (min-width: 601px) and (max-width: 1024px)", // Tablet
  lg: "@media (min-width: 1025px)", // Desktop
};

const ParaNormal = styled.span((props) => ({
  padding: props.padding,
  paddingLeft: props.paddingLeft,
  paddingRight: props.paddingRight,
  paddingTop: props.paddingTop,
  paddingBottom: props.paddingBottom,
  color: props.color || "black",
  fontWeight: props.fontWeight,
  width: props.width,
  lineHeight: props.lineHeight || "1.5",
  textAlign: props.textAlign || "left",
  margin: props.margin || props.margin?.lg || "0",
  backgroundColor: props.backgroundColor,
  height: props.height,
  display: props.display,
  alignItems: props.alignItems,
  "&:hover": {
    color: props.hoverColor || props.color,
    backgroundColor: props.hoverBackgroundColor || props.backgroundColor,
    fontWeight: props.hoverFontWeight || props.fontWeight,
    cursor: props.cursor,
    height: props.height,
    display: props.display,
    alignItems: props.alignItems,
  },

  // Breakpoint-specific values for textAlign

  [breakpoints.lg]: {
    width: props.width?.lg,
    textAlign: props.textAlign?.lg,
    fontSize: props.fontSize?.lg || "1.2rem",
    height: props.height?.lg || "",
    display: props.display?.lg || "",
    alignItems: props.alignItems?.lg || "",
  },
  [breakpoints.md]: {
    textAlign: props.textAlign?.md,
    margin: props.margin?.md,
    fontSize: props.fontSize?.md || "1rem",
    width: props.width?.md,
    height: props.height?.md || "",
    display: props.display?.md || "",
    alignItems: props.alignItems?.md || "",
  },
  [breakpoints.smm]: {
    textAlign: props.textAlign?.smm,
    margin: props.margin?.smm,
    fontSize: props.fontSize?.smm || "0.9rem",
    width: props.width?.smm,
    height: props.height?.smm || "",
    display: props.display?.smm || "",
    alignItems: props.alignItems?.smm || "",
  },
  [breakpoints.sm]: {
    textAlign: props.textAlign?.sm,
    margin: props.margin?.sm,
    fontSize: props.fontSize?.sm || "0.9rem",
    width: props.width?.sm,
    height: props.height?.sm || "",
    display: props.display?.sm || "",
    alignItems: props.alignItems?.sm || "",
  },
}));

const ParaNormalSmall = styled.span((props) => ({
  color: props.color || "black",
  fontWeight: props.fontWeight,
  textAlign: props.textAlign || "left",
  width: props.width,
  height: props.height,
  margin: props.margin,
  overflow:props.overflow,
  lineHeight: props.lineHeight || "1.5",
  fontSize: props.fontSize?.lg || "1rem",

  [breakpoints.md]: {
    textAlign: props.textAlign?.md,
    margin: props.margin?.md,
    fontSize: props.fontSize?.md || "0.8rem",
    width: props.width?.md,
    height: props.height?.md,
  },
  [breakpoints.smm]: {
    textAlign: props.textAlign?.smm,
    margin: props.margin?.smm,
    fontSize: props.fontSize?.smm || "0.8rem",
    width: props.width?.smm,
    height: props.height?.smm,
  },
  [breakpoints.sm]: {
    textAlign: props.textAlign?.sm,
    margin: props.margin?.sm,
    fontSize: props.fontSize?.sm || "0.8rem",
    width: props.width?.sm,
    height: props.height?.sm,
  },
}));

export { ParaNormal, ParaNormalSmall };
