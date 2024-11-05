import { Box } from "@mui/material";
import banner from "../assets/360View.png";

export default function View() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100%",
        height: "80vh",
      }}
    ></Box>
  );
}
