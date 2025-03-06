"use client";
import React from "react";
import Navbar from "../../navbar/Nav";
import Footer from "../../footer/Footer";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { useParams, useRouter } from "next/navigation";
import { Box, Stack } from "@mui/material";
import BannerImage from "./assests/Image.png";
import Recent from "./assests/recent1.png";
import Image from "next/image";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import {
  useEventById,
  useEvents,
} from "@/app/components/admin/events/useEvents";
import moment from "moment";
import Spinner from "@/app/components/ui/Spinner";

const data = [
  {
    Img: Recent,
    Title:
      "First hospital in North India to as an “Active Emerging Lung Transplant Centre",
    data: "13 Dec 2024",
  },
  {
    Img: Recent,
    Title:
      "First hospital in North India to as an “Active Emerging Lung Transplant Centre",
    data: "13 Dec 2024",
  },
  {
    Img: Recent,
    Title:
      "First hospital in North India to as an “Active Emerging Lung Transplant Centre",
    data: "13 Dec 2024",
  },
  {
    Img: Recent,
    Title:
      "First hospital in North India to as an “Active Emerging Lung Transplant Centre",
    data: "13 Dec 2024",
  },
];
const EventInner = () => {
  const { _id } = useParams();
  const { data: allEventsData, isLoading: isLoadingEvents } = useEvents();
  const { data: eventData, isLoading: isLoadingEvent } = useEventById(_id);
  const router = useRouter();

  console.log("All Events Data", allEventsData);

  const filteredEvents = allEventsData
    ?.filter((event) => event._id !== _id)
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date in descending order
    .slice(0, 4); // Get the first four most recent events

  console.log("Filtered Events Data", filteredEvents);

  const formattedDate = eventData?.date
    ? moment(eventData.date).format("MMMM Do YYYY")
    : "Date not available";

  if (isLoadingEvent || isLoadingEvents) return <Spinner />;
  return (
    <>
      <Navbar />
      <Stack
        direction={{ md: "row" }}
        gap={{ md: 5, xs: 2 }}
        padding={{ md: 5, sm: 3, xs: 0 }}
      >
        <Stack width={{ md: "70%" }}>
          <Stack
            sx={{
              mt: "40px",
              position: "relative",
              width: "100%",
              height: "70vh",
              borderRadius: "10px",
            }}
          >
            <Image src={eventData.image} fill objectFit="cover" />
          </Stack>
          <Stack
            direction={{ md: "row", xs: "column-reverse" }}
            gap={{ md: 2, xs: "1" }}
            alignItems={{ md: "center", xs: "left" }}
            p={"20px 0"}
          >
            <Head1
              textAlign={{ md: "left", sm: "left", smm: "left", lg: "left" }}
              color="black"
              style={{ fontSize: "20px" }}
            >
              {eventData.tag}
            </Head1>
            <ParaNormal color="#000000">{formattedDate}</ParaNormal>
          </Stack>
          <Stack>
            <Head1 color="#476C9B" style={{ textAlign: "left" }}>
              {eventData.title}
            </Head1>
            <ParaNormal
              textAlign={"justify"}
              dangerouslySetInnerHTML={{ __html: eventData.description }}
            />
          </Stack>
        </Stack>
        <Stack
          width={{ md: "20%", xs: "100%" }}
          bgcolor={"#476C9B"}
          marginTop="40px"
          p={2}
          borderRadius={1}
          gap={5}
          alignItems={"center"}
        >
          <Head1 color="white" style={{ fontSize: "20px" }}>
            Recent Events
          </Head1>
          {filteredEvents.map((d, i) => (
            <Stack
              gap={"5px"}
              key={i}
              onClick={() => router.push(`/event/${d._id}`)}
              sx={{
                cursor: "pointer",
              }}
            >
              <Stack
                sx={{
                  width: { xs: "230px", md: "140px", lg: "250px" },
                  height: { sm: "300px", xs: "200px", md: "150px" },
                  position: "relative",
                }}
              >
                <Image
                  src={d.image}
                  fill
                  objectFit="cover"
                  alt={d.image}
                  style={{ borderRadius: "15px" }}
                />
              </Stack>
              <ParaNormal color="white" style={{ fontSize: "15px" }}>
                {moment(d.date).format("DD MMM YYYY")}
              </ParaNormal>
              <Head1
                style={{ fontSize: "18px", color: "white", textAlign: "left" }}
              >
                {d.title}
              </Head1>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default EventInner;
