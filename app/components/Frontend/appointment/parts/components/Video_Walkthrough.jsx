import { Stack, Typography } from "@mui/material";
import banner from "../assets/book_appointment.png";
import { Head1, Head2 } from "@/app/styledComponents/frontend/Headings";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";

const Video_Walkthrough = () => {
  return (
    <Stack
      bgcolor={"#D2E4D8"}
      width={"100%"}
      padding={{ md: "50px", xs: "30px 15px" }}
    >
      <Head1 color="#005900">Video Walkthrough</Head1>
      <Typography>
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms.
      </Typography>
    </Stack>
  );
};

export default Video_Walkthrough;
