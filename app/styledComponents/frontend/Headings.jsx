"use client";

import styled from "@emotion/styled";

const Head1 = styled.span((props) => ({
  color: props.color || "#379237",
  fontWeight: props.fontWeight || "bold",
  textAlign: "center",
  width: props.width,
  fontSize: "3rem",
}));

const Head2 = styled.span((props) => ({
  color: props.color || "#379237",
  fontWeight: props.fontWeight || "bold",
  textAlign: "center",
  width: props.width,
  fontSize: "5rem",
}));

export { Head1, Head2 };
