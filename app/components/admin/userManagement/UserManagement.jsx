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
  BlueButtonSmall,
  GrayButtonSmall,
  GreenButtonSmall,
  RedButtonSmall,
  StyledButton,
} from "@/app/styledComponents/admin/Buttons";
import {
  Checkbox,
  CheckboxLabel,
  InputSection,
  Label,
  SearchInput,
  TextInput,
} from "@/app/styledComponents/admin/Inputs";

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

const userDetails = [
  { id: 0, name: "Yogesh", username: "yogesh", status: "active" },
  { id: 1, name: "Test", username: "test1", status: "active" },
  { id: 2, name: "Test2", username: "test2", status: "inactive" },
  { id: 3, name: "Test3", username: "test3", status: "active" },
];

const menu = [
  "Departments",
  "Doctors",
  "Appointments",
  "Academics",
  "Download Files",
  "Academics Notices",
  "Tpa Logo",
  "Events",
  "Testimonials",
  "Award Accreditation",
  "Enquiries",
  "Contact",
  "Videos",
  "Latest Openings",
  "Careers",
  "Health Plans",
  "Health Tips",
];

export default function UserManagement() {
  const [viewForm, setViewForm] = useState(false);
  return (
    <Stack>
      <NavbarAdminHorizontal />
      <Stack direction={"row"}>
        <NavbarAdmin />
        <Stack width={"100%"}>
          <Container>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <MainHead>User Management</MainHead>
              <StyledButton
                color="#65BD77"
                onClick={() => setViewForm((view) => !view)}
              >
                Add User
              </StyledButton>
            </Stack>
            {viewForm && (
              <InnerContainer>
                <InnerContainerHead>New User</InnerContainerHead>
                <InnerContainerHeadSection column>
                  <InputSection>
                    <Label>Name</Label>
                    <TextInput placeholder="Enter Name" />
                  </InputSection>
                  <InputSection>
                    <Label>Username</Label>
                    <TextInput placeholder="Enter Username" />
                  </InputSection>
                  <InputSection>
                    <Label>Password</Label>
                    <TextInput placeholder="Enter Password" type="password" />
                  </InputSection>
                  <InputSection>
                    <Label>Select Menu</Label>
                    <Stack
                      direction={"row"}
                      flexWrap={"wrap"}
                      maxWidth={"700px"}
                      gap={"10px"}
                    >
                      {menu.map((el, i) => {
                        return (
                          <Checkbox>
                            <input type="checkbox" />
                            <CheckboxLabel>{el}</CheckboxLabel>
                          </Checkbox>
                        );
                      })}
                    </Stack>
                  </InputSection>
                  <InputSection>
                    <Label></Label>
                    <Stack direction={"row"} gap={"10px"}>
                      <GreenButtonSmall>Save</GreenButtonSmall>
                      <BlueButtonSmall>Cancel</BlueButtonSmall>
                    </Stack>
                  </InputSection>
                </InnerContainerHeadSection>
              </InnerContainer>
            )}
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
                  aria-label="a dense table"
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
                        key={row.name}
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
                          <RedButtonSmall>
                            <EditIcon
                              sx={{
                                width: "15px",
                                height: "15px",
                              }}
                            />
                          </RedButtonSmall>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </InnerContainer>
          </Container>
        </Stack>
      </Stack>
    </Stack>
  );
}
