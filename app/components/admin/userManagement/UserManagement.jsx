import { Stack } from "@mui/material";
import NavbarAdmin from "../navbarAdmin/NavbarAdminVerticle";
import NavbarAdminHorizontal from "../navbarAdmin/NavbarAdminHorizontal";

export default function UserManagement() {
  return (
    <Stack>
      <NavbarAdminHorizontal />
      <Stack direction={"row"}>
        <NavbarAdmin />
        <Stack> User management</Stack>
      </Stack>
    </Stack>
  );
}
