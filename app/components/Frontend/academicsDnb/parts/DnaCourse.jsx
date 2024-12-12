import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import { Head1 } from "@/app/styledComponents/frontend/Headings";

const DNBTable = ({ rows, title, title1, title2, title3, title4 }) => {
  return (
    <Stack bgcolor={"#dcefe9"} p={2}>
      <Stack p={2} lineHeight={1}>
        <Head1 color="black">{title}&nbsp;</Head1>
        <Stack direction={"row"} p={2} justifyContent={"center"}>
          <Head1 style={{ textAlign: "center" }}>{title1}&nbsp;</Head1>
          <Head1 color="black">{title2}</Head1>
        </Stack>
        <Head1 color="black" style={{display:title3===""?"none":"block"}}>{title3}&nbsp;</Head1>
      </Stack>
      <Box
        sx={{
          padding: "26px",
          borderRadius: "8px",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            backgroundColor: "#005900",
            padding: "16px 32px",
            borderRadius: "8px 8px 0 0",
            color: "white",
          }}
        >
          <Typography fontSize={"18px"} component="div" align="center">
            National Board of Examinations - DNB Post MBBS Program
          </Typography>
          <Typography fontSize={"18px"} component="div" align="center" display={title4===""?"none":"block"}>
           {title4}
          </Typography>
          <Typography fontSize={"18px"} component="div" align="center">
            Duration – 3 years
          </Typography>
        </Stack>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#c8d8cf" }}>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#2a803c",
                    fontSize: "18px",
                  }}
                >
                  Subject
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#2a803c",
                  }}
                >
                  Intake
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#2a803c",
                  }}
                >
                  Session
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.intake}</TableCell>
                  <TableCell>{row.session}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default DNBTable;
