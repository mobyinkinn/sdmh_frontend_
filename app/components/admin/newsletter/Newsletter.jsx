"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { NewsletterProvider } from "./parts/NewsletterContext";
import NewsletterTable from "./parts/NewsletterTable";
import NewsletterTableOperations from "./parts/NewsletterTableOperations";

export default function Newsletters() {
  return (
    <NewsletterProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Newsletters</Heading>
          <NewsletterTableOperations />
        </Row>
        <NewsletterTable />
      </AppLayout>
    </NewsletterProvider>
  );
}
