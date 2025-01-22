"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import PagesTable from "./parts/PagesTable";
import PagesTableOperations from "./parts/PagesTableOperations";
import { PagesProvider } from "./parts/PagesContext";

export default function Pages() {
  return (
    <PagesProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Pages</Heading>
          <PagesTableOperations />
        </Row>
        <PagesTable />
      </AppLayout>
    </PagesProvider>
  );
}
