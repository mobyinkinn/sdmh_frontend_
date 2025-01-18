import {
  ParaNormal,
  ParaNormalSmall,
} from "@/app/styledComponents/frontend/Para";
import { Stack } from "@mui/material";
import Image from "next/image";

export default function VisitorCard({ visitor }) {
  return (
    <Stack
      direction={"row"}
      gap={"20px"}
      width={{lg:"45%",sm:"100%"}}
      borderRadius={"5px"}
      alignItems={"center"}
      sx={{
        color: "white",
        cursor: "pointer",
        padding: "10px",
        borderRadius: "10px",
        border: "0.5px solid white",
        "&:hover": {
          color: "black",
          backgroundColor: "white",
        },
      }}
    >
      <Stack>
        <Image src={visitor.img} alt="" height={72} width={72} />
      </Stack>

      <Stack>
        <ParaNormal color="inherit">
          <b>{visitor.name}</b>
        </ParaNormal>
        <ParaNormalSmall color="inherit">{visitor.content}</ParaNormalSmall>
      </Stack>
    </Stack>
  );
}
