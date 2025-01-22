import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";

export default function RestCard({ el, setActiveEl, activeEl }) {
  return (
    <Stack
      alignItems={{ md: "center" }}
      borderRadius={"10px"}
      justifyContent={"space-between"}
      backgroundColor={el.id === activeEl ? "#D2E4D8" : "#A6C9B2"}
      width={{ md: "24%" }}
      gap={"10px"}
      padding={"20px"}
      margin="5px"
      height={{ smm: "50vh", xs: "40vh" }}
      sx={{
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#D2E4D8",
        },
      }}
      onMouseEnter={() => setActiveEl(el.id)}
    >
      <Stack
        sx={{
          backgroundImage: `url(${el.img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "10px",
          height: "30vh",
          width: "100%",
        }}
      ></Stack>
      <ParaNormal textAlign="center">{el.title}</ParaNormal>
    </Stack>
  );
}
