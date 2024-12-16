"use client";

import departmentImg from "./parts/assets/untitled.jpg";
import AppLayout from "../navbarAdmin/AppLayout";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import AwardsTableOperations from "./parts/AwardsTableOperations";
import AwardsTable from "./parts/AwardsTable";
import { AwardsProvider } from "./parts/AwardsContext";

export default function Awards() {
  return (
    <AwardsProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Awards Accreditations</Heading>
          <AwardsTableOperations />
        </Row>
        <AwardsTable />
      </AppLayout>
    </AwardsProvider>
  );
}
