// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { Stack, Box, Typography } from "@mui/material";

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid2";

// import img1 from "../assets/stories/img1.png";
// import img2 from "../assets/stories/img2.png";
// import img3 from "../assets/stories/img3.png";
// import img4 from "../assets/stories/img4.png";

// export default function PatientStories() {
//   return (
//     <ContainerMain marginTop={"40px"}>
//       <Head1>Patient Stories</Head1>

//       <Stack
//         direction={"row"}
//         height={"70vh"}
//         gap={"20px"}
//         alignItems={"center"}
//         justifyContent={"center"}
//         marginTop={"50px"}
//       >
//         <Stack
//           width={"17%"}
//           height={"40vh"}
//           sx={{
//             backgroundImage: `url(${img3.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             borderRadius: "20px",
//           }}
//         ></Stack>
//         <Stack gap={"20px"} width={"17%"} height={"70vh"}>
//           <Stack
//             height={"40vh"}
//             sx={{
//               backgroundImage: `url(${img1.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               borderRadius: "20px",
//             }}
//           ></Stack>
//           <Stack
//             height={"40vh"}
//             sx={{
//               backgroundImage: `url(${img2.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               borderRadius: "20px",
//             }}
//           ></Stack>
//         </Stack>
//         <Stack
//           width={"17%"}
//           height={"70vh"}
//           sx={{
//             backgroundImage: `url(${img4.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             borderRadius: "20px",
//           }}
//         ></Stack>
//         <Stack gap={"20px"} width={"17%"} height={"70vh"}>
//           <Stack
//             height={"40vh"}
//             sx={{
//               backgroundImage: `url(${img1.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               borderRadius: "20px",
//             }}
//           ></Stack>
//           <Stack
//             height={"40vh"}
//             sx={{
//               backgroundImage: `url(${img2.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               borderRadius: "20px",
//             }}
//           ></Stack>
//         </Stack>
//         <Stack
//           width={"17%"}
//           height={"40vh"}
//           sx={{
//             backgroundImage: `url(${img3.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             borderRadius: "20px",
//           }}
//         ></Stack>
//       </Stack>
//     </ContainerMain>
//   );
// }
"use client";

// import { useState } from "react";
// import { ContainerMain } from "@/app/styledComponents/frontend/Container";
// import { Head1 } from "@/app/styledComponents/frontend/Headings";
// import { Stack, Box } from "@mui/material";
// import img1 from "../assets/stories/img1.png";
// import img2 from "../assets/stories/img2.png";
// import img3 from "../assets/stories/img3.png";
// import img4 from "../assets/stories/img4.png";

// export default function PatientStories() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   return (
//     <ContainerMain marginTop={"40px"}>
//       <Head1>Patient Stories</Head1>
//       <Stack
//         direction="row"
//         height="70vh"
//         alignItems="center"
//         justifyContent="center"
//         marginTop="50px"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         sx={{
//           position: "relative",
//           width: "80%",
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             left: isHovered ? "0%" : "25%",
//             transition: "all 0.5s ease",
//             width: "50%",
//             height: "100%",
//             backgroundImage: `url(${img1.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "20px",
//             zIndex: isHovered ? 3 : 1,
//           }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             left: isHovered ? "-30%" : "20%",
//             transition: "all 0.5s ease",
//             width: "50%",
//             height: "100%",
//             backgroundImage: `url(${img2.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "20px",
//             zIndex: 2,
//             opacity: isHovered ? 1 : 0,
//           }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             right: isHovered ? "0%" : "25%",
//             transition: "all 0.5s ease",
//             width: "50%",
//             height: "100%",
//             backgroundImage: `url(${img4.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "20px",
//             zIndex: isHovered ? 3 : 1,
//           }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             right: isHovered ? "-30%" : "20%",
//             transition: "all 0.5s ease",
//             width: "50%",
//             height: "100%",
//             backgroundImage: `url(${img3.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "20px",
//             zIndex: 2,
//             opacity: isHovered ? 1 : 0,
//           }}
//         />
//       </Stack>
//     </ContainerMain>
//   );
// }

import { useState } from "react";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Box, Dialog, IconButton } from "@mui/material";
import img1 from "../assets/stories/img1.jpg";
import img2 from "../assets/stories/img2.jpg";
import img3 from "../assets/stories/img3.jpg";
import img4 from "../assets/stories/img4.jpg";
import first from "../assets/stories/first.jpg";
import second from "../assets/stories/second.jpg";
import third from "../assets/stories/third.jpg";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useVideos } from "@/app/components/admin/videos/useVideos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
export default function PatientStories() {
  const { data, isLoading, error } = useVideos();
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const extractVideoId = (url) => {
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/(?:shorts\/|embed\/|v\/|watch\?.*v=)))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };
  const initialImages = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img1 },
    { img: img3 },
    { img: img2 },
  ];
  const handleOpenModal = (videoUrl) => {
    console.log("videourl", videoUrl);
    const videoId = extractVideoId(videoUrl);
    console.log("videoId", videoId);

    if (videoId) {
      setSelectedVideo(videoId);
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedVideo("");
  };

  return (
    <ContainerMain
      marginTop={"40px"}
      alignItems="center"
      padding={{ sm: "5px" }}
    >
      <Head1>Patient Stories</Head1>
      <Stack
        display={{ md: "flex", xs: "none" }}
        onMouseLeave={handleMouseLeave}
        direction="row"
        height="70vh"
        alignItems="center"
        justifyContent="center"
        marginTop="50px"
        sx={{
          position: "relative",
          width: "80%",
        }}
      >
        {/* Left Side Image */}
        <Stack
          gap={1}
          width={"25%"}
          sx={{
            transform: isHovered ? "translateX(-10%)" : "translateX(60%)",
            transition: "all 0.5s ease",
          }}
        >
          <Box
            sx={{
              // width: isHovered ? "20%" : "35%",
              height: "34vh",
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              // transform: isHovered ? "translateX(-50%)" : "translateX(-200%)",
              transition: "all 0.5s ease",
              zIndex: 2,
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
              onClick={() => handleOpenModal(data[7].url)}
            >
              <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              // width: isHovered ? "20%" : "35%",
              height: "34vh",
              backgroundImage: `url(${img2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              // transform: isHovered ? "translateX(-50%)" : "translateX(-200%)",
              transition: "all 0.5s ease",
              zIndex: 2,
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
              onClick={() => handleOpenModal(data[2].url)}
            >
              <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
        </Stack>
        <Box
          onMouseEnter={handleMouseEnter}
          sx={{
            width: "30%",
            height: "70vh",
            backgroundImage: `url(${first.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            zIndex: 3,
            transition: "all 0.5s ease",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            }}
            onClick={() => handleOpenModal(data[2].url)}
          >
            <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>
        {/* Right Side Image */}
        <Stack
          gap={1}
          width={"25%"}
          sx={{
            transform: isHovered ? "translateX(10%)" : "translateX(-60%)",
            transition: "all 0.5s ease",
          }}
        >
          <Box
            sx={{
              // width: "35%",
              height: "34vh",
              backgroundImage: `url(${img3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              // transform: isHovered ? "translateX(50%)" : "translateX(-100%)",
              transition: "all 0.5s ease",
              zIndex: 2,
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
              onClick={() => handleOpenModal(data[15].url)}
            >
              <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              // width: "35%",
              height: "34vh",
              backgroundImage: `url(${img4.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              // transform: isHovered ? "translateX(50%)" : "translateX(-100%)",
              transition: "all 0.5s ease",
              zIndex: 2,
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
              onClick={() => handleOpenModal(data[3].url)}
            >
              <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
        </Stack>

        {/* Left-most Image */}
        <Box
          sx={{
            position: "absolute",
            left: isHovered ? "-10%" : "20%",
            width: "15%",
            height: "35vh",
            backgroundImage: `url(${second.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            transition: "all 0.5s ease",
            zIndex: 1,
            opacity: isHovered ? 1 : 0.2,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            }}
            onClick={() => handleOpenModal(data[11].url)}
          >
            <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>

        {/* Right-most Image */}
        <Box
          sx={{
            position: "absolute",
            right: isHovered ? "-10%" : "20%",
            width: "15%",
            height: "35vh",
            backgroundImage: `url(${third.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            transition: "all 0.5s ease",
            zIndex: 1,
            opacity: isHovered ? 1 : 0.2,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            }}
            onClick={() => handleOpenModal(data[13].url)}
          >
            <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>
      </Stack>
      <Stack
        alignItems={{ xs: "center", md: "start" }}
        sx={{ mb: 5 }}
        display={{ md: "flex", xs: "none" }}
      >
        <ButtonMediumOutline
          color="#379237"
          hcolor="#005900"
          onClick={() => router.push(`/patient-testimonials`)}
        >
          View All
        </ButtonMediumOutline>
      </Stack>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <IconButton
            sx={{
              position: "absolute",
              top: 5,
              right: 2,
              color: "white",
              zIndex: 10,
            }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>
          {selectedVideo && (
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </Box>
      </Dialog>
    </ContainerMain>
  );
}
function ImageCard({ img }) {
  return (
    <Stack padding="5px">
      <Stack
        width="100%"
        height="30vh"
        padding="5px"
        backgroundColor="#476C9B"
        borderRadius="5px"
      >
        <Box
          sx={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100%",
            width: "100%",
          }}
        ></Box>
      </Stack>
    </Stack>
  );
}
