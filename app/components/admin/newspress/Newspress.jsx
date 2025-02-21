"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { NewspressProvider } from "./parts/NewspressContext";
import NewspressTable from "./parts/NewspressTable";
import NewspressTableOperations from "./parts/NewspressTableOperations";

export default function Newspress() {
  return (
    <NewspressProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Newspress</Heading>
          <NewspressTableOperations />
        </Row>
        <NewspressTable />
      </AppLayout>
    </NewspressProvider>
  );
}
