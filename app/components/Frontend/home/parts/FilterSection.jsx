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

export default function FilterSection() {
  return (
    <Stack
      direction={"row"}
      margin={"50px auto"}
      backgroundColor={"#379237"}
      width={"fit-content"}
    >
      {filterData.map((el, i) => {
        return (
          <Stack
            direction={"row"}
            padding={"30px 50px"}
            alignItems={"center"}
            gap={"10px"}
            sx={{
              borderRight: "1px solid white",
            }}
          >
            <Image src={el.icon} alt="" height={50} width={50} />
            <Typography color="white" fontSize={"1.3rem"}>
              {el.name}
            </Typography>
            <IoIosArrowDown style={{ color: "white" }} />
          </Stack>
        );
      })}
    </Stack>
  );
}
