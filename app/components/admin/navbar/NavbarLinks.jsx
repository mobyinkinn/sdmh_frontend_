"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { NavlinksProvider } from "./linkParts/NavlinksContext";
import NavlinksTable from "./linkParts/NavlinksTable";
import NavlinksTableOperations from "./linkParts/NavlinksTableOperations";

export default function NavLinks() {
  return (
    <NavlinksProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Navlinks</Heading>
          <NavlinksTableOperations />
        </Row>
        <NavlinksTable />
      </AppLayout>
    </NavlinksProvider>
  );
}
