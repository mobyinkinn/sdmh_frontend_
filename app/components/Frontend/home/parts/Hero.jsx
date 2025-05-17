// "use client";
// import { Box, Stack, Typography } from "@mui/material";
// import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";
// import Spinner from "@/app/components/ui/Spinner";
// import { useRouter } from "next/navigation";

// export default function Hero() {
//     const router = useRouter();
//   const { data, isLoading, error } = useBannerByPage("dummy");
//   if (isLoading) return <Spinner />;
// console.log("data", data);
//   return (
//     <Stack direction={"row"}>
//       <Box
//         display={{ md: "flex", sm: "none" }}
//         minHeight={{ md: "322px", lg: "434px", xl: "600px", xxxl: "800px" }}
//         width={"100%"}
//         sx={{
//           backgroundImage: `url(${data?.images[0]})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//         }}
//         onClick={() => {
//           router.push('/about');
//         }}
//       ></Box>

//       <Box
//         display={{ md: "none", sm: "flex" }}
//         minHeight={{ xs: "451px" }}
//         width={"100%"}
//         sx={{
//           backgroundImage: `url(${data?.mobileBanner})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "contain",
//           backgroundPosition: "center center",
//         }}
//       ></Box>

      
//     </Stack>
//   );
// }


// "use client";
// import { Box, Stack, Typography } from "@mui/material";
// import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";
// import Spinner from "@/app/components/ui/Spinner";
// import { useRouter } from "next/navigation";
// import Slider from "react-slick"; // Importing the Slider component
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Hero() {
//   const router = useRouter();
//   const { data, isLoading, error } = useBannerByPage("dummy");
  
//   // If data is still loading, show a spinner
//   if (isLoading) return <Spinner />;
  
//   console.log("data", data);

//   // Slider settings for React Slick
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Optional: To autoplay the slider
//   };

//   // If images is an array and has more than one image, use a slider
//   const images = data?.images || [];

//   return (
//     <Stack direction={"row"}>
//       {images.length > 1 ? (
//         <Box
//           display={{ md: "flex", sm: "none" }}
//           minHeight={{ md: "322px", lg: "434px", xl: "600px", xxxl: "800px" }}
//           width={"100%"}
//         >
//           <Slider {...sliderSettings}>
//             {images.map((image, index) => (
//               <div key={index}>
//                 <Box
//                   sx={{
//                     backgroundImage: `url(${image})`, // Use image directly
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center center",
//                     height: "100%",
//                     width: "100%",
//                   }}
//                   onClick={() => {
//                     router.push("/about");
//                   }}
//                 ></Box>
//               </div>
//             ))}
//           </Slider>
//         </Box>
//       ) : (
//         <Box
//           display={{ md: "flex", sm: "none" }}
//           minHeight={{ md: "322px", lg: "434px", xl: "600px", xxxl: "800px" }}
//           width={"100%"}
//           sx={{
//             backgroundImage: `url(${images[0]})`, // Show the single image
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//           }}
//           onClick={() => {
//             router.push("/about");
//           }}
//         ></Box>
//       )}

//       {/* Conditional rendering for mobile view */}
//       {images.length > 1 ? (
//         <Box
//           display={{ md: "none", sm: "flex" }}
//           minHeight={{ xs: "451px" }}
//           width={"100%"}
//         >
//           <Slider {...sliderSettings}>
//             {images.map((image, index) => (
//               <div key={index}>
//                 <Box
//                   sx={{
//                     backgroundImage: `url(${image})`, // Use image directly
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "contain",
//                     backgroundPosition: "center center",
//                     height: "100%",
//                     width: "100%",
//                   }}
//                 ></Box>
//               </div>
//             ))}
//           </Slider>
//         </Box>
//       ) : (
//         <Box
//           display={{ md: "none", sm: "flex" }}
//           minHeight={{ xs: "451px" }}
//           width={"100%"}
//           sx={{
//             backgroundImage: `url(${images[0]})`, // Show the single image
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "contain",
//             backgroundPosition: "center center",
//           }}
//         ></Box>
//       )}
//     </Stack>
//   );
// }


// "use client";
// import { Box, Stack, Typography } from "@mui/material";
// import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";
// import Spinner from "@/app/components/ui/Spinner";
// import { useRouter } from "next/navigation";
// import Slider from "react-slick"; // Importing the Slider component
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Hero() {
//   const router = useRouter();
//   const { data, isLoading, error } = useBannerByPage("dummy");

//   // If data is still loading, show a spinner
//   if (isLoading) return <Spinner />;

//   // Debugging: Check if images are being returned correctly
//   console.log("Image URLs:", data?.images);

//   // Slider settings for React Slick
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Optional: To autoplay the slider
//   };

//   // Ensure images is an array and has images
//   const images = Array.isArray(data?.images) ? data?.images : [];
//   const mobileImages = Array.isArray(data?.mobileimages)
//     ? data?.mobileimages
//     : [];

//   return (
//     <Stack direction={"row"}>
//       {/* Conditional rendering for desktop view */}
//       {images.length > 1 ? (
//         <Box
//           display={{ xl: "block", lg: "block", md: "block", sm: "none" }}
//         >
//           <Slider {...sliderSettings}>
//             {images.map((image, index) => (
//               <div key={index}>
//                 <Box
//                   sx={{
//                     backgroundImage: `url(${image})`, // Use image URL directly
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center center",
//                     height: "100%",
//                     width: "100%",
//                   }}
//                   onClick={() => {
//                     router.push("/about");
//                   }}
//                 ></Box>
//               </div>
//             ))}
//           </Slider>
//         </Box>
//       ) : (
//         <Box
//           display={{ md: "flex", sm: "none" }}
//           minHeight={{ md: "322px", lg: "434px", xl: "600px", xxxl: "800px" }}
//           width={"100%"}
//           sx={{
//             backgroundImage: `url(${images[0]})`, // Show the single image
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//           }}
//           onClick={() => {
//             router.push("/about");
//           }}
//         ></Box>
//       )}

//       {/* Conditional rendering for mobile view */}
//       {mobileImages.length > 1 ? (
//         <Box
//           display={{ md: "none", sm: "flex" }}
//           minHeight={{ xs: "451px" }}
//           width={"100%"}
//         >
//           <Slider {...sliderSettings}>
//             {mobileImages.map((image, index) => (
//               <div key={index}>
//                 <Box
//                   sx={{
//                     backgroundImage: `url(${image})`, // Use image URL directly
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "contain",
//                     backgroundPosition: "center center",
//                     height: "100%",
//                     width: "100%",
//                   }}
//                 ></Box>
//               </div>
//             ))}
//           </Slider>
//         </Box>
//       ) : (
//         <Box
//           display={{ md: "none", sm: "flex" }}
//           minHeight={{ xs: "451px" }}
//           width={"100%"}
//           sx={{
//             backgroundImage: `url(${mobileImages[0]})`, // Show the single mobile image
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "contain",
//             backgroundPosition: "center center",
//           }}
//         ></Box>
//       )}
//     </Stack>
//   );
// }


"use client";
import { Box, Stack, Typography } from "@mui/material";
import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";
import Spinner from "@/app/components/ui/Spinner";
import { useRouter } from "next/navigation";
import Slider from "react-slick"; // Importing the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const normalStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "white",
};

const hoverStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "white",
};


const Hero = () => {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const sliderRef = useRef(null);
  const { data, isLoading, error } = useBannerByPage("home");

  if (isLoading) return <Spinner />;

  console.log("Image URLs:", data?.images);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    const images = Array.isArray(data?.images) ? data?.images : [];
    const mobileImages = Array.isArray(data?.mobileimages)
      ? data?.mobileimages
      : [];

  return (
    <Stack width={"100%"} height={"100vh"}>
      <Box
        display={{
          xxl: "block",
          xl: "block",
          lg: "block",
          md: "block",
          sm: "none",
        }}
        height={"100vh"}
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <Stack
              key={index}
              width="100vw"
              height="100vh"
              sx={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover", // ✅ Fills the height completely
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                display: "flex",
              }}
            ></Stack>
          ))}
        </Slider>
      </Box>
      <Box display={{ md: "none", sm: "block" }} height={"470px"}>
        <Slider {...settings}>
          {mobileImages.map((img, index) => (
            <Stack
              key={index}
              width="100vw"
              height="100vh"
              sx={{
                backgroundImage: `url(${img})`, // Directly use the image path
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "flex",
              }}
            ></Stack>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
};

export default Hero;
