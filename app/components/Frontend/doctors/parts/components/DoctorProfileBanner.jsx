// import { Stack, Typography, Box } from "@mui/material";
// import doctor from "../assets/doctor1.png";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import {
//   ParaNormal,
//   ParaNormalSmall,
// } from "@/app/styledComponents/frontend/Para";
// import {
//   ButtonMediumOutline,
//   ButtonSmallOutline,
// } from "@/app/styledComponents/frontend/Buttons";

// export default function DoctorProfileBanner() {
//   return (
//     <Stack width="100%">
//       <Stack
//       overflow={"hidden"}
//         width="100%"
//         height="fit-content"
//         direction={{ md: "row" }}
//         justifyContent="start"
//       >
//         <Box
//           sx={{
//             backgroundImage: `url(${doctor.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             height: "350px",
//             width: { md: "30%" },
//           }}
//         ></Box>
//         <Stack
//           sx={{
//             position: "relative",
//             backgroundColor: "#005900",
//             padding: { md: "0 70px", xs: "20px 20px" },
//             justifyContent: "center",
//             gap: "5px",
//             width: { md: "70%" },
//             overflow: "hidden",
//             transform: "skew(5deg)", // Apply skew to the background
//             transformOrigin: "top left",
//           }}
//         >
//           <Stack
//             sx={{
//               transform: "skew(-5deg)", // Reverse the skew for content
//               transformOrigin: "top left",
//             }}
//           >
//             <Head1
//               color="white"
//               textAlign={{ lg: "left", md: "left", smm: "left", sm: "left" }}
//             >
//               Dr. Aafreen Siddique
//             </Head1>
//             <ParaNormal color="white">Consultant, Cardiology</ParaNormal>
//             <ParaNormalSmall color="white">
//               MBBS, MD, DA, Fellowship in Onco-Anaesthesia and Chronic Cancer
//               Pain
//             </ParaNormalSmall>
//             <ParaNormalSmall color="white">
//               Department: Cardiology{" "}
//             </ParaNormalSmall>
//             <ParaNormalSmall color="white">
//               Years of practice: Cardiology{" "}
//             </ParaNormalSmall>
//             <Stack
//               marginTop="20px"
//               display={{ md: "flex", xs: "none" }}
//               gap="20px"
//               direction="row"
//             >
//               <ButtonMediumOutline hoverColor="#005900" color="white">
//                 Make Appointment
//               </ButtonMediumOutline>
//               <ButtonMediumOutline hoverColor="#005900" color="white">
//                 Video Consultation
//               </ButtonMediumOutline>
//             </Stack>
//             <Stack
//               marginTop="20px"
//               display={{ md: "none", xs: "flex" }}
//               gap="20px"
//               direction="row"
//             >
//               <ButtonSmallOutline hoverColor="#005900" color="white">
//                 Make Appointment
//               </ButtonSmallOutline>
//               <ButtonSmallOutline hoverColor="#005900" color="white">
//                 Video Consultation
//               </ButtonSmallOutline>
//             </Stack>
//           </Stack>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// }

import { Stack, Box, Typography } from "@mui/material";
import doctor from "../assets/doctor1.png";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import {
  ButtonMediumOutline,
  ButtonSmallOutline,
  ButtonVerySmallOutline,
} from "@/app/styledComponents/frontend/Buttons";
import {
  useDepartment,
  useDepartmentById,
} from "@/app/components/admin/departments/parts/useDepartment";
import Spinner from "@/app/components/ui/Spinner";
import Modal from "@/app/components/ui/Modal";

export default function DoctorProfileBanner({ data }) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log("data", data);
  const _id = data?.department;
  const { data: departmentData, isLoading: isLoadingDepartments } =
    useDepartment();
  if (isLoadingDepartments) return <Spinner />;
  return (
    <Stack width="100%">
      <Stack
        overflow="hidden"
        width="100%"
        height="fit-content"
        direction={{ md: "row" }}
        justifyContent="start"
      >
        <Stack
          backgroundColor={"#D8E0EB"}
          sx={{
            position: "relative",
            width: { md: "30%" },
            height: "350px",
            overflow: "hidden",
            transform: { md: "skew(1deg)", sm: "none" }, // Skew the image container
            transformOrigin: { md: "bottom right", sm: "none" },
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${data?.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center bottom",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          />
        </Stack>

        <Stack
          sx={{
            position: "relative",
            backgroundColor: "#005900",
            padding: { md: "0 70px", xs: "20px 20px" },
            justifyContent: "center",
            gap: "5px",
            width: { md: "70%" },
            overflow: "hidden",
            transform: { md: "skew(1deg)", sm: "none" }, // Skew the image container
            transformOrigin: { md: "top left", sm: "none" },
          }}
        >
          <Stack>
            <Head1
              color="white"
              textAlign={{ lg: "left", md: "left", smm: "left", sm: "left" }}
              fontSize={{ lg: "2rem", md: "2rem", smm: "2rem", sm: "2rem" }}
            >
              {data?.name}
            </Head1>
            <ParaNormal color="white">{data?.designation}</ParaNormal>
            <ParaNormalSmall color="white"></ParaNormalSmall>
            <ParaNormalSmall color="white">
              <span style={{ fontWeight: "bold" }}> Department : </span>
              {departmentData?.find((dept) => dept._id === data?.department)
                ?.name || "Not Available"}
              {/* Department: {data?.department} */}
            </ParaNormalSmall>
            <Stack direction={"row"} gap={"20px"}>
              <ParaNormalSmall color="white">
                <span style={{ fontWeight: "bold" }}> Room </span>:{" "}
                {data?.room || "-"}
                {/* {departmentData?.find((dept) => dept._id === data?.department)
                ?.name || "Not Available"} */}
                {/* Department: {data?.department} */}
              </ParaNormalSmall>
              <ParaNormalSmall color="white">
                <span style={{ fontWeight: "bold" }}>Floor </span> :{" "}
                {data?.floor || "-"}
                {/* {departmentData?.find((dept) => dept._id === data?.department)
                ?.name || "Not Available"} */}
                {/* Department: {data?.department} */}
              </ParaNormalSmall>
            </Stack>
            {/* <ParaNormalSmall color="white">
              Years of practice: {data?.experience}
            </ParaNormalSmall> */}

            {/* Buttons for larger screens */}
            <Modal>
              <Stack
                marginTop="20px"
                display={{ md: "flex", xs: "none" }}
                gap="45px"
                direction="row"
              >
                <Modal.Open opens="appointment">
                  <ButtonMediumOutline
                    padding={"11px 27px"}
                    hcolor="white"
                    hoverColor="#005900"
                    color="white"
                  >
                    Make Appointment
                  </ButtonMediumOutline>
                </Modal.Open>
                <ButtonMediumOutline
                  padding={"11px 27px"}
                  hcolor="white"
                  hoverColor="#005900"
                  color="white"
                >
                  Video Consultation
                </ButtonMediumOutline>
              </Stack>

              {/* Buttons for smaller screens */}
              <Stack
                marginTop="20px"
                display={{ md: "none", xs: "flex" }}
                gap="20px"
                direction="row"
              >
                <Modal.Open opens="appointment">
                  <ButtonMediumOutline
                    padding={"11px 27px"}
                    hcolor="white"
                    hoverColor="#005900"
                    color="white"
                  >
                    Make Appointment
                  </ButtonMediumOutline>
                </Modal.Open>
                <ButtonSmallOutline
                  padding={"11px 27px"}
                  hcolor="white"
                  hoverColor="#005900"
                  color="white"
                >
                  Video Consultation
                </ButtonSmallOutline>
              </Stack>
              <Modal.Window name="appointment">
                      <div>
                        <Typography textAlign={"center"} fontSize={"2rem"} color="green">
                          Book an Appointment
                        </Typography>
                        <Typography textAlign={"center"}>
                          Appointments can currently be booked by calling 7073111911 between
                          7:00 AM and 4:00 PM. This service allows patients or their
                          attendants to choose a preferred time slot for consultation with the
                          doctor.
                        </Typography>
                        <Typography textAlign={"center"} marginTop={2}>
                          <b>Please note:</b> Appointment slots are subject to availability.
                          If a preferred slot is not available, patients will be attended
                          through the regular OPD system.
                        </Typography>
                      </div>
                    </Modal.Window>
            </Modal>
            <Stack direction={"row"} gap={"4px"} flexWrap={"wrap"} pt={2}>
              {days.map((day, i) => (
                <Stack>
                  <ButtonMediumOutline
                    padding={"7px 28px"}
                    key={i}
                    color={data?.availablity?.[day] ? "white" : "white"}
                    backgroundColor={
                      data?.availablity?.[day] ? "#379237" : "transparent"
                    }
                    hoverColor="#379237"
                  >
                    {day}
                  </ButtonMediumOutline>
                  <Typography
                    fontSize={"14px"}
                    color={"white"}
                    textAlign={"center"}
                  >
                    {data?.availablity?.[day] || "-"}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
