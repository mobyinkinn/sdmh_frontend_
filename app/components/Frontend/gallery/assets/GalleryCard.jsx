"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function GalleryCard({ career }) {
  console.log("career", career);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <Box
      key={career.id}
      sx={{
        position: "relative",
        width: { md: "400px", xs: "300px" },
        height: { md: "280px", xs: "200px" },
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Image
        src={career.img}
        alt={career.title}
        layout="fill"
        objectFit="cover"
        style={{ filter: "brightness(0.8)" }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {career.title}
        </Typography>
      </Box>
    </Box>
  );
}
