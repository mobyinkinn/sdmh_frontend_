"use client";

import { Box, Stack, Typography } from "@mui/material";
import img from "./exterior.png";
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
        width: "400px",
        height: "280px",
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
      <Stack>
        <Typography
          width={"100%"}
          sx={{
            position: "absolute",
            bottom: "40%",
            left: "30%",
            color: "white",
            fontSize: "16px",
          }}
        >
          {career.title}
        </Typography>
      </Stack>
    </Box>
  );
}
