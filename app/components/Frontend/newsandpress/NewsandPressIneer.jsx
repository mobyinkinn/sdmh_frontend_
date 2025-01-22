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
const NewsandPressIneer = () => {
  const { slug } = useParams();
  return (
    <>
      <Navbar />
      <Stack
        width={"100%"}
        height={{ md: "90vh", xs: "50vh" }}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        justifyContent={"center"}
      />
      <Stack p={{ md: "20px 72px", xs: "20px" }} gap={2}>
        <Head1 color="#476C9B">{slug}</Head1>
        <ParaNormal style={{ textAlign: "justify" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Among these, leukaemia is the most common,
          accounting for about 30% of all childhood cancers. Leukaemia can occur
          at any age but it is mostly seen in children aged 2 to 6 years, with
          46% cases being seen in 2- and 3-year-olds, dropping to 9% by age 19.
          While the disease can’t be prevented, its treatment has evolved over
          the years with strides being made through Bone Marrow Transplantation
          (BMT) and CAR T-cell therapy.
        </ParaNormal>
        <ParaNormal>
          We collect and store anonymous data from every visitor of the
          Website/application to monitor traffic and fix bugs on our server. For
          example, we collect information like web requests, the data sent in
          response to such requests, the Internet Protocol address, the browser
          type, the browser language, and a timestamp for the request.
        </ParaNormal>
        <ParaNormal>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Among these, leukaemia is the most common,
          accounting for about 30% of all childhood cancers. Leukaemia can occur
          at any age but it is mostly seen in children aged 2 to 6 years, with
          46% cases being seen in 2- and 3-year-olds, dropping to 9% by age 19.
          While the disease can’t be prevented, its treatment has evolved over
          the years with strides being made through Bone Marrow Transplantation
          (BMT) and CAR T-cell therapy. We may ask you to log in and provide
          certain personal information (such as your name and email address) in
          order to be able to save your profile and use the app or website. In
          order to enable these or any other login based features, we use
          cookies to store session information for your convenience. In order to
          request services, you will need to share your personal information
          including but not limited to your name, email, phone number and other
          personal information which will be saved on our servers.
        </ParaNormal>
      </Stack>
      <RecentPicture />
      <Footer />
    </>
  );
};

export default NewsandPressIneer;
