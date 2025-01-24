import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import React from "react";
import Image1 from "./assets/Image1.png";
import Image2 from "./assets/Image2.png";
import Image3 from "./assets/Image3.png";
import Image from "next/image";
const Scholarship = () => {
  const data = [Image1, Image2, Image3];

  return (
    <Stack bgcolor={"#CEDDCC"} p={"30px 100px"} gap={3}>
      <Stack direction={"row"} p={2} justifyContent={"center"}>
        <Head1 style={{ textAlign: "center" }}>Scholarship&nbsp;</Head1>
        <Head1 color="black">And &nbsp;</Head1>
        <Head1 style={{ textAlign: "center" }}>Awards</Head1>
      </Stack>
      <ParaNormal>
        Since 1995, two students are being awarded a scholarship of Rs.200/- per
        month for a period of 12 months during second and third year from the
        Damyanti Devi Bhanwarlal Mathur Trust. Every year one student is
        selected for Best Student Award on the basis of merit and is awarded
        with Shri Shiv Shanker Sharma award.
      </ParaNormal>
      <Stack direction={"row"} gap={2} justifyContent={"center"}>
        {data.map((d, i) => (
          <Stack key={i}>
            <Image src={d} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Scholarship;
