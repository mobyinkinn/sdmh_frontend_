import { Stack, Typography } from "@mui/material";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";

const Video_Walkthrough = () => {
  return (
    <Stack
      bgcolor={"#D2E4D8"}
      width={"100%"}
      padding={{ md: "50px", xs: "30px 15px" }}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Head1 color="#005900" fontSize={{ md: "2.5rem", sm: "1.5rem" }}>
        Video Walkthrough
      </Head1>
      <Typography
        // width={{ lg: "898px", xs: "306px" }}
        fontSize={{ lg: "30px", md: "25px", smm: "20px", sm: "13px" }}
      >
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms.
      </Typography>
    </Stack>
  );
};

export default Video_Walkthrough;
