"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { TipsProvider } from "./parts/TipsContext";
import TipsTable from "./parts/TipsTable";
import TipsTableOperations from "./parts/TipsTableOperations";

export default function Tips() {
  return (
    <TipsProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Health Tips</Heading>
          <TipsTableOperations />
        </Row>
        <TipsTable />
      </AppLayout>
    </TipsProvider>
  );
}
