"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Stack } from "@mui/material";
import {
  DarkGreenButton,
  DarkGreenButtonSmall,
} from "@/app/styledComponents/frontend/Buttons";
import { SearchInput } from "@/app/styledComponents/admin/Inputs";
import { SearchInputHero } from "@/app/styledComponents/frontend/Inputs";
import { useDoctors } from "@/app/components/admin/doctors/parts/useDoctor";
import Spinner from "@/app/components/ui/Spinner";
import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";
import { useState } from "react";
import Doctors from "./Doctors";

export default function AllDoctors() {
  const { data, isLoading } = useDoctors();
  const { data: departments, isLoading: isLoadingDepartments } =
    useDepartment();
  const [doctor, setDoctor] = useState("Search Doctor");
  const [department, setDepartment] = useState("Search Department");
  const [filteredDoctors, setFilteredDoctors] = useState(null);

  function clearDoctor() {
    setDoctor("");
  }
  function unclearDoctor() {
    setDoctor("Search Doctor");
  }
  function clearDepartment() {
    setDepartment("");
  }
  function unclearDepartment() {
    setDepartment("Search Department");
  }

  if (isLoading || isLoadingDepartments) return <Spinner />;

  function searchDoctor(e) {
    let searchDoctor = e.target.textContent;

    const newFilteredDoctors = data.filter((el) =>
      el.name.startsWith(searchDoctor)
    );
    setFilteredDoctors(newFilteredDoctors);
  }

  function searchDepartment(e) {
    let searchDepartment = e.target.textContent;

    const searchedDepartment = departments.filter((el) =>
      el.name.startsWith(searchDepartment)
    );

    const newFilteredDoctors = data.filter((el) => {
      for (let i = 0; i < searchDepartment.length; i++) {
        if (el.department === searchedDepartment[i]?._id) {
          return el;
        }
      }
    });
    setFilteredDoctors(newFilteredDoctors);
  }

  return (
    <ContainerMain bgColor={"#FBF6EE"}>
      <Stack
        direction={"row"}
        gap={{ md: "20px", xs: "10px" }}
        flexWrap={"wrap"}
      >
        <DarkGreenButton
          bgColor="#379237"
          borderRadius="100px"
          onClick={() => setFilteredDoctors(null)}
        >
          All
        </DarkGreenButton>
        <SearchInputHero
          contentEditable
          suppressContentEditableWarning={true}
          width={"300px"}
          color="black"
          bgColor={"transparent"}
          onClick={clearDoctor}
          onBlur={unclearDoctor}
          onInput={(e) => searchDoctor(e)}
        >
          {doctor}
        </SearchInputHero>
        <SearchInputHero
          width={"300px"}
          color="black"
          bgColor={"transparent"}
          contentEditable
          suppressContentEditableWarning={true}
          onClick={clearDepartment}
          onBlur={unclearDepartment}
          onInput={(e) => searchDepartment(e)}
        >
          {department}
        </SearchInputHero>
      </Stack>
      <Doctors data={filteredDoctors || data} departments={departments} />
    </ContainerMain>
  );
}
