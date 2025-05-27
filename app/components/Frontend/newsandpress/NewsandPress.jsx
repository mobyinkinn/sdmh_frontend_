"use client"
import { Box, Stack } from "@mui/material";
import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import PmDm from "./parts/PmDm";
import DiffernceTab from "./parts/DiffernceTab";
import MobileFooter from "../footer/MobileFooter";
import Spinner from "../../ui/Spinner";
import { useNavbar } from "../../admin/navbar/useNavbar";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";

const NewsandPress = () => {
    const { isLoading } = useNavbar();
      const {
        data,
        isLoading: BannerLoading,
        error,
      } = useBannerByPage("news press release");
      if (isLoading) return <Spinner />;
  return (
    <Stack>
      <Navbar />
      {/* <BannerImage2
        overlayColor="#476C9BE5"
        title="News And Press Release"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      /> */}
      <Box
        display={{ md: "flex", sm: "none" }}
        minHeight={{ md: "322px", lg: "434px", xl: "600px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.images})`,
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
          backgroundImage: `url(${data?.mobileimages})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      ></Box>
      <PmDm />
      {/* <DiffernceTab /> */}
      <Footer />
      <MobileFooter />
    </Stack>
  );
};

export default NewsandPress;
