"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { PlanProvider } from "./parts/PlanContext";
import PlanTable from "./parts/PlanTable";
import PlanTableOperations from "./parts/PlanTableOperations";

export default function Plan() {
  return (
    <PlanProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Health Plans</Heading>
         {/* <Typography type="text> */}
          <PlanTableOperations />
        </Row>
        <PlanTable />
      </AppLayout>
    </PlanProvider>
  );
}
