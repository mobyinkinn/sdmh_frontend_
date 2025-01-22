import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import React from "react";
import one from "./assets/five1.png";
import two from "./assets/five1.png";
import three from "./assets/five1.png";
import four from "./assets/five1.png";
import five from "./assets/five1.png";
import Image from "next/image";

const Philosophy = () => {
  const images = [one, two, three, four, five];
  return (
    <Stack bgcolor={"#D2E4D8"} p={"30px 100px"} gap={2}>
      <Head1 color="black" style={{ fontSize: "45px" }}>
        Philosophy of the Nursing College
      </Head1>
      <ParaNormal style={{ textAlign: "center" }}>
        The primary aim of the Nursing College is to translate the lofty ideals
        and philosophy of Santokba Durlabhji Trust into reality. The Trust
        believes that nursing is distinctive among professions in its angle of
        vision, in its intimacy, scope and privileged position in relation to
        patients since nurses are witnesses to life’s most profound events,
        specially when people are at their most vulnerable. Nurses stand in
        between patients and medicine as buffers, translators mediators and
        facilitators. Keeping all above in mind, maximum care is taken during
        the training period for all round development of the individual so that
        our nurses become life-long learners valuing current scientific
        knowledge and technology and its application in a humanistic manner.
      </ParaNormal>

      <Stack direction={"row"} gap={1}>
        {images.map((d, i) => (
          <Image src={d} key={i} width={240} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Philosophy;
