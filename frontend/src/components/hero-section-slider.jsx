import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slider1 from "../../public/slider1.jpg";
import slider2 from "../../public/slider2.jpg";

export default function HeroSectionSlider() {
  return (
    <div className="w-8/12 mx-auto mt-6">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper rounded-md">
        <SwiperSlide>
            <img src={slider1} alt="slider1" className="h-[65vh] object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="slider2" className="h-[65vh] object-cover"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
