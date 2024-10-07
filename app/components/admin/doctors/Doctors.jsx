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
import AddDoctors from "./parts/AddDoctors";

const doctorsData = [
  {
    id: 0,
    department: "Shoulder Surgery",
    name: "Dr. Deen Dayal Nagar",
    image: departmentImg,
    AvailableOn: [
      { day: "Mon", at: "OT" },
      { day: "Tue", at: "OT" },
      { day: "Wed", at: "OT" },
      { day: "Fri", at: "OT" },
    ],
    floor: "2",
    room: "205",
    status: "Active",
    Created: "02/24/2022",
  },
  {
    id: 1,
    department: "Hip Surgery",
    name: "Dr. Rehanuddin",
    image: departmentImg,
    floor: "2",
    AvailableOn: [
      { day: "Mon", at: "OT" },
      { day: "Tue", at: "OT" },
      { day: "Wed", at: "OT" },
      { day: "Fri", at: "OT" },
    ],
    room: "205",
    status: "Active",
    Created: "02/24/2022",
  },
  {
    id: 2,
    department: "Cardiology",
    name: "Dr. Vipul Malpani",
    image: departmentImg,
    floor: "2",
    room: "205",
    AvailableOn: [
      { day: "Mon", at: "OT" },
      { day: "Tue", at: "OT" },
      { day: "Wed", at: "OT" },
      { day: "Fri", at: "OT" },
    ],
    status: "Active",
    Created: "02/24/2022",
  },
];

export default function Doctors() {
  const [viewForm, setViewForm] = useState(false);
  return (
    <Stack>
      <NavbarAdminHorizontal />
      <Stack direction={"row"}>
        <NavbarAdmin />
        <Stack width={"100%"} position={"relative"}>
          <Container>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <MainHead>Doctors</MainHead>
              <StyledButton onClick={() => setViewForm(true)}>
                Add Doctors
              </StyledButton>
            </Stack>
            {viewForm && <AddDoctors setViewForm={setViewForm} />}
            <InnerContainer>
              <InnerContainerHead>Listing</InnerContainerHead>
              <InnerContainerHeadSection>
                <SearchInput placeholder="Search" />
                <GreenButtonSmall>Go!</GreenButtonSmall>
                <GrayButtonSmall>Reset</GrayButtonSmall>
              </InnerContainerHeadSection>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} size="large" aria-label="Doctors">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Available on</TableCell>
                      <TableCell>Floor no.</TableCell>
                      <TableCell>Room no.</TableCell>
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
                          {row.department}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.name}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          <Stack>
                            {row.AvailableOn.map((el, i) => {
                              return (
                                <span key={i}>{`${el.day} ${el.at}`}</span>
                              );
                            })}
                          </Stack>
                        </TableCell>

                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.floor}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.room}
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
