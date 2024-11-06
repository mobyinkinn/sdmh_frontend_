"use client";

import styled from "@emotion/styled";

const ContainerMain = styled.div((props) => ({
  display: "flex",
  flexDirection: props.dir || "column",
  gap: props.gap || "20px",
  backgroundColor: props.bgColor,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  padding: props.padding || "50px",
}));

export { ContainerMain };
