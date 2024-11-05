"use client";

import styled from "@emotion/styled";

const ContainerMain = styled.div((props) => ({
  display: "flex",
  flexDirection: props.dir || "column",
  gap: props.gap || "20px",
  backgroundColor: props.bgColor || "",
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
  padding: props.padding || "50px",
}));

export { ContainerMain };
