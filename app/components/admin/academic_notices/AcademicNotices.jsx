"use client";

import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavbarAdminHorizontal from "../navbarAdmin/NavbarAdminHorizontal";
import NavbarAdmin from "../navbarAdmin/NavbarAdminVerticle";
import {
  Container,
  InnerContainer,
  InnerContainerHeadSection,
} from "@/app/styledComponents/admin/Container";
import {
  InnerContainerHead,
  MainHead,
} from "@/app/styledComponents/admin/AdminHead";
import {
  GrayButtonSmall,
  GreenButtonSmall,
  RedButtonSmall,
  StatusLabel,
  StyledButton,
  YellowButtonSmall,
} from "@/app/styledComponents/admin/Buttons";
import { SearchInput } from "@/app/styledComponents/admin/Inputs";

import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";

import departmentImg from "./parts/assets/untitled.jpg";
import Image from "next/image";
import { useState } from "react";
import AddNotice from "./parts/AddNotice";

const doctorsData = [
  {
    id: 0,
    name: "IEC Research Protocol",
    image: departmentImg,
    status: "Active",
    Created: "02/24/2022",
  },
  {
    id: 1,
    name: "IEC Research Protocol",
    image: departmentImg,
    status: "Active",
    Created: "02/24/2022",
  },
  {
    id: 2,
    name: "IEC Research Protocol",
    image: departmentImg,
    status: "Active",
    Created: "02/24/2022",
  },
];

export default function AcademicNotices() {
  const [viewForm, setViewForm] = useState(false);
  return (
    <Stack>
      <NavbarAdminHorizontal />
      <Stack direction={"row"}>
        <NavbarAdmin />
        <Stack width={"100%"} position={"relative"}>
          <Container>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <MainHead>Academic Notices</MainHead>
              <StyledButton onClick={() => setViewForm(true)}>
                Add Academics Notices
              </StyledButton>
            </Stack>
            {viewForm && <AddNotice setViewForm={setViewForm} />}
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
                  size="large"
                  aria-label="Academics Notices"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Created at</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {doctorsData.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          backgroundColor: "white",
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          sx={{ verticalAlign: "top" }}
                          component="th"
                          scope="row"
                        >
                          {row.id + 1}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.name}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          <Image
                            src={row.image}
                            alt={row.name}
                            width={40}
                            height={40}
                          />
                        </TableCell>

                        <TableCell sx={{ verticalAlign: "top" }}>
                          <StatusLabel status={row.status}>
                            {row.status}
                          </StatusLabel>
                        </TableCell>

                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.Created}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          <Stack direction={"row"} gap={"8px"}>
                            {row.status === "Active" ? (
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
                            <RedButtonSmall>
                              <DeleteIcon
                                sx={{
                                  width: "15px",
                                  height: "15px",
                                }}
                              />
                            </RedButtonSmall>
                          </Stack>
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
