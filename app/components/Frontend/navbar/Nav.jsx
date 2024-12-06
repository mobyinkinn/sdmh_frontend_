import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Stack, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import logo from "./assets/logo.png";
import Image from "next/image";
import { SearchInput } from "@/app/styledComponents/frontend/Inputs";
import {
  DarkGreenButtonSmall,
  DarkGreenButtonSmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";

const navLinks = [
  { id: 0, name: "About Us", link:"about" },
  { id: 0, name: "Center Of Excellence", link:"center-of-excellence"},
  { id: 0, name: "Patient Care & Service", link:"patients" },
  { id: 0, name: "Appointment" },
  { id: 0, name: "Academics",link:"academics/academics-deanery" },
  { id: 0, name: "Donation", link:"support-a-cause" },
  { id: 0, name: "Contact Us" },
  { id: 0, name: "Nursing college" },
];

export default function Navbar() {
  return (
    <>
      <Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"10px 100px"}
          backgroundColor={"#005900"}
          color={"white"}
        >
          <Stack direction={"row"} gap={"10px"}>
            <FaFacebookF />
            <FaYoutube />
            <FaXTwitter />
            <AiFillInstagram />
          </Stack>
          <Stack direction={"row"} gap={"25px"}>
            <Typography>Lab Reports</Typography>
            <Typography>Downloads</Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
              <Typography>Select Language</Typography> <IoIosArrowDown />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"10px 100px"}
          sx={{
            borderBottom: "1.5px solid #5F5F5F",
          }}
        >
          <a href="/" style={{textDecoration:"none", color:"black"}}>
            <Image src={logo} alt="" height={73} width={195} />
          </a>
          <Stack direction={"row"} gap={"20px"}>
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
              <span style={{color:"red"}}>Emergency Number</span>
              <FaPhone style={{ width: "15px", height: "15px" }} /> 0141 352
              4444
            </DarkGreenButtonSmallOutline>
            <DarkGreenButtonSmallOutline>
              <IoIosMail style={{ width: "20px", height: "20px" }} />{" "}
              info@sdmh.in
            </DarkGreenButtonSmallOutline>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          padding={"15px"}
          justifyContent={"center"}
          gap={"25px"}
        >
          {navLinks.map((el, i) => {
            return (
              <a href={el.link} style={{textDecoration:"none",color:"black"}}>
                <Typography sx={{ cursor: "pointer" }}>{el.name}</Typography>
              </a>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}
