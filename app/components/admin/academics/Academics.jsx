"use client";

import AppLayout from "../navbarAdmin/AppLayout";
import { AcademicProvider } from "./parts/AcademicContext";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import AcademicTableOperations from "./parts/AcademicTableOperations";
import AcademicTable from "./parts/AcademicTable";

export default function Academics() {
  return (
    <AcademicProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Academics</Heading>
          <AcademicTableOperations />
        </Row>
        <AcademicTable />
      </AppLayout>
    </AcademicProvider>
  );
}
