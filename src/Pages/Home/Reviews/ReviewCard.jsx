import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const ReviewCard = ({ reviews }) => {
  const { user_photoURL, userName, review } = reviews;

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-sm ">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-cyan-300 text-3xl mb-4" />

      {/* Message */}
      <p className="text-gray-600 mb-6">{review}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Circle Avatar Placeholder */}
        <div className="w-10 h-10 rounded-full bg-cyan-900">
          <img className="rounded-full" src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-cyan-900">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
