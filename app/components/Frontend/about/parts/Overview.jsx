import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

import img1 from "./assets/overview1.png";
import img2 from "./assets/overview2.png";
import img3 from "./assets/overview3.png";
import img4 from "./assets/overview4.png";
import { Stack } from "@mui/material";
import Image from "next/image";

const overviewImages = [img1, img2, img3, img4];

export default function Overview() {
  return (
    <ContainerMain bgColor="#F9F9F9" id="overview">
      <Head1 color="black">Overview</Head1>
      <ParaNormal textAlign={{ md: "left", sm: "center" }}>
        The Santokba Durlabhji Trust was founded in 1958 with a vision to
        provide quality care to the common man – without favour or
        discrimination. The Santokba Durlabhji Memorial Hospital was established
        in 1971. Inaugurated by the then Prime Minister, Smt. Indira Gandhi, the
        hospital was dedicated to the Armed Forces as the nation was then in the
        throes of a war with Pakistan.
      </ParaNormal>
      <ParaNormal textAlign={{ md: "left", sm: "center" }}>
        Since then, SDMH has continued to provide affordable health care through
        the several philanthropic initiatives it has undertaken e.g. The Avedna
        Ashram, the Rehabilitation and Limb Fitting Centre, the Outreach
        Programme, Project Prayatna (eradication of thalassemia) and several
        other projects that serve to alleviate human suffering.
      </ParaNormal>
      <ParaNormal textAlign={{ md: "left", sm: "center" }}>
        Sdmh Is A Private, Trust-managed, Autonomous, Fee-for-services And
        Not-for-profit Hospital. It Is A Multidisciplinary, 525-bed, Tertiary
        Care Hospital. It Houses Several Wards, Operation Theatres, Icus,
        Laboratories, Utility Services, Specialties And Super Specialties,
        Including One Of The Best Blood Banks In The Country, Catering To The
        Entire State Of Rajasthan And To Neighbouring States As Well.
      </ParaNormal>
      <Stack
        direction="row"
        marginTop={"40px"}
        justifyContent={{ md: "space-between", xs: "center" }}
        gap={{ xs: "30px", md: "none" }}
        flexWrap={"wrap"}
        width={"100%"}
      >
        {overviewImages.map((el, i) => {
          return (
            <Stack
              width={{ md: "20%", xs: "40%" }}
              height={"30vh"}
              position={"relative"}
              key={i}
            >
              <Image
                src={el}
                fill
                objectFit="cover"
                objectPosition="center center"
              />
            </Stack>
          );
        })}
      </Stack>
    </ContainerMain>
  );
}
