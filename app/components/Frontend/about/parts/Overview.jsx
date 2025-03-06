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
        The Santokba Durlabhji Trust was established in 1958 with a profound
        vision to provide quality healthcare to all, without bias or
        discrimination. In 1971, the Santokba Durlabhji Memorial Hospital (SDMH)
        was founded and inaugurated by the then Prime Minister, Smt. Indira
        Gandhi. At the time, the hospital was dedicated to serving the Armed
        Forces as the country was engaged in a war with Pakistan.
      </ParaNormal>
      <ParaNormal textAlign={{ md: "left", sm: "center" }}>
        Since its inception, SDMH has remained committed to offering affordable
        healthcare through numerous philanthropic initiatives, including:
        <ul>
          <li>The Avedna Ashram (a hospice for terminally ill patients)</li>
          <li>The Rehabilitation and Limb Fitting Centre</li>
          <li>The Rural Outreach Programme</li>
          <li>Project Prayatna (focused on thalassemia eradication)</li>
          <li>Little Heart (congenital heart surgeries for little ones)</li>
          <li>And many other projects aimed at alleviating human suffering.</li>
        </ul>
      </ParaNormal>
      <ParaNormal textAlign={{ md: "left", sm: "center" }}>
        SDMH is a private, trust-managed, autonomous, fee-for-service,
        not-for-profit hospital. With 525 beds, it offers multidisciplinary,
        tertiary care services. The hospital includes several wards, operation
        theatres, intensive care units (ICUs), laboratories, and utility
        services, with specialties in numerous areas. Notably, it boasts one of
        the best blood banks in the country, serving the entire state of
        Rajasthan and neighboring states.
      </ParaNormal>
      <ParaNormal textAlign={{ md: "left", sm: "center" }}>
        Our core belief is that philanthropic healthcare is not only possible,
        but necessary. We are firm in our commitment to integrating compassion
        and care into every aspect of healthcare, which we believe is both
        therapeutic and transformational. Through this approach, we strive for a
        higher level of divine service, cleansing the soul while providing
        essential care.
      </ParaNormal>
      <Stack
        direction="row"
        marginTop={"40px"}
        justifyContent={{ md: "space-between", xs: "center" }}
        gap={{ xs: "30px", md: "none" }}
        flexWrap={"wrap"}
        width={"100%"}
        rowGap={"10px"}
        columnGap={"10px"}
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
