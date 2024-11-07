import { Stack } from "@mui/material";
import Navbar from "../../navbar/Nav";
import Footer from "../../footer/Footer";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import DetailsHero from "./components/DetailsHero";
import Procedure from "./components/Procedures";
import Doctors from "./components/Doctors";

export default function CoeDetails() {
  return (
    <Stack>
      <Navbar />
      <ContainerMain bgColor={"#FBF6EE"}>
        <DetailsHero />
        <Procedure />
        <Doctors />
      </ContainerMain>

      <Footer />
    </Stack>
  );
}
