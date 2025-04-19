import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import visitor from "./assets/visitors.jpg";

export default function Policy() {
  return (
    <ContainerMain bgColor="#CEDDCC">
      <Stack
        // backgroundColor="#476C9B"
        flexDirection={{ lg: "row", md: "column", sm: "column", smm: "column" }}
        borderRadius={"10px"}
        alignItems={{ md: "center", lg: "unset" }}
      >
        <Stack
          width={{ md: "70%" }}
          backgroundColor="white"
          padding={"30px 50px"}
          gap="10px"
          borderRadius={"10px"}
        >
          <Head1 textAlign="center">
            Visitor's Policy
          </Head1>
          <ParaNormal>
            SDMH Visitor Policy has been established to provide a supportive and
            caring atmosphere for the patient. Visitor may visit between the
            following hours:-
          </ParaNormal>
          <ul>
            <li>
              <ParaNormal>
                Visiting Hours 6 am to 8 am and 5 pm to 7 pm
              </ParaNormal>
            </li>
            <li>
              <ParaNormal>
                Only one visitor with a visiting pass is allowed at a time.
              </ParaNormal>
            </li>
            <li>
              <ParaNormal>
                Children under 12 are not allowed as visitors.
              </ParaNormal>
            </li>
            <li>
              <ParaNormal>
                At the time of admission, patient is provided one all time
                attendant pass and two visiting hours pass.
              </ParaNormal>
            </li>
            <li>
              <ParaNormal>
                ICU patients can be visited during the permitted time only for
                five minutes by two authorized attendents.
              </ParaNormal>
            </li>
            <li>
              <ParaNormal>
                Flowers are not allowed inside hospital premises.
              </ParaNormal>
            </li>
            <li>
              <ParaNormal>
                On the recommendation of the consultant, an additional pass may
                be issued on extra payment.
              </ParaNormal>
            </li>
          </ul>
        </Stack>
        <Stack
          width={{ md: "70%", lg: "30%" }}
          padding={{ lg: "0", xs: "20px 0 0 0" }}
          alignItems={"center"}
          justifyContent={{ xs: "end", lg: "center" }}
          sx={{
            overflow: "hidden",
          }}
        >
          <Stack
            borderRadius={"10px"}
            sx={{
              backgroundImage: `url(${visitor.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              overflow: "hidden",
              width: "100%",
              height: "460px",
            }}
          ></Stack>
        </Stack>
      </Stack>
    </ContainerMain>
  );
}
