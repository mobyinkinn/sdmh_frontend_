"use client";
import { Box, Stack } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import CareerPosts from "./parts/CareerPosts";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";
import Spinner from "../../ui/Spinner";

export default function Career() {
  const { data, isLoading, error } = useBannerByPage("career");
  if (isLoading) return <Spinner />;
  return (
    <Stack>
      <Navbar />
      {/* <Hero /> */}
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
      <CareerPosts />
      <Footer />
    </Stack>
  );
}
