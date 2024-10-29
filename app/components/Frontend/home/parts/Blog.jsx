import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";

export default function Blog() {
  return (
    <ContainerMain bgColor={"#54B435"} alignItems="center">
      <Head1 color="#FCF9C6">Blog</Head1>
      <Typography width={"50%"} textAlign={"center"}>
        Providing Best Health Services With Expert Diagnoses & Treatment Plans
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Stack width={"100%"} height={"60vh"}>
        <Stack width={"45%"}></Stack>
        <Stack width={"45%"}></Stack>
      </Stack>
    </ContainerMain>
  );
}
