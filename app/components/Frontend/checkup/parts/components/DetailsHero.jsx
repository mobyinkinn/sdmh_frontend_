"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack, Typography } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import Spinner from "@/app/components/ui/Spinner";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import Divider from "@mui/material/Divider";
import Group_1 from "../assets/Group_1.png";
import Group_2 from "../assets/Group_2.png";
import Group_3 from "../assets/Group_3.png";
import Group_4 from "../assets/Group_4.png";
import { useEffect, useState } from "react";

const checkupDetails = [
  {
    title: "Investigation",
    items: [
      "Blood Group",
      "CBC",
      "TSH",
      "Urine Routine",
      "Vitamin B12",
      "Vitamin D3",
    ],
  },
  {
    title: "Imaging",
    items: ["Blood Group", "CBC", "Stool Routine", "TSH"],
  },
  {
    title: "Lipid Profile",
    items: [
      "Blood Group",
      "CBC",
      "TSH",
      "Urine Routine",
      "Vitamin B12",
      "Vitamin D3",
    ],
  },
  {
    title: "Diabetics",
    items: ["Blood Group", "CBC", "Vitamin B12", "Vitamin D3"],
  },
  {
    title: "Cardiac",
    items: ["Blood Group", "CBC", "Stool Routine", "TSH"],
  },
];

const groupImages = [
  {
    id: 1,
    image: Group_1,
  },
  {
    id: 2,
    image: Group_2,
  },
  {
    id: 3,
    image: Group_3,
  },
  {
    id: 4,
    image: Group_4,
  },
];

const DetailsHero = ({ id, data, isLoading }) => {
  // const [listItemsArray, setListItemsArray] = useState([]);
  // const [arrOfObj, setArrOfObj] = useState([]);

  // useEffect(() => {
  //   if (typeof window !== "undefined" && data?.description) {
  //     const extractParagraphs = (htmlContent) => {
  //       const parser = new DOMParser();
  //       const doc = parser.parseFromString(htmlContent, "text/html");
  //       return Array.from(doc.querySelectorAll("p")).map((item) =>
  //         item.textContent.trim()
  //       );
  //     };

  //     const extractSections = (htmlString) => {
  //       const parser = new DOMParser();
  //       const doc = parser.parseFromString(htmlString, "text/html");
  //       const sections = [];
  //       const headings = doc.querySelectorAll("h1");

  //       headings.forEach((heading) => {
  //         const section = {
  //           title: heading.textContent.trim(),
  //           items: [],
  //         };

  //         let nextElement = heading.nextElementSibling;
  //         while (nextElement && nextElement.tagName === "UL") {
  //           nextElement.querySelectorAll("li").forEach((li) => {
  //             section.items.push(li.textContent.trim());
  //           });
  //           nextElement = nextElement.nextElementSibling;
  //         }

  //         sections.push(section);
  //       });

  //       return sections;
  //     };

  //     setListItemsArray(extractParagraphs(data?.description));
  //     setArrOfObj(extractSections(data?.description));
  //   }
  // }, [data?.description]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Stack>
      <Box
        sx={{
          backgroundImage: `url(${data?.bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: { xs: "38vh", md: "55vh", lg: "70vh" },
          marginBottom: "30px",
        }}
      ></Box>
      <Stack alignItems={"center"}>
        <Head1
          color="black"
          fontSize={{ sm: "1.3rem", smm: "2rem", md: "2.2rem", lg: "3.4rem" }}
        >
          {data?.title}
        </Head1>
        <Typography
          color="#005900"
          fontSize={{ sm: "1.3rem", smm: "1.7rem", md: "2rem", lg: "2.5rem" }}
          fontWeight={"600"}
        >
          ₹{data?.price}
        </Typography>
        <ParaNormal
          color="#000000"
          fontSize={{ sm: "15px", smm: "18px", md: "21px", lg: "25px" }}
          fontWeight={"400"}
          lineheight={"2.1rem"}
          padding={"0px 50px"}
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
        {/* {listItemsArray.map((el, i) => (
          <ParaNormal
            key={i}
            color="#000000"
            fontSize={{ sm: "15px", smm: "18px", md: "21px", lg: "25px" }}
            fontWeight={"400"}
            lineheight={"2.1rem"}
            padding={"0px 50px"}
          >
            {el}
          </ParaNormal>
        ))} */}
      </Stack>
      <Stack marginTop={2}>
        <ButtonMediumOutline margin="auto" color="#007946">
          Book Now
        </ButtonMediumOutline>
      </Stack>
      <Divider color={"#2D2D2D"} sx={{ margin: "30px 0" }} />

      {/* Checkup Details */}
      {/* <Stack
        direction={"row"}
        gap={4}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
        padding={{ xs: "12px" }}
      >
        {checkupDetails.map((item) => (
          <Stack key={item.title} mb={2}>
            <ParaNormal
              color="#000000"
              fontSize={{ sm: "20px", smm: "23px", md: "26px", lg: "30px" }}
              fontWeight={"500"}
            >
              {item.title}
            </ParaNormal>
            <Stack direction="column" gap={2} width={"100%"} marginTop={1}>
              {item.items.map((subItem) => (
                <list>
                  <Typography
                    fontSize={{
                      sm: "15px",
                      smm: "18px",
                      md: "21px",
                      lg: "25px",
                    }}
                    sx={{
                      listStyle: "none",
                      "& li::before": {
                        content: '"\\2022"',
                        color: "#005900",
                        fontWeight: "bold",
                        display: "inline-block",
                        width: "12px",
                      },
                    }}
                  >
                    <li color="#000000">{subItem}</li>
                  </Typography>
                </list>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack> */}

      {/* Images */}
      <Stack
        bgcolor={"#D2E4D8"}
        width={"100%"}
        padding={{ md: "50px", xs: "30px" }}
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        display={{ xs: "none", lg: "flex" }}
      >
        {data.images.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                height: "300px",
                width: "100%",
                margin: "10px",
                borderRadius: "5px",
                backgroundImage: `url(${item})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></Box>
          );
        })}
      </Stack>
      <Stack
        bgcolor={"#D2E4D8"}
        width={"100%"}
        padding={{ md: "50px", xs: "30px" }}
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        display={{ xs: "flex", lg: "none" }}
      >
        {data.images.map((item, index) => {
          if (index > 1) return null;
          return (
            <Box
              key={index}
              sx={{
                height: "300px",
                width: "100%",
                margin: "10px",
                borderRadius: "5px",
                backgroundImage: `url(${item})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default DetailsHero;
