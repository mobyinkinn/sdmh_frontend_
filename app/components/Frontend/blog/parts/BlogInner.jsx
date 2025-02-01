"use client";
import React from "react";
import Navbar from "../../navbar/Nav";
import Footer from "../../footer/Footer";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { useParams } from "next/navigation";
import { Box, Stack } from "@mui/material";
import BannerImage from "./assests/Image.png";
import Recent from "./assests/recent1.png";

import Image from "next/image";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

const BlogInner = () => {
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
  const { _id } = useParams();
  return (
    <>
      <Navbar />
      <Stack
        direction={{ md: "row" }}
        gap={{ md: 4, xs: 2 }}
        padding={{ md: 5, sm: 3, xs: 2 }}
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
            <Image src={BannerImage.src} fill objectFit="cover" />
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
              Upcoming {_id}
            </Head1>
            <ParaNormal color="#000000">13 Dec 2024</ParaNormal>
          </Stack>
          <Stack>
            <Head1 color="#476C9B" style={{ textAlign: "left" }}>
              ETHealthWorld NutriWell Conclave
            </Head1>
            <ParaNormal textAlign={"justify"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Among these,
              leukaemia is the most common, accounting for about 30% of all
              childhood cancers. Leukaemia can occur at any age but it is mostly
              seen in children aged 2 to 6 years, with 46% cases being seen in
              2- and 3-year-olds, dropping to 9% by age 19. While the disease
              can’t be prevented, its treatment has evolved over the years with
              strides being made through Bone Marrow Transplantation (BMT) and
              CAR T-cell therapy. While BMT from a fully matched sibling donor
              has a success rate of over 90%, providing a potentially permanent
              cure, cutting-edge immunotherapy called CAR T-cell therapy is an
              emerging option for treatment of some of the most complex cases of
              childhood leukaemias and lymphomas. CAR T-cell therapy harnesses
              the body's own T cells, a type of immune cell, to target and
              destroy cancer cells. Dr. Satya Prakash Yadav, Director of
              Paediatric Bone Marrow Transplant at Medanta, Gurugram, stated,
              “Despite advancements in treatment, blood cancer remains a
              significant health concern in India. For many patients, bone
              marrow or stem cell transplants become their only chance of
              recovery.
            </ParaNormal>
          </Stack>
        </Stack>
        <Stack
          width={{ md: "27%", xs: "100%" }}
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
          {data.map((d, i) => (
            <Stack gap={"5px"} key={i}>
              <Stack
                sx={{
                  width: "100%",
                  height: { sm: "300px", xs: "200px", md: "150px" },
                  position: "relative",
                }}
              >
                <Image
                  src={d.Img.src}
                  fill
                  objectFit="cover"
                  alt={d.Title}
                  style={{ borderRadius: "15px" }}
                />
              </Stack>
              <ParaNormal color="white" style={{ fontSize: "15px" }}>
                {d.data}
              </ParaNormal>
              <Head1
                style={{ fontSize: "18px", color: "white", textAlign: "left" }}
              >
                {d.Title}
              </Head1>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default BlogInner;
