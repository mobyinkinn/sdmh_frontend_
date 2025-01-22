"use client";

import { Stack, Typography } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import CareerForm from "./parts/CareerForm";
import { useParams, useRouter } from "next/navigation";
import { useOpeningById } from "../../admin/careers/parts/useOpening";
import { ParaNormalSmall } from "@/app/styledComponents/frontend/Para";
import Spinner from "../../ui/Spinner";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";

export default function CareerInner() {
  const { _id } = useParams();
  const { data, isLoading, error } = useOpeningById(_id);
  const router = useRouter();

  if (isLoading) {
    return <Spinner />;
  }
  console.log("datqa", data);
  return (
    <Stack>
      <Navbar />
      <Hero />
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
