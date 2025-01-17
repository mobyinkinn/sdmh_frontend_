import { Stack, Typography } from "@mui/material";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";

const Video_Walkthrough = () => {
  return (
    <Stack
      bgcolor={"#D2E4D8"}
      width={"100%"}
      padding={{ md: "50px", xs: "30px 15px" }}
      alignItems={"center"}
    >
      <Head1 color="#005900">Video Walkthrough</Head1>
      <Typography fontSize={"1.5rem"}>
        On the other hand, we denounce with righteous indignation and dislike
      </Typography>
      <Typography fontSize={"1.5rem"}>
        men who are so beguiled and demoralized by the charms.
      </Typography>
    </Stack>
  );
};

export default Video_Walkthrough;
