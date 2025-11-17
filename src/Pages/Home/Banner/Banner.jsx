import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true}>
      <div className="relative">
        <img src={bannerImg1} />
        <div className="absolute bottom-13 left-16 flex items-center gap-2  z-10">
          <div className="flex items-center ">
            <button className="btn bg-primary rounded-full">Track Your Parcel</button>
            <BsFillArrowUpRightCircleFill size={30}/>
          </div>
          <button className="btn btn-outline">Be A Rider</button>
        </div>
      </div>
      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
