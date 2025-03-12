"use client";
import { Stack } from "@mui/material";
import Navbar from "../../navbar/Nav";
import Footer from "../../footer/Footer";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import DetailsHero from "./components/DetailsHero";
import Procedure from "./components/Procedures";
import Doctors from "./components/Doctors";
import { useParams, useRouter } from "next/navigation";
import { useDepartmentById } from "@/app/components/admin/departments/parts/useDepartment";
import MobileFooter from "../../footer/MobileFooter";

export default function CoeDetails() {
  const { _id } = useParams();
  const { data, isLoading, error } = useDepartmentById(_id);

  return (
    <Stack>
      <Navbar />
      <ContainerMain bgColor={"#F9F9F9"}>
        <DetailsHero data={data} isLoading={isLoading} />
        {/* <Procedure data ={data}/> */}
        <Doctors _id={_id} />
      </ContainerMain>
      <Footer />
      <MobileFooter />
    </Stack>
  );
}
