import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/pagination";

// image
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import rands from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";

// import { Pagination } from 'swiper/modules';

const Brands = () => {
  const brands = [
    amazon,
    amazon_vector,
    casio,
    moonstar,
    rands,
    star,
    start_people,
  ];

  return (
    <div className="space-y-2 my-4">
      <h1 className="text-center font-semibold">We've helped thousands of sales teams</h1>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {brands.map((logo, i) => (
          <SwiperSlide key={i}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
