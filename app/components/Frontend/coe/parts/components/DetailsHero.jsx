import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack } from "@mui/material";

import baloon from "../assets/bigHotAirBaloon.png";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import Spinner from "@/app/components/ui/Spinner";

export default function DetailsHero({ name, data, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Stack>
      <Head1 textAlign="left" color="black">
        {data?.name}
      </Head1>
      <Head1 textAlign="left" color="black">
        Best for Your Business?
      </Head1>
      <Box
        sx={{
          backgroundImage: `url(${data?.bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "70vh",
          margin: "30px 0",
        }}
      ></Box>
      <Stack gap={"20px"}>
        <ParaNormal>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s, When An Unknown Printer Took A Galley Of Type And
          Scrambled It To Make A Type Specimen Book. It Has Survived Not Only
          Five Centuries, But Also The Leap Into Electronic Typesetting,
          Remaining Essentially Unchanged.
        </ParaNormal>
        <ParaNormal>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s, When An Unknown Printer Took A Galley Of Type And
          Scrambled It To Make A Type Specimen Book. It Has Survived Not Only
          Five Centuries, But Also The Leap Into Electronic Typesetting,
          Remaining Essentially Unchanged.
        </ParaNormal>
        <ParaNormal>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s, When An Unknown Printer Took A Galley Of Type And
          Essentially Unchanged.
        </ParaNormal>
        <ParaNormal>
          Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The
          1500s, When An Unknown Printer Took A Galley Of Type And Essentially
          Unchanged.
        </ParaNormal>
      </Stack>
    </Stack>
  );
}
