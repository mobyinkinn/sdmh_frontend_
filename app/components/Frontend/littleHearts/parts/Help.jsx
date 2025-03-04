import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";

export default function Help() {
  return (
    <ContainerMain>
      <Stack
        color={"white"}
        backgroundColor="#4B9369"
        borderRadius={"10px"}
        alignItems={"center"}
        padding={{lg:"30px 100px", sm:"25px"}}
        gap={{lg:"20px",sm:"10px"}}
        margin={{lg:"0px 80px",sm:"0"}}
      >
        <Head1 color="white">Wish to help?</Head1>
        <ParaNormal color="white" textAlign={{lg:"center",sm:"center"}}>
          We welcome enlightened members of the community and corporate bodies
          to sponsor and provide long term sustainability to this free welfare
          project. Your contribution will go a long way in bringing peace and
          dignity to someone in pain. Donations are approved for exception under
          80 G (50% tax exemption)
        </ParaNormal>
        <ButtonMediumOutline hoverColor="#4B9369" color="white">
          Help Now
        </ButtonMediumOutline>
      </Stack>
    </ContainerMain>
  );
}
