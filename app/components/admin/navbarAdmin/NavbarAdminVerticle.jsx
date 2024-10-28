import { Stack, Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {
  NavTableCell,
  NavTableRow,
} from "@/app/styledComponents/admin/NavTable";
import { useRouter } from "next/navigation";

const navData = [
  {
    id: 0,
    name: "User Management",
    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 1,
    name: "Departments",
    link: "/admin/department",
    icon: ManageAccountsIcon,
  },
  {
    id: 2,
    name: "Doctors",
    link: "/admin/doctors",
    icon: ManageAccountsIcon,
  },
  {
    id: 3,
    name: "Appointments",
    link: "/admin/appointments",
    icon: ManageAccountsIcon,
  },
  {
    id: 4,
    name: "Academics",
    link: "/admin/academics",
    icon: ManageAccountsIcon,
  },
  {
    id: 5,
    name: "Download Files",

    link: "/admin/download_files",
    icon: ManageAccountsIcon,
  },
  {
    id: 6,
    name: "Academics Notices",
    link: "/admin/academic_notices",
    icon: ManageAccountsIcon,
  },
  {
    id: 7,
    name: "Tpa Logo",
    link: "/admin/tpa_index",
    icon: ManageAccountsIcon,
  },
  {
    id: 8,
    name: "Events",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 9,
    name: "Testimonials",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 10,
    name: "Award Accreditations",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 11,
    name: "Enquiries",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 12,
    name: "Contact",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 13,
    name: "Videos",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 14,
    name: "Latest Openings",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 15,
    name: "Careers",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 16,
    name: "Health Plans",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 17,
    name: "Health Tips",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
  {
    id: 18,
    name: "Logout",

    link: "/admin/adminuser",
    icon: ManageAccountsIcon,
  },
];

export default function NavbarAdmin() {
  const router = useRouter();
  return (
    <Stack backgroundColor={"#fff"} height={"90vh"} width={"300px"}>
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
      <Stack
        sx={{
          overflow: "auto",
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            {navData.map((el, i) => {
              return (
                <NavTableRow key={el.id} onClick={() => router.push(el.link)}>
                  <NavTableCell icon>
                    <el.icon width={"50px"} height={"50px"} />
                  </NavTableCell>
                  <NavTableCell>{el.name}</NavTableCell>
                </NavTableRow>
              );
            })}
          </tbody>
        </table>
      </Stack>
    </Stack>
  );
}
