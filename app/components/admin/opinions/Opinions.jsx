"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { OpinionProvider } from "./parts/OpinionContext";
import OpinionTable from "./parts/OpinionTable";
import OpinionTableOperations from "./parts/OpinionTableOperations";

export default function Enquiries() {
  return (
    <OpinionProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Second Opinion</Heading>
          <OpinionTableOperations />
        </Row>
        <OpinionTable />
      </AppLayout>
    </OpinionProvider>
  );
}
