import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { careData } from "./CareData";
import CareCard from "./CareCard";

export default function Care() {
  return (
    <ContainerMain bgColor="#F9F9F9">
      {careData.map((el, i) => {
        return <CareCard key={i} el={el} />;
      })}
    </ContainerMain>
  );
}
