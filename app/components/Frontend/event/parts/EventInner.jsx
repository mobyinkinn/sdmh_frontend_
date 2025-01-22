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

const EventInner = () => {
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
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <Stack direction={"row"} gap={5}>
        <Stack width={"70%"} pl={10}>
          <Image src={BannerImage.src} width={950} height={600} />
          <Stack direction={"row"} gap={2} alignItems={"center"} p={"20px 0"}>
            <Head1 color="black" style={{ fontSize: "20px" }}>
              Upcoming
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
          width={"24%"}
          bgcolor={"#476C9B"}
          p={3}
          borderRadius={2}
          gap={2}
          alignItems={"center"}
        >
          <Head1 color="white" style={{ fontSize: "20px" }}>
            Recent Events
          </Head1>
          {data.map((d, i) => (
            <Stack gap={"5px"} key={i}>
              <Image
                src={d.Img.src}
                width={300}
                height={200}
                style={{ borderRadius: "15px" }}
              />
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

export default EventInner;
