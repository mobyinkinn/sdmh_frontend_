import { ButtonMediumOutline } from "@/app/styledComponents/frontend/Buttons";
import { Stack, Typography } from "@mui/material";
import bgImage from "../assets/sdmh.png";
import Modal from "@/app/components/ui/Modal";

export default function Appointment() {
  return (
    <Stack
      sx={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: "cover" }}
    >
      <Modal>
        <Stack
          sx={{
            backgroundColor: "rgba(0, 121, 70, 0.898)",
            justifyContent: "center",
            alignItems: "center",
            padding: { md: "100px", xs: "20px" },
            gap: "20px",
          }}
        >
          <Typography color="white">We are available 24/7</Typography>
          <Typography
            fontSize={{ md: "2.5rem", xs: "1.5rem" }}
            width={{ md: "60%", xs: "90%" }}
            textAlign={"center"}
            color="white"
          >
            Trust Us Be There To Help All & Make Things Well Done
          </Typography>
          <Modal.Open opens="appointment">
            <ButtonMediumOutline
            border="1px solid white"
              hcolor="white"
              color="white"
              hoverColor="rgb(0, 121, 70)"
            >
              Make Appointment
            </ButtonMediumOutline>
          </Modal.Open>
        </Stack>
        <Modal.Window name="appointment">
          <div>
            <Typography textAlign={"center"} fontSize={"2rem"} color="green">
              Book an Appointment
            </Typography>
            <Typography textAlign={"center"}>
              Appointments can currently be booked by calling 7073111911 between
              7:00 AM and 4:00 PM. This service allows patients or their
              attendants to choose a preferred time slot for consultation with
              the doctor.
            </Typography>
            <Typography textAlign={"center"} marginTop={2}>
              <b>Please note:</b> Appointment slots are subject to availability.
              If a preferred slot is not available, patients will be attended
              through the regular OPD system.
            </Typography>
          </div>
        </Modal.Window>
      </Modal>
    </Stack>
  );
}
