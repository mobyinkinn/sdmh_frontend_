"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { CareerProvider } from "./parts/CareerContext";
import CareerTable from "./parts/CareerTable";
import CareerTableOperations from "./parts/CareerTableOperations";

export default function Careers() {
  return (
    <CareerProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Careers</Heading>
          <CareerTableOperations />
        </Row>
        <CareerTable />
      </AppLayout>
    </CareerProvider>
  );
}
