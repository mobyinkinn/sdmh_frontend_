import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head3 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";

export default function CareCard({ el, type }) {
  return (
    <ContainerMain
      flexDirection={{ lg: "row", md: "row", smm: "column", sm: "column" }}
      alignItems="center"
      borderRadius="10px"
      bgColor={type === "white" && "white"}
      border={type === "white" ? "none" : "1px solid rgba(45, 45, 45, 0.5)"}
    >
      <Stack width={{ md: "70%" }} gap={"20px"}>
        <Head3 color="black" textAlign="left">
          {el.title}
        </Head3>
        <Stack gap={"10px"}>
          {el.data.map((ele, i) => {
            return <ParaNormal key={i}>{ele}</ParaNormal>;
          })}
        </Stack>
      </Stack>
      <Stack
        sx={{
          backgroundImage: `url(${el.img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "80vh",
          width: { md: "30%", xs: "100%" },
          borderRadius: "10px",
        }}
      ></Stack>
    </ContainerMain>
  );
}
