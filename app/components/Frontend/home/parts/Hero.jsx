"use client";
import { Box, Stack, Typography } from "@mui/material";
import banner from "../assets/heroBanner.png";
import { SearchInputHero } from "@/app/styledComponents/frontend/Inputs";
import { FaSearch } from "react-icons/fa";
import opinion from "../assets/icons/opinion.png";
import query from "../assets/icons/query.png";
import roomTour from "../assets/icons/roomTour.png";
import Image from "next/image";
import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";
import Spinner from "@/app/components/ui/Spinner";

export default function Hero() {
  const { data, isLoading, error } = useBannerByPage("home");
  if (isLoading) return <Spinner />;

  return (
    <Stack direction={"row"}>
      <Box
        display={{ md: "flex", sm: "none" }}
        minHeight={{ md: "322px", lg: "434px", xl: "600px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Box>

      <Box
        display={{ md: "none", sm: "flex" }}
        minHeight={{ xs: "451px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.mobileBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      ></Box>

      {/* <Stack
        backgroundColor={"#379237"}
        width={"20%"}
        color="white"
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
      >
        <SearchInputHero contentEditable>
          <FaSearch /> Search
        </SearchInputHero>
        <Stack direction={"row"} gap={"20px"}>
          <Image src={roomTour} alt="" height={25} width={25} />
          <Typography fontSize={"1.2rem"}>Room Tour</Typography>
        </Stack>
        <Stack direction={"row"} gap={"20px"}>
          <Image src={opinion} alt="" height={20} width={30} />
          <Typography fontSize={"1.2rem"}>II Opinion</Typography>
        </Stack>
        <Stack direction={"row"} gap={"20px"}>
          <Image src={query} alt="" height={20} width={25} />
          <Typography fontSize={"1.2rem"}>Query Us</Typography>
        </Stack>
      </Stack> */}
    </Stack>
  );
}
