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

// const days = ["Sun", "Mon", "Tues", "Wed", "Thrus", "Fri", "Sat"];

// export default function Doctors({ departments, _id }) {
//   const { data, isLoading, error } = useDoctorById(_id);
// console.log("data",data)
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
//               {/* <Stack direction={"row"} gap={"4px"} flexWrap={"wrap"}>
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
//               </Stack> */}

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

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Head1, Head3, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import {
  ButtonSmallOutline,
  ButtonVerySmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import { useDoctorById } from "@/app/components/admin/doctors/parts/useDoctor";
import { useRouter } from "next/navigation";
import { useDepartment } from "@/app/components/admin/departments/parts/useDepartment";
import Modal from "@/app/components/ui/Modal";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Doctors({ _id }) {
  const { data, isLoading, error } = useDoctorById(_id);
  const { data: departments, isLoading: isLoadingDepartments } =
    useDepartment();
  console.log("data", data);

  const router = useRouter();
  return (
    <>
    <Head1
        textAlign={{ sm: "center", smm: "left", md: "center", lg: "center" }}
        color="#005900"
      >
        Meet Our Experts in the Department
      </Head1>
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={{ md: "30px", xs: "10px" }}
      justifyContent={"center"}
      marginTop={{ md: "50px", xs: "15px" }}
    >
      
     {data?.map((el, i) => {
             return (
               <Stack
                 key={i}
                 width={{ lg: "31%", md: "46%", xs: "100%" }}
                 sx={{ borderRadius: "15px", overflow: "hidden" }}
               >
                 <Box
                   height={{
                     xl: "227px",
                     lg: "175px",
                     md: "175px",
                     xs: "165px",
                   }}
                   backgroundColor={"#8EA5C3"}
                   width={"100%"}
                   position={"relative"}
                 >
                   <Image
                     src={el.image}
                     alt="Doctor Image"
                     fill
                     objectFit="contain"
                     objectPosition="center bottom"
                   />
                 </Box>
                 <Stack
                   height={{ md: "450px", lg: "505px", xl: "460px" }}
                   padding={{
                     lg: "20px 35px",
                     md: "15px 25px",
                     xs: "10px 15px",
                   }}
                   gap={"10px"}
                   sx={{
                     cursor: "pointer",
                     backgroundColor: "white",
                     borderRadius: "0 0 15px 15px",
                     justifyContent: "space-evenly",
                   }}
                 >
                   <Head3
                     fontSize={{ sm: "", smm: "", md: "1.3rem", lg: "1.3rem" }}
                     textAlign={"left"}
                     color="#486c9c"
                   >
                     {el.name}
                   </Head3>
                   <Head4
                     textAlign={"left"}
                     fontWeight={"400"}
                     fontSize={{ sm: "", smm: "", md: "1.3rem", lg: "1rem" }}
                   >
                     {el.designation}
                   </Head4>
                   <Stack>
                     <ParaNormal fontWeight={"bold"} color={"#486c9c"}>
                       Department
                     </ParaNormal>
                     <ParaNormalSmall>
                       {departments?.find((dept) => dept._id === el.department)
                         ?.name || "Not Available"}
                       {/* {el.department} */}
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
                         __html: el.about,
                       }}
                     />
                   </Stack>

                   {/* Availability Section */}
                   <Stack>
                     <Stack direction={"row"} gap={"4px"} flexWrap={"wrap"}>
                       {days.map((day, i) => (
                         <Stack>
                           <ButtonVerySmallOutline
                             key={i}
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
                   <Modal>
                     <Stack direction={"row"} gap={"10px"} flexWrap={"wrap"}>
                       <Modal.Open opens="appointment">
                         <ButtonSmallOutline
                           padding={"8px 10px"}
                           color={"#379237"}
                           hoverColor={"#fff"}
                         >
                           Appointment
                         </ButtonSmallOutline>
                       </Modal.Open>
                       <ButtonSmallOutline
                         color={"#486c9c"}
                         padding={"8px 10px"}
                         hoverColor={"#fff"}
                         onClick={() => router.push(`/find-a-doctor/${el._id}`)}
                       >
                         View Profile
                       </ButtonSmallOutline>
                     </Stack>
                     <Modal.Window name="appointment">
                       <div>
                         <Typography
                           textAlign={"center"}
                           fontSize={"2rem"}
                           color="green"
                         >
                           Book an Appointment
                         </Typography>
                         <Typography textAlign={"center"}>
                           Appointments can currently be booked by calling
                           7073111911 between 7:00 AM and 4:00 PM. This service
                           allows patients or their attendants to choose a
                           preferred time slot for consultation with the doctor.
                         </Typography>
                         <Typography textAlign={"center"} marginTop={2}>
                           <b>Please note:</b> Appointment slots are subject to
                           availability. If a preferred slot is not available,
                           patients will be attended through the regular OPD
                           system.
                         </Typography>
                       </div>
                     </Modal.Window>
                   </Modal>
                 </Stack>
               </Stack>
             );
           })}
    </Stack>
    </>
  );
}
