"use client";

import styled from "@emotion/styled";
const breakpoints = {
  sm: "@media (min-width: 300px) and (max-width: 430px)", // Mobile
  smm: "@media (min-width: 430px) and (max-width: 600px)", // Mobile
  md: "@media (min-width: 601px) and (max-width: 1000px)", // Tablet
  lg: "@media (min-width: 1025px)", // Desktop
};

const ContainerMain = styled.div((props) => ({
  border: props.border,
  borderRadius: props.borderRadius,
  position: props.position,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  backgroundColor: props.bgColor,
  padding: props.padding || "50px",
  flexDirection: props.flexDirection,

  // Default styles
  // padding: props.padding?.lg,
  gap: props.gap?.lg || "20px",
  display: props.display?.lg || "flex",
  flexDirection: props.flexDirection?.lg || "column",

  // Breakpoint-specific styles
  [breakpoints.md]: {
    padding: props.padding?.md || props.padding,
    gap: props.gap?.md,
    display: props.display?.md,
    flexDirection: props.flexDirection?.md,
    alignItems: props.alignItems?.md,
  },
  [breakpoints.smm]: {
    padding: props.padding?.smm || props.padding || "20px",
    gap: props.gap?.smm,
    display: props.display?.smm,
    flexDirection: props.flexDirection?.smm,
    alignItems: props.alignItems?.smm,
  },
  [breakpoints.sm]: {
    padding: props.padding?.sm || props.padding || "20px",
    gap: props.gap?.sm,
    display: props.display?.sm,
    flexDirection: props.flexDirection?.sm,
    alignItems: props.alignItems?.sm,
  },
}));

export { ContainerMain };
