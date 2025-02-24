"use client";
import { Button, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { useEvents } from "@/app/components/admin/events/useEvents";
import Spinner from "@/app/components/ui/Spinner";

const eventData = [
  {
    id: 0,
    position: "Senior Resident - Gynae Oncology",
    seats: "5",
    lastDate: "01/02/2025",
    programmer: "Dr Yogesh Sewada",
    number: "1234567890",
    jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
    status: true,
    category: "Upcoming",
  },
  {
    category: "Academics",
    id: 1,
    position: "Senior Resident - Gynae Oncology",
    seats: "5",
    lastDate: "01/02/2025",
    programmer: "Dr Yogesh Sewada",
    number: "1234567890",
    jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
    status: true,
  },
  {
    category: "Public Awareness",
    id: 2,
    position: "Public Awareness",
    seats: "5",
    lastDate: "01/02/2025",
    programmer: "Dr Yogesh Sewada",
    number: "1234567890",
    jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
    status: true,
  },
  {
    category: "Recent",
    id: 3,
    position: "Senior Resident - Gynae Oncology",
    seats: "5",
    lastDate: "01/02/2025",
    programmer: "Dr Yogesh Sewada",
    number: "1234567890",
    jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
    status: true,
  },
  {
    category: "Upcoming",
    id: 4,
    position: "Senior Resident - Gynae Oncology",
    seats: "5",
    lastDate: "01/02/2025",
    programmer: "Dr Yogesh Sewada",
    number: "1234567890",
    jd: "We are hereby inviting the application for 1 year IDCCM Course Post MD/DNB in Pulmonary Medicine / Anesthesia / General Medicine in the Department of Critical care medicine.",
    status: true,
  },
];

const Tabdata = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const { data, isLoading, error } = useEvents();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(data?.map((event) => event.tag))];

  // Filter event data based on the selected category
  let filteredData =
    selectedCategory === "All"
      ? data
      : data?.filter((event) => event.tag === selectedCategory);

  // Reset page to 1 when category changes
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (isLoading) return <Spinner />;

  // Pagination logic
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (!filteredData.length) return <p>No events available.</p>;

  return (
    <>
      {/* Tabs Section */}
      <Stack
        direction="row"
        gap={{ md: 2, xs: 1 }}
        padding={{ md: 5, xs: 2 }}
        justifyContent={{ md: "center", xs: "start" }}
        flexWrap="wrap"
        bgcolor={"#476C9B"}
      >
        {categories.map((category, i) => (
          <Button
            key={i}
            variant={selectedCategory === category ? "contained" : "outlined"}
            color="primary"
            onClick={() => setSelectedCategory(category)}
            sx={{
              padding: { lg: "5px 30px", xs: "5px 17px" },
              backgroundColor:
                selectedCategory === category ? "white" : "transparent",
              color: selectedCategory === category ? "#476C9B" : "white",
              border: "1px solid white",
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor:
                  selectedCategory === category ? "white" : "#5A7EB6",
                color: selectedCategory === category ? "#476C9B" : "white",
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Stack>

      {/* Render Filtered & Paginated Event Cards */}
      <Stack alignItems="center" pt={2}>
        {paginatedData?.map((el) => (
          <EventCard key={el.id} career={el} />
        ))}
      </Stack>

      {/* Pagination */}
      <Stack direction="row" justifyContent="center" marginTop={4}>
        <Pagination
          count={totalPages || 1} // Ensure at least 1 page is displayed
          page={page}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          size="large"
        />
      </Stack>
    </>
  );
};

export default Tabdata;
