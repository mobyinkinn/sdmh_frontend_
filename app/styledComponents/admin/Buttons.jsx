"use client";

import styled from "@emotion/styled";

const StyledButton = styled.button((props) => ({
  backgroundColor: "#65BD77",
  width: "fit-content",
  outline: "none",
  border: "none",
  padding: "10px 40px",
  borderRadius: "3px",
  color: "white",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#53B567",
  },
}));

const GrayButtonSmall = styled.button((props) => ({
  backgroundColor: "#FAFAFA",
  width: "fit-content",
  outline: "none",
  border: "none",
  padding: "5px 10px",
  color: "#717171",
  cursor: "pointer",
  border: "1px solid #ddd",
  "&:hover": {
    backgroundColor: "#EDEDED",
  },
}));

const GreenButtonSmall = styled.button((props) => ({
  backgroundColor: "#65BD77",
  width: "fit-content",
  outline: "none",
  border: "none",
  padding: "5px 10px",
  color: "white",
  cursor: "pointer",
  borderRadius: "2px",
  "&:hover": {
    backgroundColor: "#53B567",
  },
}));

const RedButtonSmall = styled.button((props) => ({
  backgroundColor: "#FB6B5B",
  width: "fit-content",
  outline: "none",
  border: "none",
  padding: "5px 10px",
  color: "white",
  cursor: "pointer",
  borderRadius: "2px",
  "&:hover": {
    backgroundColor: "#FA5542",
  },
}));

const YellowButtonSmall = styled.button((props) => ({
  backgroundColor: "#FFC333",
  width: "fit-content",
  outline: "none",
  border: "none",
  padding: "5px 10px",
  color: "white",
  cursor: "pointer",
  borderRadius: "2px",
  "&:hover": {
    backgroundColor: "#FFBC1A",
  },
}));

const BlueButtonSmall = styled.button((props) => ({
  backgroundColor: "#4CC0C1",
  width: "fit-content",
  outline: "none",
  border: "none",
  padding: "5px 10px",
  color: "white",
  cursor: "pointer",
  borderRadius: "2px",
  "&:hover": {
    backgroundColor: "#3FB4B5",
  },
}));

const StatusLabel = styled.span((props) => ({
  padding: "5px",
  color: "white",
  backgroundColor: props.status === "Active" ? "#5CB85C" : "#D9534F",
  borderRadius: "5px",
}));

export {
  GreenButtonSmall,
  GrayButtonSmall,
  StyledButton,
  BlueButtonSmall,
  RedButtonSmall,
  YellowButtonSmall,
  StatusLabel,
};
