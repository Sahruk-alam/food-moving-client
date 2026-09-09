import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const {userName,review:reviewText,user_photoURL}= review;
    return (
        <div className="max-w-md bg-white rounded-3xl p-8 border border-rose-100/50 shadow-sm font-sans">
      {/* Quote Icon */}
      <div className="mb-4">
       <FaQuoteLeft className="w-8 h-8 text-slate-300" />
      </div>

      {/* Testimonial Text */}
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
        {reviewText}
      </p>

      {/* Dashed Divider */}
      <div className="border-t-2 border-dashed border-slate-300/60 my-6" />

      {/* Author Details */}
      <div className="flex items-center gap-4">
        {/* Profile Avatar / Image */}
        <div className="w-12 h-12 rounded-full bg-[#1F4145] flex-shrink-0 overflow-hidden">
          <img 
            src={user_photoURL} 
            alt={userName} 
            className="w-full h-full object-cover hidden" 
          />
        </div>
        {/* Name and Title */}
        <div>
          <h3 className="text-[#1F4145] font-bold text-base leading-tight">
            {userName}
          </h3>
          <p className="text-slate-500 text-xs md:text-sm mt-1">
            Senior Product Designer
          </p>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;