"use client";

import { Stack } from "@mui/material";
import NavbarAdmin from "../navbarAdmin/NavbarAdminVerticle";
import NavbarAdminHorizontal from "../navbarAdmin/NavbarAdminHorizontal";
import {
  InnerContainerHead,
  MainHead,
} from "@/app/styledComponents/admin/AdminHead";
import {
  Container,
  InnerContainer,
  InnerContainerHeadSection,
} from "@/app/styledComponents/admin/Container";
import {
  GrayButtonSmall,
  GreenButtonSmall,
  StyledButton,
  YellowButtonSmall,
} from "@/app/styledComponents/admin/Buttons";
import { SearchInput } from "@/app/styledComponents/admin/Inputs";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";

import { useState } from "react";
import AddUser from "./parts/AddUser";

const userDetails = [
  { id: 0, name: "Yogesh", username: "yogesh", status: "active" },
  { id: 1, name: "Test", username: "test1", status: "active" },
  { id: 2, name: "Test2", username: "test2", status: "inactive" },
  { id: 3, name: "Test3", username: "test3", status: "active" },
];

export default function UserManagement() {
  const [viewForm, setViewForm] = useState(false);
  return (
    <Stack width={"100%"} position={"relative"}>
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <MainHead>User Management</MainHead>
          <StyledButton color="#65BD77" onClick={() => setViewForm(true)}>
            Add User
          </StyledButton>
        </Stack>
        {viewForm && <AddUser setViewForm={setViewForm} />}
        <InnerContainer>
          <InnerContainerHead>Listing</InnerContainerHead>
          <InnerContainerHeadSection>
            <SearchInput placeholder="Search" />
            <GreenButtonSmall>Go!</GreenButtonSmall>
            <GrayButtonSmall>Reset</GrayButtonSmall>
          </InnerContainerHeadSection>
          <TableContainer>
            <Table
              sx={{ minWidth: 650 }}
              size="medium"
              aria-label="Admin Users"
            >
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userDetails.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      backgroundColor: "white",
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id + 1}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell sx={{ display: "flex", gap: "8px" }}>
                      {row.status === "active" ? (
                        <GreenButtonSmall>
                          <DoneIcon
                            sx={{
                              width: "15px",
                              height: "15px",
                            }}
                          />
                        </GreenButtonSmall>
                      ) : (
                        <GrayButtonSmall>
                          <BlockIcon
                            sx={{
                              width: "15px",
                              height: "15px",
                            }}
                          />
                        </GrayButtonSmall>
                      )}
                      <YellowButtonSmall>
                        <EditIcon
                          sx={{
                            width: "15px",
                            height: "15px",
                          }}
                        />
                      </YellowButtonSmall>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </InnerContainer>
      </Container>
    </Stack>
  );
}
