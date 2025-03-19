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

export default function Tabs() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const { data: events, isLoading: isLoadingEvents } = useEvents();
  const { data: checkups, isLoading: isLoadingCheckups } = useCheckups();
  const { data: awards, isLoading: isLoadingAwards } = useAwards();
  const { data: tpas, isLoading: isLoadingTpas } = useTpa();

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
  ];

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ContainerMain bgColor={"#CEDDCC"}>
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
        <Stack direction="row" flexWrap="wrap" justifyContent="start">
          {tabsData.map((el, i) => (
            <Stack
              key={el.id}
              marginRight="10px"
              width="object-fit"
              marginBottom={"10px"}
            >
              <ButtonMediumOutline
                fontSize={{ xs: "1rem", lg: "1.2rem" }}
                backgroundColor={el.id === activeTab ? "#005900" : "#000000"}
                color={el.id === activeTab ? "#FFFFFF" : "#FFFFFF"}
                sx={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#005900",
                    hoverColor: "#54B435",
                  },
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
            return (
              <Stack
                key={i}
                width={"calc(50% - 20px)"}
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
                    fontSize={"1.2rem"}
                    textAlign={"center"}
                    color={"#379237"}
                    fontWeight={"bold"}
                  >
                    {el.title} {el.name}
                  </Typography>
                  {!isTPA && (
                    <Typography
                      textAlign={"center"}
                      dangerouslySetInnerHTML={{
                        __html: el.smallDescription
                          .split(" ")
                          .slice(0, 25)
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

          return (
            <Stack
              key={i}
              width={{ lg: "25%", xl: "20%" }}
              backgroundColor={"#FBF6EE"}
              sx={{
                borderRadius: "10px",
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
              <Stack
                justifyContent={"space-between"}
                // minHeight={"455px"}
                height="100%"
                alignItems={"center"}
                p={1.3}
              >
                <Stack padding={"20px"} gap={"10px"} alignItems={"center"}>
                  <Typography
                    fontSize={"1.2rem"}
                    textAlign={"center"}
                    color={"#379237"}
                    fontWeight={"bold"}
                  >
                    {el.title} {el.name}
                  </Typography>
                  {!isTPA && (
                    <Typography
                      textAlign={"center"}
                      dangerouslySetInnerHTML={{
                        __html: el.smallDescription
                          .split(" ")
                          .slice(0, 25)
                          .join(" "),
                      }}
                    />
                  )}
                </Stack>
                {!isTPA && (
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
          onClick={() => {
            const basePath = {
              "Latest Happening": "/event",
              "Health Checkup": "/health-checkup",
              Awards: "/award",
              "TPA'S": "/tpa",
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
