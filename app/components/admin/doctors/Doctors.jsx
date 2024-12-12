"use client";

import departmentImg from "./parts/assets/untitled.jpg";
import AppLayout from "../navbarAdmin/AppLayout";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import DoctorsTableOperations from "./parts/DoctorsTableOperations";
import { DoctorsProvider } from "./parts/DoctorsContext";
import DoctorsTable from "./parts/DoctorsTable";

export default function Doctors() {
  return (
    <DoctorsProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Doctors</Heading>
          <DoctorsTableOperations />
        </Row>
        <DoctorsTable />
      </AppLayout>
    </DoctorsProvider>
  );
}
