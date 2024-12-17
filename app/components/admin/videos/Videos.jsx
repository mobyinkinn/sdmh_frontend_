"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { VideoProvider } from "./parts/VideoContext";
import VideoTable from "./parts/VideoTable";
import VideoTableOperations from "./parts/VideoTableOperations";

export default function Videos() {
  return (
    <VideoProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Videos</Heading>
          <VideoTableOperations />
        </Row>
        <VideoTable />
      </AppLayout>
    </VideoProvider>
  );
}
