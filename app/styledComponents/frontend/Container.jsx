"use client";

import styled from "@emotion/styled";

const ContainerMain = styled.div((props) => ({
  border: props.border,
  borderRadius: props.borderRadius,
  position: props.position,
  display: "flex",
  flexDirection: props.dir || "column",
  gap: props.gap || "20px",
  backgroundColor: props.backgroundColor,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  padding: props.padding || "50px",
}));

export { ContainerMain };
