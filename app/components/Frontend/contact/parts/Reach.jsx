import { Stack, Typography } from "@mui/material";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";

const data = [
  {
    id: 0,
    data: "Bhawani Singh Marg, Near Rambagh circle, Jaipur-302015 (Rajasthan), INDIA",
    icon: CiLocationOn,
  },
  {
    id: 1,
    data: "0141 352 4444",
    icon: CiPhone,
  },
  {
    id: 2,
    data: "info@sdmh.in",
    icon: CiMail,
  },
];
export default function Reach() {
  return (
    <Stack
      alignItems="center"
      gap="10px"
      padding="50px 10px"
      backgroundColor="#4B9369"
      color="white"
    >
      <Typography
        sx={{
          fontSize: "2rem",
        }}
      >
        How To Reach
      </Typography>
      <Typography textAlign={"center"} width={{ md: "40%" }}>
        Santokba Durlabhji Memorial Hospital Cum Medical Research Institute
      </Typography>
      <Stack
        direction={{ md: "row" }}
        flexWrap={"wrap"}
        marginTop="30px"
        justifyContent="center"
        gap="20px"
      >
        {data.map((item) => (
          <Stack
            backgroundColor="white"
            width={{ md: "fitContent" }}
            minWidth={"300px"}
            key={item.id}
            direction="row"
            gap="20px"
            padding={{ md: "30px", xs: "20px 10px" }}
            alignItems={"center"}
            borderRadius="5px"
          >
            <Stack
              backgroundColor="#007946"
              width="40px"
              height="40px"
              minWidth="40px"
              alignItems="center"
              justifyContent={"center"}
              borderRadius="3px"
            >
              <item.icon color="white" size="24px" />
            </Stack>
            <Typography
              color="black"
              minWidth={{ xs: "180px", md: "none" }}
              maxWidth={"35vw"}
            >
              {item.data}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
