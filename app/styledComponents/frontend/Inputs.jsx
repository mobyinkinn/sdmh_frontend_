"use client";

import styled from "@emotion/styled";

const SearchInput = styled.input((props) => ({
  width: "200px",
  outline: "none",
  border: "1px solid #005900",
  padding: "10px 10px",
  borderRadius: props.borderRadius || "10px",
  color: "#000",
}));

const SearchInputHero = styled.div((props) => ({
  //use contentEditable where ever you write this function
  outline: "none",
  width: "180px",
  border: "1px solid #fff",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  fontSize: "1.2rem",
  padding: "10px 20px",
  borderRadius: "40px",
  color: "#379237",
}));

const TextInput = styled.input((props) => ({
  width: props.width || "100%",
  outline: "none",
  border: "1px solid #ddd",
  borderRadius: "100px",
  padding: "15px 30px",
  fontSize: "1.2rem",
  color: "#000",
  backgroundColor: props.bgColor,
  border: "1px solid rgba(45, 45, 45, 0.2)",
}));

const TextArea = styled.textarea((props) => ({
  width: "100%",
  outline: "none",
  border: "1px solid #ddd",
  borderRadius: "30px",
  padding: "15px 30px",
  fontSize: "1.2rem",
  color: "#000",
  backgroundColor: props.bgColor,
  border: "1px solid rgba(45, 45, 45, 0.2)",
}));

const Label = styled.span((props) => ({
  width: "200px",
  padding: "5px 10px",
  marginTop: "10px",
  fontSize: "1.2rem",
  color: "black",
}));

export { SearchInput, SearchInputHero, TextInput, Label, TextArea };
