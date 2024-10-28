"use client";

import { Stack, Typography } from "@mui/material";
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
  RedButtonSmall,
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
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";

import { useState } from "react";
// import AddUser from "./parts/AddUser";

const eventDetails = [
  {
    id: 0,
    title: "Felicitation of Stalwarts",
    sDesc: "Honoring the legends of Department of CTVS",
    desc: "SDMH felicitated all the Stalwarts of the department of CTVS on 2 June 2018. The hospital and the department are grateful to all the doctors who contributed to the establishment and development of the Department of Cardiac Sciences at SDMH since its start in 1979 till date. All the renowned Cardiac Surgeons Dr. Gautam Sen(Ex-Consultant Cardiac Surgeon, SDMH), Dr. Subba Rao( Professor, Banglore Hospital), Dr. Ravindra Kumar Sharma(Consultant Cardiac Surgeon, Mahatma Gandhi Medical College, Jaipur), Dr. Ajeet Bana( Chairman Cardiac Sciences, EHCC, Jaipur) and Dr. Vikram Goyal( Director, Cardiac Sciences, Manipal Hospital, Jaipur), Dr. Kastoori Sarma, Dr. Himanshu Desai, Dr K.G.Yadav and also the anesthesiologists, Dr. V.K Parashar( HOD, Anesthesiology, SDMH), Dr. Shobha Parashar( Consultant, Anesthesiology, SDMH), Dr. Asha Kasliwal( Consultant, Anesthesiology, SDMH), Dr. Kanhaiya Agarwal( Ex-Consultant, Anesthesiology, SDMH), Dr. Anil Karlekar were honoured for their immense contribution and dedication. A special remembrance to the memories of the legends of the department of CTVS, Dr M.P. Chincholkar, Dr Nemish Shah, Dr Sharad Pandey and Dr Ashok Jain, who are no more with us but will always be in our hearts.",
    featured: "no",
    date: "2nd Nov, 2023",
    status: "Active",
  },
  {
    id: 1,
    title: "Felicitation of Stalwarts",
    sDesc: "Honoring the legends of Department of CTVS",
    desc: "SDMH felicitated all the Stalwarts of the department of CTVS on 2 June 2018. The hospital and the department are grateful to all the doctors who contributed to the establishment and development of the Department of Cardiac Sciences at SDMH since its start in 1979 till date. All the renowned Cardiac Surgeons Dr. Gautam Sen(Ex-Consultant Cardiac Surgeon, SDMH), Dr. Subba Rao( Professor, Banglore Hospital), Dr. Ravindra Kumar Sharma(Consultant Cardiac Surgeon, Mahatma Gandhi Medical College, Jaipur), Dr. Ajeet Bana( Chairman Cardiac Sciences, EHCC, Jaipur) and Dr. Vikram Goyal( Director, Cardiac Sciences, Manipal Hospital, Jaipur), Dr. Kastoori Sarma, Dr. Himanshu Desai, Dr K.G.Yadav and also the anesthesiologists, Dr. V.K Parashar( HOD, Anesthesiology, SDMH), Dr. Shobha Parashar( Consultant, Anesthesiology, SDMH), Dr. Asha Kasliwal( Consultant, Anesthesiology, SDMH), Dr. Kanhaiya Agarwal( Ex-Consultant, Anesthesiology, SDMH), Dr. Anil Karlekar were honoured for their immense contribution and dedication. A special remembrance to the memories of the legends of the department of CTVS, Dr M.P. Chincholkar, Dr Nemish Shah, Dr Sharad Pandey and Dr Ashok Jain, who are no more with us but will always be in our hearts.",
    featured: "no",
    date: "2nd Nov, 2023",
    status: "Inactive",
  },
  {
    id: 2,
    title: "Felicitation of Stalwarts",
    sDesc: "Honoring the legends of Department of CTVS",
    desc: "SDMH felicitated all the Stalwarts of the department of CTVS on 2 June 2018. The hospital and the department are grateful to all the doctors who contributed to the establishment and development of the Department of Cardiac Sciences at SDMH since its start in 1979 till date. All the renowned Cardiac Surgeons Dr. Gautam Sen(Ex-Consultant Cardiac Surgeon, SDMH), Dr. Subba Rao( Professor, Banglore Hospital), Dr. Ravindra Kumar Sharma(Consultant Cardiac Surgeon, Mahatma Gandhi Medical College, Jaipur), Dr. Ajeet Bana( Chairman Cardiac Sciences, EHCC, Jaipur) and Dr. Vikram Goyal( Director, Cardiac Sciences, Manipal Hospital, Jaipur), Dr. Kastoori Sarma, Dr. Himanshu Desai, Dr K.G.Yadav and also the anesthesiologists, Dr. V.K Parashar( HOD, Anesthesiology, SDMH), Dr. Shobha Parashar( Consultant, Anesthesiology, SDMH), Dr. Asha Kasliwal( Consultant, Anesthesiology, SDMH), Dr. Kanhaiya Agarwal( Ex-Consultant, Anesthesiology, SDMH), Dr. Anil Karlekar were honoured for their immense contribution and dedication. A special remembrance to the memories of the legends of the department of CTVS, Dr M.P. Chincholkar, Dr Nemish Shah, Dr Sharad Pandey and Dr Ashok Jain, who are no more with us but will always be in our hearts.",
    featured: "no",
    date: "2nd Nov, 2023",
    status: "Active",
  },
];

export default function Events() {
  const [viewForm, setViewForm] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  return (
    <Stack>
      <NavbarAdminHorizontal />
      <Stack direction={"row"}>
        <NavbarAdmin />
        <Stack width={"100%"} position={"relative"}>
          <Container>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <MainHead>Events</MainHead>
              <StyledButton color="#65BD77" onClick={() => setViewForm(true)}>
                Add Events
              </StyledButton>
            </Stack>
            {/* {viewForm && <AddUser setViewForm={setViewForm} />} */}
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
                      <TableCell sx={{ width: "150px" }}>Title</TableCell>
                      <TableCell sx={{ width: "200px" }}>
                        Small Description
                      </TableCell>
                      <TableCell sx={{ width: "300px" }}>Description</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {eventDetails.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          backgroundColor: "white",
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ verticalAlign: "top" }}
                        >
                          {row.id + 1}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.title}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.sDesc}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {showDesc ? row.desc : row.desc.slice(0, 100)}{" "}
                          <Typography
                            color={"blue"}
                            onClick={() => setShowDesc((el) => !el)}
                          >
                            {showDesc ? "...Collapse" : "...Read more"}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.date}
                        </TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>
                          {row.status}
                        </TableCell>
                        <TableCell
                          sx={{
                            verticalAlign: "top",
                          }}
                        >
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
