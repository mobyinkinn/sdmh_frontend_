"use client";

import { ContainerMain } from "@/app/styledComponents/frontend/Container";
import restroom from "./assets/restroom.png";
import bookShop from "./assets/bookShop.png";
import temple from "./assets/temple.png";
import salon from "./assets/salon.png";
import RestCard from "./RestCard";
import { Stack } from "@mui/material";
import { useState } from "react";
import CareCard from "./CareCard";

const restData = [
  {
    id: 0,
    title: "VishramGrah (Accommodation Facility in Campus)",
    img: restroom,
    data: [
      "Air-conditioned in campus accommodation facility is available for patient attendants inside the campus.",
      "To confirm availability please cont : 141-5110200",
      "Check-in and Check-out time : 12 noon(only two attendants are permitted in one room)",
      "Attendant may pay at admission counter to avail the room facility. However due to heavy demand and limited rooms, attendant may have to wait till a room is vacated.",
      "In case of non-availability of VishramGrah rooms, attendants may avail Bunk-Bed facility which is available on 12 hours basis at very nominal rates, inside hospital campus.",
    ],
  },
  {
    id: 1,
    title: "Book & Newspaper Shop",
    img: bookShop,
    data: [
      "Air-conditioned in campus accommodation facility is available for patient attendants inside the campus.",
      "To confirm availability please cont : 141-5110200",
      "Check-in and Check-out time : 12 noon(only two attendants are permitted in one room)",
      "Attendant may pay at admission counter to avail the room facility. However due to heavy demand and limited rooms, attendant may have to wait till a room is vacated.",
      "In case of non-availability of VishramGrah rooms, attendants may avail Bunk-Bed facility which is available on 12 hours basis at very nominal rates, inside hospital campus.",
    ],
  },
  {
    id: 2,
    title: "Sarvdharm Temple",
    img: temple,
    data: [
      "Air-conditioned in campus accommodation facility is available for patient attendants inside the campus.",
      "To confirm availability please cont : 141-5110200",
      "Check-in and Check-out time : 12 noon(only two attendants are permitted in one room)",
      "Attendant may pay at admission counter to avail the room facility. However due to heavy demand and limited rooms, attendant may have to wait till a room is vacated.",
      "In case of non-availability of VishramGrah rooms, attendants may avail Bunk-Bed facility which is available on 12 hours basis at very nominal rates, inside hospital campus.",
    ],
  },
  {
    id: 3,
    title: "Salon",
    img: salon,
    data: [
      "Air-conditioned in campus accommodation facility is available for patient attendants inside the campus.",
      "To confirm availability please cont : 141-5110200",
      "Check-in and Check-out time : 12 noon(only two attendants are permitted in one room)",
      "Attendant may pay at admission counter to avail the room facility. However due to heavy demand and limited rooms, attendant may have to wait till a room is vacated.",
      "In case of non-availability of VishramGrah rooms, attendants may avail Bunk-Bed facility which is available on 12 hours basis at very nominal rates, inside hospital campus.",
    ],
  },
];

export default function Rest() {
  const [activeEl, setActiveEl] = useState(0);
  console.log(activeEl);
  return (
    <ContainerMain bgColor="#007946" gap="50px">
      <Stack direction="row" justifyContent={"space-between"}>
        {restData.map((el, i) => {
          return (
            <RestCard
              el={el}
              key={i}
              setActiveEl={setActiveEl}
              activeEl={activeEl}
            />
          );
        })}
      </Stack>
      <CareCard el={restData[activeEl]} type={"white"} />
    </ContainerMain>
  );
}
