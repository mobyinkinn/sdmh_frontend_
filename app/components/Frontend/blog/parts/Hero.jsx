"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";

const Hero = ({
  image,
  overlayColor,
  title,
  description,
  align,
  textcenter,
  color,
  descolor,
  heights,
  padding,
}) => {
  return (
    <ContainerMain gap="0" dir="row" padding={{ lg: "0" }} id="about">
      <Stack
        width={"100%"}
        height={heights || "90vh"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        justifyContent={"center"}
        gap={"10px"}
      >
        <Stack
          bgcolor={overlayColor}
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          padding={{ md: 0, xs: "20px" }}
        >
          <Stack alignItems={align || "center"} gap={2}>
            <Stack direction={"row"}>
              <Head1
                fontSize={{
                  sm: "1.2rem",
                  smm: "2rem",
                  md: "2.5rem",
                  lg: "3.4rem",
                }}
                color={color || "white"}
              >
                {title}
              </Head1>
            </Stack>
            <ParaNormal
              fontSize={{ sm: "14px", smm: "15px", md: "18px", lg: "25px" }}
              width={{ md: "70%", lg: "70%", sm: "90%", smm: "90%" }}
              color={descolor || "white"}
              textAlign={textcenter || "center"}
            >
              {description}
            </ParaNormal>
            <Stack alignItems="center" mt={2}>
              <TextField
                size="small"
                placeholder="Search topics"
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "25px",
                  width: { md: "600px", xs: "280px" },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          width: { xs: "120px", md: "100%" },
                          borderRadius: "25px",
                          backgroundColor: "green",
                          color: "white",
                          height: { xs: "30px", md: "30px" },
                          "&:hover": {
                            backgroundColor: "darkgreen",
                          },
                        }}
                      >
                        Search Now
                      </Button>
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: "25px",
                    overflow: "hidden",
                  },
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ContainerMain>
  );
};

export default Hero;
