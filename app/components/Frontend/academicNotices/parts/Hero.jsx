"use client";

import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";
import banner from "./assets/bannerImage.png";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import Spinner from "@/app/components/ui/Spinner";
import { Box } from "@mui/material";

export default function Hero() {
   const { data, isLoading: isLoadingBanner } =
     useBannerByPage("Academic Notices");
   if (isLoadingBanner) return <Spinner />;
  return (
    // <BannerImage2
    //   image={banner.src}
    //   overlayColor="#476C9BE5"
    //   title="Academic Deanery"
    //   description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    // />
    <>
      <Box
        display={{ md: "flex", sm: "none" }}
        minHeight={{ md: "322px", lg: "434px", xl: "600px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Box>

      <Box
        display={{ md: "none", sm: "flex" }}
        minHeight={{ xs: "451px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${data?.mobileBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      ></Box>
    </>
  );
}
