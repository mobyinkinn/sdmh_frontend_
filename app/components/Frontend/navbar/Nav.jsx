"use client";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import logo from "./assets/logo.png";
import nabh from "./assets/nabh.png";
import Image from "next/image";
import { SearchInput } from "@/app/styledComponents/frontend/Inputs";
import {
  ButtonMediumOutline,
  DarkGreenButton,
  DarkGreenButtonSmall,
  DarkGreenButtonSmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavbar } from "../../admin/navbar/useNavbar";
import Spinner from "../../ui/Spinner";
import { useDepartment } from "../../admin/departments/parts/useDepartment";
import { useDoctors } from "../../admin/doctors/parts/useDoctor";
import { useRouter } from "next/navigation";
import Modal from "../../ui/Modal";

const navLinks = [
  { id: 0, name: "About Us", link: "about" },
  { id: 0, name: "Centre Of Excellence", link: "centre-of-excellence" },
  { id: 0, name: "Patient Care & Service", link: "patients" },
  { id: 0, name: "Appointment", link: "appointment" },
  { id: 0, name: "Academics", link: "academics/academics-deanery" },
  { id: 0, name: "Donation", link: "support-a-cause" },
  { id: 0, name: "Contact Us", link: "contact-us" },
  { id: 0, name: "Nursing college" },
];

export default function Navbar() {
  const router = useRouter();
  const { data: navData, isLoading, error } = useNavbar();
  const { data: departmentData, isLoading: isDepartmentLoading } =
    useDepartment();
  const { data: doctorsData, isLoading: isLoadingDoctors } = useDoctors();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  // State to capture the search input for doctor filtering
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Prevent duplicate script loading
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        if (!window.googleTranslateInstance) {
          window.googleTranslateInstance =
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages:
                  "as,bn,brx,doi,gu,hi,kn,ks,gom,mai,ml,mni,mr,ne,or,pa,sa,sat,sd,ta,te,ur",
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              },
              "google_translate_element"
            );
        }
      };
    }
  }, []);

  const filteredData =
    departmentData
      ?.filter((el) => el.status === true)
      .sort((a, b) => a.name.localeCompare(b.name)) || [];

  if (isLoading || isDepartmentLoading || isLoadingDoctors) return <Spinner />;
  if (error) return <div>Error loading Navbar: {error.message}</div>;

  const filteredDoctors =
    searchTerm.length >= 2
      ? doctorsData.filter((doc) =>
          doc.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  return (
    <Modal>
      <Stack
        direction={"row"}
        justifyContent={{ xs: "end", smm: "end", lg: "space-between" }}
        alignItems={{ xs: "end", smm: "end", lg: "center" }}
        backgroundColor={"#005900"}
        color={"white"}
        paddingX={{ xs: "40px", smm: "60px", lg: "100px" }}
        paddingY={"10px"}
      >
        <Stack
          direction={"row"}
          gap={"10px"}
          sx={{ display: { sm: "none", lg: "flex" } }}
        >
          <a
            href={"https://www.facebook.com/santokbadurlabhji?mibextid=ZbWKwL"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FaFacebookF style={{ color: "white" }} />
          </a>
          <a
            href={"https://youtube.com/@SDMHCARE"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FaYoutube style={{ color: "white" }} />
          </a>
          <a
            href={
              "https://in.linkedin.com/company/santokba-durlabhji-memorial-hospital-jaipur"
            }
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FaLinkedinIn style={{ color: "white" }} />
          </a>
          <a
            href={"https://www.instagram.com/sdmhjaipur?igsh=OHVvMGFhd3hwMjBy"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <AiFillInstagram style={{ color: "white" }} />
          </a>
        </Stack>
        <Stack direction={"row"} gap={"25px"}>
          <Typography
            sx={{
              display: { sm: "none", lg: "flex" },
              "&:hover": {
                // color: "black",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              router.push(`/second-opinion`);
            }}
          >
            Second Opinion
          </Typography>
          <Typography sx={{ display: { sm: "none", lg: "flex" } }}>
            Lab Reports
          </Typography>
          <Box
            display={"flex"}
            direction={"row"}
            gap={"25px"}
            justifyContent={{ xs: "flex-end", sm: "flex-start" }}
          >
            <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
              <div
                id="google_translate_element"
                style={{ backgroundColor: "black" }}
              ></div>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingX={{ xs: "40px", smm: "60px", lg: "20px", xl: "100px" }}
        paddingY={"10px"}
        sx={{
          borderBottom: "1.5px solid #5F5F5F",
        }}
      >
        <a href="/" style={{ textDecoration: "none", color: "black" }}>
          <Box
            component="img"
            src={logo.src}
            alt=""
            sx={{
              width: {
                xs: "102px",
                smm: "150px",
                md: "195px",
                lg: "170px",
                xl: "185px",
              },
              height: {
                xs: "38px",
                smm: "55px",
                md: "73px",
                lg: "65px",
                xl: "84px",
              },
            }}
          />
        </a>
        <Stack
          direction={"row"}
          gap={"20px"}
          sx={{ display: { xs: "none", lg: "flex" } }}
          alignItems={"center"}
        >
          <Box position="relative">
            <Stack direction="row">
              <SearchInput
                placeholder="Search Doctor"
                borderRadius="10px 0 0 10px"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <DarkGreenButtonSmall borderRadius="0 10px 10px 0">
                <SlArrowRight style={{ width: "15px", height: "15px" }} />
              </DarkGreenButtonSmall>
            </Stack>

            {/** Search Doctor Dropdown */}
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
                {filteredDoctors.map((doc) => (
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

          <DarkGreenButtonSmallOutline padding="5px 5px">
            <span style={{ color: "red" }}>Emergency Number</span>
            <FaPhone style={{ width: "15px", height: "25px" }} /> 0141 352 4444
          </DarkGreenButtonSmallOutline>
          <DarkGreenButtonSmallOutline padding="5px 5px">
            <IoIosMail style={{ width: "20px", height: "25px" }} /> info@sdmh.in
          </DarkGreenButtonSmallOutline>
          <Box
            component="img"
            src={nabh.src}
            alt=""
            sx={{
              width: { xs: "102px", smm: "150px", md: "47px" },
              height: { xs: "38px", smm: "55px", md: "47px" },
            }}
          />
          <Box
            component="img"
            src={nabh.src}
            alt=""
            sx={{
              width: { xs: "102px", smm: "150px", md: "47px" },
              height: { xs: "38px", smm: "55px", md: "47px" },
            }}
          />
        </Stack>
        <IconButton
          size="large"
          sx={{ display: { xs: "flex", lg: "none" } }}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <MenuIcon />
        </IconButton>
      </Stack>
      {/* Mobile Navbar */}
      {isMenuOpen && (
        <Stack
          direction="column"
          px={4}
          py={2}
          gap={2}
          sx={{ display: { lg: "none" } }}
        >
          {navData.map((el, i) => (
            <Box
              key={i}
              onMouseEnter={() => setOpenDropdown(i)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Stack
                direction="row"
                alignItems="center"
                sx={{ cursor: "pointer" }}
              >
                {el.name === "Appointment" ? (
                  <Modal.Open opens="appointment">
                    <Typography
                      sx={{ "&:hover": { color: "green", cursor: "pointer" } }}
                    >
                      {el.name}
                    </Typography>
                  </Modal.Open>
                ) : (
                  <a
                    key={el._id}
                    href={el.link}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography
                      sx={{ "&:hover": { color: "green", cursor: "pointer" } }}
                    >
                      {el.name}
                    </Typography>
                  </a>
                )}
                {(el.items.length > 0 ||
                  el.name === "Centre Of Excellence") && (
                  <IoIosArrowDown
                    style={{
                      transform:
                        openDropdown === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                )}
              </Stack>
              {(el.items.length > 0 || el.name === "Centre Of Excellence") &&
                openDropdown === i && (
                  <Stack
                    bgcolor="white"
                    boxShadow={1}
                    p={1}
                    width={"17.5rem"}
                    spacing={0.5}
                  >
                    {el.name === "Centre Of Excellence"
                      ? filteredData.map((dept) => (
                          <a
                            key={dept._id}
                            href={`/centre-of-excellence/${dept._id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <Typography
                              sx={{
                                "&:hover": {
                                  color: "green",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              {dept.name}
                            </Typography>
                          </a>
                        ))
                      : el.items.map((subItem) => (
                          <a
                            key={subItem._id}
                            href={subItem.itemLink}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <Typography
                              sx={{
                                "&:hover": {
                                  color: "green",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              {subItem.itemName}
                            </Typography>
                          </a>
                        ))}
                  </Stack>
                )}
            </Box>
          ))}
        </Stack>
      )}

      {/* Desktop Navbar */}
      <Stack
        direction="row"
        padding={{ lg: "15px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="row"
          gap="25px"
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          {navData.map((el, i) => (
            <Box
              key={i}
              position="relative"
              onMouseEnter={() => setOpenDropdown(i)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Stack
                direction="row"
                alignItems="center"
                sx={{ cursor: "pointer" }}
              >
                {el.name === "Appointment" ? (
                  <Modal.Open opens="appointment">
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", xl: "1rem" },
                        "&:hover": { color: "green", cursor: "pointer" },
                      }}
                    >
                      {el.name}
                    </Typography>
                  </Modal.Open>
                ) : (
                  <a
                    key={el._id}
                    href={el.link}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", xl: "1rem" },
                        "&:hover": { color: "green", cursor: "pointer" },
                      }}
                    >
                      {el.name}
                    </Typography>
                  </a>
                )}
                {(el.items.length > 0 ||
                  el.name === "Centre Of Excellence") && (
                  <IoIosArrowDown
                    style={{
                      transform:
                        openDropdown === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                )}
              </Stack>

              {(el.items.length > 0 || el.name === "Centre Of Excellence") && (
                <Stack
                  position="absolute"
                  bgcolor="white"
                  padding={3}
                  width="max-content"
                  maxHeight="32rem"
                  flexWrap="wrap"
                  columnGap="2.5rem"
                  rowGap="0.6rem"
                  sx={{
                    zIndex: 10,
                    opacity: openDropdown === i ? 1 : 0,
                    transform:
                      openDropdown === i
                        ? "translateY(0)"
                        : "translateY(-10px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: openDropdown === i ? "auto" : "none",
                    borderRadius: "5px",
                  }}
                >
                  {el.name === "Centre Of Excellence"
                    ? filteredData.map((department) => (
                        <a
                          key={department._id}
                          href={`/centre-of-excellence/${department._id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.9rem",
                              maxWidth: "200px",
                              wordWrap: "break-word",
                              "&:hover": { color: "green", cursor: "pointer" },
                            }}
                          >
                            {department.name}
                          </Typography>
                        </a>
                      ))
                    : el.items.map((subItem) => (
                        <a
                          key={subItem._id}
                          href={subItem.itemLink}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.9rem",
                              "&:hover": { color: "green", cursor: "pointer" },
                            }}
                          >
                            {subItem.itemName}
                          </Typography>
                        </a>
                      ))}
                </Stack>
              )}
            </Box>
          ))}
        </Stack>
      </Stack>

      <Modal.Window name="appointment">
        <div>
          <Typography textAlign={"center"} fontSize={"2rem"} color="green">
            Book an Appointment
          </Typography>
          <Typography textAlign={"center"}>
            Appointments can currently be booked by calling 7073111911 between
            7:00 AM and 4:00 PM. This service allows patients or their
            attendants to choose a preferred time slot for consultation with the
            doctor.
          </Typography>
          <Typography textAlign={"center"} marginTop={2}>
            <b>Please note:</b> Appointment slots are subject to availability.
            If a preferred slot is not available, patients will be attended
            through the regular OPD system.
          </Typography>
        </div>
      </Modal.Window>
    </Modal>
  );
}
