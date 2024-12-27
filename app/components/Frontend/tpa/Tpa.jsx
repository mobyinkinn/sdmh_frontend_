import React from 'react'
import Navbar from '../navbar/Nav'
import Footer from '../footer/Footer';
import BannerImage from '@/app/styledComponents/frontend/BannerImage';
import banner from "./assets/bannerImage.png";
import Tabs from './parts/Tabs';

const Tpa = () => {
  return (
    <>
      <Navbar />
      <BannerImage
        overlayColor="#476C9BE5"
        title="Tpas"
        image={banner.src}
        description="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <Tabs/>
      <Footer />
    </>
  );
}

export default Tpa