"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
import { useBlogs } from "@/app/components/admin/blog/useBlogs";
import Spinner from "@/app/components/ui/Spinner";
import { useRouter } from "next/navigation";

const Topics = () => {
  const router = useRouter();
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // Number of blogs per page

  const { data, isLoading, error } = useBlogs();
  const filteredData = data?.filter((el) => el.status === true) || [];

  // Unique blog titles
  const uniqueBlogs = filteredData?.filter(
    (blog, index, self) =>
      index === self.findIndex((b) => b.title === blog.title)
  );

  // Set first blog title as default
  useEffect(() => {
    if (filteredData.length > 0 && !selectedTitle) {
      setSelectedTitle(filteredData[0].title);
    }
  }, [filteredData, selectedTitle]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading blogs</p>;

  // Filter blogs by selected title
  const selectedBlogs = filteredData.filter(
    (blog) => blog.title === selectedTitle
  );

  // Pagination logic
  const totalPages = Math.ceil(selectedBlogs.length / itemsPerPage);
  const paginatedBlogs = selectedBlogs.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Stack p={{ md: "20px 50px" }} gap={2}>
      <Stack
        bgcolor={"#FFFFFB"}
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
        padding={2}
      >
        <Stack
          direction={"row"}
          justifyContent={{ md: "center", xs: "space-between" }}
        >
          <Head1
            fontSize={{
              sm: "0.95rem",
              smm: "1.8rem",
              md: "2.1rem",
              lg: "3.4rem",
            }}
            textAlign="left"
            color="black"
          >
            Most <span style={{ color: "#007946" }}>Viewed Topic</span>
          </Head1>
        </Stack>
        <ParaNormalSmall
          fontSize={{ sm: "13px", smm: "18px", md: "22px", lg: "25px" }}
        >
          See All Categories
        </ParaNormalSmall>
      </Stack>

      {/* Blog Selection Section */}
      <Stack
        padding="0 20px"
        direction={{ md: "row" }}
        gap={2}
        columnGap={{ lg: "15px" }}
      >
        {uniqueBlogs?.map((d) => (
          <Stack
            key={d._id}
            onClick={() => {
              setSelectedTitle(d.title);
              setPage(1); // Reset to first page when switching topics
            }}
            sx={{
              position: "relative",
              height: "240px",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.05)" },
            }}
            width={{ sm: "100%", md: "42%", lg: "24%" }}
          >
            <Image
              src={d.image}
              alt={d.title}
              layout="fill"
              objectFit="cover"
              style={{ filter: "brightness(0.8)" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                {d.title}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>

      {selectedTitle && (
        <>
          <Stack
            direction={"row"}
            p={2}
            mt={4}
            justifyContent={{ sm: "center", md: "start" }}
          >
            <Head1
              fontSize={{
                sm: "1.5rem",
                smm: "2rem",
                md: "2.5rem",
                lg: "3.4rem",
              }}
              color="#007946"
            >
              Blogs
            </Head1>
          </Stack>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            rowGap={2}
            columnGap={{ lg: "44px" }}
            padding="0 20px"
          >
            {paginatedBlogs.map((blog) => (
              <Stack
                gap={1}
                key={blog._id}
                sx={{
                  cursor: "pointer",
                  padding: "10px",
                  borderRadius: "8px",
                  transition: "transform 0.2s",
                  boxShadow: {
                    xs: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    md: "none",
                  },
                  "&:hover": { transform: "scale(1.05)" },
                }}
                position={"relative"}
                width={{ sm: "100%", md: "50%", lg: "30%" }}
                onClick={() => router.push(`/blog/${blog._id}`)}
              >
                <Box
                  height={{ md: "200px", xs: "150px" }}
                  width={"100%"}
                  position={"relative"}
                >
                  <Image
                    src={blog.image}
                    style={{ borderRadius: "10px" }}
                    fill
                    objectFit="cover"
                    alt={blog.title}
                  />
                </Box>
                <Typography
                  fontWeight={{ xs: "normal", md: "bold" }}
                  fontSize={{ sm: "20px", smm: "23px", md: "26px", lg: "28px" }}
                >
                  {blog.smallDescription}
                </Typography>
                <ParaNormal
                  style={{
                    fontSize: {
                      sm: "15px",
                      smm: "17px",
                      md: "20px",
                      lg: "25px",
                    },
                  }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${blog.description.slice(0, 50)}`,
                    }}
                  />
                </ParaNormal>
                <Stack direction={"row"} gap={2}>
                  <ButtonSmallOutlineWithoutHover
                    style={{ border: "1px solid lightgrey" }}
                  >
                    {blog.date}
                  </ButtonSmallOutlineWithoutHover>
                  <ButtonSmallOutlineWithoutHover
                    style={{ border: "1px solid lightgrey" }}
                  >
                    Topic
                  </ButtonSmallOutlineWithoutHover>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </>
      )}

      {/* Pagination */}
      <Stack direction="row" justifyContent="center" marginTop={4}>
        <Pagination
          count={totalPages || 1} // Ensure at least 1 page
          page={page}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          size="large"
        />
      </Stack>
    </Stack>
  );
};

export default Topics;
