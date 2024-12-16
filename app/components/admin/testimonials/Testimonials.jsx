"use client";

import departmentImg from "./parts/assets/untitled.jpg";
import AppLayout from "../navbarAdmin/AppLayout";
import { TestimonialProvider } from "./parts/TestimonialContext";
import Row from "../../ui/Row";
import TestimonialTableOperations from "./parts/TestimonialTableOperations";
import TestimonialTable from "./parts/TestimonialTable";
import Heading from "../../ui/Heading";

export default function Testimonials() {
  return (
    <TestimonialProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Testimonials</Heading>
          <TestimonialTableOperations />
        </Row>
        <TestimonialTable />
      </AppLayout>
    </TestimonialProvider>
  );
}
