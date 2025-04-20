"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import Image from "next/image";
import { Box, Stack, Pagination } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import {
  ButtonMediumOutline,
  ButtonSmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import { useCheckups } from "@/app/components/admin/health_plans/useCheckups";
import Spinner from "@/app/components/ui/Spinner";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Grid() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const { data, isLoading, error } = useCheckups();

  // Filtered and paginated data
  const filteredData = data?.filter((el) => el.status === true) || [];
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  // const paginatedData = filteredData.slice(
  //   (page - 1) * itemsPerPage,
  //   page * itemsPerPage
  // );

  // For mobile "View All" functionality
  // const [visibleCount, setVisibleCount] = useState(4);
  // const visibleData = filteredData.slice(0, visibleCount);

  // Reset pagination when data changes
  useEffect(() => {
    setPage(1);
  }, [data]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ContainerMain
      bgColor="#D8E0EB"
      padding={{ lg: "50px", md: "40px", smm: "30px", sm: "8px" }}
      gap={{ lg: "20px", sm: "8px" }}
    >
      <Stack justifyContent={"center"} gap={1}>
        <Head1
          fontWeight="none"
          color="black"
          fontSize={{ lg: "30px", md: "25px", smm: "20px", sm: "15px" }}
        >
          Our Affordable
        </Head1>
        <Head1
          color="#005900"
          fontSize={{ sm: "1.3rem", smm: "2rem", md: "2.2rem", lg: "3.4rem" }}
        >
          Health checkup plans
        </Head1>
      </Stack>

      {/* Desktop View (Paginated) */}
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={"50px"}
        justifyContent={"center"}
        marginTop={"20px"}
        marginX={{ xs: "20px", md: "0" }}
        display={{ xs: "none", md: "flex" }}
      >
        {filteredData.map((el) => (
          <CheckupCard key={el._id} el={el} />
        ))}
      </Stack>

      {/* Pagination for Desktop */}
      {/* <Stack
        direction="row"
        justifyContent="center"
        marginTop={4}
        display={{ xs: "none", md: "flex" }}
      >
        <Pagination
          count={totalPages || 1} // Ensure at least 1 page is displayed
          page={page}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          size="large"
        />
      </Stack> */}

      {/* Mobile View */}
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={{ xs: "25px", md: "50px" }}
        justifyContent={"center"}
        marginTop={"20px"}
        marginX={{ xs: "20px", md: "0" }}
        display={{ xs: "flex", md: "none" }}
      >
        {filteredData.map((el) => (
          <CheckupCard key={el._id} el={el} />
        ))}
        <Stack alignItems={{ xs: "center", md: "start" }}>
            <ButtonMediumOutline
              onClick={() => setVisibleCount(visibleCount + 3)}
              color="#476C9B"
            >
              View More
            </ButtonMediumOutline>
        </Stack>
      </Stack>
    </ContainerMain>
  );
}

// Checkup Card Component
function CheckupCard({ el }) {
  const router = useRouter();

  return (
    <Stack
      width={{ lg: "29%", md: "46%", sm: "100%" }}
      height={"421px"}
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: { xs: "50%", md: "40%" },
          width: "100%",
          position: "relative",
          alignSelf: "center",
        }}
      >
        <Image src={el.image} alt="" fill objectFit="cover" />
      </Box>
      <Stack
        bgcolor={"#FFFFFF"}
        height={{ xs: "50%", md: "60%" }}
        paddingX={2.5}
        justifyContent={"space-evenly"}
      >
        <Stack>
          <ParaNormal
            color={"#486c9c"}
            fontWeight={"bold"}
            fontSize={{
              lg: "22px",
              md: "18px",
              smm: "17px",
              sm: "17px",
            }}
            height={"70px"}
          >
            {el.title}
          </ParaNormal>
          <ParaNormal
            fontSize={{ lg: "22px", md: "18px", smm: "17px", sm: "17px" }}
          >
            ₹{el.price}
          </ParaNormal>
        </Stack>
        <ParaNormal
          fontSize={{ lg: "16px", md: "17px", smm: "16px", sm: "13px" }}
        >
          {el.smallDescription}
        </ParaNormal>
        <Stack direction={"row"} gap={2}>
          {/* <ButtonSmallOutline
            color={"#007946"}
            hoverColor="white"
            // onClick={() => router.push(`/Health-checkup-form`)}
            onClick={() =>
              router.push({
                pathname: "/Health-checkup-form",
                query: { planname: el.title }, // pass title as query param
              })
            }
          >
            Book Now
          </ButtonSmallOutline> */}
          <ButtonSmallOutline
            color={"#007946"}
            hoverColor="white"
            onClick={() =>
              router.push(
                `/Health-checkup-form?planname=${encodeURIComponent(el.title)}`
              )
            }
          >
            Book Now
          </ButtonSmallOutline>
          <ButtonSmallOutline
            color="#000000"
            hoverColor="white"
            onClick={() => router.push(`/health-checkup/${el._id}`)}
          >
            Know More
          </ButtonSmallOutline>
        </Stack>
      </Stack>
    </Stack>
  );
}
