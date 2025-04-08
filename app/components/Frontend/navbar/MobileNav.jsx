"use client";

import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  FaUserMd,
  FaCalendarCheck,
  FaWhatsapp,
  FaMicroscope,
} from "react-icons/fa";

const MobileBottomBar = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "#fff",
        borderTop: "1px solid #ccc",
        display: { xs: "flex", md: "none" },
        justifyContent: "space-around",
        alignItems: "center",
        padding: "8px 0",
        zIndex: 1000,
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {[
        { icon: <FaUserMd size={30} />, label: "Doctor", link:"/find-a-doctor" },
        { icon: <FaCalendarCheck size={30} />, label: "Book Appt" },
        { icon: <FaWhatsapp size={30} color="#25D366" />, label: "WhatsApp" },
        { icon: <FaUserMd size={30} />, label: "Get Health" },
        { icon: <FaMicroscope size={30} />, label: "Lab Rep" },
      ].map((item, i) => (
        <Box
          key={i}
          display="flex"
          flexDirection="column"
          alignItems="center"
          color="#005900"
          onClick={() => router.push(`${item.link}`)}
        >
          {item.icon}
          <Typography fontSize="10px">{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MobileBottomBar;
