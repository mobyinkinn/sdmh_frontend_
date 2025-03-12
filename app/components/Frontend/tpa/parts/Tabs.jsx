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
  console.log("filtert", filteredData);
  const manipulatedData = filteredData?.reduce((acc, item) => {
    // Check if the tag already exists in the accumulator
    let existingTag = acc.find((obj) => obj.tag === item.tag);

    // If the tag exists, add the object to its array
    if (existingTag) {
      existingTag.objects.push({ name: item.name, image: item.logo });
    } else {
      // Otherwise, create a new tag and add the object
      acc.push({
        tag: item.tag,
        objects: [{ name: item.name, image: item.logo }],
      });
    }

    return acc;
  }, []);

  console.log("Manipulated Data", manipulatedData);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Stack bgcolor={"#D2E4D8"} alignItems={"Center"}>
      {/* <Stack alignItems={"Center"} p={{ md: 10, xs: 3 }}>
        <Head1 style={{ color: "#005900" }}>List of TPAS</Head1>
        <ParaNormal style={{ fontSize: "15px", textAlign: "center" }}>
          Please confirm the name of your TPA from the below mentioned list and
          kindly take a print of the same. Kindly note the submission of filled
          pre-auth forms along with the required documents can be done at the
          TPA desk only, located on the Gr. Floor of the Hospital, from Mon to
          Sat (10 am to 6 pm)
        </ParaNormal>
      </Stack> */}
      <Stack gap={4} justifyContent={"center"} py={2} margin="10px">
        {manipulatedData?.map((d, i) => (
          <Stack gap={3}>
            <Head1 textAlign={"center"}>{d.tag}</Head1>

            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              key={i}
              gap={2}
              justifyContent={"center"}
            >
              {d.objects.map((di) => (
                <Stack
                  bgcolor={"white"}
                  p={2}
                  borderRadius={"15px"}
                  width={300}
                  height={270}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image src={di.image} width={250} height={150} />
                  <Typography textAlign={"center"}>{di.name}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Tabs;
