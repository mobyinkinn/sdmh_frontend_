"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { ContactProvider } from "./parts/ContactContext";
import ContactTable from "./parts/ContactTable";
import ContactTableOperations from "./parts/ContactTableOperations";

export default function Contacts() {
  return (
    <ContactProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading>Contacts</Heading>
          <ContactTableOperations />
        </Row>
        <ContactTable />
      </AppLayout>
    </ContactProvider>
  );
}
