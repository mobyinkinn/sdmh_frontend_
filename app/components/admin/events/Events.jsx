"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { EventProvider } from "./parts/EventContext";
import EventTable from "./parts/EventTable";
import EventTableOperations from "./parts/EventTableOperations";

export default function Events() {
  return (
    <EventProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Events</Heading>
          <EventTableOperations />
        </Row>
        <EventTable />
      </AppLayout>
    </EventProvider>
  );
}
