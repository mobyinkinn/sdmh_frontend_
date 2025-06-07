"use client";

import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import img1 from "../assets/departments/ortho.jpg";
import img2 from "../assets/departments/topRight.png";
import img3 from "../assets/departments/center.png";
import img4 from "../assets/departments/bottomLeft.png";
import img5 from "../assets/departments/bottomRight.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import image1 from "../assets/departments/1.jpg";
import image2 from "../assets/departments/2.jpg";
import image3 from "../assets/departments/3.jpg";
import image4 from "../assets/departments/4.jpg";
import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";
import Spinner from "@/app/components/ui/Spinner";
import { useDefaultDepartment } from "@/app/components/admin/departments/parts/useDepartment";
import { AnotherUrl } from "@/app/components/services/AnotherUrl";

export default function Departments() {
  const { data: departmentData, isLoading: isLoadingDepartment } =
    useDepartment();
  const [activeTab, setActiveTab] = useState(null);
  const router = useRouter();
const filteredDepartment =
  departmentData
    ?.filter((el) => el.status === true)
    .sort((a, b) => a.name.localeCompare(b.name)) || [];

const { data: defaultDepartment, isLoading: isLoadingDefault } =
  useDefaultDepartment();
console.log("defal",defaultDepartment)
// useEffect(() => {
//   if (filteredDepartment.length > 0 && !activeTab) {
//     setActiveTab(filteredDepartment[0]._id);
//   }
// }, [filteredDepartment]);
useEffect(() => {
  if (!activeTab && filteredDepartment.length > 0) {
    // Wait until defaultDepartment is loaded or failed
    if (!isLoadingDefault) {
      if (defaultDepartment?._id) {
        setActiveTab(defaultDepartment._id);
      } else {
        setActiveTab(filteredDepartment[0]._id); // fallback
      }
    }
  }
}, [filteredDepartment, defaultDepartment, isLoadingDefault, activeTab]);




  if (isLoadingDepartment) return <Spinner />;

  const activeDepartment = departmentData?.find((el) => el._id === activeTab);
   const getBannerUrl = (url) => {
      if (!url) return "";
      const fileName = url.substring(url.lastIndexOf("/") + 1);
      return AnotherUrl(fileName);
    };
  const image = getBannerUrl(activeDepartment?.homeImage);

console.log("image", image);

  return (
    <Stack
      sx={{
        padding: { md: "50px", xs: "10px 0 0 0" },
        backgroundColor: "#FBF6EE",
        gap: { md: "20px", xs: "8px" },
        // display: { md: "flex", xs: "none" },
      }}
    >
      <Stack py={{ xl: 0, sm: "10px" }} gap={1}>
        <Head1
          position="center"
          width={{ sm: "100%", md: "777px" }}
          color="black"
          fontSize={{ sm: "1.3rem" }}
        >
          World-Class Speciality Care
        </Head1>
        <Head1 fontSize={{ sm: "1.3rem" }}>At Your Fingertips</Head1>
      </Stack>
      <Stack
        width={{ md: "100%", xs: "100vw" }}
        height={"fit-content"}
        direction={{ xs: "column", md: "row" }}
        gap={"30px"}
        justifyContent={"center"}
      >
        <Stack width={{ xs: "100%", md: "40%", lg: "45%" }} gap={"40px"}>
          <Stack
            width={"100%"}
            sx={{ overflowY: "scroll" }}
            height={{ md: "75vh", sm: "290px" }}
          >
            {filteredDepartment.map((el, i) => {
              return (
                <Stack
                  width={"100%"}
                  direction={"row"}
                  padding={{ md: "20px 50px", xs: "10px 20px" }}
                  margin={{ md: "0 10px", xs: "0" }}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  key={i}
                  sx={
                    el._id === activeTab
                      ? {
                          color: "white",
                          backgroundColor: "#007946",
                          border: "none",
                          cursor: "pointer",
                        }
                      : {
                          borderBottom: "1px solid black",
                        }
                  }
                  onMouseEnter={() => setActiveTab(el._id)}
                  onClick={() => router.push(`/centre-of-excellence/${el._id}`)}
                >
                  <Stack>
                    <Typography fontSize={{ xs: "1rem", md: "1.5rem" }}>
                      {el.name}
                    </Typography>
                    {/* <Typography fontSize={{ xs: "0.9rem", md: "1.2rem" }}>
                      {el.data}
                    </Typography> */}
                  </Stack>
                  <Stack display={{ md: "flex", xs: "none" }}>
                    <FaArrowRight size={30} />
                  </Stack>
                  <Stack
                    display={{ xs: "flex", md: "none" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(el._id);
                    }}
                  >
                    {el._id === activeTab ? (
                      <IoIosArrowUp size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
        <Stack
          width={{ xs: "100%", md: "40%", lg: "45%" }}
          height={{ lg: "75vh", sm: "63vh" }}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {activeDepartment?.homeImage ? (
            <Image
              src={image}
              fill
              objectFit="cover"
              alt={activeDepartment?.name}
            />
          ) : (
            <div>Image not available for {activeDepartment?.name}</div>
          )}
        </Stack>
      </Stack>
      <Stack alignItems={{ xs: "center", md: "start" }}>
        <ButtonMediumOutline
          margin="10px 50px"
          color="#fff"
          hcolor="#005900"
          backgroundColor="#50a65f"
          onClick={() => router.push(`/centre-of-excellence`)}
        >
          View All
        </ButtonMediumOutline>
      </Stack>
    </Stack>
  );
}







// "use client";

// import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
// import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
// import { Stack, Typography } from "@mui/material";
// import { FaArrowRight } from "react-icons/fa6";
// import { IoIosArrowUp } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";

// import img1 from "../assets/departments/ortho.jpg";
// import img2 from "../assets/departments/topRight.png";
// import img3 from "../assets/departments/center.png";
// import img4 from "../assets/departments/bottomLeft.png";
// import img5 from "../assets/departments/bottomRight.png";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import image1 from "../assets/departments/1.jpg";
// import image2 from "../assets/departments/2.jpg";
// import image3 from "../assets/departments/3.jpg";
// import image4 from "../assets/departments/4.jpg";
// import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";
// import Spinner from "@/app/components/ui/Spinner";
// import { useDefaultDepartment } from "@/app/components/admin/departments/parts/useDepartment";
// import { AnotherUrl } from "@/app/components/services/AnotherUrl";

// export default function Departments() {
//   const router = useRouter();
//   const { data: departmentData, isLoading: isLoadingDepartment } =
//     useDepartment();

//   const [activeTab, setActiveTab] = useState(null);

//   const filteredDepartment =
//     departmentData
//       ?.filter((el) => el.status === true)
//       .sort((a, b) => a.name.localeCompare(b.name)) || [];

//   // Function to get full URL for department images
//   const getBannerUrl = (url) => {
//     if (!url) return "";
//     const fileName = url.substring(url.lastIndexOf("/") + 1); // Extract the file name
//     return AnotherUrl(fileName); // Get full URL using AnotherUrl function
//   };

//   // Set the banner URL for the active department's home image
//   const activeDepartment = departmentData?.find((el) => el._id === activeTab);
//   const image = getBannerUrl(activeDepartment?.homeImage); // Use getBannerUrl to fetch the image URL

//   useEffect(() => {
//     if (!activeTab && filteredDepartment.length > 0) {
//       setActiveTab(filteredDepartment[0]._id);
//     }
//   }, [filteredDepartment, activeTab]);

//   if (isLoadingDepartment) return <Spinner />;

//   return (
//     <Stack
//       sx={{
//         padding: { md: "50px", xs: "10px 0 0 0" },
//         backgroundColor: "#FBF6EE",
//         gap: { md: "20px", xs: "8px" },
//       }}
//     >
//       <Stack py={{ xl: 0, sm: "10px" }} gap={1}>
//         <Head1
//           position="center"
//           width={{ sm: "100%", md: "777px" }}
//           color="black"
//           fontSize={{ sm: "1.3rem" }}
//         >
//           World-Class Speciality Care
//         </Head1>
//         <Head1 fontSize={{ sm: "1.3rem" }}>At Your Fingertips</Head1>
//       </Stack>

//       <Stack
//         width={{ md: "100%", xs: "100vw" }}
//         height={"fit-content"}
//         direction={{ xs: "column", md: "row" }}
//         gap={"30px"}
//         justifyContent={"center"}
//       >
//         <Stack width={{ xs: "100%", md: "40%", lg: "45%" }} gap={"40px"}>
//           <Stack
//             width={"100%"}
//             sx={{ overflowY: "scroll" }}
//             height={{ md: "75vh", sm: "290px" }}
//           >
//             {filteredDepartment.map((el, i) => (
//               <Stack
//                 key={i}
//                 width={"100%"}
//                 direction={"row"}
//                 padding={{ md: "20px 50px", xs: "10px 20px" }}
//                 margin={{ md: "0 10px", xs: "0" }}
//                 justifyContent={"space-between"}
//                 alignItems={"center"}
//                 sx={
//                   el._id === activeTab
//                     ? {
//                         color: "white",
//                         backgroundColor: "#007946",
//                         border: "none",
//                         cursor: "pointer",
//                       }
//                     : { borderBottom: "1px solid black" }
//                 }
//                 onMouseEnter={() => setActiveTab(el._id)}
//                 onClick={() => router.push(`/centre-of-excellence/${el._id}`)}
//               >
//                 <Stack>
//                   <Typography fontSize={{ xs: "1rem", md: "1.5rem" }}>
//                     {el.name}
//                   </Typography>
//                 </Stack>
//                 <Stack display={{ md: "flex", xs: "none" }}>
//                   <FaArrowRight size={30} />
//                 </Stack>
//                 <Stack
//                   display={{ xs: "flex", md: "none" }}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setActiveTab(el._id);
//                   }}
//                 >
//                   {el._id === activeTab ? (
//                     <IoIosArrowUp size={20} />
//                   ) : (
//                     <IoIosArrowDown size={20} />
//                   )}
//                 </Stack>
//               </Stack>
//             ))}
//           </Stack>
//         </Stack>

//         {/* Department Image Display */}
//         <Stack
//           width={{ xs: "100%", md: "40%", lg: "45%" }}
//           height={{ lg: "75vh", sm: "63vh" }}
//           position={"relative"}
//           justifyContent={"center"}
//           alignItems={"center"}
//         >
//           {image ? (
//             <Image
//               src={image}
//               fill
//               objectFit="cover"
//               alt={activeDepartment?.name}
//             />
//           ) : (
//             <div>Image not available for {activeDepartment?.name}</div>
//           )}
//         </Stack>
//       </Stack>

//       <Stack alignItems={{ xs: "center", md: "start" }}>
//         <ButtonMediumOutline
//           margin="10px 50px"
//           color="#fff"
//           hcolor="#005900"
//           backgroundColor="#50a65f"
//           onClick={() => router.push(`/centre-of-excellence`)}
//         >
//           View All
//         </ButtonMediumOutline>
//       </Stack>
//     </Stack>
//   );
// }
