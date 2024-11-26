import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1, Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";

export default function Hero() {
  return (
    <ContainerMain alignItems="center" bgColor="#D2E4D8" padding="100px 0">
      <Head1 color="black">The Hospital That</Head1>
      <Head1 color="#476C9B">Cares Patient Care & Services</Head1>
      <ParaNormal textAlign="center" width="50%">
        Contrary to popular belief, not simply It has roots in Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked.
      </ParaNormal>
    </ContainerMain>
  );
}
