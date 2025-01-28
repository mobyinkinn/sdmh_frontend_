"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
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
          <Head1 textAlign="left" color="black">
            Most <span style={{ color: "#007946" }}>Viewed Topic</span>{" "}
          </Head1>
        </Stack>
        <ParaNormalSmall>See All Categories</ParaNormalSmall>
      </Stack>

      {/* Blog Selection Section */}
      <Stack padding="0 20px" direction={{ md: "row" }} gap={2}>
        {uniqueBlogs?.map((d) => (
          <Box
            key={d._id}
            onClick={() => setSelectedTitle(d.title)} // Set selected title
            sx={{
              position: "relative",
              width: { md: "350px", xs: "100%" },
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
            <Head1 color="#007946">Blogs</Head1>
          </Stack>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            rowGap={2}
            justifyContent={"left"}
            padding="0 20px"
          >
            {filteredData
              ?.filter((blog) => blog.title === selectedTitle) // Filter blogs by selected title
              .map((blog) => (
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
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  width={"100%"}
                  position={"relative"}
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
