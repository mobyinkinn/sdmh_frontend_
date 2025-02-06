"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import logo from "./assets/logo.png";
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
const navLinks = [
  { id: 0, name: "About Us", link: "about" },
  { id: 0, name: "Center Of Excellence", link: "center-of-excellence" },
  { id: 0, name: "Patient Care & Service", link: "patients" },
  { id: 0, name: "Appointment", link: "appointment" },
  { id: 0, name: "Academics", link: "academics/academics-deanery" },
  { id: 0, name: "Donation", link: "support-a-cause" },
  { id: 0, name: "Contact Us" },
  { id: 0, name: "Nursing college" },
];

//          <div id="google_translate_element" style={{ margin: "10px" }}></div>

export default function Navbar() {
  const { data: navData, isLoading, error } = useNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Navbar: {error.message}</div>;

  return (
    <>
      <Stack>
        <Stack
          direction={"row"}
          justifyContent={{ xs: "end", smm: "end", lg: "space-between" }}
          alignItems={{ xs: "end", smm: "end", lg: "center" }}
          // padding={"10px 100px"}
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
            <FaFacebookF />
            <FaYoutube />
            <FaXTwitter />
            <AiFillInstagram />
          </Stack>
          <Stack direction={"row"} gap={"25px"}>
            <Typography sx={{ display: { sm: "none", lg: "flex" } }}>
              Lab Reports
            </Typography>
            <Box
              display={"flex"}
              direction={"row"}
              gap={"25px"}
              justifyContent={{ xs: "flex-end", sm: "flex-start" }}
            >
              <Typography>Downloads</Typography>
              <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
                <div
                  id="google_translate_element"
                  style={{ backgroundColor: "black" }}
                ></div>
                {/* <IoIosArrowDown /> */}
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingX={{ xs: "40px", smm: "60px", lg: "100px" }}
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
                width: { xs: "102px", smm: "150px", md: "195px" },
                height: { xs: "38px", smm: "55px", md: "73px" },
              }}
            />
          </a>
          <Stack
            direction={"row"}
            gap={"20px"}
            sx={{ display: { xs: "none", lg: "flex" } }}
          >
            <Stack direction={"row"}>
              <SearchInput
                placeholder="Search Doctor"
                borderRadius={"10px 0 0 10px"}
              />
              <DarkGreenButtonSmall borderRadius={"0 10px 10px 0"}>
                <SlArrowRight style={{ width: "15px", height: "15px" }} />
              </DarkGreenButtonSmall>
            </Stack>
            <DarkGreenButtonSmallOutline>
              <span style={{ color: "red" }}>Emergency Number</span>
              <FaPhone style={{ width: "15px", height: "15px" }} /> 0141 352
              4444
            </DarkGreenButtonSmallOutline>
            <DarkGreenButtonSmallOutline>
              <IoIosMail style={{ width: "20px", height: "20px" }} />{" "}
              info@sdmh.in
            </DarkGreenButtonSmallOutline>
          </Stack>
          <IconButton
            size="large"
            sx={{ display: { xs: "flex", lg: "none" } }}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
        {isMenuOpen && (
          <Box>
            <Stack
              direction={"column"}
              padding={"25px"}
              justifyContent={"center"}
              gap={"15px"}
              sx={{ display: { lg: "none" } }}
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
                    <Typography>{el.name}</Typography>
                    {el.items.length > 0 && (
                      <IoIosArrowDown
                        style={{
                          transform:
                            openDropdown === i
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    )}
                  </Stack>
                  {el.items.length > 0 && (
                    <Stack
                      position="absolute"
                      bgcolor="white"
                      boxShadow={3}
                      padding={1}
                      width={"10rem"}
                      sx={{
                        opacity: openDropdown === i ? 1 : 0,
                        transform:
                          openDropdown === i
                            ? "translateY(0)"
                            : "translateY(-10px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                        pointerEvents: openDropdown === i ? "auto" : "none",
                      }}
                    >
                      {el.items.map((subItem) => (
                        <a
                          key={subItem._id}
                          href={subItem.itemLink}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <Typography>{subItem.itemName}</Typography>
                        </a>
                      ))}
                    </Stack>
                  )}
                </Box>
              ))}
            </Stack>
            <Stack
              direction={"column"}
              padding={"25px"}
              justifyContent={"center"}
              gap={"15px"}
              sx={{ display: { lg: "none" }, mt: "40px", mb: "40px" }}
            >
              <Stack
                direction={"row"}
                spacing={1}
                sx={{ color: "#005900", alignItems: "center" }}
              >
                <SearchIcon style={{ width: "20px", height: "20px" }} />
                <Typography>Search Doctor</Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={1}
                sx={{ color: "#005900", alignItems: "center" }}
              >
                <IoIosMail style={{ width: "20px", height: "20px" }} />
                <Typography>info@sdmh.in</Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={1}
                sx={{ color: "#005900", alignItems: "center" }}
              >
                <FaPhone style={{ width: "15px", height: "15px" }} />
                <Typography>0141 352 4444</Typography>
              </Stack>
              <DarkGreenButton
                bgColor={"#476C9B"}
                borderRadius={"100px"}
                style={{ padding: "10px 15px" }}
              >
                Lab Reports
              </DarkGreenButton>
            </Stack>
          </Box>
        )}
        <Stack
          direction={"row"}
          padding={{ lg: "15px" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            gap={"25px"}
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
                  <Typography>{el.name}</Typography>
                  {el.items.length > 0 && (
                    <IoIosArrowDown
                      style={{
                        transform:
                          openDropdown === i
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  )}
                </Stack>
                {el.items.length > 0 && (
                  <Stack
                    position="absolute"
                    bgcolor="white"
                    boxShadow={3}
                    padding={1}
                    width={"10rem"}
                    sx={{
                      opacity: openDropdown === i ? 1 : 0,
                      transform:
                        openDropdown === i
                          ? "translateY(0)"
                          : "translateY(-10px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      pointerEvents: openDropdown === i ? "auto" : "none",
                    }}
                  >
                    {el.items.map((subItem) => (
                      <a
                        key={subItem._id}
                        href={subItem.itemLink}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography>{subItem.itemName}</Typography>
                      </a>
                    ))}
                  </Stack>
                )}
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
