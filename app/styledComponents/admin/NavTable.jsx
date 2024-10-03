"use client";

import styled from "@emotion/styled";

const NavTableCell = styled.td`
  width: fit-content;
  padding: 8px;
  border: 1px solid #6a87a5;
`;

const NavTableRow = styled.tr`
  color: #95bce2;
  backgroundcolor: #41586e;
  &:hover {
    color: #6a87a5;
    cursor: pointer;
  }
`;

export { NavTableCell, NavTableRow };
