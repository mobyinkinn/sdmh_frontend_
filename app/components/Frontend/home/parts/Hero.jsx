import { Box, Stack, Typography } from "@mui/material";
import banner from "../assets/heroBanner.png";
import { SearchInputHero } from "@/app/styledComponents/frontend/Inputs";

export default function Hero() {
  return (
    <Stack direction={"row"}>
      <Box
        height={"90vh"}
        width={"80%"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRight: "1px solid black",
        }}
      ></Box>

      <Stack
        backgroundColor={"#379237"}
        width={"20%"}
        color="white"
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
      >
        <SearchInputHero contentEditable>Search</SearchInputHero>
        <Typography fontSize={"1.2rem"}>Room Tour</Typography>
        <Typography fontSize={"1.2rem"}>II Opinion</Typography>
        <Typography fontSize={"1.2rem"}>Query Us</Typography>
      </Stack>
    </Stack>
  );
}
