"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Box, Pagination, Stack, Typography } from "@mui/material";
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
import { SearchInput, SearchInputFordoctor } from "@/app/styledComponents/admin/Inputs";
import { SlArrowRight } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

export default function AllDoctors() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 51;
  const { data, isLoading } = useDoctors();
  const { data: departments, isLoading: isLoadingDepartments } =
    useDepartment();
    
  const [doctor, setDoctor] = useState("Search Doctor");
  const [department, setDepartment] = useState("Search Department");
  const [searchTerm, setSearchTerm] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [departmentId, setDepartmentId] = useState(null);
const filteredDoct = (
  data?.filter((doc) => {
    const isActive = doc.status !== false;
    const matchesSearch = searchTerm
      ? doc.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const matchesDept = departmentId ? doc.department === departmentId : true;

    return isActive && matchesSearch && matchesDept;
  }) || []
).sort((a, b) => a.order - b.order);

 const filteredDepartments = (departments || [])
   .filter((el) => el.status === true)
   .sort((a, b) => a.name.localeCompare(b.name));
  const totalPages = Math.ceil(filteredDoct.length / itemsPerPage);

  // Paginated data
  const paginatedDoctors = filteredDoct.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Search states


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);


  // Sort filtered doctors if search is active
  const sortedFilteredDoctors = filteredDoct
    ? [...filteredDoct].sort((a, b) => a.order - b.order)
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
        alignItems={"center"}
        pl={"36px"}
      >
        
        <Typography fontSize={"2rem"} color="#486c9c">
          Search By:{" "}
        </Typography>
        <Box position="relative">
          <Stack direction="row">
            <SearchInputFordoctor
              placeholder="Doctor's Name"
              borderRadius="10px 0 0 10px"
              border="1px solid #005900"
              value={searchTerm}
              backgroundColor="transparent"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Stack>
          {searchTerm.length >= 2 && (
            <Stack
              position="absolute"
              top="100%"
              left={0}
              bgcolor="white"
              padding={3}
              maxHeight="32rem"
              overflowY="auto"
              boxShadow={1}
              zIndex={1000}
              borderRadius="5px"
              flexWrap={"wrap"}
              columnGap={2}
              sx={{
                opacity: searchTerm ? 1 : 0,
                transform: searchTerm ? "translateY(0)" : "translateY(-10px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                pointerEvents: searchTerm ? "auto" : "none",
                width: "max-content",
                minWidth: "100%",
                maxWidth: "max-content",
              }}
            >
              {filteredDoct.map((doc) => (
                <Box
                  key={doc._id}
                  p={1}
                  borderBottom="1px solid #ccc"
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    router.push(`/find-a-doctor/${doc._id}`);
                    setSearchTerm("");
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      width: "200px",
                      color: "black",
                      fontSize: "0.9rem",
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                      "&:hover": {
                        color: "green",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {doc.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        
        <Box
          position="relative"
          sx={{ width: "fit-content" }}
          onMouseEnter={() => setOpenDropdown(true)}
          onMouseLeave={() => setOpenDropdown(false)}
        >
          {/* Trigger Button */}
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
              width: "300px",
              padding: "15px",
              border: "1px solid #005900",
              borderRadius: "20px",
              backgroundColor: "transparent",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                flexGrow: 1,
              }}
            >
              {department}
            </Typography>
            <IoIosArrowDown
              style={{
                transition: "transform 0.3s ease",
                transform: openDropdown ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </Stack>

          {/* Dropdown List */}
          {openDropdown && (
            <Stack
              position="absolute"
              top="111%"
              right="-125%"
              bgcolor="white"
              padding={2}
              flexWrap="wrap"
              maxHeight="32rem"
              columnGap="2.5rem"
              overflowY="auto"
              boxShadow={2}
              zIndex={1000}
              borderRadius="15px"
              sx={{
                width: "max-content",
                maxHeight: "32rem",
              }}
            >
              {filteredDepartments.map((dept) => (
                <Box
                  key={dept._id}
                  p={1}
                  borderBottom="1px solid #eee"
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setDepartment(dept.name); // for label
                    setDepartmentId(dept._id); // NEW: used for filtering
                    setOpenDropdown(false);
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      "&:hover": { color: "green" },
                      maxWidth: "250px",
                    }}
                  >
                    {dept.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          )}
        </Box>
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
