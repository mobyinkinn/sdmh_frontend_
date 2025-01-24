"use client";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "./assets/Abode.png";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
import { useNotices } from "@/app/components/admin/academic_notices/useNotices";
import Spinner from "@/app/components/ui/Spinner";
const Noticwes = () => {
  // const data = [
  //   {
  //     img: logo,
  //     title:
  //       "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
  //   },
  //   {
  //     img: logo,
  //     title:
  //       "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
  //   },
  //   {
  //     img: logo,
  //     title:
  //       "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
  //   },
  //   {
  //     img: logo,
  //     title:
  //       "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
  //   },
  //   {
  //     img: logo,
  //     title:
  //       "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
  //   },
  //   {
  //     img: logo,
  //     title:
  //       "Academic Grand Round Dr. Jyotsna Sinha on Imaging in Lung Malignancy on 8th September 2018",
  //   },
  // ];
  const { data, isLoading, error } = useNotices();
  const filteredData = data?.filter((el, i) => el.status === true);
  if (isLoading) {
    return <Spinner />;
  }
  console.log("data", data);
  return (
    <Stack
      bgcolor={"#F9F9F9"}
      direction={"row"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      p={4}
      gap={3}
    >
      {filteredData?.map((d, i) => (
        <Stack
          key={i}
          width={"30%"}
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
            <a href={d.file} target="blank" style={{ textDecoration: "none" }}>
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
  );
};

export default Noticwes;
