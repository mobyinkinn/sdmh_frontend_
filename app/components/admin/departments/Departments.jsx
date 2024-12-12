"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { DepartmentProvider } from "./parts/DepartmentContext";
import DepartmentTable from "./parts/DepartmentTable";
import DepartmentTableOperations from "./parts/DepartmentTableOperations";

export default function Departments() {
  return (
    <DepartmentProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Departments</Heading>
          <DepartmentTableOperations />
        </Row>
        <DepartmentTable />
      </AppLayout>
    </DepartmentProvider>
  );
}
