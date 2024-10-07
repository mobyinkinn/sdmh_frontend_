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
  BlueButtonSmall,
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
import VisibilityIcon from "@mui/icons-material/Visibility";

// import departmentImg from "./parts/assets/untitled.jpg";
import Image from "next/image";
import { useState } from "react";
// import AddDoctors from "./parts/AddDoctors";

const doctorsData = [
  {
    id: 0,
    department: "Shoulder Surgery",
    doctor: "Dr. Deen Dayal Nagar",
    patient: "Rajkumar",
    patientEmail: "R@gmail.com",
    phoneNo: "1234567890",
    address: "",
    city: "Jaipur",
    Created: "02/24/2022",
  },
  {
    id: 1,
    department: "Shoulder Surgery",
    doctor: "Dr. Deen Dayal Nagar",
    patient: "Raj",
    patientEmail: "Raj@gmail.com",
    phoneNo: "1234567890",
    address: "",
    city: "Jaipur",
    Created: "02/24/2022",
  },
  {
    id: 2,
    department: "Hip Surgery",
    doctor: "Dr. Deen Dayal Nagar",
    patient: "Kumar",
    patientEmail: "K@gmail.com",
    phoneNo: "1234567890",
    address: "",
    city: "Jaipur",
    Created: "02/24/2022",
  },
];

export default function Appointments() {
  const [viewForm, setViewForm] = useState(false);
  return (
    <Stack>
      <NavbarAdminHorizontal />
      <Stack direction={"row"}>
        <NavbarAdmin />
        <Stack width={"100%"} position={"relative"}>
          <Container>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <MainHead>Appointments</MainHead>
            </Stack>
            {/* {viewForm && <AddDoctors setViewForm={setViewForm} />} */}
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
                  aria-label="Appointments"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Doctor Name</TableCell>
                      <TableCell>Patient Name</TableCell>
                      <TableCell>Patient Email</TableCell>
                      <TableCell>Patient Phone No.</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>City Name</TableCell>
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
                          {row.doctor}
                        </TableCell>

                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.patient}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.patientEmail}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.phoneNo}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.address}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.city}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.Created}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          <Stack direction={"row"} gap={"8px"}>
                            <BlueButtonSmall>
                              <VisibilityIcon
                                sx={{
                                  width: "15px",
                                  height: "15px",
                                }}
                              />
                            </BlueButtonSmall>
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
