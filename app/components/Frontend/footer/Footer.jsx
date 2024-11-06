import { ContainerMain } from "@/app/styledComponents/frontend/Container";

import logo from "./parts/assets/logo.png";
import { Stack, Typography } from "@mui/material";

const address = [
  {
    id: 0,
    data: "Bhawani Singh Marg, Near Rambagh circle, Jaipur-302015 (Rajasthan), INDIA",
  },
  { id: 1, data: "0141 352 4444" },
  { id: 2, data: "info@sdmh.in" },
];

export default function Footer() {
  return (
    <ContainerMain dir={"row"}>
      <Stack>
        <Stack
          sx={{
            backgroundImage: `url(${logo.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
          }}
        ></Stack>
        <Stack>
          {address.map((el, i) => {
            return <Typography>{el.data}</Typography>;
          })}
        </Stack>
      </Stack>
      <Stack></Stack>
    </ContainerMain>
  );
}
