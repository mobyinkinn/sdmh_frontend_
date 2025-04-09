// import { Head1 } from '@/app/styledComponents/frontend/Headings'
// import { ParaNormal } from '@/app/styledComponents/frontend/Para';
// import { Stack } from '@mui/material'
// import React from 'react'
// import img1 from "./assets/img1.png"
// import Image from 'next/image';
// const PatientStories = () => {
//     const data = [
//       {
//         id: 1,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 2,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 3,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 4,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//       {
//         id: 5,
//         image: img1,
//         title: "Pre-term Babies",
//       },
//     ];
//   return (
//     <Stack bgcolor={"#D8E0EB"}>
//       <Stack alignItems={"center"} p={4}>
//         <Head1 color="#005900">Patient Stories</Head1>
//         <ParaNormal color="black" style={{ width: "50%", textAlign: "center" }}>
//           It is a long established fact that a reader will be distracted by the
//           readable
//         </ParaNormal>
//       </Stack>
//       <Stack direction={"row"} flexWrap={"wrap"} gap={3} justifyContent={"center"}>
//         {data.map((d) => (
//           <Stack>
//             <Image src={d.image} width={300}/>
//           </Stack>
//         ))}
//       </Stack>
//     </Stack>
//   );
// }

// export default PatientStories
"use client";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Box, Dialog, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import img1 from "./assets/img1.png";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";
import { useVideos } from "@/app/components/admin/videos/useVideos";
import Spinner from "@/app/components/ui/Spinner";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

const PatientStories = () => {
  const { data, isLoading, error } = useVideos();
  console.log("data",data)
  const [visibleCount, setVisibleCount] = useState(7);
  const visibleData = data?.slice(0, visibleCount);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const extractVideoId = (url) => {
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/(?:shorts\/|embed\/|v\/|watch\?.*v=)))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  if (isLoading) return <Spinner />;

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

  const splitData = (visibleData) => {
    const rows = [];
    let toggle = true;
    for (let i = 0; i < visibleData.length; ) {
      rows.push(visibleData.slice(i, i + (toggle ? 4 : 3)));
      i += toggle ? 4 : 3;
      toggle = !toggle;
    }
    return rows;
  };

  const rows = splitData(visibleData);

  return (
    <Stack bgcolor={"#D8E0EB"} padding={4}>
      <Stack alignItems={"center"} mb={4}>
        <Head1 color="#005900">Patient Stories</Head1>
        <ParaNormal
          color="black"
          width={{ lg: "50%", md: "50%", smm: "90%", sm: "90%" }}
          style={{ textAlign: "center" }}
        >
          It is a long established fact that a reader will be distracted by the
          readable
        </ParaNormal>
      </Stack>
      {rows.map((row, index) => {
        return (
          <Stack
            key={index}
            direction={"row"}
            gap={3}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            {row.map((item) => (
              <Stack
                key={item.id}
                alignItems={"center"}
                sx={{
                  padding: 2,
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    width: "220px",
                    height: "300px",
                    backgroundImage: `url(${img1.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    transition: "all 0.5s ease",
                    zIndex: 1,
                  }}
                >
                  <IconButton
                    sx={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "50%",
                      transition: "all 0.3s ease",
                      "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                    }}
                    onClick={() => handleOpenModal(item.url)}
                  >
                    <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
                  </IconButton>
                </Box>

                <ParaNormal>{item.title}</ParaNormal>
              </Stack>
            ))}
          </Stack>
        );
      })}
      <Stack alignItems={"center"}>
        {visibleCount < data.length && (
          <ButtonSmallOutline
            onClick={() => setVisibleCount(visibleCount + 7)}
            color="#007946"
            style={{ border: "1px solid #007946" }}
          >
            View All
          </ButtonSmallOutline>
        )}
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
    </Stack>
  );
};

export default PatientStories;
