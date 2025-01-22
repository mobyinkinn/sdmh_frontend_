import { Stack, Typography } from "@mui/material";
import findDoc from "../assets/icons/findDoctor.png";
import speciality from "../assets/icons/speciality.png";
import video from "../assets/icons/video.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const filterData = [
  {
    id: 0,
    name: "Find a Doctor",
    icon: findDoc,
  },
  {
    id: 1,
    name: "Speciality",
    icon: speciality,
  },
  {
    id: 0,
    name: "Video Consultation",
    icon: video,
  },
  {
    id: 0,
    name: "Get Health Checkup",
    icon: findDoc,
  },
];

const doctor = [
  { id: 0, name: "Dr Yogesh Sewada" },
  { id: 1, name: "Dr Nishit Lakhtakiya" },
  { id: 2, name: "Dr Mohit Porwal" },
  { id: 3, name: "Dr Jatin Hinduja" },
  { id: 4, name: "Dr Vikas Sir Phd" },
  { id: 5, name: "Dr Doom" },
  { id: 6, name: "Dr Who" },
];

const specialityItems = [
  { id: 0, name: "Lungs" },
  { id: 1, name: "Neurology" },
  { id: 2, name: "Cardiology" },
  { id: 3, name: "Dental Science" },
  { id: 4, name: "Dietetics" },
  { id: 5, name: "General Medicine" },
  { id: 6, name: "Urology" },
];

export default function FilterSection() {
  return (
    <Stack
      direction={"row"}
      margin={"50px auto"}
      backgroundColor={"#476C9B"}
      width={"90%"}
      sx={{ display: { sm: "none", md: "flex" } }}
    >
      {filterData.map((el, i) => {
        return (
          <Stack
            width={"25%"}
            direction={"row"}
            padding={{ lg: "40px", md: "30px" }}
            alignItems={"center"}
            gap={"10px"}
            key={i}
            sx={{
              borderRight: "1px solid white",
            }}
          >
            <Image src={el.icon} alt="" height={30} width={30} />
            <Typography color="white" fontSize={"1rem"}>
              {el.name}
            </Typography>
            <IoIosArrowDown style={{ color: "white" }} />
          </Stack>
        );
      })}
    </Stack>
  );
}
