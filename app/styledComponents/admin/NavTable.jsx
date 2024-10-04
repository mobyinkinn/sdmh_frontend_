"use client";

import styled from "@emotion/styled";

const NavTableCell = styled.td((props) => ({
  padding: "8px",
  border: "1px solid #6a87a5",
  width: props.icon && "40px",
}));

const NavTableRow = styled.tr`
  color: #95bce2;
  backgroundcolor: #41586e;
  &:hover {
    color: #6a87a5;
    cursor: pointer;
  }
`;

export { NavTableCell, NavTableRow };
