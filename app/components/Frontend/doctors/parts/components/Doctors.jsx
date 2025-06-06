// import { Box, Stack, Typography } from "@mui/material";

// import img from "../assets/doc.png";
// import Image from "next/image";
// import { Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
// import {
//   ParaNormal,
//   ParaNormalSmall,
// } from "@/app/styledComponents/frontend/Para";
// import {
//   ButtonMediumOutline,
//   ButtonSmallOutline,
//   ButtonVerySmallOutline,
// } from "@/app/styledComponents/frontend/Buttons";
// import { useDoctorById } from "@/app/components/admin/doctors/parts/useDoctor";

// const doctorsData = [
//   {
//     id: 0,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 1, 0, 0, 0],
//   },
//   {
//     id: 1,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 2,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 3,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 4,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 5,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 6,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 7,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 8,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },

//   {
//     id: 9,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },

//   {
//     id: 10,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 11,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
// ];

// const days = ["Sun", "Mon", "Tues", "Wed", "Thrus", "Fri", "Sat"];

// export default function Doctors({ departments, _id }) {
//   const { data, isLoading, error } = useDoctorById(_id);

//   return (
//     <Stack
//       direction={"row"}
//       flexWrap={"wrap"}
//       gap={{ md: "30px", xs: "10px" }}
//       justifyContent={"center"}
//       marginTop={{ md: "50px", xs: "15px" }}
//     >
//       {data?.map((el, i) => {
//         return (
//           <Stack
//             key={i}
//             height={"100vh"}
//             width={{ lg: "30%", md: "45%", xs: "100%" }}
//             sx={{ borderRadius: "15px", overflow: "hidden" }}
//           >
//             <Box
//               height={"50%"}
//               backgroundColor={"#D9D9D9"}
//               width={"100%"}
//               position={"relative"}
//             >
//               <Image
//                 src={el.image}
//                 alt=""
//                 fill
//                 objectFit="cover"
//                 objectPosition="center bottom"
//               />
//             </Box>
//             <Stack
//               padding={{ lg: "20px 35px", md: "15px 25px", xs: "10px 15px" }}
//               gap={"10px"}
//               sx={{
//                 cursor: "pointer",
//                 backgroundColor: "white",
//                 borderRadius: "0 0 15px 15px",
//               }}
//             >
//               <Head3 textAlign={"left"} color="black">
//                 {el.name}
//               </Head3>
//               <Head4 textAlign={"left"} fontWeight={"400"}>
//                 {el.designation}
//               </Head4>
//               <Stack>
//                 <ParaNormal>Department</ParaNormal>
//                 <ParaNormalSmall>
//                   {
//                     departments?.filter((ele) => ele._id === el.department)[0]
//                       .name
//                   }
//                 </ParaNormalSmall>
//               </Stack>
//               <Stack>
//                 <ParaNormal>Expertise</ParaNormal>
//                 <ParaNormalSmall>{el.about}</ParaNormalSmall>
//               </Stack>
//               <Stack direction={"row"} gap={"4px"} flexWrap={"wrap"}>
//                 {days.map((ele, i) => {
//                   return (
//                     <ButtonVerySmallOutline
//                       key={i}
//                       color={el.availablity.includes(ele) ? "white" : "#379237"}
//                       bgColor={
//                         el.availablity.includes(ele) ? "#379237" : "transparent"
//                       }
//                     >
//                       {ele}
//                     </ButtonVerySmallOutline>
//                   );
//                 })}
//               </Stack>

//               <Stack direction={"row"} gap={"10px"} flexWrap={"wrap"}>
//                 <ButtonSmallOutline color={"#379237"}>
//                   Appointment
//                 </ButtonSmallOutline>
//                 <ButtonSmallOutline color={"#000000"}>
//                   View Profile
//                 </ButtonSmallOutline>
//               </Stack>
//             </Stack>
//           </Stack>
//         );
//       })}
//     </Stack>
//   );
// }

// import { Box, Stack, Typography } from "@mui/material";

// import img from "../assets/doc.png";
// import Image from "next/image";
// import { Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
// import {
//   ParaNormal,
//   ParaNormalSmall,
// } from "@/app/styledComponents/frontend/Para";
// import {
//   ButtonMediumOutline,
//   ButtonSmallOutline,
//   ButtonVerySmallOutline,
// } from "@/app/styledComponents/frontend/Buttons";
// import { useRouter } from "next/navigation";

// const doctorsData = [
//   {
//     id: 0,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 1, 0, 0, 0],
//   },
//   {
//     id: 1,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 2,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 3,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 4,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 5,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 6,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 7,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 8,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },

//   {
//     id: 9,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },

//   {
//     id: 10,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
//   {
//     id: 11,
//     name: "Dr. Yogesh Sewada",
//     designation: "MBBS",
//     department: "Accident & Emergency",
//     img: img,
//     about:
//       "Acute Emergencies, Emergency Life Saving Procedures, Time Sensitive.",
//     availablity: [1, 0, 0, 0, 0, 0, 0],
//   },
// ];

// const days = ["Sun", "Mon", "Tues", "Wed", "Thrus", "Fri", "Sat"];

// export default function Doctors({ data, departments }) {
//   const router = useRouter();
//   return (
//     <Stack
//       direction={"row"}
//       flexWrap={"wrap"}
//       gap={{ md: "30px", xs: "10px" }}
//       justifyContent={"center"}
//       marginTop={{ md: "50px", xs: "15px" }}
//     >
//       {data.map((el, i) => {
//         return (
//           <Stack
//             key={i}
//             height={"100vh"}
//             width={{ lg: "30%", md: "45%", xs: "100%" }}
//             sx={{ borderRadius: "15px", overflow: "hidden" }}
//           >
//             <Box
//               height={"50%"}
//               backgroundColor={"#D9D9D9"}
//               width={"100%"}
//               position={"relative"}
//             >
//               <Image
//                 src={el.image}
//                 alt=""
//                 fill
//                 objectFit="cover"
//                 objectPosition="center top"
//               />
//             </Box>
//             <Stack
//               padding={{ lg: "20px 35px", md: "15px 25px", xs: "10px 15px" }}
//               gap={"10px"}
//               sx={{
//                 cursor: "pointer",
//                 backgroundColor: "white",
//                 borderRadius: "0 0 15px 15px",
//               }}
//             >
//               <Head3 textAlign={"left"} color="black">
//                 {el.name}
//               </Head3>
//               <Head4 textAlign={"left"} fontWeight={"400"}>
//                 {el.designation}
//               </Head4>
//               <Stack>
//                 <ParaNormal>Department</ParaNormal>
//                 <ParaNormalSmall>
//                   {
//                     departments?.filter((ele) => ele._id === el.department)[0]
//                       .name
//                   }
//                 </ParaNormalSmall>
//               </Stack>
//               <Stack>
//                 <ParaNormal>Expertise</ParaNormal>
//                 <ParaNormalSmall>{el.about}</ParaNormalSmall>
//               </Stack>
//               <Stack direction={"row"} gap={"4px"} flexWrap={"wrap"} pt={2}>
//                 {days.map((day, i) => (
//                   <Stack>
//                     <ButtonMediumOutline
//                       key={i}
//                       color={data?.availablity?.[day] ? "white" : "white"}
//                       backgroundColor={
//                         data?.availablity?.[day] ? "#379237" : "transparent"
//                       }
//                     >
//                       {day}
//                     </ButtonMediumOutline>
//                     <Typography
//                       fontSize={"14px"}
//                       color={"white"}
//                       textAlign={"center"}
//                     >
//                       {data?.availablity?.[day] || "-"}
//                     </Typography>
//                   </Stack>
//                 ))}
//               </Stack>

//               <Stack direction={"row"} gap={"10px"} flexWrap={"wrap"}>
//                 <ButtonSmallOutline color={"#379237"}>
//                   Appointment
//                 </ButtonSmallOutline>
//                 <ButtonSmallOutline
//                   color={"#000000"}
//                   // onClick={() => router.push("/admin/login")}
//                   onClick={() => router.push(`/find-a-doctor/${el._id}`)}
//                 >
//                   View Profile
//                 </ButtonSmallOutline>
//               </Stack>
//             </Stack>
//           </Stack>
//         );
//       })}
//     </Stack>
//   );
// }

// import { Box, Stack, Typography } from "@mui/material";
// import Image from "next/image";
// import { Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
// import {
//   ParaNormal,
//   ParaNormalSmall,
// } from "@/app/styledComponents/frontend/Para";
// import {
//   ButtonSmallOutline,
//   ButtonVerySmallOutline,
// } from "@/app/styledComponents/frontend/Buttons";
// import { useDoctorById } from "@/app/components/admin/doctors/parts/useDoctor";
// import { useRouter } from "next/navigation";
// import { AnotherUrl } from "@/app/components/services/AnotherUrl";

// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// export default function Doctors({ data, departments }) {
//   const router = useRouter();
//  const getBannerUrl = (url) => {
//     if (!url) return "";
//     const fileName = url.substring(url.lastIndexOf("/") + 1);
//     return AnotherUrl(fileName);

    
//   };
//   const imagess = getBannerUrl(data.image);
//   console.log("imagessss", data);
//   return (
//     <Stack
//       direction={"row"}
//       flexWrap={"wrap"}
//       gap={{ md: "30px", xs: "10px" }}
//       justifyContent={"center"}
//       marginTop={{ md: "50px", xs: "15px" }}
//     >
//       {data?.map((el, i) => {
//         return (
//           <Stack
//             key={i}
//             width={{ lg: "30%", md: "46%", xs: "100%" }}
//             sx={{ borderRadius: "15px", overflow: "hidden" }}
//           >
//             <Box
//               height={{ xl: "227px", lg: "175px", md: "175px", xs: "165px" }}
//               backgroundColor={"#8EA5C3"}
//               width={"100%"}
//               position={"relative"}
//             >
//               {/* <Image
//                 src={el.image}
//                 alt="Doctor Image"
//                 fill
//                 objectFit="contain"
//                 objectPosition="center bottom"
//               /> */}
//               {imagess ? (
//                 <Image
//                   src={imagess}
//                   alt={data.name}
//                   fill
//                   style={{ objectFit: "contain" }}
//                 />
//               ) : (
//                 <div>Image Unavailable</div>
//               )}
//             </Box>
//             <Stack
//               height={{ md: "450px", lg: "505px", xl: "460px" }}
//               padding={{ lg: "20px 35px", md: "15px 25px", xs: "10px 15px" }}
//               gap={"10px"}
//               sx={{
//                 cursor: "pointer",
//                 backgroundColor: "white",
//                 borderRadius: "0 0 15px 15px",
//                 justifyContent: "space-evenly",
//               }}
//             >
//               <Head3
//                 fontSize={{ sm: "", smm: "", md: "1.3rem", lg: "1.6rem" }}
//                 textAlign={"left"}
//                 color="#486c9c"
//               >
//                 {el.name}
//               </Head3>
//               <Head4 textAlign={"left"} fontWeight={"400"} height={"50px"}>
//                 {el.designation}
//               </Head4>
//               <Stack>
//                 <ParaNormal fontWeight={"bold"} color={"#486c9c"}>
//                   Department
//                 </ParaNormal>
//                 <ParaNormalSmall>
//                   {departments?.find((dept) => dept._id === el.department)
//                     ?.name || "Not Available"}
//                   {/* {el.department} */}
//                 </ParaNormalSmall>
//               </Stack>
//               <Stack>
//                 <ParaNormal fontWeight={"bold"} color={"#486c9c"}>
//                   About
//                 </ParaNormal>
//                 <ParaNormalSmall
//                   className="section-scroll-2"
//                   height={"100px"}
//                   overflow={"auto"}
//                   dangerouslySetInnerHTML={{
//                     __html: el.about,
//                   }}
//                 />
//               </Stack>

//               {/* Availability Section */}
//               <Stack>
//                 <Stack direction={"row"} gap={"4px"} flexWrap={"wrap"}>
//                   {days.map((day, i) => (
//                     <Stack>
//                       <ButtonVerySmallOutline
//                         key={i}
//                         color={el.availablity?.[day] ? "white" : "#379237"}
//                         bgColor={
//                           el.availablity?.[day] ? "#379237" : "transparent"
//                         }
//                       >
//                         {day}
//                       </ButtonVerySmallOutline>
//                       <Typography
//                         fontSize={"8px"}
//                         color={"black"}
//                         textAlign={"center"}
//                       >
//                         {el.availablity?.[day] || "-"}
//                       </Typography>
//                     </Stack>
//                   ))}
//                 </Stack>
//               </Stack>

//               <Stack direction={"row"} gap={"10px"} flexWrap={"wrap"}>
//                 <ButtonSmallOutline
//                   padding={"8px 10px"}
//                   color={"#379237"}
//                   hoverColor={"#fff"}
//                 >
//                   Appointment
//                 </ButtonSmallOutline>
//                 <ButtonSmallOutline
//                   color={"#486c9c"}
//                   padding={"8px 10px"}
//                   hoverColor={"#fff"}
//                   onClick={() => router.push(`/find-a-doctor/${el._id}`)}
//                 >
//                   View Profile
//                 </ButtonSmallOutline>
//               </Stack>
//             </Stack>
//           </Stack>
//         );
//       })}
//     </Stack>
//   );
// }



import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import {
  ButtonSmallOutline,
  ButtonVerySmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import { useRouter } from "next/navigation";
import { AnotherUrl } from "@/app/components/services/AnotherUrl";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Doctors({ data = [], departments = [] }) {
  const router = useRouter();

  // Helper to convert image URL (handle relative path or full URL)
  const getBannerUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    const fileName = url.substring(url.lastIndexOf("/") + 1);
    return AnotherUrl(fileName);
  };

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={{ md: "30px", xs: "10px" }}
      justifyContent={"center"}
      marginTop={{ md: "50px", xs: "15px" }}
    >
      {data.map((el, i) => {
        const imageUrl = getBannerUrl(el.image);

        return (
          <Stack
            key={el._id || i}
            width={{ lg: "30%", md: "46%", xs: "100%" }}
            sx={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <Box
              height={{ xl: "227px", lg: "175px", md: "175px", xs: "165px" }}
              bgcolor={"#8EA5C3"}
              width={"100%"}
              position={"relative"}
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={el.name || "Doctor Image"}
                  fill
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <div>Image Unavailable</div>
              )}
            </Box>

            <Stack
              height={{ md: "450px", lg: "505px", xl: "460px" }}
              padding={{ lg: "20px 35px", md: "15px 25px", xs: "10px 15px" }}
              gap={"10px"}
              sx={{
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "0 0 15px 15px",
                justifyContent: "space-evenly",
              }}
            >
              <Head3
                fontSize={{ sm: "", smm: "", md: "1.3rem", lg: "1.6rem" }}
                textAlign={"left"}
                color="#486c9c"
              >
                {el.name}
              </Head3>
              <Head4 textAlign={"left"} fontWeight={"400"} height={"50px"}>
                {el.designation}
              </Head4>
              <Stack>
                <ParaNormal fontWeight={"bold"} color={"#486c9c"}>
                  Department
                </ParaNormal>
                <ParaNormalSmall>
                  {departments.find((dept) => dept._id === el.department)
                    ?.name || "Not Available"}
                </ParaNormalSmall>
              </Stack>
              <Stack>
                <ParaNormal fontWeight={"bold"} color={"#486c9c"}>
                  About
                </ParaNormal>
                <ParaNormalSmall
                  className="section-scroll-2"
                  height={"100px"}
                  overflow={"auto"}
                  dangerouslySetInnerHTML={{
                    __html: el.about || "",
                  }}
                />
              </Stack>

              {/* Availability Section */}
              <Stack>
                <Stack direction={"row"} gap={"4px"} flexWrap={"wrap"}>
                  {days.map((day, i) => (
                    <Stack key={day}>
                      <ButtonVerySmallOutline
                        color={el.availablity?.[day] ? "white" : "#379237"}
                        bgColor={
                          el.availablity?.[day] ? "#379237" : "transparent"
                        }
                      >
                        {day}
                      </ButtonVerySmallOutline>
                      <Typography
                        fontSize={"8px"}
                        color={"black"}
                        textAlign={"center"}
                      >
                        {el.availablity?.[day] || "-"}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>

              <Stack direction={"row"} gap={"10px"} flexWrap={"wrap"}>
                <ButtonSmallOutline
                  padding={"8px 10px"}
                  color={"#379237"}
                  hoverColor={"#fff"}
                >
                  Appointment
                </ButtonSmallOutline>
                <ButtonSmallOutline
                  color={"#486c9c"}
                  padding={"8px 10px"}
                  hoverColor={"#fff"}
                  onClick={() => router.push(`/find-a-doctor/${el._id}`)}
                >
                  View Profile
                </ButtonSmallOutline>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
