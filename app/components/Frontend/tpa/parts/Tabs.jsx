"use client";
import { useTpa } from "@/app/components/admin/tpa_index/useTpa";
import Spinner from "@/app/components/ui/Spinner";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Tabs = () => {
  const { data, isLoading, error } = useTpa();
  const filteredData = data?.filter((el, i) => el.status === true);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Stack bgcolor={"#D2E4D8"} alignItems={"Center"}>
      <Stack alignItems={"Center"} p={{ md: 10, xs: 3 }}>
        <Head1 style={{ color: "#005900" }}>List of TPAS</Head1>
        <ParaNormal style={{ fontSize: "15px", textAlign: "center" }}>
          Please confirm the name of your TPA from the below mentioned list and
          kindly take a print of the same. Kindly note the submission of filled
          pre-auth forms along with the required documents can be done at the
          TPA desk only, located on the Gr. Floor of the Hospital, from Mon to
          Sat (10 am to 6 pm)
        </ParaNormal>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}
        py={2}
        margin="10px"
      >
        {filteredData?.map((d) => (
          <Stack bgcolor={"white"} p={2} gap={2} borderRadius={"15px"}>
            <Image src={d.logo} width={250} height={150} />
            <Typography textAlign={"center"}>{d.name}</Typography>
            <Stack alignItems={"center"}>
              <ButtonSmallOutlineWithoutHover
                style={{
                  border: "1px solid #005900",
                  color: "#005900",
                }}
              >
                Download
              </ButtonSmallOutlineWithoutHover>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Tabs;
