"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import React from "react";
import Designslider from "./Designslider";
import Rounding from "./assets/RoundingImage.png";
import { useTestimonials } from "@/app/components/admin/testimonials/parts/useTestimonial";
import Spinner from "@/app/components/ui/Spinner";
const Testimonialslider = () => {
  const bannerImages = [
    [
      {
        id: 1,
        img: "image1_url",
        des: "This is the first testimonial description.",
        title: "Customer 1",
      },
      {
        id: 2,
        img: "image2_url",
        des: "This is the second testimonial description.",
        title: "Customer 2",
      },
      {
        id: 3,
        img: "image3_url",
        des: "This is the third testimonial description.",
        title: "Customer 3",
      },
      {
        id: 4,
        img: "image4_url",
        des: "This is the fourth testimonial description.",
        title: "Customer 4",
      },
    ],
    [
      {
        id: 5,
        img: "image5_url",
        des: "This is the fifth testimonial description.",
        title: "Customer 5",
      },
      {
        id: 6,
        img: "image6_url",
        des: "This is the sixth testimonial description.",
        title: "Customer 6",
      },
      {
        id: 7,
        img: "image7_url",
        des: "This is the seventh testimonial description.",
        title: "Customer 7",
      },
      {
        id: 8,
        img: "image8_url",
        des: "This is the eighth testimonial description.",
        title: "Customer 8",
      },
    ],
    [
      {
        id: 5,
        img: "image5_url",
        des: "This is the fifth testimonial description.",
        title: "Customer 5",
      },
      {
        id: 6,
        img: "image6_url",
        des: "This is the sixth testimonial description.",
        title: "Customer 6",
      },
      {
        id: 7,
        img: "image7_url",
        des: "This is the seventh testimonial description.",
        title: "Customer 7",
      },
      {
        id: 8,
        img: "image8_url",
        des: "This is the eighth testimonial description.",
        title: "Customer 8",
      },
    ],
  ];
  const { data, isLoading, error } = useTestimonials();

  const filteredData = data?.filter((el, i) => el.status === true);
  let temp = [];

  for (let i = 0; i < filteredData?.length; i = i + 4) {
    let smallArr = [];
    smallArr.push(filteredData[i]);
    smallArr.push(filteredData[i + 1] || null);
    smallArr.push(filteredData[i + 2] || null);
    smallArr.push(filteredData[i + 3] || null);
    temp.push(smallArr);
  }
  console.log("temp", temp);
  console.log(data, isLoading, error);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Stack bgcolor={"#D2E4D8"} p={5}>
      <Stack
        direction={"row"}
        p={2}
        flexWrap={"wrap"}
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        <Head1 color="black">What Our&nbsp;</Head1>
        <Head1 style={{ textAlign: "center" }}>Patients Say</Head1>
      </Stack>
      <ParaNormal
        width={{ lg: "40%", md: "40%", smm: "100%", sm: "100%" }}
        textAlign={{ lg: "left", md: "left", smm: "center", sm: "center" }}
        style={{ paddingLeft: "20px" }}
      >
        It is a long established fact that a reader will be distracted by the
        readable
      </ParaNormal>
      <Designslider
        groups={filteredData}
        bannerImages={temp}
        position={"relative"}
        width={"100%"}
        slidesToShow={1} // Show 4 slides at a time
        bottom={"-6%"} // Adjust based on your design
        padding={"20px"} // Space between slides
        paddinginner={"10px"} // Inner padding for each slide
      />
    </Stack>
  );
};

export default Testimonialslider;
