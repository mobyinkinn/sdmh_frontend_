"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "./assets/Abode.png";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import {
  ButtonSmallOutlineWithoutHover,
  DarkGreenButton,
} from "@/app/styledComponents/frontend/Buttons";
import { useNotices } from "@/app/components/admin/academic_notices/useNotices";
import Spinner from "@/app/components/ui/Spinner";
import { SearchInputHero } from "@/app/styledComponents/frontend/Inputs";
import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";

const Notices = () => {
  const { data, isLoading } = useNotices();
  const filteredData = data?.filter((el) => el.status === true);
  const { data: departments } = useDepartment();
  const [notice, setNotice] = useState("Search Notice");
  const [department, setDepartment] = useState("Search Department");
  const [year, setYear] = useState("Search Year");
  const [filteredNotices, setFilteredNotices] = useState(null);

  function clearNotice() {
    setNotice("");
  }
  function unclearNotice() {
    setNotice("Search Notice");
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

  function searchNotice(e) {
    let searchNotice = e.target.textContent.toLowerCase();

    const newFilteredNotices = data.filter((el) =>
      el.name.toLowerCase().startsWith(searchNotice)
    );
    setFilteredNotices(newFilteredNotices);
  }

  function searchYear(e) {
    let searchYear = parseInt(e.target.textContent);

    const newFilteredNotices = data.filter((el) => el.year === searchYear);
    setFilteredNotices(newFilteredNotices);
  }

  function searchDepartment(e) {
    let searchDepartment = e.target.textContent.toLowerCase();

    const searchedDepartment = departments.filter((el) =>
      el.name.toLowerCase().startsWith(searchDepartment)
    );

    const newFilteredNotices = data.filter((el) => {
      for (let i = 0; i < searchedDepartment.length; i++) {
        if (el.department === searchedDepartment[i]?._id) {
          return el;
        }
      }
    });
    setFilteredNotices(newFilteredNotices);
  }

  if (isLoading) return <Spinner />;

  return (
    <Stack bgcolor={"#F9F9F9"}>
      <Stack
        direction={"row"}
        gap={{ md: "20px", xs: "10px" }}
        flexWrap={"wrap"}
        marginTop={"30px"}
        marginLeft={"80px"}
      >
        <DarkGreenButton
          bgColor="#379237"
          borderRadius="100px"
          onClick={() => setFilteredNotices(null)}
        >
          All
        </DarkGreenButton>
        <SearchInputHero
          contentEditable
          suppressContentEditableWarning={true}
          width={"300px"}
          color="black"
          bgColor={"transparent"}
          onClick={clearNotice}
          onBlur={unclearNotice}
          onInput={(e) => searchNotice(e)}
        >
          {notice}
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
        direction={{ xs: "column", md: "row" }}
        justifyContent={"center"}
        flexWrap={{ xs: "nowrap", md: "wrap" }}
        p={4}
        gap={3}
      >
        {(filteredNotices?.length > 0 ? filteredNotices : filteredData)?.map(
          (d, i) => (
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
                  target="_blank"
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
          )
        )}
      </Stack>
    </Stack>
  );
};

export default Notices;
