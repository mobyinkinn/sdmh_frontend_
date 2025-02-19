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


import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack } from "@mui/material";
import baloon from "../assets/bigHotAirBaloon.png";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import Spinner from "@/app/components/ui/Spinner";

export default function DetailsHero({ data, isLoading }) {
  const extractParagraphs = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const paragraphs = doc.querySelectorAll("p");

    // Convert NodeList to an array of text content
    return Array.from(paragraphs).map((item) => item.textContent.trim());
  };

  const listItemsArray = extractParagraphs(data?.content);
  console.log("Extracted Paragraphs:", listItemsArray);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Stack>
      <Head1 textAlign="left" color="black">
        {data?.name}
      </Head1>
      <Head1 textAlign="left" color="black">
        Best for Your Business?
      </Head1>
      <Box
        sx={{
          backgroundImage: `url(${data?.bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "70vh",
          margin: "30px 0",
        }}
      ></Box>
      <Stack gap={"20px"}>
        {listItemsArray.map((el, i) => (
          <ParaNormal key={i} textAlign={"justify"}>
            {el}
          </ParaNormal>
        ))}
      </Stack>
    </Stack>
  );
}
