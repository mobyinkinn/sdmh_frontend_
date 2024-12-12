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

// import departmentImg from "./parts/assets/untitled.jpg";
// import Image from "next/image";
import { useState } from "react";
import AddAcademics from "./parts/AddAcademics";
import AppLayout from "../navbarAdmin/AppLayout";

const academicsData = [
  {
    id: 0,
    name: "Academics Notices",
    status: "Active",
    Created: "02/24/2022",
  },
  {
    id: 1,
    name: "Visiting Faculty",
    status: "Active",
    Created: "02/24/2022",
  },
  {
    id: 2,
    name: "FNB Courses",
    status: "Active",
    Created: "02/24/2022",
  },
];

export default function Academics() {
  return <AppLayout>Hello</AppLayout>;
}
