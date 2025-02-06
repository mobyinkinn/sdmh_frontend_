"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import Image from "next/image";
import { Height } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import {
  ButtonMediumOutline,
  ButtonSmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import Spinner from "@/app/components/ui/Spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAwards } from "@/app/components/admin/awards/useAwards";

export default function Grid() {
  const { data, isLoading, error } = useAwards();
  const filteredData = data?.filter((el, i) => el.status === true);
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleData = data
    ?.filter((el, i) => el.status === true)
    .slice(0, visibleCount);

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
          Our
        </Head1>
        <Head1
          color="#005900"
          fontSize={{ sm: "1.3rem", smm: "2rem", md: "2.2rem", lg: "3.4rem" }}
        >
          {" "}
          Awards
        </Head1>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={"50px"}
        justifyContent={"center"}
        marginTop={"20px"}
        marginX={{ xs: "20px", md: "0" }}
        display={{ xs: "none", md: "flex" }}
      >
        {filteredData.map((el, i) => {
          return <AwardCard el={el} />;
        })}
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={{ xs: "25px", md: "50px" }}
        justifyContent={"center"}
        marginTop={"20px"}
        marginX={{ xs: "20px", md: "0" }}
        display={{ xs: "flex", md: "none" }}
      >
        {visibleData.map((el, i) => {
          return <AwardCard el={el} />;
        })}
        <Stack alignItems={{ xs: "center", md: "start" }}>
          {visibleCount < data.length && (
            <ButtonMediumOutline
              onClick={() => setVisibleCount(visibleCount + 3)}
              color="#476C9B"
            >
              View All
            </ButtonMediumOutline>
          )}
        </Stack>
      </Stack>
    </ContainerMain>
  );
}

function AwardCard({ el }) {
  const router = useRouter();

  return (
    <Stack
      width={{ lg: "29%", md: "46%", sm: "100%", sm: "100%" }}
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
            fontSize={{
              lg: "30px",
              md: "22px",
              smm: "22px",
              sm: "17px",
            }}
          >
            {el.name}
          </ParaNormal>
          <ParaNormal
            fontSize={{ lg: "30px", md: "25px", smm: "22px", sm: "17px" }}
          >
            {el.year}
          </ParaNormal>
        </Stack>
        <ParaNormal
          fontSize={{ lg: "20px", md: "17px", smm: "16px", sm: "13px" }}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: `${el.about.slice(0, 84)}`,
            }}
          />
        </ParaNormal>
        <Stack direction={"row"} gap={2}>
          <ButtonSmallOutline
            color="#007946"
            // onClick={() => router.push(`/award/${el._id}`)}
          >
            Book Now
          </ButtonSmallOutline>
          <ButtonSmallOutline
            color="#000000"
            onClick={() => router.push(`/award/${el._id}`)}
          >
            Know More
          </ButtonSmallOutline>
        </Stack>
      </Stack>
    </Stack>
  );
}
