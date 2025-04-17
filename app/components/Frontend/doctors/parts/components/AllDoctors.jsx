"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Pagination, Stack } from "@mui/material";
import {
  DarkGreenButton,
  DarkGreenButtonSmall,
} from "@/app/styledComponents/frontend/Buttons";
import { SearchInputHero } from "@/app/styledComponents/frontend/Inputs";
import { useDoctors } from "@/app/components/admin/doctors/parts/useDoctor";
import Spinner from "@/app/components/ui/Spinner";
import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";
import { useEffect, useState } from "react";
import Doctors from "./Doctors";

export default function AllDoctors() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 51;
  const { data, isLoading } = useDoctors();
  const { data: departments, isLoading: isLoadingDepartments } =
    useDepartment();

  // Filter only active doctors and sort them by order
  const filteredDoc = (data?.filter((doc) => doc.status !== false) || []).sort(
    (a, b) => a.order - b.order
  );
  const totalPages = Math.ceil(filteredDoc.length / itemsPerPage);

  // Paginated data
  const paginatedDoctors = filteredDoc.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Search states
  const [doctor, setDoctor] = useState("Search Doctor");
  const [department, setDepartment] = useState("Search Department");
  const [filteredDoctors, setFilteredDoctors] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

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

  function searchDoctor(e) {
    let searchDoctor = e.target.textContent;
    const newFilteredDoctors = filteredDoc.filter((el) =>
      el.name.toLowerCase().startsWith(searchDoctor.toLowerCase())
    );
    setFilteredDoctors(newFilteredDoctors);
    setPage(1); // Reset pagination on search
  }

  function searchDepartment(e) {
    let searchDepartment = e.target.textContent.toLowerCase();
    const newFilteredDoctors = filteredDoc.filter((el) =>
      el.department.toLowerCase().startsWith(searchDepartment)
    );

    setFilteredDoctors(newFilteredDoctors);
    setPage(1); // Reset pagination on search
  }

  // Sort filtered doctors if search is active
  const sortedFilteredDoctors = filteredDoctors
    ? [...filteredDoctors].sort((a, b) => a.order - b.order)
    : null;

  const doctorsToShow = sortedFilteredDoctors
    ? sortedFilteredDoctors.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
      )
    : paginatedDoctors;

  const filteredTotalPages = sortedFilteredDoctors
    ? Math.ceil(sortedFilteredDoctors.length / itemsPerPage)
    : totalPages;

  if (isLoading || isLoadingDepartments) return <Spinner />;

  return (
    <ContainerMain bgColor={"#D8E0EB"}>
      <Stack
        direction={"row"}
        gap={{ md: "20px", xs: "10px" }}
        flexWrap={"wrap"}
      >
        <DarkGreenButton
          bgColor="#379237"
          borderRadius="100px"
          onClick={() => {
            setFilteredDoctors(null);
            setPage(1);
          }}
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

      <Doctors data={doctorsToShow} departments={departments} />

      {/* Pagination */}
      <Stack direction="row" justifyContent="center" marginTop={4}>
        <Pagination
          count={filteredTotalPages || 1}
          page={page}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          size="large"
        />
      </Stack>
    </ContainerMain>
  );
}
