// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { Stack, Typography } from "@mui/material";

// import appointment from "../assets/icons/appointment.png";
// import book from "../assets/icons/book.png";
// import consult from "../assets/icons/consult.png";
// import lab from "../assets/icons/lab.png";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Modal from "@/app/components/ui/Modal";

// const todoData = [
//   { id: 0, title: "Book Appointment", icon: appointment, link: "", open:"appointment" },
//   { id: 1, title: "Book Health Check-up", icon: book, link: "health-checkup" },
//   { id: 2, title: "Consult Online", icon: consult, link: "", open:"Video" },
//   {
//     id: 3,
//     title: "Lab Report",
//     icon: lab,
//     link: "https://www.sdmh.in/patientlogin/",
//   },
// ];

// export default function Todo() {
//   const router = useRouter();
//   return (
//     <ContainerMain bgColor={"#8EA5C3"}>
//       <Stack direction={{ xs: "column", lg: "row" }} justifyContent={"center"}>
//         <Head1 color="#000000">What would you like&nbsp;</Head1>
//         <Head1 color="#ffffff">To Do today?</Head1>
//       </Stack>
//       <Modal>
//       <Stack
//         marginTop={{ md: "30px" }}
//         direction={"row"}
//         justifyContent={"center"}
//         alignItems={"center"}
//         gap={{ md: "20px", xs: "10px" }}
//         flexWrap={"wrap"}
//       >
//         {todoData.map((el, i) => {
//           return (
//             <Modal.Open opens={el.open}>
//               <Stack
//                 sx={{ cursor: "pointer" }}
//                 key={i}
//                 backgroundColor={"white"}
//                 borderRadius={"10px"}
//                 padding={"30px 10px"}
//                 alignItems={"center"}
//                 width={{ md: "200px", xs: "157px" }}
//                 height={"180px"}
//                 gap={{ md: "20px", xs: "5px" }}
//                 justifyContent={"center"}
//                 onClick={() => router.push(`${el.link}`)}
//               >
//                 <Image src={el.icon} width={60} height={60} alt="" />

//                 <Typography
//                   height={"38px"}
//                   fontSize={{ md: "1rem", xs: "0.8rem" }}
//                   textAlign={"center"}
//                 >
//                   {el.title}
//                 </Typography>
//               </Stack>
//             </Modal.Open>
//           );
//         })}
//       </Stack>
//       <Modal.Window name="appointment">
//         <div>
//           <Typography textAlign={"center"} fontSize={"2rem"} color="green">
//             Book an Appointment
//           </Typography>
//           <Typography textAlign={"center"}>
//             Appointments can currently be booked by calling 7073111911 between
//             7:00 AM and 4:00 PM. This service allows patients or their
//             attendants to choose a preferred time slot for consultation with the
//             doctor.
//           </Typography>
//           <Typography textAlign={"center"} marginTop={2}>
//             <b>Please note:</b> Appointment slots are subject to availability.
//             If a preferred slot is not available, patients will be attended
//             through the regular OPD system.
//           </Typography>
//         </div>
//       </Modal.Window>
//       <Modal.Window name="Video">
//         <Stack gap={2}>
//           <Typography textAlign={"center"} fontSize={"2rem"} color="green">
//             Video Consultation
//           </Typography>
//           <Typography textAlign={"center"}>
//             Video consultations are currently available only for follow-up
//             patients, as advised by our doctors. For assistance with scheduling
//             a video consultation, please contact us at 707311-11911.
//           </Typography>
//         </Stack>
//       </Modal.Window>
//     </Modal>
//     </ContainerMain>
//   );
// }


import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";
import appointment from "../assets/icons/appointment.png";
import book from "../assets/icons/book.png";
import consult from "../assets/icons/consult.png";
import lab from "../assets/icons/lab.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/ui/Modal";

const todoData = [
  {
    id: 0,
    title: "Book Appointment",
    icon: appointment,
    link: "",
    open: "appointment",
  },
  { id: 1, title: "Book Health Check-up", icon: book, link: "/health-checkup" },
  { id: 2, title: "Consult Online", icon: consult, link: "", open: "Video" },
  {
    id: 3,
    title: "Lab Report",
    icon: lab,
    link: "https://www.sdmh.in/patientlogin/",
  },
];

export default function Todo() {
  const router = useRouter();

  const renderCard = (el, i) => (
    <Stack
      key={i}
      sx={{ cursor: "pointer" }}
      backgroundColor={"white"}
      borderRadius={"10px"}
      padding={"30px 10px"}
      alignItems={"center"}
      width={{ md: "200px", xs: "157px" }}
      height={"180px"}
      gap={{ md: "20px", xs: "14px" }}
      justifyContent={"center"}
      onClick={() => {
        if (el.link) {
          if (el.link.startsWith("http")) {
            window.open(el.link, "_blank");
          } else {
            router.push(el.link);
          }
        }
      }}
    >
      <Image src={el.icon} width={60} height={60} alt="" />
      <Typography
        height={"38px"}
        fontSize={{ md: "1rem", xs: "1rem" }}
        textAlign={"center"}
      >
        {el.title}
      </Typography>
    </Stack>
  );

  return (
    <ContainerMain bgColor={"#8EA5C3"}>
      <Stack direction={{ xs: "column", lg: "row" }} justifyContent={"center"}>
        <Head1 color="#000000" fontSize={{ sm: "1.4rem" }}>
          What would you like&nbsp;
        </Head1>
        <Head1 color="#ffffff" fontSize={{ sm: "1.4rem" }}>
          To Do today?
        </Head1>
      </Stack>

      <Modal>
        <Stack
          marginTop={{ md: "30px" }}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ md: "20px", xs: "10px" }}
          flexWrap={"wrap"}
        >
          {todoData.map((el, i) =>
            el.open ? (
              <Modal.Open key={i} opens={el.open}>
                {renderCard(el, i)}
              </Modal.Open>
            ) : (
              renderCard(el, i)
            )
          )}
        </Stack>

        {/* Modal windows */}
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

        <Modal.Window name="Video">
          <Stack gap={2}>
            <Typography textAlign={"center"} fontSize={"2rem"} color="green">
              Video Consultation
            </Typography>
            <Typography textAlign={"center"}>
              Video consultations are currently available only for follow-up
              patients, as advised by our doctors. For assistance with
              scheduling a video consultation, please contact us at
              707311-11911.
            </Typography>
          </Stack>
        </Modal.Window>
      </Modal>
    </ContainerMain>
  );
}
