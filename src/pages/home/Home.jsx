import React from "react";
import Banner from "../Banner/Banner";
import Brands from "./Brands/Brands";
import liveTrackingImage from "../../assets/live-tracking.png";
import safeDeliveryImage from "../../assets/safe-delivery.png";
import locationImage from "../../assets/location-merchant.png";
import Reviews from "./Reviews/Reviews";
const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    image: liveTrackingImage,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: safeDeliveryImage,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: safeDeliveryImage,
  },
];

const reviewsPromise=fetch('/public/reviews.json').then(res=>res.json())

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <section className="px-4 py-8 sm:px-6 lg:px-10">
        <h2 className="mb-6 text-2xl font-bold text-slate-800">How it Works</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white/70 p-6 shadow-lg">
            <div className="mb-5 text-4xl">🚚</div>

            <h3 className="mb-3 text-base font-semibold text-slate-800">
              Booking Pick & Drop
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white/70 p-6 shadow-lg">
            <div className="mb-5 text-4xl">🚚</div>

            <h3 className="mb-3 text-base font-semibold text-slate-800">
              Cash On Delivery
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white/70 p-6 shadow-lg">
            <div className="mb-5 text-4xl">🚚</div>

            <h3 className="mb-3 text-base font-semibold text-slate-800">
              Delivery Hub
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl bg-white/70 p-6 shadow-lg">
            <div className="mb-5 text-4xl">🚚</div>

            <h3 className="mb-3 text-base font-semibold text-slate-800">
              Booking SME & Corporate
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-4 rounded-[20px] bg-[#003F43] px-5 py-10 sm:mx-6 sm:px-8 lg:mx-10 lg:px-16 lg:py-14">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Our Services
          </h2>

          <p className="mt-3 text-xs leading-5 text-white/80 sm:text-sm">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          <div className="rounded-2xl bg-[#FFE4E6] p-6 text-center sm:p-7">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              📦
            </div>

            <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
              Express & Standard Delivery
            </h3>

            <p className="mt-3 text-xs leading-5 text-gray-600 sm:text-sm">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-[#FFE4E6] p-6 text-center sm:p-7">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              📦
            </div>

            <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
              Nationwide Delivery
            </h3>

            <p className="mt-3 text-xs leading-5 text-gray-600 sm:text-sm">
              We deliver parcels nationwide with home delivery in every
              district, ensuring your products reach customers within 48–72
              hours.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-[#FFE4E6] p-6 text-center sm:p-7">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              📦
            </div>

            <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
              Fulfillment Solution
            </h3>

            <p className="mt-3 text-xs leading-5 text-gray-600 sm:text-sm">
              We also offer customized service with inventory management
              support, online order processing, packaging, and after sales
              support.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-[#FFE4E6] p-6 text-center sm:p-7">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              📦
            </div>

            <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
              Cash on Home Delivery
            </h3>

            <p className="mt-3 text-xs leading-5 text-gray-600 sm:text-sm">
              100% cash on delivery anywhere in Bangladesh with guaranteed
              safety of your product.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-[#FFE4E6] p-6 text-center sm:p-7">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              📦
            </div>

            <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
              Corporate Service / Contract In Logistics
            </h3>

            <p className="mt-3 text-xs leading-5 text-gray-600 sm:text-sm">
              Customized corporate services which includes warehouse and
              inventory management support.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-[#FFE4E6] p-6 text-center sm:p-7">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              📦
            </div>

            <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
              Parcel Return
            </h3>

            <p className="mt-3 text-xs leading-5 text-gray-600 sm:text-sm">
              Through our reverse logistics facility we allow end customers to
              return or exchange their products with online business merchants.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-10">
        <h3 className="text-lg text-center mb-5 font-semibold text-slate-800 sm:text-xl">
          Our Trusted Brands
        </h3>
        <Brands></Brands>
      </section>

      <section className="bg-[#fdf7f7] px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex min-h-[135px] items-center rounded-2xl bg-[#fffafa] px-5 py-6 shadow-sm sm:px-8"
            >
              {/* Illustration */}
              <div className="flex w-[120px] shrink-0 items-center justify-center sm:w-[145px]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-[95px] w-[105px] object-contain sm:h-[115px] sm:w-[125px]"
                />
              </div>

              {/* Dotted Divider */}
              <div className="mx-5 hidden h-20 border-l border-dashed border-gray-400 sm:block" />

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#172b4d] sm:text-lg">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-4xl text-xs leading-5 text-gray-500 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


          <section className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[20px] bg-[#17343a]">
        
        {/* Decorative Wave */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[750px] -translate-x-1/2 rounded-[50%] border-t border-white/30 sm:w-[900px]" />

        <div className="relative z-10 grid min-h-[300px] items-center md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="px-7 py-10 sm:px-10 lg:px-12">
            <h2 className="max-w-[430px] text-2xl font-bold leading-tight text-white sm:text-3xl">
              Merchant and Customer Satisfaction
              <br />
              is Our First Priority
            </h2>

            <p className="mt-4 max-w-[500px] text-xs leading-5 text-gray-300 sm:text-sm">
              We offer the lowest delivery charge with the highest value
              along with 100% safety of your product. Pickup courier delivers
              your parcels in every corner of Bangladesh right on time.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                className="
                  rounded-full
                  bg-[#d8f45b]
                  px-5 py-3
                  text-xs font-semibold
                  text-[#172b2f]
                  transition
                  duration-300
                  hover:bg-[#c7e94b]
                  hover:shadow-lg
                  sm:px-6
                "
              >
                Become a Merchant
              </button>

              <button
                className="
                  rounded-full
                  border
                  border-[#d8f45b]
                  px-5 py-3
                  text-xs font-semibold
                  text-[#d8f45b]
                  transition
                  duration-300
                  hover:bg-[#d8f45b]
                  hover:text-[#172b2f]
                  sm:px-6
                "
              >
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex min-h-[230px] items-center justify-center px-5 pb-8 md:min-h-[300px] md:pb-0">
            
            {/* Decorative Dotted Box */}
            <div className="absolute right-[8%] top-1/2 h-[155px] w-[75%] -translate-y-1/2 border border-dotted border-cyan-400/60 sm:h-[180px]" />

            {/* Your Existing Image */}
            <img
              src={locationImage}
              alt="Parcel delivery"
              className="
                relative
                z-10
                w-[75%]
                max-w-[380px]
                object-contain
                opacity-90
              "
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </section>

    </div>
  );
};

export default Home;
