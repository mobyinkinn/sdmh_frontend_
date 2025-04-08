"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import ballon from "../assets/hotAirBaloon.png";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import Image from "next/image";
import { Height } from "@mui/icons-material";
import { Box, Pagination, Stack } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";
import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";
import Spinner from "@/app/components/ui/Spinner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const coeData = [
  {
    id: 0,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 1,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },

  {
    id: 2,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 3,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 4,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 5,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 6,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 7,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 8,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 9,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 10,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
  {
    id: 11,
    data: "It Is a Long Established Fact That a Reader Will Be Distracted.",
    img: ballon,
  },
];

export default function Grid() {
  const [page, setPage] = useState(1);
  // const itemsPerPage = 6; // Adjust as needed

  const { data, isLoading, error } = useDepartment();
  const filteredData = data?.filter((el) => el.status === true) || [];

  // Calculate total pages
  // const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get the data for the current page
  // const paginatedData = filteredData.slice(
  //   (page - 1) * itemsPerPage,
  //   page * itemsPerPage
  // );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading data</p>;

  return (
    <ContainerMain
      bgColor="#F9F9F9"
      padding={{ lg: "50px", md: "40px", smm: "30px", sm: "20px" }}
      gap={{ lg: "20px", sm: "8px" }}
    >
      <Stack direction={"row"} justifyContent={"center"} gap={1}>
        <Head1
          color="black"
          fontSize={{ lg: "50px", md: "40px", smm: "30px", sm: "25px" }}
        >
          Centre of
        </Head1>
        <Head1
          color="#005900"
          fontSize={{ lg: "50px", md: "40px", smm: "30px", sm: "25px" }}
        >
          Excellence
        </Head1>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={"50px"}
        justifyContent={"center"}
        marginTop={"20px"}
      >
        {filteredData.map((el) => (
          <CoeCard key={el._id} el={el} />
        ))}
      </Stack>

      {/* Pagination Controls */}
      {/* <Stack direction="row" justifyContent="center" marginTop={4}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          size="large"
        />
      </Stack> */}
    </ContainerMain>
  );
}

function CoeCard({ el }) {
  const router = useRouter();

  return (
    <Stack
      width={{ lg: "29%", md: "46%", sm: "100%", sm: "100%" }}
      gap={"10px"}
      alignItems={"center"}
    >
      <Box
        sx={{
          minHeight: { sm: "312px", md: "254px", lg: "215px", xl: "318px" },
          width: "100%",
          position: "relative",
        }}
      >
        {el.image ? (
          <Image src={el.image} alt={el.name} fill objectFit="contain" />
        ) : (
          <div>Image Unavailable</div>
        )}
      </Box>
      <ParaNormal textAlign={{ lg: "center", sm: "center" }} color={"#005900"} fontWeight={'bold'}>
        {el.name}
      </ParaNormal>
      <ButtonSmallOutline
        color="#000000"
        hoverColor="white"
        onClick={() => router.push(`/centre-of-excellence/${el._id}`)}
      >
        View More
      </ButtonSmallOutline>
    </Stack>
  );
}
