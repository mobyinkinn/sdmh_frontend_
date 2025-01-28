"use client";

import banner from "./assets/bannerImage.png";
import BannerImage2 from "@/app/styledComponents/frontend/BannerImage2";

export default function Hero() {
  return (
    <BannerImage2
      image={banner.src}
      overlayColor="#476C9BE5"
      title="Academic Deanery"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    />
  );
}
