import { Box, Stack } from "@mui/material";
import banner from "../assets/360View.png";

export default function View() {
  return (
    // <Box
    //   sx={{
    //     backgroundImage: `url(${banner.src})`,
    //     backgroundPosition: "center center",
    //     backgroundSize: "cover",
    //     width: "100%",
    //     height: { xs: "29vh", md: "48vh", lg: "80vh" },
    //   }}
    // ></Box>
    <Stack>
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        controls={false}
        style={{ objectFit: "contain" }}
      >
        <source src="/assets/Video.mp4" type="video/mp4" />
      </video>
    </Stack>
  );
}
