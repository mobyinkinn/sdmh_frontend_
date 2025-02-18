// import React from 'react'

// const MobilePatient = () => {
//   return (
//     <div>MobilePatient</div>
//   )
// }

// export default MobilePatient


import { useState } from "react";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Box, Dialog, IconButton } from "@mui/material";
import img1 from "../assets/stories/img1.png";
import img2 from "../assets/stories/img2.png";
import img3 from "../assets/stories/img3.png";
import img4 from "../assets/stories/img4.png";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useVideos } from "@/app/components/admin/videos/useVideos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Spinner from "@/app/components/ui/Spinner";

export default function MobilePatient() {
  const { data, isLoading, error } = useVideos();
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const extractVideoId = (url) => {
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/(?:shorts\/|embed\/|v\/|watch\?.*v=)))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleOpenModal = (videoUrl) => {
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
      setSelectedVideo(videoId);
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedVideo("");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };
if (isLoading || !data?.length) {
  return <Spinner/> // Show this until data is available
}
 const initialImages = [
   { img: img1, url: data[0]?.url || "" },
   { img: img2, url: data[1]?.url || "" },
   { img: img3, url: data[2]?.url || "" },
   { img: img4, url: data[3]?.url || "" },
 ];

  return (
    <Stack display={{ md: "none", xs: "flex" }}>
      <ContainerMain marginTop={"40px"} alignItems="center">
        <Stack
          width={"100%"}
          height={"40vh"}
          display={{ md: "none", xs: "flex" }}
        >
          <Slider {...settings}>
            {initialImages.map((item, index) => (
              <ImageCard
                key={index}
                img={item.img}
                handleOpenModal={() => handleOpenModal(item.url)}
              />
            ))}
          </Slider>
        </Stack>

        <Stack
          alignItems={{ xs: "center", md: "start" }}
          sx={{ mb: 5 }}
          display={{ md: "none", xs: "flex" }}
        >
          <ButtonMediumOutline color="#379237">View All</ButtonMediumOutline>
        </Stack>

        {/* Video Modal */}
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
    </Stack>
  );
}

function ImageCard({ img, handleOpenModal }) {
  return (
    <Stack padding="5px">
      <Stack
        width="100%"
        height="40vh"
        padding="5px"
        backgroundColor="#476C9B"
        borderRadius="5px"
        position="relative"
      >
        <Box
          sx={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100%",
            width: "100%",
            borderRadius: "5px",
          }}
        />
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
          onClick={handleOpenModal}
        >
          <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
}
