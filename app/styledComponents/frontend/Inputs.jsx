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

export { SearchInput, SearchInputHero };
