import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import banner from "./assets/bannerImage.png";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";
import Terms from "./parts/Terms";
import MobileFooter from "../footer/MobileFooter";

const Terms_condition = () => {
  return (
    <>
      <Navbar />
      <BannerImage2 image={banner.src} />
      <Terms />
      <Footer />
      <MobileFooter />
    </>
  );
};

export default Terms_condition;
