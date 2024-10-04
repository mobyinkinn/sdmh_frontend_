"use client";

import styled from "@emotion/styled";

const Container = styled.div((props) => ({
  padding: "30px 15px",
  backgroundColor: "#F7F7F7",
  overflowY: "scroll",
  width: "100%",
  height: "90vh",
}));

const InnerContainer = styled.div((props) => ({
  marginTop: "20px",
  border: "1px solid #ddd",
  width: "100%",
  backgroundColor: "#F7F7F7",
  borderRadius: "3px",
  display: "flex",
  flexDirection: "column",
}));

const InnerContainerHeadSection = styled.div((props) => ({
  backgroundColor: "white",
  borderTop: "1px solid #ddd",
  borderBottom: "1px solid #ddd",
  padding: "15px",
  display: "flex",
  flexDirection: props.column && "column",
  gap: "10px",
}));

export { Container, InnerContainer, InnerContainerHeadSection };
