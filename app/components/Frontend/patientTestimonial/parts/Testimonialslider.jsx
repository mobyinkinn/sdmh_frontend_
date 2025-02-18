"use client";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Designslider from "./Designslider";
import Rounding from "./assets/RoundingImage.png";
import { useTestimonials } from "@/app/components/admin/testimonials/parts/useTestimonial";
import Spinner from "@/app/components/ui/Spinner";
import Slider from "react-slick";
import quotes from "@/app/components/Frontend/home/assets/icons/quotes.png";
import PatientSlider from "./PatientSlider";

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
  var settings = {
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
      {/* <Designslider
        groups={filteredData}
        bannerImages={temp}
        position={"relative"}
        width={"100%"}
        slidesToShow={1} // Show 4 slides at a time
        bottom={"-6%"} // Adjust based on your design
        padding={"20px"} // Space between slides
        paddinginner={"10px"} // Inner padding for each slide
      /> */}
      <PatientSlider
        groups={filteredData}
        bannerImages={temp} // Pass your banner images array
        position="relative"
        width="100%"
        slidesToShow={1} // Show 4 slides at a time
        bottom="-6%"
        padding="20px"
        paddinginner="10px"
      />
      {/* <Box
        component="img"
        src={quotes.src}
        alt=""
        sx={{
          width: { xs: "100px", md: "150px", lg: "206px" },
          height: { xs: "48px", md: "75px", lg: "98.43px" },
        }}
        style={{ margin: "20px auto" }}
      />
      <Slider {...settings}>
        {filteredData.map((el, i) => (
          <ReviewCard el={el} key={i} />
        ))}
      </Slider> */}
    </Stack>
  );
};

// function ReviewCard({ el }) {
//   return (
//     <Stack
//       direction={{ xs: "column", lg: "row" }}
//       gap={{ xs: "10px", lg: "10px" }}
//       width={{ md: "70%", xs: "100%" }}
//       margin={{ md: "0 auto" }}
//       alignItems={"center"}
//     >
//       <Box
//         component="img"
//         src={el.image}
//         alt=""
//         sx={{
//           borderRadius: "100%",
//           border: "4px solid",
//           borderColor: "#007946",
//           // width: { xs: "210px", lg: "160px" },
//           // height: { xs: "215px", lg: "160px" },
//           width: "160px",
//           height: "160px",
//         }}
//         // style={{
//         //   padding: "10px 30px",
//         //   paddingRight: "50px",
//         // }}
//       />

//       <Stack
//         sx={{
//           borderLeft: { lg: "3px solid #379237" },
//           borderTop: { xs: "3px solid #379237", lg: "none" },
//         }}
//         gap={"10px"}
//         padding={"10px 30px"}
//         alignItems={{ xs: "center", lg: "normal" }}
//       >
//         <Typography
//           fontSize={{ xs: "0.8rem", lg: "1.2rem" }}
//           // width={{ xs: "90%", lg: "100%" }}
//           textAlign={{ md: "left", xs: "center" }}
//         >
//           {el.message}
//         </Typography>
//         <Head3 color="black" textAlign={"left"}>
//           {el.name}
//         </Head3>
//         <Typography fontSize={".9rem"} color={"#379237"}>
//           Happy Customer
//         </Typography>
//       </Stack>
//     </Stack>
//   );
// }

export default Testimonialslider;
