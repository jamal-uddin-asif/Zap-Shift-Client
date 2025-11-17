import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return (
    <div className="my-10">
      <div className="text-center  space-y-3 mb-5">
        <h1 className="text-3xl font-bold">What our customers are sayings</h1>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div>
        <>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 30,
              stretch: "50%",
              depth: 200,
              modifier: 1,
              scale: 0.75,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {reviews.map((reviews) => (
              <SwiperSlide key={reviews.id}>
                <ReviewCard reviews={reviews}></ReviewCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Reviews;
