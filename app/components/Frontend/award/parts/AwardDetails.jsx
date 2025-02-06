"use client";
import { Stack } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import Navbar from "../../navbar/Nav";
import Footer from "../../footer/Footer";
import DetailsHero from "./components/DetailsHero";
import MobileFooter from "../../footer/MobileFooter";
import { useAwardById } from "@/app/components/admin/awards/useAwards";

const AwardDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useAwardById(id);

  return (
    <Stack>
      <Navbar />
      <DetailsHero id={id} data={data} isLoading={isLoading} />
      <Footer />
      <MobileFooter />
    </Stack>
  );
};

export default AwardDetails;
