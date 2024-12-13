"use client";

import departmentImg from "./parts/assets/untitled.jpg";
import AppLayout from "../navbarAdmin/AppLayout";
import { AcademicProvider } from "./parts/AcademicContext";
import Row from "../../ui/Row";
import AcademicTableOperations from "./parts/AcademicTableOperations";
import AcademicTable from "./parts/AcademicTable";
import Heading from "../../ui/Heading";

export default function AcademicNotices() {
  return (
    <AcademicProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Academic Notices</Heading>
          <AcademicTableOperations />
        </Row>
        <AcademicTable />
      </AppLayout>
    </AcademicProvider>
  );
}
