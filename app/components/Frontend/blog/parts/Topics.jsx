"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
import { useBlogs } from "@/app/components/admin/blog/useBlogs";
import Spinner from "@/app/components/ui/Spinner";

const Topics = () => {
  const [selectedTitle, setSelectedTitle] = useState(null); // Track selected title
  const { data, isLoading, error } = useBlogs();
  const filteredData = data?.filter((el, i) => el.status === true);
  // Filter unique blogs based on title
  const uniqueBlogs = filteredData?.filter(
    (blog, index, self) =>
      index === self.findIndex((b) => b.title === blog.title)
  );

  useEffect(() => {
    if (filteredData && filteredData.length > 0 && !selectedTitle) {
      setSelectedTitle(filteredData[0].title); // Set the title of the first blog as default
    }
  }, [filteredData, selectedTitle]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Stack p={"20px 50px"} gap={2}>
      <Stack
        bgcolor={"#FFFFFB"}
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
      >
        <Stack direction={"row"} justifyContent={"center"} p={2}>
          <Head1 color="black" style={{ fontSize: "40px" }}>
            Most&nbsp;
          </Head1>
          <Head1 color="#007946" style={{ fontSize: "40px" }}>
            Viewed Topic
          </Head1>
        </Stack>
        <ParaNormal style={{ fontSize: "16px" }}>See All Categories</ParaNormal>
      </Stack>

      {/* Blog Selection Section */}
      <Stack direction={"row"} gap={2}>
        {uniqueBlogs?.map((d) => (
          <Box
            key={d._id}
            onClick={() => setSelectedTitle(d.title)} // Set selected title
            sx={{
              position: "relative",
              width: "350px",
              height: "240px",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
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
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {d.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      {selectedTitle && (
        <>
          <Stack direction={"row"} p={2} mt={4}>
            <Head1 color="#007946" style={{ fontSize: "40px" }}>
              Blogs
            </Head1>
          </Stack>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            rowGap={2}
            justifyContent={"left"}
          >
            {filteredData
              ?.filter((blog) => blog.title === selectedTitle) // Filter blogs by selected title
              .map((blog) => (
                <Stack
                  gap={1}
                  key={blog._id}
                  sx={{
                    cursor: "pointer",
                    borderRadius: "8px",
                    padding: "16px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Image
                    src={blog.image}
                    style={{ borderRadius: "10px" }}
                    width={400}
                    height={200}
                    alt={blog.title}
                  />
                  <Typography fontWeight={"bold"}>
                    {blog.smallDescription}
                  </Typography>
                  <ParaNormal style={{ fontSize: "15px" }}>
                    {blog.description}
                  </ParaNormal>
                  <Stack direction={"row"} gap={2}>
                    <ButtonSmallOutlineWithoutHover
                      style={{
                        border: "1px solid lightgrey",
                      }}
                    >
                      {blog.date}
                    </ButtonSmallOutlineWithoutHover>
                    <ButtonSmallOutlineWithoutHover
                      style={{
                        border: "1px solid lightgrey",
                      }}
                    >
                      Topic
                    </ButtonSmallOutlineWithoutHover>
                  </Stack>
                </Stack>
              ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default Topics;
