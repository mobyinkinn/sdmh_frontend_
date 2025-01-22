import { Stack } from "@mui/material";
import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import BannerImage from "@/app/styledComponents/frontend/BannerImage";
import PmDm from "./parts/PmDm";
import DiffernceTab from "./parts/DiffernceTab";

const NewsandPress = () => {
  return (
    <Stack>
      <Navbar />
      <BannerImage
        overlayColor="#476C9BE5"
        title="News And Press Release"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <PmDm />
      <DiffernceTab />
      <Footer />
    </Stack>
  );
};

export default NewsandPress;
