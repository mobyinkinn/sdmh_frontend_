"use client";
import { useCheckupById } from "@/app/components/admin/health_plans/useCheckups";
import { Stack } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import Navbar from "../../navbar/Nav";
import Footer from "../../footer/Footer";
import DetailsHero from "./components/DetailsHero";
import MobileFooter from "../../footer/MobileFooter";

const HealthPlanDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useCheckupById(id);

  return (
    <Stack>
      <Navbar />
      <DetailsHero id={id} data={data} isLoading={isLoading} />
      <Footer />
      <MobileFooter />
    </Stack>
  );
};

export default HealthPlanDetails;
