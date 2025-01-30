import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import MobileFooter from "../footer/MobileFooter";
import Hero from "./parts/Hero";
import banner from "./parts/assets/contact_banner.png";
import sm_banner from "./parts/assets/sm_contact_banner.png";
import Enquire_Now from "./parts/Enquire_Now";
import Available from "./parts/Available";

const Greeting = () => {
  return (
    <>
      <Navbar />
      <Hero
        align={"left"}
        image={banner.src}
        subtitle="We are here for your care."
        title="Best Care & Better Doctor"
        description="Contrary to popular belief,  not simply It has roots in Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked."
        color={"#476C9B"}
        descolor={"black"}
        sm_image={sm_banner.src}
        textcenter={"left"}
        marginTop={"30px"}
      />
      <Enquire_Now />
      <Available />
      {/* <Greet /> */}
      <Footer />
      <MobileFooter />
    </>
  );
};

export default Greeting;
