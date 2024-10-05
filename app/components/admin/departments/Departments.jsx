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
} from "@/app/styledComponents/admin/Buttons";
import { SearchInput } from "@/app/styledComponents/admin/Inputs";

import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";

import departmentImg from "./parts/assets/untitled.jpg";
import Image from "next/image";

const departmentData = [
  {
    id: 0,
    name: "Child Devlopement Center(CDC)",
    image: departmentImg,
    status: "Active",
    Created: "02/24/2022",
  },
  {
    id: 1,
    name: "Shoulder Surgery",
    image: departmentImg,
    status: "Inactive",
    Created: "02/24/2022",
  },
  {
    id: 2,
    name: "Hip Surgery",
    image: departmentImg,
    status: "Active",
    Created: "02/24/2022",
  },
];

export default function Departments() {
  return (
    <Stack>
      <NavbarAdminHorizontal />
      <Stack direction={"row"}>
        <NavbarAdmin />
        <Stack width={"100%"}>
          <Container>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <MainHead>Departments</MainHead>
              <StyledButton>Add Department</StyledButton>
            </Stack>
            <InnerContainer>
              <InnerContainerHead>Listing</InnerContainerHead>
              <InnerContainerHeadSection>
                <SearchInput placeholder="Search" />
                <GreenButtonSmall>Go!</GreenButtonSmall>
                <GrayButtonSmall>Reset</GrayButtonSmall>
              </InnerContainerHeadSection>
            </InnerContainer>
            <TableContainer>
              <Table
                sx={{ minWidth: 650 }}
                size="large"
                aria-label="Departments"
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
                  {departmentData.map((row) => (
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
                      <TableCell>
                        <Image
                          src={row.image}
                          alt={row.name}
                          width={20}
                          height={20}
                        />
                      </TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.Created}</TableCell>
                      <TableCell>
                        <StatusLabel status={row.status}>
                          {row.status}
                        </StatusLabel>
                      </TableCell>
                      <TableCell sx={{ display: "flex", gap: "8px" }}>
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
          </Container>
        </Stack>
      </Stack>
    </Stack>
  );
}
