import { Stack, Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const NavData = [
  { id: 0, name: "User Management", icon: ManageAccountsIcon },
  { id: 1, name: "Departments", icon: ManageAccountsIcon },
  { id: 2, name: "Doctors", icon: ManageAccountsIcon },
  { id: 3, name: "Appointments", icon: ManageAccountsIcon },
  { id: 4, name: "Academics", icon: ManageAccountsIcon },
  { id: 5, name: "Download Files", icon: ManageAccountsIcon },
  { id: 6, name: "Academics Notices", icon: ManageAccountsIcon },
  { id: 7, name: "Tpa Logo", icon: ManageAccountsIcon },
  { id: 8, name: "Events", icon: ManageAccountsIcon },
  { id: 9, name: "Testimonials", icon: ManageAccountsIcon },
  { id: 10, name: "Award Accreditations", icon: ManageAccountsIcon },
  { id: 11, name: "Enquiries", icon: ManageAccountsIcon },
  { id: 12, name: "Contact", icon: ManageAccountsIcon },
  { id: 13, name: "Videos", icon: ManageAccountsIcon },
  { id: 14, name: "Latest Openings", icon: ManageAccountsIcon },
  { id: 15, name: "Careers", icon: ManageAccountsIcon },
  { id: 16, name: "Health Plans", icon: ManageAccountsIcon },
  { id: 17, name: "Health Tips", icon: ManageAccountsIcon },
  { id: 18, name: "Logout", icon: ManageAccountsIcon },
];

export default function NavbarAdmin() {
  return (
    <Stack backgroundColor={"#3E5468"} height={"100%"} width={"300px"}>
      <Stack backgroundColor={"#89CC97"} alignItems={"center"}>
        <Typography
          sx={{
            backgroundColor: "#61aa70",
            width: "fit-content",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px",
            color: "white",
            "&:hover": {
              backgroundColor: "#53B567",
            },
          }}
        >
          Quick Links
        </Typography>
      </Stack>
    </Stack>
  );
}
