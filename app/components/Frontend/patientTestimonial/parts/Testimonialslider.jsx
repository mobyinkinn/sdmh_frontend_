import { Head1 } from '@/app/styledComponents/frontend/Headings';
import { ParaNormal } from '@/app/styledComponents/frontend/Para';
import { Stack } from '@mui/material'
import React from 'react'
import Designslider from './Designslider';
import Rounding from "./assets/RoundingImage.png"
const Testimonialslider = () => {
    // const bannerImages = 
    //   {
    //     FirstPart: [
    //       {
    //         id: 1,
    //         img: Rounding,
    //         des: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
    //         title: "Delip Joshi",
    //       },
    //       {
    //         id: 2,
    //         img: Rounding,
    //         des: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
    //         title: "Delip Joshi",
    //       },
    //       {
    //         id: 3,
    //         img: Rounding,
    //         des: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
    //         title: "Delip Joshi",
    //       },
    //       {
    //         id: 4,
    //         img: Rounding,
    //         des: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
    //         title: "Delip Joshi",
    //       },
    //     ],
    //     SecondPart: [
    //       {
    //         id: 5,
    //         img: Rounding,
    //         des: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
    //         title: "Delip Joshi",
    //       },
    //       {
    //         id: 6,
    //         img: Rounding,
    //         des: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
    //         title: "Delip Joshi",
    //       },
    //       {
    //         id: 7,
    //         img: Rounding,
    //         des: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
    //         title: "Delip Joshi",
    //       },
    //       {
    //         id: 8,
    //         img: Rounding,
    //         des: "It is A Long Established Fact That A Reader Will Be Distracted By The Readable Content of A Page When Looking At Its Layout. The Point of Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution of Letters, As Opposed To Using 'content Here, Content Here', Making It Look Like Readable English.",
    //         title: "Delip Joshi",
    //       },
    //     ],
    //   }
   const bannerImages = [
     [
       {
         id: 1,
         img: "image1_url",
         des: "This is the first testimonial description.",
         title: "Customer 1",
       },
       {
         id: 2,
         img: "image2_url",
         des: "This is the second testimonial description.",
         title: "Customer 2",
       },
       {
         id: 3,
         img: "image3_url",
         des: "This is the third testimonial description.",
         title: "Customer 3",
       },
       {
         id: 4,
         img: "image4_url",
         des: "This is the fourth testimonial description.",
         title: "Customer 4",
       },
     ],
     [
       {
         id: 5,
         img: "image5_url",
         des: "This is the fifth testimonial description.",
         title: "Customer 5",
       },
       {
         id: 6,
         img: "image6_url",
         des: "This is the sixth testimonial description.",
         title: "Customer 6",
       },
       {
         id: 7,
         img: "image7_url",
         des: "This is the seventh testimonial description.",
         title: "Customer 7",
       },
       {
         id: 8,
         img: "image8_url",
         des: "This is the eighth testimonial description.",
         title: "Customer 8",
       },
     ],
     [
       {
         id: 5,
         img: "image5_url",
         des: "This is the fifth testimonial description.",
         title: "Customer 5",
       },
       {
         id: 6,
         img: "image6_url",
         des: "This is the sixth testimonial description.",
         title: "Customer 6",
       },
       {
         id: 7,
         img: "image7_url",
         des: "This is the seventh testimonial description.",
         title: "Customer 7",
       },
       {
         id: 8,
         img: "image8_url",
         des: "This is the eighth testimonial description.",
         title: "Customer 8",
       },
     ],
   ];


  return (
    <Stack bgcolor={"#D2E4D8"} p={5}>
      <Stack direction={"row"} p={2}>
        <Head1 color="black">What Our&nbsp;</Head1>
        <Head1 style={{ textAlign: "center" }}>Patients Say</Head1>
      </Stack>
      <ParaNormal style={{ width: "40%", paddingLeft: "20px" }}>
        It is a long established fact that a reader will be distracted by the
        readable
      </ParaNormal>
      <Designslider
        bannerImages={bannerImages}
        position={"relative"}
        width={"100%"}
        slidesToShow={1} // Show 4 slides at a time
        bottom={"-6%"} // Adjust based on your design
        padding={"20px"} // Space between slides
        paddinginner={"10px"} // Inner padding for each slide
      />
    </Stack>
  );
}

export default Testimonialslider