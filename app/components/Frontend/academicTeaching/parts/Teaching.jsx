"use client";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "./assets/Abode.png";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import {
  ButtonSmallOutlineWithoutHover,
  DarkGreenButton,
} from "@/app/styledComponents/frontend/Buttons";
import { useTeachings } from "@/app/components/admin/academic_teachings/useTeachings";
import Spinner from "@/app/components/ui/Spinner";
import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";
import { SearchInputHero } from "@/app/styledComponents/frontend/Inputs";
const Teaching = () => {
  const { data, isLoading, error } = useTeachings();
  const filteredData = data?.filter((el, i) => el.status === true);
  const { data: departments } = useDepartment();
  const [teaching, setTeaching] = useState("Search Teaching");
  const [department, setDepartment] = useState("Search Department");
  const [year, setYear] = useState("Search Year");
  const [filteredTeachings, setFilteredTeachings] = useState(null);

  function clearTeaching() {
    setTeaching("");
  }
  function unclearTeaching() {
    setTeaching("Search Teaching");
  }
  function clearDepartment() {
    setDepartment("");
  }
  function unclearDepartment() {
    setDepartment("Search Department");
  }
  function clearYear() {
    setYear("");
  }
  function unclearYear() {
    setYear("Search Year");
  }

  function searchTeaching(e) {
    let searchTeaching = e.target.textContent.toLowerCase();

    const newFilteredTeachings = data.filter((el) =>
      el.name.toLowerCase().startsWith(searchTeaching)
    );
    setFilteredTeachings(newFilteredTeachings);
  }

  function searchYear(e) {
    let searchYear = parseInt(e.target.textContent);

    const newFilteredTeachings = data.filter((el) => el.year === searchYear);
    setFilteredTeachings(newFilteredTeachings);
  }

  function searchDepartment(e) {
    let searchDepartment = e.target.textContent.toLowerCase();

    const searchedDepartment = departments.filter((el) =>
      el.name.toLowerCase().startsWith(searchDepartment)
    );

    const newFilteredTeachings = data.filter((el) => {
      for (let i = 0; i < searchedDepartment.length; i++) {
        if (el.department === searchedDepartment[i]?._id) {
          return el;
        }
      }
    });
    setFilteredTeachings(newFilteredTeachings);
  }

  if (isLoading) return <Spinner />;

  console.log("data", data);
  return (
    <Stack bgcolor={"#F9F9F9"}>
      <Stack
        direction={"row"}
        gap={{ md: "20px", xs: "10px" }}
        flexWrap={"wrap"}
        p={4}
      >
        <DarkGreenButton
          bgColor="#379237"
          borderRadius="100px"
          onClick={() => setFilteredTeachings(null)}
        >
          All
        </DarkGreenButton>
        <SearchInputHero
          contentEditable
          suppressContentEditableWarning={true}
          width={"300px"}
          color="black"
          bgColor={"transparent"}
          onClick={clearTeaching}
          onBlur={unclearTeaching}
          onInput={(e) => searchTeaching(e)}
        >
          {teaching}
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
        <SearchInputHero
          width={"300px"}
          color="black"
          bgColor={"transparent"}
          contentEditable
          suppressContentEditableWarning={true}
          onClick={clearYear}
          onBlur={unclearYear}
          onInput={(e) => searchYear(e)}
        >
          {year}
        </SearchInputHero>
      </Stack>
      <Stack
        direction={{ xs: "columnn", md: "row" }}
        justifyContent={"center"}
        flexWrap={{ xs: "nowrap", md: "wrap" }}
        p={4}
        gap={3}
      >
        {(filteredTeachings?.length > 0
          ? filteredTeachings
          : filteredData
        )?.map((d, i) => (
          <Stack
            key={i}
            width={{ xs: "100%", md: "43%", lg: "30%" }}
            bgcolor={"white"}
            borderRadius={"20px"}
            alignItems={"center"}
            p={5}
            gap={1}
          >
            <Box width={"30%"}>
              <Image
                src={logo}
                alt="Sky Textiles"
                style={{ cursor: "pointer", width: "100%", height: "80px" }}
              />
            </Box>
            <ParaNormal style={{ textAlign: "center" }}>{d.name}</ParaNormal>
            <Stack direction={"row"} gap={2}>
              <a
                href={d.file}
                target="blank"
                style={{ textDecoration: "none" }}
              >
                <ButtonSmallOutlineWithoutHover
                  style={{
                    border: "1px solid lightgrey",
                    fontSize: "16px",
                  }}
                >
                  View
                </ButtonSmallOutlineWithoutHover>
              </a>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Teaching;
