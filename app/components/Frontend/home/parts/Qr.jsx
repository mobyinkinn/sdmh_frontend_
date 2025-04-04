"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { IoIosSend } from "react-icons/io";
import qr from "../assets/icons/qrwhite.png";
import {
  Head1,
  Head2,
  Head3,
  Head4,
} from "@/app/styledComponents/frontend/Headings";
import { Stack, Typography } from "@mui/material";
import { DarkGreenButton } from "@/app/styledComponents/frontend/Buttons";
import Image from "next/image";
import { SearchInput, TextInput } from "@/app/styledComponents/frontend/Inputs";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useCreateNewsletter } from "@/app/components/admin/newsletter/useNewsletter";
import SpinnerMini from "@/app/components/ui/SpinnerMini";
import { useState } from "react";

export default function Qr() {
  const [email, setEmail] = useState("");
  const { createNewsletters, isCreating } = useCreateNewsletter();
  if (isCreating) return <SpinnerMini />;

  const handleNewsletterClick = () => {
    createNewsletters({ email });
    alert("Newsletter subscription successful!");
    setEmail("");
  };

  return (
    <ContainerMain
      flexDirection={{ lg: "row", xs: "column", sm: "column", smm: "column" }}
      bgColor={"#CEDDCC"}
    >
      <Stack
        width={{ md: "50%" }}
        gap={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          borderRight: { md: "3px solid #379237" },
        }}
      >
        <Head1 color="black">Join Newsletter</Head1>
        <Typography
          fontSize={{ md: "1.2rem", xs: "0.9rem" }}
          textAlign={"center"}
          width={{ md: "70%", xs: "90%" }}
        >
          Stay informed with expert health tips and hospital updates—join our
          newsletter today.
        </Typography>

        <TextField
          variant="outlined"
          placeholder="Enter Your Mail Id"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "#005900",
            borderRadius: "50px",
            width: { xs: "254px", lg: "300px" },
            "& input": { color: "white" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              "& fieldset": { border: "none" },
            },
            "& .MuiInputBase-input::placeholder": { color: "white" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{ color: "white" }}
                  onClick={handleNewsletterClick}
                  disabled={isCreating}
                >
                  <IoIosSend />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack
        width={{ md: "50%", xs: "100%" }}
        flexDirection={{ xs: "column-reverse", md: "column" }}
        gap="15px"
        alignItems={"center"}
      >
        <Stack sx={{bgcolor:"#005901", padding:"40px", borderRadius:"20px"}}>
          <Image src={qr} alt="" width={200} height={200} style={{}} />
        </Stack>
        <Stack gap="5px" alignItems={"center"}>
          <Head4 color="black">Scan QR</Head4>
          <Head1>Share Your Feedback</Head1>
        </Stack>
      </Stack>
    </ContainerMain>
  );
}
