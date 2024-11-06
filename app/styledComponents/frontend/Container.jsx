"use client";

import styled from "@emotion/styled";

const ContainerMain = styled.div((props) => ({
  display: "flex",
  flexDirection: "column" || props.dir,
  gap: "20px" || props.gap,
  backgroundColor: "" || props.bgColor,
  alignItems: "center",
  padding: "50px",

}));

export { ContainerMain };
