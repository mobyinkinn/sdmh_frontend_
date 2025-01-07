"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { BlogProvider } from "./parts/BlogContext";
import BlogTable from "./parts/BlogTable";
import EventTable from "./parts/BlogTable";
import BlogTableOperations from "./parts/BlogTableOperations";
import EventTableOperations from "./parts/BlogTableOperations";

export default function Blogs() {
  return (
    <BlogProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Blogs</Heading>
          <BlogTableOperations />
        </Row>
        <BlogTable />
      </AppLayout>
    </BlogProvider>
  );
}
