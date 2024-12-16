"use client";

import departmentImg from "./parts/assets/untitled.jpg";
import AppLayout from "../navbarAdmin/AppLayout";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import TpaTableOperations from "./parts/TpaTableOperations";
import { TpaProvider } from "./parts/TpaContext";
import TpaTable from "./parts/TpaTable";

export default function TpaIndex() {
  return (
    <TpaProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Tpa Index</Heading>
          <TpaTableOperations />
        </Row>
        <TpaTable />
      </AppLayout>
    </TpaProvider>
  );
}
