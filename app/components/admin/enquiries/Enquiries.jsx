"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { EnquiryProvider } from "./parts/EnquiryContext";
import EnquiryTable from "./parts/EnquiryTable";
import EnquiryTableOperations from "./parts/EnquiryTableOperations";

export default function Enquiries() {
  return (
    <EnquiryProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Enquiries</Heading>
          <EnquiryTableOperations />
        </Row>
        <EnquiryTable />
      </AppLayout>
    </EnquiryProvider>
  );
}
