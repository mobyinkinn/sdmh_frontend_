import { Head1 } from '@/app/styledComponents/frontend/Headings'
import { ParaNormal } from '@/app/styledComponents/frontend/Para';
import { Stack } from '@mui/material'
import React from 'react'
import Image1 from "./assets/Ach1.png";
import Image2 from "./assets/Ach1.png";
import Image3 from "./assets/Ach1.png";
import Image from 'next/image';

const Achievements = () => {
  const data = [Image1, Image2, Image3, Image3];
  return (
    <Stack bgcolor={"#D8E0EB"} p={"30px 100px"} gap={3}>
      <Head1 color="#005900">Achievements</Head1>
      <ParaNormal color="black" style={{ textAlign: "center" }}>
        There are 100% results most of the time. All the passed out students are
        given staff nurse post in regular grade in SDM Hospital after completion
        of training. Many of our passed out students are working in the State of
        Rajasthan, throughout India as well as abroad.
      </ParaNormal>
      <Stack direction={"row"} gap={2} justifyContent={"center"}>
        {data.map((d, i) => (
          <Stack key={i}>
            <Image src={d} width={300} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Achievements