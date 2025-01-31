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
      <Head1
        color="#005900"
        fontSize={{ sm: "1.5rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
      >
        KOHA
      </Head1>
      <Head1
        style={{ width: "60%" }}
        fontSize={{ sm: "1.1rem", smm: "1.5rem", md: "2rem", lg: "2.5rem" }}
        color="black"
      >
        The Library ManagementK Software at SDMH Library
      </Head1>
      <ParaNormal
        fontSize={{ sm: "15px", smm: "18px", md: "20px", lg: "25px" }}
        style={{ textAlign: "center", width: "90%" }}
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
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={2}
        width={"100%"}
        justifyContent={"center"}
        alignItems={{ xs: "center", md: "normal" }}
      >
        {data.map((d, i) => (
          <Stack
            key={i}
            bgcolor={"white"}
            width={{ xs: "90%", md: "45%" }}
            padding={{ xs: 3, md: 5 }}
            borderRadius={"10px"}
          >
            <Head1
              color="black"
              fontSize={{
                sm: "1.5rem",
                smm: "1.5rem",
                md: "1.5rem",
                lg: "2.5rem",
              }}
              textAlign={{ sm: "left", smm: "left", md: "left", lg: "left" }}
            >
              {d.heading}
            </Head1>
            <Stack textAlign={"left"}>
              {d.points.map((di) => (
                <Stack
                  key={d.id}
                  gap={3}
                  direction={"row"}
                  alignItems={"center"}
                  paddingY={"10px"}
                  borderRadius={"20px"}
                  bgcolor={"white"}
                >
                  {/* Circle Number */}
                  <Stack
                    width={{ xs: "27px", md: "42px" }}
                    height={{ xs: "27px", md: "42px" }}
                    borderRadius={"50%"}
                    fontSize={{ xs: "15px", md: "25px" }}
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
                    <ParaNormal
                      fontWeight={500}
                      fontSize={{
                        sm: "15px",
                        smm: "18px",
                        md: "22px",
                        lg: "30px",
                      }}
                    >
                      {di.point}
                    </ParaNormal>
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
