import { Stack, Typography } from "@mui/material";
import findDoc from "../assets/icons/findDoctor.png";
import speciality from "../assets/icons/speciality.png";
import video from "../assets/icons/video.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/ui/Modal";

const filterData = [
  {
    id: 0,
    name: "Find a Doctor",
    icon: findDoc,
    link: "find-a-doctor",
  },
  {
    id: 1,
    name: "Second Opinion",
    icon: speciality,
    link: "second-opinion",
  },
  {
    id: 2,
    name: "Video Consultation",
    icon: video,
    link: "",
  },
  {
    id: 3,
    name: "Get Health Checkup",
    icon: findDoc,
    link: "health-checkup",
  },
];

export default function FilterSection() {
  const router = useRouter();
  return (
    <Modal>
      <Stack
        direction={"row"}
        margin={"50px auto"}
        backgroundColor={"#476C9B"}
        width={"90%"}
        sx={{ display: { sm: "none", md: "flex" } }}
      >
        {filterData.map((el, i) => {
          return (
            <Stack
              width={"25%"}
              direction={"row"}
              padding={{ lg: "40px 0", md: "30px 0" }}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"10px"}
              key={i}
              sx={{
                borderRight: "1px solid white",
                cursor: "pointer",
              }}
              onClick={() => {
                if (el.link) {
                  router.push(`${el.link}`);
                }
              }}
            >
              <Image src={el.icon} alt="" height={30} width={30} />
              {el.id === 2 ? (
                <Modal.Open opens="Video">
                  <Typography color="white" fontSize={"1.2rem"}>
                    {el.name}
                  </Typography>
                </Modal.Open>
              ) : (
                <Typography color="white" fontSize={"1.2rem"}>
                  {el.name}
                </Typography>
              )}
              {/* <IoIosArrowDown style={{ color: "white" }} /> */}
            </Stack>
          );
        })}
      </Stack>
      <Modal.Window name="Video">
        <Stack gap={2}>
          <Typography textAlign={"center"} fontSize={"2rem"} color="green">
            Video Consultation
          </Typography>
          <Typography textAlign={"center"}>
            Video consultations are currently available only for follow-up
            patients, as advised by our doctors. For assistance with scheduling
            a video consultation, please contact us at 707311-11911.
          </Typography>
        </Stack>
      </Modal.Window>
    </Modal>
  );
}
