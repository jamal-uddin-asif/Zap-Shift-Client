import React from "react";

import delevery from "../../../assets/Delivery-Tracking.png";

import { FaCircleDollarToSlot } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <div className="space-y-2 mt-4">
      <h1 className="font-bold text-2xl">How it Works</h1>
      <div className="flex items-center gap-8 justify-center">
        <div className="space-y-3 bg-white rounded-xl p-4">
          <img src={delevery} alt="" />
          <h1 className="font-semibold">Booking Pick & Drop</h1>
          <p className="text-gray-500">
            {" "}
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="space-y-3 bg-white rounded-xl p-4">
          <FaCircleDollarToSlot size={45} />
          <h1 className="font-semibold">Cash On Delivery</h1>
          <p className="text-gray-500">
            {" "}
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="space-y-3 bg-white rounded-xl p-4">
          <img src={delevery} alt="" />
          <h1 className="font-semibold">Delivery Hub</h1>
          <p className="text-gray-500">
            {" "}
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="space-y-3 bg-white rounded-xl p-4">
          <img src={delevery} alt="" />
          <h1 className="font-semibold">Booking SME & Corporate</h1>
          <p className="text-gray-500">
            {" "}
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
