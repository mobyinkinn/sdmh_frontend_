// "use client";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { Box, Stack, Typography } from "@mui/material";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";
// import Spinner from "@/app/components/ui/Spinner";
// import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
// import Divider from "@mui/material/Divider";
// import Group_1 from "../assets/Group_1.png";
// import Group_2 from "../assets/Group_2.png";
// import Group_3 from "../assets/Group_3.png";
// import Group_4 from "../assets/Group_4.png";
// import { useEffect, useState } from "react";

// const checkupDetails = [
//   {
//     title: "Investigation",
//     items: [
//       "Blood Group",
//       "CBC",
//       "TSH",
//       "Urine Routine",
//       "Vitamin B12",
//       "Vitamin D3",
//     ],
//   },
//   {
//     title: "Imaging",
//     items: ["Blood Group", "CBC", "Stool Routine", "TSH"],
//   },
//   {
//     title: "Lipid Profile",
//     items: [
//       "Blood Group",
//       "CBC",
//       "TSH",
//       "Urine Routine",
//       "Vitamin B12",
//       "Vitamin D3",
//     ],
//   },
//   {
//     title: "Diabetics",
//     items: ["Blood Group", "CBC", "Vitamin B12", "Vitamin D3"],
//   },
//   {
//     title: "Cardiac",
//     items: ["Blood Group", "CBC", "Stool Routine", "TSH"],
//   },
// ];

// const groupImages = [
//   {
//     id: 1,
//     image: Group_1,
//   },
//   {
//     id: 2,
//     image: Group_2,
//   },
//   {
//     id: 3,
//     image: Group_3,
//   },
//   {
//     id: 4,
//     image: Group_4,
//   },
// ];

// const DetailsHero = ({ id, data, isLoading }) => {
  

//   if (isLoading) {
//     return <Spinner />;
//   }
//   return (
//     <Stack bgcolor={"#F9F9F9"}>
//       <Box
//         sx={{
//           backgroundImage: `url(${data?.bannerImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//           width: "100%",
//           height: { xs: "38vh", md: "55vh", lg: "70vh" },
//           marginBottom: "30px",
//         }}
//       ></Box>
//       <Stack alignItems={"center"}>
//         <Head1
//           color="black"
//           fontSize={{ sm: "1.3rem", smm: "2rem", md: "2.2rem", lg: "3.4rem" }}
//         >
//           {data?.title}
//         </Head1>
//         <Typography
//           color="#005900"
//           fontSize={{ sm: "1.3rem", smm: "1.7rem", md: "2rem", lg: "2.5rem" }}
//           fontWeight={"600"}
//         >
//           ₹{data?.price}
//         </Typography>

//         <ParaNormal
//           color="#000000"
//           fontSize={{ sm: "15px", smm: "18px", md: "21px", lg: "25px" }}
//           fontWeight={"400"}
//           lineheight={"2.1rem"}
//           padding={"0px 50px"}
//           className="sett"
//           dangerouslySetInnerHTML={{ __html: data?.description }}
//         />
//       </Stack>

//       <Stack marginTop={2}>
//         <ButtonMediumOutline margin="auto" color="#007946">
//           Book Now
//         </ButtonMediumOutline>
//       </Stack>
//       <Divider color={"#2D2D2D"} sx={{ margin: "30px 0" }} />

//       <Stack
//         bgcolor={"#D2E4D8"}
//         width={"100%"}
//         padding={{ md: "50px", xs: "30px" }}
//         direction={{ xs: "column", md: "row" }}
//         alignItems={"center"}
//         display={{ xs: "none", lg: "flex" }}
//       >
//         {data.images.map((item, index) => {
//           return (
//             <Box
//               key={index}
//               sx={{
//                 height: "300px",
//                 width: "100%",
//                 margin: "10px",
//                 borderRadius: "5px",
//                 backgroundImage: `url(${item})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "center center",
//                 backgroundSize: "cover",
//               }}
//             ></Box>
//           );
//         })}
//       </Stack>
//       <Stack
//         bgcolor={"#D2E4D8"}
//         width={"100%"}
//         padding={{ md: "50px", xs: "30px" }}
//         direction={{ xs: "column", md: "row" }}
//         alignItems={"center"}
//         display={{ xs: "flex", lg: "none" }}
//       >
//         {data.images.map((item, index) => {
//           if (index > 1) return null;
//           return (
//             <Box
//               key={index}
//               sx={{
//                 height: "300px",
//                 width: "100%",
//                 margin: "10px",
//                 borderRadius: "5px",
//                 backgroundImage: `url(${item})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "center center",
//                 backgroundSize: "cover",
//               }}
//             ></Box>
//           );
//         })}
//       </Stack>
//     </Stack>
//   );
// };

// export default DetailsHero;


"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack, Typography } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import Spinner from "@/app/components/ui/Spinner";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";

const DetailsHero = ({ id, data, isLoading }) => {
  const [transformedContent, setTransformedContent] = useState(null);

  // Function to transform the list items into desired format
  const transformListContent = (content) => {
    // Create a temporary div to parse the HTML content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    // Find all the <ul> tags in the content
    const lists = Array.from(tempDiv.querySelectorAll("ul"));

    // Iterate over each list and transform the content
    lists.forEach((ul) => {
      let currentDiv = null;

      // Loop over all <li> elements inside each <ul>
      Array.from(ul.children).forEach((li) => {
        // If <li> contains a <strong> (heading), it's the start of a new group
        if (li.querySelector("strong")) {
          // Create a new div for the new group
          currentDiv = document.createElement("div");
          // Append this new div to the parent <ul>
          ul.appendChild(currentDiv);
          currentDiv.appendChild(li); // Add the <strong> heading as the first item
        } else {
          // Otherwise, append the <li> item to the current group div
          if (currentDiv) {
            currentDiv.appendChild(li);
          }
        }
      });
    });

    // Return the transformed HTML as JSX
    return tempDiv.innerHTML;
  };

  useEffect(() => {
    if (data?.description) {
      // Transform the description content
      const transformed = transformListContent(data.description);
      setTransformedContent(transformed);
    }
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Stack bgcolor={"#F9F9F9"}>
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
          padding={"28px 50px"}
          className="sett"
          dangerouslySetInnerHTML={{ __html: transformedContent }}
        />
      </Stack>

      <Stack marginTop={2}>
        <ButtonMediumOutline margin="auto" color="#007946">
          Book Now
        </ButtonMediumOutline>
      </Stack>
      <Divider color={"#2D2D2D"} sx={{ margin: "30px 0" }} />

      <Stack
        bgcolor={"#D2E4D8"}
        width={"100%"}
        padding={{ md: "50px", xs: "30px" }}
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        display={{ xs: "none", lg: "flex" }}
      >
        {data?.images.map((item, index) => {
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
