"use client";
import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import { Head1 } from "@/app/styledComponents/frontend/Headings";
import Image from "next/image";
import { Height } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { ButtonSmallOutline } from "@/app/styledComponents/frontend/Buttons";
import { useCheckups } from "@/app/components/admin/health_plans/useCheckups";
import Spinner from "@/app/components/ui/Spinner";
import { useRouter } from "next/navigation";

export default function Grid() {
  const { data, isLoading, error } = useCheckups();
  const filteredData = data?.filter((el, i) => el.status === true);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <ContainerMain
      bgColor="#D8E0EB"
      padding={{ lg: "50px", md: "40px", smm: "30px", sm: "20px" }}
      gap={{ lg: "20px", sm: "8px" }}
    >
      <Stack justifyContent={"center"} gap={1}>
        <Head1
          fontWeight="none"
          color="black"
          fontSize={{ lg: "30px", md: "25px", smm: "20px", sm: "15px" }}
        >
          Our Affordable
        </Head1>
        <Head1
          color="#005900"
          fontSize={{ lg: "50px", md: "40px", smm: "30px", sm: "25px" }}
        >
          {" "}
          Health checkup plans
        </Head1>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={"50px"}
        justifyContent={"center"}
        marginTop={"20px"}
      >
        {filteredData.map((el, i) => {
          return <CheckupCard el={el} />;
        })}
      </Stack>
    </ContainerMain>
  );
}

function CheckupCard({ el }) {
  const router = useRouter();

  return (
    <Stack
      width={{ lg: "29%", md: "46%", sm: "100%", sm: "100%" }}
      gap={"10px"}
    >
      <Box
        sx={{
          height: "300px",
          width: "100%",
          position: "relative",
        }}
      >
        <Image src={el.image} alt="" fill objectFit="cover" />
      </Box>
      <ParaNormal fontSize={"30px"}>{el.title}</ParaNormal>
      <ParaNormal fontSize={"30px"}>₹{el.price}</ParaNormal>
      <ParaNormal fontSize={"20px"}>
        <span
          dangerouslySetInnerHTML={{
            __html: `${el.description.slice(0, 100)}`,
          }}
        />
      </ParaNormal>
      <Stack direction={"row"} gap={2}>
        <ButtonSmallOutline
          color="#007946"
          // onClick={() => router.push(`/health-checkup/${el._id}`)}
        >
          Book Now
        </ButtonSmallOutline>
        <ButtonSmallOutline
          color="#000000"
          onClick={() => router.push(`/health-checkup/${el._id}`)}
        >
          Know More
        </ButtonSmallOutline>
      </Stack>
    </Stack>
  );
}
