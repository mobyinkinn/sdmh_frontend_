"use client"
import { Stack } from "@mui/material";
import Navbar from "../../navbar/Nav";
import Footer from "../../footer/Footer";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import DetailsHero from "./components/DetailsHero";
import Procedure from "./components/Procedures";
import Doctors from "./components/Doctors";
import { useParams, useRouter } from "next/navigation";
import { useDepartmentById } from "@/app/components/admin/departments/parts/useDepartment";

export default function CoeDetails() {
  const {name} = useParams();
  const { data, isLoading, error } = useDepartmentById(name);
 
  return (
    <Stack>
      <Navbar />
      <ContainerMain bgColor={"#FBF6EE"}>
        <DetailsHero name={name} data={data} isLoading ={isLoading}/>
        <Procedure />
        <Doctors />
      </ContainerMain>

      <Footer />
    </Stack>
  );
}
