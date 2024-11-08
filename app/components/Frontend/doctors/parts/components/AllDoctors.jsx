import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import Doctors from "../../../coe/parts/components/Doctors";
import { Stack } from "@mui/material";
import {
  DarkGreenButton,
  DarkGreenButtonSmall,
} from "@/app/styledComponents/frontend/Buttons";
import { SearchInput } from "@/app/styledComponents/admin/Inputs";
import { SearchInputHero } from "@/app/styledComponents/frontend/Inputs";

export default function AllDoctors() {
  return (
    <ContainerMain bgColor={"#FBF6EE"}>
      <Stack direction={"row"} gap={"20px"}>
        <DarkGreenButton bgColor="#379237" borderRadius="100px">
          All
        </DarkGreenButton>
        <SearchInputHero width={"300px"} color="black" bgColor={"transparent"}>
          Search Doctor
        </SearchInputHero>
        <SearchInputHero width={"300px"} color="black" bgColor={"transparent"}>
          Search Department
        </SearchInputHero>
      </Stack>
      <Doctors />
    </ContainerMain>
  );
}
