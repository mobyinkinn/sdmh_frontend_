import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

import img1 from "./assets/1971.jpg";
import img2 from "./assets/2011.jpg";
import img3 from "./assets/2014.jpg";
import img4 from "./assets/p4.jpg";
import { Stack } from "@mui/material";
import Image from "next/image";

const overviewImages = [img1, img2, img3, img4];

export default function Overview() {
  return (
    <ContainerMain bgColor="#F9F9F9" id="overview">
      <Head1 color="#486b99">Overview</Head1>
      <Stack textAlign={"center"}>
        <ParaNormal textAlign={{ md: "left", sm: "center" }}>
          The Santokba Durlabhji Trust was established in 1958 with a profound
          vision to provide quality healthcare to all, without bias or
          discrimination. In 1971, the Santokba Durlabhji Memorial Hospital
          (SDMH) was founded and inaugurated by the then Prime Minister, Smt.
          Indira Gandhi. At the time, the hospital was dedicated to serving the
          Armed Forces as the country was engaged in a war with Pakistan.
        </ParaNormal>
        <ParaNormal textAlign={{ md: "left", sm: "center" }}>
          Since its inception, SDMH has remained committed to offering
          affordable healthcare through numerous philanthropic initiatives,
          including:
          <span>
            <p>The Avedna Ashram (a hospice for terminally ill patients)</p>
            <p>The Rehabilitation and Limb Fitting Centre</p>
            <p>The Rural Outreach Programme</p>
            <p>Project Prayatna (focused on thalassemia eradication)</p>
            <p>Little Heart (congenital heart surgeries for little ones)</p>
            <p>
              And many other projects aimed at alleviating human suffering.
            </p>
          </span>
        </ParaNormal>
        <ParaNormal textAlign={{ md: "left", sm: "center" }}>
          SDMH is a private, trust-managed, autonomous, fee-for-service,
          not-for-profit hospital. With 525 beds, it offers multidisciplinary,
          tertiary care services. The hospital includes several wards, operation
          theatres, intensive care units (ICUs), laboratories, and utility
          services, with specialties in numerous areas. Notably, it boasts one
          of the best blood banks in the country, serving the entire state of
          Rajasthan and neighboring states.
        </ParaNormal>
        <ParaNormal textAlign={{ md: "left", sm: "center" }}>
          Our core belief is that philanthropic healthcare is not only possible,
          but necessary. We are firm in our commitment to integrating compassion
          and care into every aspect of healthcare, which we believe is both
          therapeutic and transformational. Through this approach, we strive for
          a higher level of divine service, cleansing the soul while providing
          essential care.
        </ParaNormal>
      </Stack>
      <Stack
        direction={{ xs: "row", md: "row" }}
        marginTop={"40px"}
        justifyContent={{ lg: "unset", md: "space-between", xs: "center" }}
        gap={{ xs: "30px", md: "none" }}
        flexWrap={"wrap"}
        width={"100%"}
        rowGap={"10px"}
        columnGap={"10px"}
      >
        {overviewImages.map((el, i) => {
          return (
            <Stack
              width={{ xl: "23%", lg: "48%", md: "47%", xs: "45%" }}
              height={{ xs: "131px", md: "300px" }}
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
