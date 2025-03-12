// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { Box, Stack } from "@mui/material";

// import baloon from "../assets/bigHotAirBaloon.png";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";
// import Spinner from "@/app/components/ui/Spinner";

// export default function DetailsHero({ data, isLoading }) {

//   const extractListItems = (htmlContent) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlContent, "text/html");
//     const listItems = doc.querySelectorAll("p");

//     // Convert NodeList to an array of text content
//     return Array.from(listItems).map((item) => item.textContent.trim());
//   };

//   const listItemsArray = extractListItems(data?.content);
//   console.log("sad",listItemsArray);

//   if (isLoading) {
//     return <Spinner />;
//   }
//   return (
//     <Stack>
//       <Head1 textAlign="left" color="black">
//         {data?.name}
//       </Head1>
//       <Head1 textAlign="left" color="black">
//         Best for Your Business?
//       </Head1>
//       <Box
//         sx={{
//           backgroundImage: `url(${data?.bannerImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//           width: "100%",
//           height: "70vh",
//           margin: "30px 0",
//         }}
//       ></Box>
//       <Stack gap={"20px"}>
//         {listItemsArray.map((el, i) => {
//           <ParaNormal textAlign={"justify"}>{el}</ParaNormal>;
//         })}
//       </Stack>
//     </Stack>
//   );
// }

// "use client";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { Box, Stack } from "@mui/material";
// import baloon from "../assets/bigHotAirBaloon.png";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";
// import Spinner from "@/app/components/ui/Spinner";
// import { useEffect, useState } from "react";

// export default function DetailsHero({ data, isLoading }) {
//   const [paragraphs, setParagraphs] = useState([]);

//   useEffect(() => {
//     if (typeof window === "undefined" || !data?.content) return;

//     const extractParagraphs = (htmlContent) => {
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(htmlContent, "text/html");
//       const paragraphs = doc.querySelectorAll("p");

//       // Convert NodeList to an array of text content
//       return Array.from(paragraphs).map((item) => item.textContent.trim());
//     };

//     setParagraphs(extractParagraphs(data?.content));
//   }, [data]);

//   console.log("Extracted Paragraphs c1:", paragraphs);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   return (
//     <Stack>
//       <Head1 textAlign="left" color="black">
//         {data?.name}
//       </Head1>
//       <Head1 textAlign="left" color="black">
//         Best for Your Business?
//       </Head1>
//       <Box
//         sx={{
//           backgroundImage: `url(${data?.bannerImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//           width: "100%",
//           height: "70vh",
//           margin: "30px 0",
//         }}
//       ></Box>
//       <Stack gap={"20px"}>
//         {paragraphs.map((el, i) => (
//           <ParaNormal key={i} textAlign={"justify"}>
//             {el}
//           </ParaNormal>
//         ))}
//       </Stack>
//     </Stack>
//   );
// }

"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack } from "@mui/material";
import baloon from "../assets/bigHotAirBaloon.png";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import Spinner from "@/app/components/ui/Spinner";
import { useEffect, useState } from "react";
export default function DetailsHero({ data, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Stack>
      <Head1
        textAlign={{ sm: "left", smm: "left", md: "left", lg: "left" }}
        color="black"
      >
        {data?.name}
      </Head1>

      <Box
        display={{ md: "flex", sm: "none" }}
        minHeight={{ md: "276px", lg: "386px", xl: "557px" }}
        sx={{
          backgroundImage: `url(${data?.bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          margin: "30px 0",
        }}
      ></Box>
      <Box
        display={{ md: "none", sm: "flex" }}
        minHeight={{ xs: "334px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.mobileBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          margin: "25px 0",
        }}
      ></Box>
      <div
        className="set"
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      ></div>
    </Stack>
  );
}
