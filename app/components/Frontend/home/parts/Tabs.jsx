"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import img from "../assets/heartInHands.png";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEvents } from "@/app/components/admin/events/useEvents";
import { useCheckups } from "@/app/components/admin/health_plans/useCheckups";
import Spinner from "@/app/components/ui/Spinner";
import { useTpa } from "@/app/components/admin/tpa_index/useTpa";
import { useAwards } from "@/app/components/admin/awards/useAwards";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import image from "../assets/bannerImage.png";
import canteen from "../assets/canteen.jpg";
import conference_center from "../assets/conference_center.jpg";
import semi_deluxe_room from "../assets/semi_deluxe_room.jpg";
import pharmacy from "../assets/pharmacy.jpg";

const tabs = [
  {
    id: 0,
    name: "Donations",
    data: [
      {
        subId: 0,
        head: "donation3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "donation2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "donation3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "donation4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
  {
    id: 1,
    name: "Latest Happenings",
    data: [
      {
        subId: 0,
        head: "latest 1",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "latest 2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "latest 3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "latest 4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
  {
    id: 2,
    name: "Health Check",
    data: [
      {
        subId: 0,
        head: "check 1",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "check 2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "check 3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "check 4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
  {
    id: 3,
    name: "TPA's",
    data: [
      {
        subId: 0,
        head: "Tpa 1",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 1,
        head: "tpa 2",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 2,
        head: "tpa 3",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
      {
        subId: 3,
        head: "tpa 4",
        body: "There are many variations of passages of Lorem Ipsum available There are many variations",
        image: img,
      },
    ],
  },
];
 const eventData = [
   {
     id: 0,
     image: canteen,
     title: "Canteen",
   },
   {
     id: 1,
     image: conference_center,
     title: "Conference Store",
   },
   {
     id: 2,
     image: semi_deluxe_room,
     title: "Executive Rooms",
   },
   {
     id: 3,
     image: pharmacy,
     title: "Pharmacy",
   },
   {
     id: 4,
     image: image,
     title: "Interior",
   },
   {
     id: 5,
     image: image,
     title: "Interior",
   },
   {
     id: 6,
     image: image,
     title: "Blood Donation Camp Through JSG GEM CITY",
   },
   {
     id: 7,
     image: image,
     title: "Blood Donation Camp Through JSG GEM CITY",
   },
   {
     id: 8,
     image: image,
     title: "Blood Donation Camp Through JSG GEM CITY",
   },
   {
     id: 9,
     image: image,
     title: "Blood Donation Camp Through JSG GEM CITY",
   },
 ];
export default function Tabs() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const { data: events, isLoading: isLoadingEvents } = useEvents();
  const { data: checkups, isLoading: isLoadingCheckups } = useCheckups();
  const { data: awards, isLoading: isLoadingAwards } = useAwards();
  const { data: tpas, isLoading: isLoadingTpas } = useTpa();

  console.log("imp", events, checkups, awards, tpas);

  if (isLoadingCheckups || isLoadingEvents || isLoadingAwards || isLoadingTpas)
    return <Spinner />;

  const tabsData = [
    {
      id: 0,
      name: "Latest Happening",
      data: [events],
    },
    {
      id: 1,
      name: "Health Checkup",
      data: [checkups],
    },
    {
      id: 2,
      name: "Awards",
      data: [awards],
    },
    {
      id: 3,
      name: "TPA'S",
      data: [tpas],
    },
    {
      id: 4,
      name: "Gallery",
      data: [eventData],
    },
  ];

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ContainerMain bgColor={"#CEDDCC"} gap={{ sm: 0 }}>
      <Stack
        display={{ xs: "none", md: "flex" }}
        direction={"row"}
        backgroundColor={"white"}
        sx={{
          borderRadius: "200px",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        {tabsData.map((el, i) => {
          return (
            <Typography
              key={i}
              padding={{ xs: "15px 35px", lg: "20px 45px" }}
              fontSize={{ xs: "1rem", lg: "1.3rem" }}
              color={el.id === activeTab && "#54B435"}
              // fontWeight={el.id === activeTab && "bold"}
              sx={{
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  color: "#54B435",
                },
              }}
              onClick={() => setActiveTab(el.id)}
            >
              {el.name}
            </Typography>
          );
        })}
      </Stack>
      <Stack alignItems="center" display={{ xs: "flex", md: "none" }}>
        <Stack direction="row" flexWrap="wrap" justifyContent="center">
          {tabsData.map((el, i) => (
            <Stack
              key={el.id}
              marginRight="10px"
              width="object-fit"
              marginBottom={"10px"}
            >
              <ButtonMediumOutline
                fontSize={{ xs: "1rem", lg: "1.2rem" }}
                backgroundColor={el.id === activeTab ? "#005900" : "#fffff"}
                color={el.id === activeTab ? "white" : "black"}
                hcolor="#005900"
                sx={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() => setActiveTab(el.id)}
              >
                {el.name}
              </ButtonMediumOutline>
            </Stack>
          ))}
        </Stack>
      </Stack>

      {/* Mobile*/}
      <Stack
        direction={"row"}
        justifyContent={"center"}
        marginTop={"20px"}
        width="100%"
        display={{ xs: "flex", lg: "none" }}
      >
        <Slider
          {...settings}
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          {tabsData[activeTab].data[0]?.map((el, i) => {
            if (i >= 4) return null;
            const isTPA = tabsData[activeTab].name === "TPA'S";
            const isGallery = tabsData[activeTab].name === "Gallery";

            return (
              <Stack
                key={i}
                width={"100%"}
                backgroundColor={"#FBF6EE"}
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  width={"100%"}
                  height={"200px"}
                  sx={{
                    backgroundImage: `url(${isTPA ? el.logo : el.image})`,
                    backgroundSize: "cover",
                    borderRadius: "10px 10px 0 0",
                    backgroundPosition: "center center",
                  }}
                ></Box>
                <Stack padding={"20px"} gap={"10px"} alignItems={"center"}>
                  <Typography
                    height={!isGallery ? "45px" : "15px"}
                    fontSize={"1.2rem"}
                    textAlign={"center"}
                    color={"#379237"}
                    fontWeight={"bold"}
                  >
                    {el.title} {el.name}
                  </Typography>
                  {!isTPA && !isGallery && (
                    <Typography
                      textAlign={"center"}
                      dangerouslySetInnerHTML={{
                        __html: el.smallDescription
                          .split(" ")
                          .slice(0, 15)
                          .join(" "),
                      }}
                    />
                  )}
                  {!isTPA && (
                    <Typography
                      sx={{
                        border: "1px solid black",
                        padding: "10px 40px",
                        borderRadius: "200px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        const basePath = {
                          "Latest Happening": "/event",
                          "Health Checkup": "/health-checkup",
                          Awards: "/award",
                          "TPA'S": "/tpa",
                        };

                        router.push(
                          `${basePath[tabsData[activeTab].name]}/${el._id}`
                        );
                      }}
                    >
                      Know More
                    </Typography>
                  )}
                </Stack>
              </Stack>
            );
          })}
        </Slider>
      </Stack>

      {/* Desktop*/}
      <Stack
        direction={"row"}
        gap={"20px"}
        justifyContent={"center"}
        marginTop={"30px"}
        display={{ xs: "none", lg: "flex" }}
      >
        {tabsData[activeTab].data[0].map((el, i) => {
          if (i >= 4) return null;
          const isTPA = tabsData[activeTab].name === "TPA'S";
          const isGallery = tabsData[activeTab].name === "Gallery";

          let dynamicHeight;
          if (tabsData[activeTab].name === "Latest Happening") {
            dynamicHeight = "fit-content";
          } else if (tabsData[activeTab].name === "Health Checkup") {
            dynamicHeight = "420px";
          } else if (tabsData[activeTab].name === "Awards") {
            dynamicHeight = "450px";
          } else if (tabsData[activeTab].name === "TPA'S") {
            dynamicHeight = "300px";
          }

          let dynamicHeight_lg;
          if (tabsData[activeTab].name === "Latest Happening") {
            dynamicHeight_lg = "585px";
          } else if (tabsData[activeTab].name === "Health Checkup") {
            dynamicHeight_lg = "510px";
          } else if (tabsData[activeTab].name === "Awards") {
            dynamicHeight_lg = "565px";
          } else if (tabsData[activeTab].name === "TPA'S") {
            dynamicHeight_lg = "300px";
          }

          let dynaHeight;
          if (tabsData[activeTab].name === "Latest Happening") {
            dynaHeight = "25vh";
          } else if (tabsData[activeTab].name === "Health Checkup") {
            dynaHeight = "200px";
          } else if (tabsData[activeTab].name === "Awards") {
            dynaHeight = "200px";
          } else if (tabsData[activeTab].name === "TPA'S") {
            dynaHeight = "350px";
          } else if (tabsData[activeTab].name === "Gallery") {
            dynaHeight = "155px";
          }

          return (
            <Stack
              key={i}
              width={{ lg: "25%", xl: "23%" }}
              backgroundColor={"#FBF6EE"}
              sx={{
                borderRadius: "10px",
              }}
              height={{ lg: dynamicHeight_lg, xl: dynamicHeight }}
              onClick={() => {
                isGallery ? router.push(`${"/gallery"}`) : "";
              }}
            >
              <Box
                width={"100%"}
                height={dynaHeight}
                sx={{
                  backgroundImage: `url(${
                    isTPA ? el.logo : isGallery ? el.image.src : el.image
                  })`,
                  backgroundSize: "cover",
                  borderRadius: "10px 10px 0 0",
                  backgroundPosition: "center center",
                }}
              ></Box>

              <Stack
                justifyContent={"space-between"}
                // minHeight={"455px"}
                alignItems={"center"}
                p={1.5}
                gap={"30px"}
              >
                <Stack padding={"0 20px"} gap={"10px"} alignItems={"center"}>
                  <Typography
                    fontSize={"0.9rem"}
                    textAlign={"center"}
                    color={"#379237"}
                    fontWeight={"bold"}
                    height={!isGallery ? "80px" : "25px"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    {`${el.title ? el.title : ""} ${el.name ? el.name : ""}`}
                  </Typography>
                  {!isTPA && !isGallery && (
                    <Typography
                      height={"76px"}
                      className="section-scroll-2"
                      overflow={"auto"}
                      textAlign={"justify"}
                      paddingRight={"13px"}
                      fontSize={"0.8rem"}
                      dangerouslySetInnerHTML={{
                        __html: el.smallDescription,
                        // .split(" ")
                        // .slice(0, 15)
                        // .join(" "),
                      }}
                    />
                  )}
                </Stack>
                {!isTPA && !isGallery && (
                  <Typography
                    width={"fit-content"}
                    sx={{
                      border: "1px solid black",
                      padding: { lg: "10px 10px", xl: "10px 40px" },
                      borderRadius: "200px",
                      cursor: "pointer",
                      marginTop: "auto",
                    }}
                    onClick={() => {
                      const basePath = {
                        "Latest Happening": "/event",
                        "Health Checkup": "/health-checkup",
                        Awards: "/",
                        "TPA'S": "/tpa",
                      };

                      router.push(
                        `${basePath[tabsData[activeTab].name]}/${el._id}`
                      );
                    }}
                  >
                    Know More
                  </Typography>
                )}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
      <Stack alignItems="center">
        <ButtonMediumOutline
          margin="0 50px"
          color="#379237"
          hcolor="#005900"
          onClick={() => {
            const basePath = {
              "Latest Happening": "/event",
              "Health Checkup": "/health-checkup",
              Awards: "/award",
              "TPA'S": "/tpa",
              Gallery: "/gallery",
            };

            router.push(`${basePath[tabsData[activeTab].name]}`);
          }}
        >
          View All
        </ButtonMediumOutline>
      </Stack>
    </ContainerMain>
  );
}
