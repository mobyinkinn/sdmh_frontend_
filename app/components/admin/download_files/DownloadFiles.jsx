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
import AddFiles from "./parts/AddFiles";
import AppLayout from "../navbarAdmin/AppLayout";
import { DownloadProvider } from "./parts/DownloadContext";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import DownloadTableOperations from "./parts/DownloadTableOperations";
import DownloadTable from "./parts/DownloadTable";

export default function DownloadFiles() {
  return (
    <DownloadProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Downloadable files</Heading>
          <DownloadTableOperations />
        </Row>
        <DownloadTable />
      </AppLayout>
    </DownloadProvider>
  );
}
