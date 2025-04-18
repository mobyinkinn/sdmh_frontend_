import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Stack, Typography } from "@mui/material";
import durlabhji from "../assets/dulabhji.png";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <ContainerMain
      flexDirection={{ sm: "column", smm: "column", md: "column", lg: "row" }}
      bgColor={"#D8E0EB"}
      padding={{ lg: "50px 50px 0 50px", sm: "20px" }}
      justifyContent={"center"}
      alignItems={"center"}
      gap="80px"
    >
      <Stack
        width={{ xs: "90%", md: "50%", lg: "40%" }}
        height={{ lg: "70vh", sm: "45vh" }}
        sx={{
          backgroundImage: `url(${durlabhji.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Stack>
      <Stack width={{ xs: "90%", md: "50%", lg: "60%" }} gap={"20px"}>
        <Stack direction={"row"} justifyContent={"center"}>
          <Head1 color="black" fontSize={{ sm: "1.5rem" }}>
            About &nbsp;
          </Head1>
          <Head1 fontSize={{ sm: "1.5rem" }}>SDMH</Head1>
        </Stack>
        <Typography
          fontSize={{ xs: "1rem", smm: "1.2rem" }}
          textAlign={"center"}
        >
          The Santokba Durlabhji Trust was founded in 1958 with a vision to
          provide quality care to the common man – without favour or
          discrimination. The Santokba Durlabhji Memorial Hospital was
          established in 1971. Inaugurated by the then Prime Minister, Smt.
          Indira Gandhi, the hospital was dedicated to the Armed Forces as the
          nation was then in the throes of a war with Pakistan.
        </Typography>
        {/* <Typography
          fontSize={{ xs: "1rem", smm: "1.2rem" }}
          textAlign={"center"}
        >
          Since then, S.D.M.H. has continued to provide affordable health care
          through the several philanthropic initiatives it has undertaken e.g.
          The Avedna Ashram, the Rehabilitation and Limb Fitting Centre,
        </Typography> */}
        <Stack alignItems={{ xs: "center", md: "start" }}>
          <ButtonMediumOutline
            margin="10px 20px"
            color="#fff"
            hcolor="#005900"
            backgroundColor="#007946"
            onClick={() => router.push(`/about`)}
          >
            Read More
          </ButtonMediumOutline>
        </Stack>
      </Stack>
    </ContainerMain>
  );
}
