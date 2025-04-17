"use client";

import { useBannerByPage } from "@/app/components/admin/banner/parts/useBanner";
import Spinner from "@/app/components/ui/Spinner";
import { Box } from "@mui/material";

export default function Hero() {
   const { data, isLoading: isLoadingBanner } =
     useBannerByPage("Blogs");
   if (isLoadingBanner) return <Spinner />;
  return (
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
