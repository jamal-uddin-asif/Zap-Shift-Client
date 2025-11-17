import React from "react";
import services from "../../../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-secondary py-10 px-2 md:px-10 my-8">
      <h1 className="text-center text-white font-bold text-2xl">
        Our Services
      </h1>
      <p className="text-center text-gray-100 text-sm mb-5">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. <br /> From personal packages to business shipments — we deliver
        on time, every time.
      </p>

      <div className="grid grid-cols-3 gap-3 ">

        <div className="flex hover:bg-primary flex-col justify-center items-center space-y-2 bg-white p-4 rounded-xl">
          <div className="p-2 bg-linear-to-b from-gray-400 to-white rounded-full">
            <img src={services} alt="" />
          </div>
          <h1 className="text-2xl text-center ">Express  & Standard Delivery</h1>
          <p className="text-center text-gray-600">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
        </div>
        <div className="flex hover:bg-primary flex-col justify-center items-center space-y-2 bg-white p-4 rounded-xl">
          <div className="p-2 bg-linear-to-b from-gray-400 to-white rounded-full">
            <img src={services} alt="" />
          </div>
          <h1 className="text-2xl text-center ">Nationwide Delivery</h1>
          <p className="text-center text-gray-600">We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
        </div>
        <div className="flex hover:bg-primary flex-col justify-center items-center space-y-2 bg-white p-4 rounded-xl">
          <div className="p-2 bg-linear-to-b from-gray-400 to-white rounded-full">
            <img src={services} alt="" />
          </div>
          <h1 className="text-2xl text-center ">Fulfillment Solution</h1>
          <p className="text-center text-gray-600">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
        </div>
        <div className="flex hover:bg-primary flex-col justify-center items-center space-y-2 bg-white p-4 rounded-xl">
          <div className="p-2 bg-linear-to-b from-gray-400 to-white rounded-full">
            <img src={services} alt="" />
          </div>
          <h1 className="text-2xl text-center ">Cash on Home Delivery</h1>
          <p className="text-center text-gray-600">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
        </div>
        <div className="flex hover:bg-primary flex-col justify-center items-center space-y-2 bg-white p-4 rounded-xl">
          <div className="p-2 bg-linear-to-b from-gray-400 to-white rounded-full">
            <img src={services} alt="" />
          </div>
          <h1 className="text-2xl text-center ">Corporate Service / Contract In Logistics</h1>
          <p className="text-center text-gray-600">Customized corporate services which includes warehouse and inventory management support..</p>
        </div>
        <div className="flex hover:bg-primary flex-col justify-center items-center space-y-2 bg-white p-4 rounded-xl">
          <div className="p-2 bg-linear-to-b from-gray-400 to-white rounded-full">
            <img src={services} alt="" />
          </div>
          <h1 className="text-2xl text-center ">Parcel Return</h1>
          <p className="text-center text-gray-600">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
        </div>
        
  

      </div>

    </div>
  );
};

export default OurServices;
