"use client";
import { useParams } from "next/navigation";
import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Image from "next/image";
import banner from "./parts/assests/banner.png";
import { Stack } from "@mui/material";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import RecentPicture from "./parts/RecentPicture";
import { useNewspressById } from "../../admin/newspress/useNewspress";
import Spinner from "../../ui/Spinner";
const NewsandPressIneer = () => {
  const { id } = useParams();
  const { data, isLoading } = useNewspressById(id);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Navbar />
      <Stack
        width={"100%"}
        height={{ md: "90vh", xs: "50vh" }}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${data?.banner})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        justifyContent={"center"}
      />
      <Stack p={{ md: "20px 72px", xs: "20px" }} gap={2}>
        <Head1
          color="#476C9B"
          textAlign={{ sm: "center", smm: "center", md: "center", lg: "start" }}
        >
          {data.title}
        </Head1>
        <ParaNormal
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: data?.description }}
          fontSize={{ sm: "12px", smm: "15px", md: "18px", lg: "25px" }}
        />
      </Stack>
      <RecentPicture />
      <Footer />
    </>
  );
};

export default NewsandPressIneer;
