import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import gallery from "./assets/gallery.png";
import { Stack } from "@mui/material";

export default function Gallery() {
  return (
    <ContainerMain alignItems="center">
      <Head1>Gallery</Head1>
      <ParaNormal width="60%" textAlign="center">
        The generated Lorem Ipsum is therefore always free from repetition,
        injected humour, or non-characteristic words etc.
      </ParaNormal>
      <Stack
        height="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${gallery.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      ></Stack>
    </ContainerMain>
  );
}
