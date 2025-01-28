import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";
import React from "react";

const ServiceProvide = () => {
  const data = [
    {
      id: 1,
      item: "Reading Facilities:",
      Desc: "Room and Computer Section is available 24x7. Circulation section remains open between 9.00 am To 5.30 pm. on weekdays. On Sundays and holidays only reading facilities (magazine, newspapers etc.) are provided to the users for 24 hours in the library premises.",
    },
    {
      id: 2,
      item: "Reading Facilities:",
      Desc: "Room and Computer Section is available 24x7. Circulation section remains open between 9.00 am To 5.30 pm. on weekdays. On Sundays and holidays only reading facilities (magazine, newspapers etc.) are provided to the users for 24 hours in the library premises.",
    },
    {
      id: 3,
      item: "Reading Facilities:",
      Desc: "Room and Computer Section is available 24x7. Circulation section remains open between 9.00 am To 5.30 pm. on weekdays. On Sundays and holidays only reading facilities (magazine, newspapers etc.) are provided to the users for 24 hours in the library premises.",
    },
    {
      id: 4,
      item: "Reading Facilities:",
      Desc: "Room and Computer Section is available 24x7. Circulation section remains open between 9.00 am To 5.30 pm. on weekdays. On Sundays and holidays only reading facilities (magazine, newspapers etc.) are provided to the users for 24 hours in the library premises.",
    },
    {
      id: 5,
      item: "Reading Facilities:",
      Desc: "Room and Computer Section is available 24x7. Circulation section remains open between 9.00 am To 5.30 pm. on weekdays. On Sundays and holidays only reading facilities (magazine, newspapers etc.) are provided to the users for 24 hours in the library premises.",
    },
    {
      id: 6,
      item: "Reading Facilities:",
      Desc: "Room and Computer Section is available 24x7. Circulation section remains open between 9.00 am To 5.30 pm. on weekdays. On Sundays and holidays only reading facilities (magazine, newspapers etc.) are provided to the users for 24 hours in the library premises.",
    },
    {
      id: 7,
      item: "Reading Facilities:",
      Desc: "Room and Computer Section is available 24x7. Circulation section remains open between 9.00 am To 5.30 pm. on weekdays. On Sundays and holidays only reading facilities (magazine, newspapers etc.) are provided to the users for 24 hours in the library premises.",
    },
  ];
  return (
    <Stack bgcolor={"#D8E0EB"}>
      <Head1
        fontSize={{ sm: "1.5rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
        color="black"
        style={{ padding: "20px 0 0 0" }}
      >
        Service Provided
      </Head1>
      <Stack
        width={"100%"}
        flexWrap={"wrap"}
        padding={4}
        direction={{ xs: "column", md: "row" }}
        gap={2}
        justifyContent={"center"}
        alignItems={{ xs: "center", md: "normal" }}
      >
        {data.map((d, i) => (
          <Stack
            border={"1px solid lightgray"}
            width={{ xs: "90%", md: "45%" }}
            padding={3}
            borderRadius={2}
            key={i}
            sx={{
              "&:hover": {
                bgcolor: "#C5D1E1",
              },
            }}
          >
            <Typography
              fontWeight={"bold"}
              fontSize={{ xs: "15px", smm: "20px", md: "25px", lg: "30px" }}
            >
              {d.item}
            </Typography>
            <Typography>{d.Desc}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ServiceProvide;
