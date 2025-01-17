import { Head1 } from "@/app/styledComponents/frontend/Headings";
import { Box, Stack, Typography } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import Spinner from "@/app/components/ui/Spinner";
import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import Divider from "@mui/material/Divider";
import Group_1 from "../assets/Group_1.png";
import Group_2 from "../assets/Group_2.png";
import Group_3 from "../assets/Group_3.png";
import Group_4 from "../assets/Group_4.png";

const checkupDetails = [
  {
    title: "Investigation",
    items: [
      "Blood Group",
      "CBC",
      "TSH",
      "Urine Routine",
      "Vitamin B12",
      "Vitamin D3",
    ],
  },
  {
    title: "Imaging",
    items: ["Blood Group", "CBC", "Stool Routine", "TSH"],
  },
  {
    title: "Lipid Profile",
    items: [
      "Blood Group",
      "CBC",
      "TSH",
      "Urine Routine",
      "Vitamin B12",
      "Vitamin D3",
    ],
  },
  {
    title: "Diabetics",
    items: ["Blood Group", "CBC", "Vitamin B12", "Vitamin D3"],
  },
  {
    title: "Cardiac",
    items: ["Blood Group", "CBC", "Stool Routine", "TSH"],
  },
];

const groupImages = [
  {
    id: 1,
    image: Group_1,
  },
  {
    id: 2,
    image: Group_2,
  },
  {
    id: 3,
    image: Group_3,
  },
  {
    id: 4,
    image: Group_4,
  },
];

const DetailsHero = ({ id, data, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Stack>
      <Box
        sx={{
          backgroundImage: `url(${data?.bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "70vh",
          margin: "30px 0",
        }}
      ></Box>
      <Stack alignItems={"center"}>
        <Head1 color="black">{data?.title}</Head1>
        <Typography color="#005900" fontSize={"2.5rem"} fontWeight={"600"}>
          ₹{data?.price}
        </Typography>
        <ParaNormal
          color="#000000"
          fontSize={"1.2rem"}
          fontWeight={"400"}
          lineheight={"2.1rem"}
          padding={"0px 50px"}
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
      </Stack>
      <ButtonMediumOutline margin="auto" color="#007946">
        Book Now
      </ButtonMediumOutline>
      <Divider color={"#2D2D2D"} sx={{ margin: "30px 0" }} />

      {/* Checkup Details */}
      <Stack direction={"row"} gap={4} justifyContent={"space-around"}>
        {checkupDetails.map((item) => (
          <Stack key={item.title} mb={2}>
            <ParaNormal color="#000000" fontSize={"1.9rem"} fontWeight={"600"}>
              {item.title}
            </ParaNormal>
            <Stack direction="column" gap={2} width={"100%"} marginTop={1}>
              {item.items.map((subItem) => (
                <list>
                  <li color="#000000" fontSize={"1.2rem"} fontWeight={"400"}>
                    {subItem}
                  </li>
                </list>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>

      {/* Images */}
      <Stack
        bgcolor={"#D2E4D8"}
        width={"100%"}
        padding={{ md: "50px", xs: "30px 15px" }}
        direction={"row"}
      >
        {groupImages.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                height: "300px",
                width: "100%",
                margin: "10px",
                borderRadius: "5px",
                backgroundImage: `url(${item.image.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            ></Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default DetailsHero;
