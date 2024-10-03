import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "./assets/logo.png";
import { NavText } from "@/app/styledComponents/admin/Text";

export default function NavbarAdminHorizontal() {
  return (
    <Stack
      height={"10vh"}
      backgroundColor={"#25313E"}
      padding={"10px"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Image src={logo} width={120} height={40} alt="" />
      <Stack>
        <NavText>Sdmh Admin</NavText>
      </Stack>
    </Stack>
  );
}
