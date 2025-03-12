"use client";

import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import CareerForm from "./parts/CareerForm";
import { useParams, useRouter } from "next/navigation";
import { useOpeningById } from "../../admin/careers/parts/useOpening";
import { ParaNormalSmall } from "@/app/styledComponents/frontend/Para";
import Spinner from "../../ui/Spinner";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";
import { useBannerByPage } from "../../admin/banner/parts/useBanner";

export default function CareerInner() {
  const { _id } = useParams();
  const { data, isLoading, error } = useOpeningById(_id);
  const { data: bannerData, isLoading: isLoadingBanner } =
    useBannerByPage("career");

  const router = useRouter();

  if (isLoading || isLoadingBanner) {
    return <Spinner />;
  }
  console.log("datqa", data);
  return (
    <Stack>
      <Navbar />
      {/* <Hero /> */}
      <Box
        display={{ md: "flex", sm: "none" }}
        minHeight={{ md: "322px", lg: "434px", xl: "600px" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${bannerData?.banner})`,
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
          backgroundImage: `url(${bannerData?.mobileBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      ></Box>
      <Stack bgcolor={"#D2E4D8"} p={"43px 111px"}>
        <ParaNormalSmall
          color="inherit"
          dangerouslySetInnerHTML={{ __html: data?.jd }}
        />
        <Stack alignItems={"center"}>
          <ButtonSmallOutlineWithoutHover
            onClick={() => router.push(`/career/${_id}/${data.position}`)}
            style={{ border: "1px solid #005900", color: "#005900" }}
          >
            Apply now
          </ButtonSmallOutlineWithoutHover>
        </Stack>
      </Stack>

      {/* <CareerForm /> */}
      <Footer />
    </Stack>
  );
}
