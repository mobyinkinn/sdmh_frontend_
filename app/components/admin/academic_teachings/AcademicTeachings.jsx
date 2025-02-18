"use client";

import AppLayout from "../navbarAdmin/AppLayout";
import { TeachingProvider } from "./parts/TeachingContext";
import Row from "../../ui/Row";
import TeachingTableOperations from "./parts/TeachingTableOperations";
import TeachingTable from "./parts/TeachingTable";
import Heading from "../../ui/Heading";

export default function AcademicTeachings() {
  return (
    <TeachingProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Academic Teaching</Heading>
          <TeachingTableOperations />
        </Row>
        <TeachingTable />
      </AppLayout>
    </TeachingProvider>
  );
}
