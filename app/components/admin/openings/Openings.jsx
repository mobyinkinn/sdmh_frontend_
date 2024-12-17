"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { OpeningProvider } from "./parts/OpeningContext";
import OpeningTable from "./parts/OpeningTable";
import OpeningTableOperations from "./parts/OpeningTableOperations";

export default function Openings() {
  return (
    <OpeningProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Latest Openings</Heading>
          <OpeningTableOperations />
        </Row>
        <OpeningTable />
      </AppLayout>
    </OpeningProvider>
  );
}
