"use client";

import { Stack, Typography } from "@mui/material";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import CareerForm from "./parts/CareerForm";
import { useParams, useRouter } from "next/navigation";
import { ParaNormalSmall } from "@/app/styledComponents/frontend/Para";
import Spinner from "../../ui/Spinner";
import { ButtonSmallOutlineWithoutHover } from "@/app/styledComponents/frontend/Buttons";

export default function CareerApply() {
  const { _id, position } = useParams();

  return (
    <Stack>
      <Navbar />
      <Hero />
      {/* <Stack bgcolor={"#D2E4D8"} p={"43px 111px"}>
        <ParaNormalSmall
          color="inherit"
          dangerouslySetInnerHTML={{ __html: data.jd }}
        />
        <Stack alignItems={"center"}>
          <ButtonSmallOutlineWithoutHover
            onClick={() =>
              router.push(`/career/${_id}/apply-now-${data.position}`)
            }
            style={{ border: "1px solid #005900", color: "#005900" }}
          >
            Apply now
          </ButtonSmallOutlineWithoutHover>
        </Stack>
      </Stack> */}

      <CareerForm position ={position}/>
      <Footer />
    </Stack>
  );
}
