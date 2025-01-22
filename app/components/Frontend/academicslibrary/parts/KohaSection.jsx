import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack, Typography } from "@mui/material";
import React from "react";

const KohaSection = () => {
  const data = [
    {
      heading: "Users Categories:",
      points: [
        {
          id: 1,
          point: "Consultant (2)",
        },
        {
          id: 2,
          point: "Consultant (2)",
        },
        {
          id: 3,
          point: "Consultant (2)",
        },
        {
          id: 4,
          point: "Outsiders",
        },
      ],
    },
    {
      heading: "Useful Links:",
      points: [
        {
          id: 1,
          point: "Consultant (2)",
        },
        {
          id: 2,
          point: "Consultant (2)",
        },
      ],
    },
  ];
  return (
    <ContainerMain style={{ backgroundColor: "#F9F9F9", alignItems: "center" }}>
      <Head1 color="#005900">KOHA</Head1>
      <Head1 style={{ width: "60%", fontSize: "30px" }} color="black">
        The Library ManagementK Software at SDMH Library
      </Head1>
      <ParaNormal
        style={{ textAlign: "center", fontSize: "20px", width: "85%" }}
      >
        The introduction of open source software Koha Library Software
        Management is an added feather to the library’s cap. KOHA improves a
        library’s relevance to the academic community because it joins its
        members with the library digitally. Members can view the whole library’s
        catalogued material from their desktops from anywhere within the CAMPUS.
        They can maintain their carts according to their choice, save favourites
        and keep a view on their reading history. The library staff enjoy
        working in an automated environment and the patrons enjoy services
        rendered using an OPAC instead of a card catalogue system. KOHA Library
        automation addresses the problem of manual processing of materials.
      </ParaNormal>
      <Stack direction={"row"} gap={2} width={"100%"} justifyContent={"center"}>
        {data.map((d, i) => (
          <Stack
            key={i}
            bgcolor={"white"}
            width={"45%"}
            padding={5}
            borderRadius={"10px"}
          >
            <Head1 color="black" fontSize={"20px"} textAlign={"left"}>
              {d.heading}
            </Head1>
            <Stack textAlign={"left"}>
              {d.points.map((di) => (
                <Stack
                  key={d.id}
                  gap={3}
                  direction={"row"}
                  alignItems={"center"}
                  padding={"10px"}
                  borderRadius={"20px"}
                  bgcolor={"white"}
                >
                  {/* Circle Number */}
                  <Stack
                    width={"42px"}
                    height={"42px"}
                    borderRadius={"50%"}
                    fontSize={"25px"}
                    color={"white"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    border={"1px solid #E0E0E0"}
                    bgcolor={"#005900"} // Default circle background
                    sx={{
                      transition: "all 0.3s ease", // Smooth transition for hover effect
                    }}
                  >
                    {di.id}
                  </Stack>
                  <Stack>
                    <ParaNormal fontSize={"30px"}>{di.point}</ParaNormal>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </ContainerMain>
  );
};

export default KohaSection;
