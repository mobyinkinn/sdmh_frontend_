import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import img from "./assets/Yogendra.png";
import { forwardRef } from "react";

const Message = forwardRef((props, ref) => {
  return (
    <ContainerMain
      ref={ref}
      bgColor="#476C9B"
      flexDirection={{ lg: "row", md: "row", smm: "column", sm: "column" }}
      id="message"
      alignItems={"center"}
    >
      <Stack alignItems="center" width={{ md: "30%" }} gap="10px">
        <Stack
          sx={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "300px",
            width: "300px",
          }}
        ></Stack>
        <Stack alignItems="center">
          <ParaNormal color="white">
            <b>Yogendra Durlabhji</b>
          </ParaNormal>
          <ParaNormalSmall color="white">
            (Secretary, Santokba Durlabhji Trust)
          </ParaNormalSmall>
        </Stack>
      </Stack>
      <Stack gap="10px" width={{ md: "70%" }}>
        <Head1 color="white" textAlign="left">
          Secretary's Message
        </Head1>
        <ParaNormal
          textAlign={{ lg: "justify", sm: "center", smm: "center" }}
          color="white"
        >
          The word that instantly comes to mind when I think of my father is
          "empathy." He felt others' pain deeply, and his life was shaped by
          this compassion. He was profoundly moved by the plight of pavement
          dwellers he saw on his way to work, often covering them with blankets
          during his late-night outings.
        </ParaNormal>
        <ParaNormal
          textAlign={{ lg: "justify", sm: "center", smm: "center" }}
          color="white"
        >
          This compassion became the foundation of Santokba Durlabhji Memorial
          Hospital (SDMH). My father's vision has impacted millions of lives
          over the last 54 years. It is a story of love, dedication, and care—a
          family legacy that continues to make Rajasthan a healthier place.
        </ParaNormal>
        <ParaNormal
          textAlign={{ lg: "justify", sm: "center", smm: "center" }}
          color="white"
        >
          My father, Khelubhai, or Khailshanker ji, conceptualized SDMH during
          his long walks with Dr. Tarachand ji Gangwal in the 1960s. In 1971,
          the hospital was inaugurated by Smt. Indira Gandhi. My brother Rashmi
          turned my father's vision into reality, translating it into physical
          infrastructure and healthcare services.
        </ParaNormal>
        <ParaNormal
          textAlign={{ lg: "justify", sm: "center", smm: "center" }}
          color="white"
        >
          Through challenges and constraints, our family has carried on this
          mission, maintaining a commitment to care, compassion, and
          understanding. We are determined to carry the torch forward,
          rededicating ourselves to the Santokba hospital my father always
          envisioned.
        </ParaNormal>
      </Stack>
    </ContainerMain>
  );
});

export default Message;
