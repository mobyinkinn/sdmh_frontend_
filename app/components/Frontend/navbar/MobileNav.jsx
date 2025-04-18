// "use client";

// import { Box, Stack, Typography } from "@mui/material";
// import { useRouter } from "next/navigation";
// import {
//   FaUserMd,
//   FaCalendarCheck,
//   FaWhatsapp,
//   FaMicroscope,
// } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";
// import Modal from "../../ui/Modal";

// const MobileBottomBar = () => {
//   const router = useRouter();

//   return (
//     <Modal>
//       <Box
//         sx={{
//           position: "fixed",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           bgcolor: "#fff",
//           borderTop: "1px solid #ccc",
//           display: { xs: "flex", md: "none" },
//           justifyContent: "space-around",
//           alignItems: "center",
//           padding: "8px 0",
//           zIndex: 1000,
//           boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
//         }}
//       >
//         {[
//           {
//             icon: <FaUserMd size={30} />,
//             label: "Find Doctor",
//             link: "/find-a-doctor",
//           },
//           {
//             icon: <FaCalendarCheck size={30} />,
//             label: "Appointment",
//             open: "appointment",
//           },

//           {
//             icon: <FaMicroscope size={30} />,
//             label: "Lab Reports",
//             link: "https://www.sdmh.in/patientlogin/",
//           },
//           {
//             icon: <IoCall size={30} />,
//             label: "Call Us",
//             link: "tel:01413524444", // your hospital phone number
//             external: true,
//           },
//         ].map((item, i) => (
//           <Modal.Open key={i} opens={item.open}>
//             <Box
//               key={i}
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//               color="#005900"
//               onClick={() => {
//                 if (item.external && item.link.startsWith("tel:")) {
//                   window.location.href = item.link;
//                 } else if (item.link) {
//                   router.push(item.link);
//                 }
//               }}
//             >
//               {item.icon}
//               <Typography fontSize="10px">{item.label}</Typography>
//             </Box>
//           </Modal.Open>
//         ))}
//       </Box>
//      <Modal.Window name="appointment">
//                <div>
//                  <Typography textAlign={"center"} fontSize={"2rem"} color="green">
//                    Book an Appointment
//                  </Typography>
//                  <Typography textAlign={"center"}>
//                    Appointments can currently be booked by calling 7073111911 between
//                    7:00 AM and 4:00 PM. This service allows patients or their
//                    attendants to choose a preferred time slot for consultation with
//                    the doctor.
//                  </Typography>
//                  <Typography textAlign={"center"} marginTop={2}>
//                    <b>Please note:</b> Appointment slots are subject to availability.
//                    If a preferred slot is not available, patients will be attended
//                    through the regular OPD system.
//                  </Typography>
//                </div>
//              </Modal.Window>
//     </Modal>
//   );
// };

// export default MobileBottomBar;

"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaUserMd, FaCalendarCheck, FaMicroscope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Modal from "../../ui/Modal";

const MobileBottomBar = () => {
  const router = useRouter();

  const buttons = [
    {
      icon: <FaUserMd size={30} />,
      label: "Find Doctor",
      link: "/find-a-doctor",
    },
    {
      icon: <FaCalendarCheck size={30} />,
      label: "Appointment",
      modal: true,
      open: "appointment",
    },
    {
      icon: <FaMicroscope size={30} />,
      label: "Lab Reports",
      link: "https://www.sdmh.in/patientlogin/",
    },
    {
      icon: <IoCall size={30} />,
      label: "Call Us",
      link: "tel:01413524444",
      external: true,
    },
  ];

  return (
    <Modal>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "#fff",
          borderTop: "1px solid #ccc",
          display: { xs: "flex", md: "none" },
          justifyContent: "space-around",
          alignItems: "center",
          padding: "8px 0",
          zIndex: 1000,
          boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
        }}
      >
        {buttons.map((item, i) => {
          const content = (
            <Box
              key={i}
              display="flex"
              flexDirection="column"
              alignItems="center"
              color="#005900"
              onClick={() => {
                if (item.external && item.link?.startsWith("tel:")) {
                  window.location.href = item.link; // ✅ Call opens
                } else if (item.link) {
                  router.push(item.link); // ✅ Navigate to route or external
                }
              }}
            >
              {item.icon}
              <Typography fontSize="10px">{item.label}</Typography>
            </Box>
          );

          // Only wrap in Modal.Open if item.modal is true
          return item.modal ? (
            <Modal.Open key={i} opens={item.open}>
              {content}
            </Modal.Open>
          ) : (
            content
          );
        })}
      </Box>

      {/* Modal for Appointment */}
      <Modal.Window name="appointment">
                <div>
                  <Typography textAlign={"center"} fontSize={"2rem"} color="green">
                    Book an Appointment
                  </Typography>
                  <Typography textAlign={"center"}>
                    Appointments can currently be booked by calling 7073111911 between
                    7:00 AM and 4:00 PM. This service allows patients or their
                    attendants to choose a preferred time slot for consultation with
                    the doctor.
                  </Typography>
                  <Typography textAlign={"center"} marginTop={2}>
                    <b>Please note:</b> Appointment slots are subject to availability.
                    If a preferred slot is not available, patients will be attended
                    through the regular OPD system.
                  </Typography>
                </div>
              </Modal.Window>
    </Modal>
  );
};

export default MobileBottomBar;
