// "use client";
// import { useTpa } from "@/app/components/admin/tpa_index/useTpa";
// import Spinner from "@/app/components/ui/Spinner";
// import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";
// import { Box, Stack, Typography } from "@mui/material";
// import Image from "next/image";
// import React from "react";

// const Tabs = () => {
//   const { data, isLoading, error } = useTpa();
//   const filteredData = data?.filter((el, i) => el.status === true);
//   console.log("filter Data", filteredData);
//   const manipulatedData = filteredData?.reduce((acc, item) => {
//     // Check if the tag already exists in the accumulator
//     let existingTag = acc.find((obj) => obj.tag === item.tag);

//     // If the tag exists, add the object to its array
//     if (existingTag) {
//       existingTag.objects.push({ name: item.name, image: item.logo });
//     } else {
//       // Otherwise, create a new tag and add the object
//       acc.push({
//         tag: item.tag,
//         objects: [{ name: item.name, image: item.logo }],
//       });
//     }

//     return acc;
//   }, []);

//   console.log("Manipulated Data", manipulatedData);

//   if (isLoading) {
//     return <Spinner />;
//   }
//   return (
//     <Stack bgcolor={"#D2E4D8"} alignItems={"Center"}>
//       {/* <Stack alignItems={"Center"} p={{ md: 10, xs: 3 }}>
//         <Head1 style={{ color: "#005900" }}>List of TPAS</Head1>
//         <ParaNormal style={{ fontSize: "15px", textAlign: "center" }}>
//           Please confirm the name of your TPA from the below mentioned list and
//           kindly take a print of the same. Kindly note the submission of filled
//           pre-auth forms along with the required documents can be done at the
//           TPA desk only, located on the Gr. Floor of the Hospital, from Mon to
//           Sat (10 am to 6 pm)
//         </ParaNormal>
//       </Stack> */}
//       <Stack gap={4} justifyContent={"center"} py={2} margin="10px">
//         {manipulatedData?.map((d, i) => (
//           <Stack gap={3}>
//             <Head1 textAlign={"center"}>{d.tag}</Head1>
//             <Typography textAlign="center">
//               For any queries related to TPA, please feel free to reach out to
//               us at sdmhjp5@gmail.com.
//             </Typography>

//             <Stack
//               direction={"row"}
//               flexWrap={"wrap"}
//               key={i}
//               gap={2}
//               justifyContent={"center"}
//             >
//               {d.objects.map((di) => (
         
//                 <Box
//                   sx={{
//                     width: { xs: "45%", md: "45%" },
//                     height: { xs: "140px", md: "400px" },
//                     position: "relative",
//                     borderRadius: "10px",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <Image
//                     src={di.image}
//                     alt={di.title}
//                     fill
//                     style={{ objectFit: "cover" }}
//                   />
//                   <Typography textAlign={"center"}>{di.name}</Typography>
//                 </Box>
//               ))}
//             </Stack>
//           </Stack>
//         ))}
//       </Stack>
//     </Stack>
//   );
// };

// export default Tabs;





"use client";
import { useTpa } from "@/app/components/admin/tpa_index/useTpa";
import Spinner from "@/app/components/ui/Spinner";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AnotherUrl } from "@/app/components/services/AnotherUrl";

const Tabs = () => {
  const { data, isLoading, error } = useTpa();

  // Filter active TPAs only
  const filteredData = data?.filter((el) => el.status === true);

  // Group by tag
  const manipulatedData = filteredData?.reduce((acc, item) => {
    let existingTag = acc.find((obj) => obj.tag === item.tag);

    if (existingTag) {
      existingTag.objects.push({ name: item.name, image: item.logo });
    } else {
      acc.push({
        tag: item.tag,
        objects: [{ name: item.name, image: item.logo }],
      });
    }
    return acc;
  }, []);

  // Helper to convert image URL
  const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    const fileName = url.substring(url.lastIndexOf("/") + 1);
    return AnotherUrl(fileName);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <Stack bgcolor={"#D2E4D8"} alignItems={"center"}>
      <Stack
        gap={4}
        justifyContent={"center"}
        py={2}
        margin="10px"
        width="100%"
      >
        {manipulatedData?.map((d, i) => (
          <Stack key={d.tag || i} gap={3} width="100%">
            <Head1 textAlign={"center"}>{d.tag}</Head1>
            <Typography textAlign="center" mb={2}>
              For any queries related to TPA, please feel free to reach out to
              us at sdmhjp5@gmail.com.
            </Typography>

            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              gap={2}
              justifyContent={"center"}
            >
              {d.objects.map((di, idx) => {
                const imageUrl = getImageUrl(di.image);
                return (
                  <Box
                    key={di.name + idx}
                    sx={{
                      width: { xs: "45%", md: "45%" },
                      height: { xs: "140px", md: "400px" },
                      position: "relative",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={di.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#ccc",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Image Unavailable
                      </Box>
                    )}
                    <Typography textAlign={"center"} mt={1}>
                      {di.name}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Tabs;
