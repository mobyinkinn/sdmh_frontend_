import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head4 } from "@/app/styledComponents/frontend/Headings";
import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";

import img from "./assets/Yogendra.png";

export default function Message() {
  return (
    <ContainerMain
      bgColor="#476C9B"
      dir="row"
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
        <ParaNormal textAlign={{lg:"justify", sm: "center", smm: "center" }} color="white">
          Empathy is the word that immediately comes to mind as I think of my
          father. Empathy is aptly defined as someone else’s pain in your heart.
          My father felt the pain of many in his. He was deeply affected by the
          plight of the pavement dwellers he drove past on his way to work – he
          would cover them with blankets during clandestine outings at night.
        </ParaNormal>
        <ParaNormal textAlign={{lg:"justify", sm: "center", smm: "center" }} color="white">
          That shared pain for those who dwelt on pavements, and lived on the
          periphery of life was evident at the hospital we know as Santokba.
          Santokba is the story of his vision which impacted a million lives. It
          is the story of the love and the dedication of a family that, for
          almost 52 years now, has made Rajasthan a healthier place to live in.
          It is the story of nurses, of technicians and doctors, of carpenters
          and electricians, of patients, attendants and residents. It is not
          about martyrdom or about sacrifice but about care, compassion and
          concern.
        </ParaNormal>
      </Stack>
    </ContainerMain>
  );
}
