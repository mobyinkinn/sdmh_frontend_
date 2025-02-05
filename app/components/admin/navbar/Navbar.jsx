"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { NavbarProvider } from "./parts/NavbarContext";
import NavbarTable from "./parts/NavbarTable";
import NavbarTableOperations from "./parts/NavbarTableOperations";

export default function Navbar() {
  return (
    <NavbarProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Navbar</Heading>
          <NavbarTableOperations />
        </Row>
        <NavbarTable />
      </AppLayout>
    </NavbarProvider>
  );
}
