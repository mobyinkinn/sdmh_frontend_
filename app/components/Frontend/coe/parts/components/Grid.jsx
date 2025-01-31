"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import ballon from "../assets/hotAirBaloon.png";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import Image from "next/image";
import { Height } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";
import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";
import Spinner from "@/app/components/ui/Spinner";
import { useRouter } from "next/navigation";

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
  const { data, isLoading, error } = useDepartment();
  const filteredData = data?.filter((el, i) => el.status === true);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <ContainerMain
      bgColor="#fff"
      padding={{ lg: "50px", md: "40px", smm: "30px", sm: "20px" }}
      gap={{ lg: "20px", sm: "8px" }}
    >
      <Stack direction={"row"} justifyContent={"center"} gap={1}>
        <Head1
          color="black"
          fontSize={{ lg: "50px", md: "40px", smm: "30px", sm: "25px" }}
        >
          Center of
        </Head1>
        <Head1
          color="#005900"
          fontSize={{ lg: "50px", md: "40px", smm: "30px", sm: "25px" }}
        >
          {" "}
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
        {filteredData.map((el, i) => {
          return <CoeCard key={i} el={el} />;
        })}
      </Stack>
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
          height: "300px",
          width: "100%",
          position: "relative",
        }}
      >
        <Image src={el.image} alt="" fill objectFit="cover" />
      </Box>
      <ParaNormal textAlign={{ lg: "left", sm: "center" }}>
        {el.name}
      </ParaNormal>
      <ButtonSmallOutline
        color="#000000"
        onClick={() => router.push(`/center-of-excellence/${el._id}`)}
      >
        Read More
      </ButtonSmallOutline>
    </Stack>
  );
}
