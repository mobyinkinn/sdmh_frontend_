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
  width: "200px",
  outline: "none",
  border: "1px solid #fff",
  backgroundColor: "#fff",

  padding: "10px 10px",
  borderRadius: "40px",
  color: "#379237",
}));

export { SearchInput, SearchInputHero };
