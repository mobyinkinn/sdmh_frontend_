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
import { useRouter } from "next/navigation";

export default function AllDoctors() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 51;
  const { data, isLoading } = useDoctors();
  const { data: departments, isLoading: isLoadingDepartments } =
    useDepartment();
    const router = useRouter();
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
        pl={{lg:"36px", sm:"0px"}}
      >
        <Typography fontSize={{ lg: "2rem", sm: "1rem" }} color="#486c9c">
          Search By:{" "}
        </Typography>

        <Stack direction={"row"} gap={"10px"}>
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
              width={{ lg: "300px", sm: "150px" }}
              padding={{ lg: "15px", sm: "8px" }}
              sx={{
                border: "1px solid #005900",
                borderRadius: "20px",
                backgroundColor: "transparent",
                color: "black",
                cursor: "pointer",
              }}
            >
              <Typography
              color="grey"
                fontSize={{ lg: "1.5rem", sm: "16px" }}
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
              <>
                <Stack
                  display={{ lg: "flex", sm: "none" }}
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
                <Stack
                display={{lg:"none", sm:"flex"}}
                  position="absolute"
                  top="111%"
                  right="-17%"
                  bgcolor="white"
                  padding={2}
                  boxShadow={2}
                  zIndex={1000}
                  borderRadius="5px"
                  sx={{
                    width: "max-content",
                    maxHeight: { xs: "300px", md: "32rem" }, // max height for scroll only on mobile
                    overflowY: "auto",
                    flexDirection: { xs: "column", md: "row" }, // single column on mobile
                    flexWrap: { xs: "nowrap", md: "wrap" }, // no wrapping on mobile
                    columnGap: "2.5rem",
                  }}
                >
                  {filteredDepartments.map((dept) => (
                    <Box
                      key={dept._id}
                      p={1}
                      borderBottom="1px solid #eee"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setDepartment(dept.name);
                        setDepartmentId(dept._id);
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
              </>
            )}
          </Box>
        </Stack>
        <DarkGreenButton
          bgColor="#379237"
          padding="7px 28px"
          borderRadius="100px"
          onClick={() => {
            setSearchTerm("");
            setDepartment("Search Department");
            setDepartmentId(null);
            setPage(1);
          }}
        >
          Show All
        </DarkGreenButton>
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
