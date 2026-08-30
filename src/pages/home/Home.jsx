import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>


   <section className="px-4 py-8 sm:px-6 lg:px-10">
  <h2 className="mb-6 text-2xl font-bold text-slate-800">
    How it Works
  </h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

    {/* Card 1 */}
    <div className="rounded-2xl bg-white/70 p-6 shadow-lg">
      <div className="mb-5 text-4xl">
        🚚
      </div>

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
      <div className="mb-5 text-4xl">
        🚚
      </div>

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
      <div className="mb-5 text-4xl">
        🚚
      </div>

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
      <div className="mb-5 text-4xl">
        🚚
      </div>

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
      Enjoy fast, reliable parcel delivery with real-time tracking and zero
      hassle. From personal packages to business shipments — we deliver on
      time, every time.
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
        We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
        Khulna, and Rajshahi.
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
        We deliver parcels nationwide with home delivery in every district,
        ensuring your products reach customers within 48–72 hours.
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
        We also offer customized service with inventory management support,
        online order processing, packaging, and after sales support.
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
        100% cash on delivery anywhere in Bangladesh with guaranteed safety
        of your product.
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
        Customized corporate services which includes warehouse and inventory
        management support.
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


        </div>

    );
};

export default Home;