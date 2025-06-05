// "use client";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";
// import { Box, Stack, Typography, Modal, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useNewspress } from "@/app/components/admin/newspress/useNewspress";
// import Spinner from "@/app/components/ui/Spinner";
// import { useRouter } from "next/navigation";

// const PmDm = () => {
//   const { data: pressData, isLoading } = useNewspress();
//   const filteredNewspress = pressData?.filter(
//     (newspress) => newspress.status !== false
//   );
//   const router = useRouter();
//   const [openImage, setOpenImage] = useState() // store image URL or null

//   if (isLoading) return <Spinner />;

//   const handleOpen = (imageUrl) => {
//     setOpenImage(imageUrl);
//   };

//   const handleClose = () => {
//     setOpenImage(null);
//   };

//   return (
//     <Stack p={{ md: 5, xs: 2 }}>
//       <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
//         <Head1 color="#007946">Print Media&nbsp;</Head1>
//         <Head1 color="black">Releases and&nbsp;</Head1>
//         <Head1 color="#007946">Digital Media</Head1>
//       </Stack>
//       <ParaNormal style={{ textAlign: "center" }}>
//         Breaking News, World & Multimedia
//       </ParaNormal>
//       <Stack
//         direction={"row"}
//         flexWrap={"wrap"}
//         justifyContent={"center"}
//         alignItems={"center"}
//         gap={2}
//         p={{ md: 3, xs: "10px 0" }}
//       >
//         {filteredNewspress.map((item) => (
//           <Stack
//           width={"32%"}
//             key={item.id}
//             alignItems={"center"}
//             sx={{ cursor: "pointer" }}
//             onClick={() => handleOpen(item.image)}
//           >
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "400px",
//                 height: "280px",
//                 overflow: "hidden",
//                 borderRadius: "8px",
//                 boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 layout="fill"
//                 objectFit="cover"
//                 style={{ filter: "brightness(0.8)" }}
//               />
//             </Box>
//             <Stack p={"20px 0 40px 10px"}>
//               <Typography
//                 sx={{
//                   color: "black",
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   height:"99px"
//                 }}
//               >
//                 {item.title}
//               </Typography>
//             </Stack>
//           </Stack>
//         ))}
//       </Stack>

//       {/* Modal for full image view */}
//       <Modal
//         open={!!openImage}
//         onClose={handleClose}
//         aria-labelledby="modal-image"
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           p: 2,
//         }}
//       >
//         <Box
//           sx={{
//             background:"black",
//             position: "relative",
//             outline: "none",
//             maxWidth: "90vw",
//             maxHeight: "90vh",
//             borderRadius: 2,
//             boxShadow: 24,
//           }}
//         >
//           <IconButton
//             aria-label="close"
//             onClick={handleClose}
//             sx={{
//               position: "absolute",
//               top: 8,
//               right: 8,
//               color: "white",
//               backgroundColor: "rgba(0,0,0,0.5)",
//               "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
//               zIndex: 10,
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//           {openImage && (
//             <Image
//               src={openImage}
//               alt="Full view"
//               width={800}
//               height={600}
//               style={{ borderRadius: 8, objectFit: "contain" }}
//               priority
//             />
//           )}
//         </Box>
//       </Modal>
//     </Stack>
//   );
// };

// export default PmDm;


"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import {
  Box,
  Stack,
  Typography,
  Modal,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import Image from "next/image";
import { useNewspress } from "@/app/components/admin/newspress/useNewspress";
import Spinner from "@/app/components/ui/Spinner";
import { useRouter } from "next/navigation";
import { getUrl } from "@/app/utils/getUrl";

const PmDm = () => {
  const { data: pressData, isLoading } = useNewspress();
  const filteredNewspress = pressData?.filter(
    (newspress) => newspress.status !== false
  );
  const router = useRouter();
  const [openImage, setOpenImage] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isLoading) return <Spinner />;

  const handleOpen = (imageUrl) => {
    setOpenImage(imageUrl);
  };

  const handleClose = () => {
    setOpenImage(null);
  };

  return (
    <Stack p={{ md: 5, xs: 2 }}>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        textAlign="center"
      >
        <Head1 color="#007946">Print Media&nbsp;</Head1>
        <Head1 color="black">Releases and&nbsp;</Head1>
        <Head1 color="#007946">Digital Media</Head1>
      </Stack>

      <ParaNormal style={{ textAlign: "center" }}>
        Breaking News, World & Multimedia
      </ParaNormal>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
        gap={3}
        p={{ md: 3, xs: 2 }}
      >
        {filteredNewspress.map((item) => (
          <Stack
            key={item.id}
            sx={{
              width: { xs: "100%", sm: "100%", md: "30%" },
              cursor: "pointer",
              alignItems: "center",
            }}
            onClick={() => handleOpen(item.image)}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 200, sm: 250, md: 280 },
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src={getUrl(item.image)}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                style={{ filter: "brightness(0.8)" }}
              />
            </Box>
            <Stack p={"16px 0"}>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  textAlign: "center",
                  height: "auto",
                }}
              >
                {item.title}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>

      {/* Modal for full image view */}
      <Modal
        open={!!openImage}
        onClose={handleClose}
        aria-labelledby="modal-image"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            background: "black",
            position: "relative",
            outline: "none",
            width: "100%",
            maxWidth: "90vw",
            maxHeight: "90vh",
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
          {openImage && (
            <Image
              src={getUrl(openImage)}
              alt="Full view"
              width={isMobile ? 350 : 800}
              height={isMobile ? 250 : 600}
              style={{ borderRadius: 8, objectFit: "contain", width: "100%" }}
              priority
            />
          )}
        </Box>
      </Modal>
    </Stack>
  );
};

export default PmDm;
