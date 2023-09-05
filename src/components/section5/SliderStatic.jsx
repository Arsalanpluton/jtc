import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
// import img from "../../images/Rectangle 192.png";
// import "./styles.css";

export default function SliderStatic() {
  return (
    <>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src="/images/img1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/img2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/img3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/img4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/img5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/img6.png" alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="/images/img7.png" alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src="/images/img8.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

