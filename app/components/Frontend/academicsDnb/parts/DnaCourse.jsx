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

const DNBTable = ({
  rows,
  title,
  title1,
  title2,
  title3,
  title4,
  column1,
  column2,
  column3,
  name,
  eligibility,
  duration,
}) => {
  return (
    <Stack bgcolor={"#dcefe9"} p={2}>
      <Stack p={2} lineHeight={1}>
        <Head1 color="black">{title}&nbsp;</Head1>
        <Stack direction={"row"} p={1} justifyContent={"center"}>
          <Head1 style={{ textAlign: "center" }}>{title1}&nbsp;</Head1>
          <Head1 color="black">{title2}</Head1>
        </Stack>
        <Head1
          color="black"
          style={{ display: title3 === "" ? "none" : "block" }}
          paddingBottom={8}
        >
          {title3}&nbsp;
        </Head1>
        <Typography
          fontSize={{ xs: "15px", md: "18px" }}
          component="div"
          align="center"
          display={{ xs: "block", lg: "none" }}
        >
          Eligibility – MS/MD/MCh/DNB in broad or super specialty
        </Typography>
        <Typography
          fontSize={{ xs: "15px", md: "18px" }}
          component="div"
          align="center"
          display={{ xs: "block", lg: "none" }}
        >
          Duration – 3 years
        </Typography>
      </Stack>
      <Box
        sx={{
          padding: { xs: "0", lg: "26px" },
          borderRadius: "8px",
          width: { xs: "95%", lg: "90%" },
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
          display={{ xs: "none", lg: "flex" }}
        >
          <Typography fontSize={"18px"} component="div" align="center">
            {name}
          </Typography>

          <Typography fontSize={"18px"} component="div" align="center">
            {eligibility}
          </Typography>

          <Typography
            fontSize={"18px"}
            component="div"
            align="center"
            display={title4 === "" ? "none" : "block"}
          >
            {title4}
          </Typography>
          <Typography fontSize={"18px"} component="div" align="center">
            {duration}
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
                  {column1}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#2a803c",
                  }}
                >
                  {column2}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#2a803c",
                  }}
                >
                  {column3}
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
