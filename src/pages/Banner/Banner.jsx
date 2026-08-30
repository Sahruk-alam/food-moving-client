import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import banner1 from "../../assets/banner/banner1.png"
import banner2 from "../../assets/banner/banner2.png"
import banner3 from "../../assets/banner/banner3.png"
const Banner = () => {
    return (
         <Carousel autoPlay={true} infiniteLoop={true}>
 <div className="relative">
  <img src={banner1} alt="Banner 1" />

  <div className="absolute bottom-12 left-45 flex -translate-x-1/2 gap-3">
    <button className="rounded-lg bg-[#CAEB66] px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-green-300">
      Track a Parcel
    </button>

    <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-gray-300">
      Be a Rider
    </button>
  </div>
</div>

  <div className="relative">
    <img src={banner2} alt="Banner 2" />

    <div className="absolute bottom-10 left-45 flex -translate-x-1/2 gap-4">
      <button className="rounded-lg bg-[#CAEB66] px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-green-300">
        Track a Parcel
      </button>

      <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-gray-300">
        Be a Rider
      </button>
    </div>
  </div>

  <div className="relative">
    <img src={banner3} alt="Banner 3" />

    <div className="absolute bottom-10 left-45 flex -translate-x-1/2 gap-4">
      <button className="rounded-lg bg-[#CAEB66] px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-green-300">
        Track a Parcel
      </button>

      <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-gray-300">
        Be a Rider
      </button>
    </div>
  </div>
</Carousel>
    );
};

export default Banner;      