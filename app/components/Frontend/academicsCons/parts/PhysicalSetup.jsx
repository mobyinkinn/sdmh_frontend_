import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import React from "react";

const PhysicalSetup = () => {
  return (
    <Stack bgcolor={"#007946"} p={{ xs: 3, md: 5 }} gap={1}>
      <Head1
        fontSize={{ sm: "1.5rem", smm: "2rem", md: "2.5rem", lg: "3.5rem" }}
        style={{ color: "white" }}
      >
        Physical Set-up
      </Head1>
      <Stack gap={3}>
        <Stack bgcolor={"#02814B"} p={2} borderRadius={2}>
          <ParaNormal
            fontSize={{ sm: "15px", smm: "17px", md: "20px", lg: "25px" }}
            style={{ textAlign: "center", color: "White" }}
          >
            The school is housed in a separate building which was inaugurated by
            the then Chief Minister of Rajasthan, Shri Bhairon Singh Shekhawat
            on 9th December 1995. The school is well equipped and well furnished
            with all the modern facilities and fulfils the INC criteria and
            norms.
          </ParaNormal>
        </Stack>
        <Stack bgcolor={"#02814B"} p={1} borderRadius={2}>
          <ParaNormal
            fontSize={{ sm: "15px", smm: "17px", md: "20px", lg: "25px" }}
            style={{ textAlign: "center", color: "White" }}
          >
            A student hostel is attached to the school building. In
            acknowledgement of the generous help and support from Shri Ganesh
            Rana, the school was re-named as “SDMH Chand Behari Sita Devi Rana
            School of Nursing” in 1995.
          </ParaNormal>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PhysicalSetup;
