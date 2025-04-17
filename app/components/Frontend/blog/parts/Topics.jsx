"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
import { useBlogs } from "@/app/components/admin/blog/useBlogs";
import Spinner from "@/app/components/ui/Spinner";
import { useRouter } from "next/navigation";

const Topics = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // Number of blogs per page

  const { data, isLoading, error } = useBlogs();
  const filteredData = data?.filter((el) => el.status === true) || [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading blogs</p>;

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedBlogs = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Stack p={{ md: "20px 50px" }} gap={2} bgcolor={"#F9F9F9"}>
      <Stack direction={"row"} p={2} mt={4} justifyContent={"center"}>
        <Head1
          fontSize={{ sm: "1.5rem", smm: "2rem", md: "2.5rem", lg: "3.4rem" }}
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
              fontSize={{ sm: "12px", smm: "15px", md: "18px", lg: "19px" }}
              color="#486c9c"
            >
              {blog.title}
            </Typography>
            <ParaNormal fontSize={{ lg: "1rem", md: "1rem", sm: "0.8ren" }}>
              {blog.smallDescription.slice(0, 150)}....
            </ParaNormal>
            <Stack direction={"row"} gap={2}>
              <ButtonSmallOutlineWithoutHover
                style={{ border: "1px solid lightgrey" }}
              >
                {blog.date}
              </ButtonSmallOutlineWithoutHover>
              <ButtonSmallOutlineWithoutHover
                style={{ border: "1px solid lightgrey" }}
                onClick={() => router.push(`/blog/${blog._id}`)}
              >
                Read More
              </ButtonSmallOutlineWithoutHover>
            </Stack>
          </Stack>
        ))}
      </Stack>
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
