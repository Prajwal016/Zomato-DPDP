"use client";

import React from "react";

export default function HomeScreen({ setScreen, isVeg, setIsVeg }) {
  return (
    <div className="bg-background text-on-surface h-full flex flex-col overflow-hidden">
      {/* Top AppBar - Fixed */}
      <header className="flex-shrink-0 bg-surface dark:bg-surface-dim z-40 border-b border-surface-container-highest flex items-center justify-between px-container-margin py-sm">
        <div className="flex items-start gap-xs">
          <span className="material-symbols-outlined text-primary mt-1">location_on</span>
          <div className="flex flex-col">
            <div className="flex items-center gap-xs">
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Home</span>
              <span className="material-symbols-outlined text-on-surface text-[16px]">keyboard_arrow_down</span>
            </div>
            <span className="text-label-sm font-label-sm text-secondary truncate max-w-[100px]">
              F1 Flat No 402, Nyati Elan We...
            </span>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <div className="bg-[#5e35b1] text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">
            district
          </div>
          <div className="w-10 h-10 rounded-full border border-surface-container-highest flex items-center justify-center cursor-pointer hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-on-surface">shopping_cart</span>
          </div>
          <div
            className="w-10 h-10 rounded-full bg-[#FFD700] border-2 border-white flex items-center justify-center cursor-pointer active:opacity-80 transition-opacity interactive-highlight-pulse"
            onClick={() => setScreen("profile")}
          >
            <span className="text-on-primary-fixed font-black text-headline-md font-headline-md">A</span>
          </div>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-grow overflow-y-auto hide-scrollbar px-container-margin py-md space-y-lg">
        {/* Search Section */}
        <section className="flex items-center gap-sm">
          <div className="flex-1 flex items-center bg-surface-container-lowest border border-surface-container-highest rounded-xl px-sm py-xs gap-xs">
            <span className="material-symbols-outlined text-tertiary">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 w-full text-body-md font-body-md text-on-surface placeholder:text-secondary focus:outline-none"
              placeholder='Search "curries"'
              type="text"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div
              className="relative inline-flex items-center cursor-pointer w-10 h-5"
              onClick={() => setIsVeg(!isVeg)}
            >
              <div
                className={`w-10 h-5 rounded-full shadow-inner transition-colors duration-200 ${
                  isVeg ? "bg-tertiary" : "bg-secondary"
                }`}
              ></div>
              <div
                className={`absolute w-4 h-4 bg-white rounded-full transition-all border flex items-center justify-center ${
                  isVeg ? "left-[20px] border-tertiary" : "left-[2px] border-secondary"
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${isVeg ? "bg-tertiary" : "bg-secondary"}`}></div>
              </div>
            </div>
            <span
              className={`text-[8px] font-black tracking-tighter ${
                isVeg ? "text-tertiary" : "text-secondary"
              }`}
            >
              VEG
            </span>
          </div>
        </section>

        {/* Banner Hero */}
        <section>
          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden group cursor-pointer border border-surface-container-highest">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 flex flex-col justify-center px-lg text-white">
              <h2 className="font-headline-xl text-headline-xl leading-tight">
                DAAWAT WORLD
                <br />
                BIRYANI DAY
              </h2>
              <p className="font-label-md text-label-md mt-1 font-bold text-yellow-400">
                (Min 50% OFF)
              </p>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9nhS1uf6cBvq2Ye7CBDUXl1LQV5XLSfLn68Bsb7d0KEnz5tcd8wC0IaHyJ2js-ADJvRbhkhZW2R6ObXogcuU_DMne1ZNn5IR1sjBpkkdrl5uloGgYyf_QW1biy98ptfQ4JFQViqT3w-6DMV_65sgr_4Ds2HyG7PocACGCxlQvoijlc2HythG18MV-PjuMevWo8bYC4SrHdx7oFoqd32mi08DLjgMAEbOSBncfnTWEtmYpQpXR1wL6DJn883rAMP7Bey6XcRmTlVo')",
              }}
            ></div>
          </div>
        </section>

        {/* Category Rail */}
        <section className="overflow-x-auto hide-scrollbar -mx-container-margin px-container-margin flex-shrink-0">
          <div className="flex items-center gap-md">
            {/* All */}
            <div className="flex flex-col items-center gap-xs min-w-[72px] cursor-pointer">
              <div className="w-16 h-16 rounded-full border-2 border-primary overflow-hidden flex items-center justify-center bg-surface-container-lowest">
                <span className="font-bold text-primary text-headline-md font-headline-md">All</span>
              </div>
              <span className="text-label-md font-label-md text-on-surface font-bold">All</span>
            </div>
            {/* Veg Meal */}
            <div className="flex flex-col items-center gap-xs min-w-[72px] cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-surface-container-highest overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFHq9iCOjdhqSHI0zKdJmqgSl4FF3jm2zdSrXiYr-90QgT_IkdcvxpjbSIq_5q2wgznjE1geGz4GtfWdEiYIN573C_VeFJzvVFDliiqJfIFzX1-L4UwYP6V4kcF2CmXRlL5lfCogyqYsFU8sdIbjzTVCel7RryWdy_HPqvzGAHbFL19BGlMOKcPYsYeotw6pDGrZsZ6SQ8JObvoLxCQ63SENfwTB2O4p481aLBD-FDGF4FBXk9A2u6lLBo8HL-iMODwDVdjwX6tGI"
                  alt="Veg Meal"
                />
              </div>
              <span className="text-label-md font-label-md text-secondary">Veg Meal</span>
            </div>
            {/* Chole Bh */}
            <div className="flex flex-col items-center gap-xs min-w-[72px] cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-surface-container-highest overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqTLVfcskh_y5Z5a0cwg-2-akaXcDWXz4VlBy0j5UDBEQezPTT8u3M1DD3_EEYJ7njxwyifQSosorJDZa3t3yCCJP0O-9SxdICxnHML-HZGT_8QhFTHeYIeYexklTYEQrNUbxM8r7ighOFMlZz1YiyuOmyqY2nWCVjy4Leds6pzH7L8-jdNVp3WjxCUu6QsyBGaTLovQo7AsNnC9YnnF8LR2yO7dHzEbiW7G0w_PSbNsCnUOsyfJ6nym0oufO7ImoVVYtonEPaALg"
                  alt="Chole Bhature"
                />
              </div>
              <span className="text-label-md font-label-md text-secondary">Chole Bh...</span>
            </div>
            {/* Biryani */}
            <div className="flex flex-col items-center gap-xs min-w-[72px] cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-surface-container-highest overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYnRh-LXbMfYrBi6IJxUKUUcCS_llpLq55RiUS8r1L-M8ck1aWo6jXg1LBdr48tFHBPD1geGoDB9qaVeTBIdAdAkvQ_mz-m-vVuEQ0hmOUMOkmQizvblcev1goNAPBIEmnLuUK-Qk13ODzhtNAB4LI0GDmTD8qoaIkIETFNgxlFuxo7LxNGjQ9zWWBIEqKOJkw3-DvBsVuNfMwEy2RwvgEyCy6Huw3xK3QYFTvz2ycDQia0z68PqC4RDqsBgk1VxNnTJX0DLa0PJQ"
                  alt="Biryani"
                />
              </div>
              <span className="text-label-md font-label-md text-secondary">Biryani</span>
            </div>
            {/* Dosa */}
            <div className="flex flex-col items-center gap-xs min-w-[72px] cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-surface-container-highest overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzoqcHXL7hqNUUKyPO_AlBmDzqfd0_l4COAQ60FjaqbZunVLKvh1GdSPRBE7aEM1DUJRERhf82-k_0K4t1xpyQS4m7scIqht71ns6QbXV-2e7pu4fC_CQLFhRwxYh4qvOQD7_s7t3GLyNWnHbvftJi_0YAVN9WIHvR0ZXCWk2humS4LoSrb3kmaPlxfvo8m2ZXNftRl0ML55Z8aI4lbUM3dc9JQHPoVueyW0PyI9H2wPQ8eVtlulOETpjLkfETc5dbnkgTD_C3I"
                  alt="Dosa"
                />
              </div>
              <span className="text-label-md font-label-md text-secondary">Dosa</span>
            </div>
          </div>
        </section>

        {/* Featured Section (Bento Style) */}
        <section className="grid grid-cols-2 gap-md flex-shrink-0">
          <div className="col-span-2 bg-surface-container-lowest border border-surface-container-highest p-md rounded-xl flex items-center justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Get it in 15 min</h3>
              <p className="text-label-md font-label-md text-secondary">Express delivery from top spots</p>
            </div>
            <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
          </div>
          <div className="bg-surface-container-lowest border border-surface-container-highest p-md rounded-xl flex flex-col gap-xs">
            <span className="material-symbols-outlined text-tertiary">star</span>
            <span className="font-headline-md text-headline-md">Top Rated</span>
            <span className="text-label-sm font-label-sm text-secondary">4.5+ Rating</span>
          </div>
          <div className="bg-surface-container-lowest border border-surface-container-highest p-md rounded-xl flex flex-col gap-xs">
            <span className="material-symbols-outlined text-[#FFD700]">local_offer</span>
            <span className="font-headline-md text-headline-md">Best Offers</span>
            <span className="text-label-sm font-label-sm text-secondary">Up to 60% OFF</span>
          </div>
        </section>

        {/* Restaurant List */}
        <section className="space-y-md pb-4 flex-shrink-0">
          <h2 className="font-headline-lg text-headline-lg">Trending Near You</h2>
          <div className="space-y-lg">
            <div className="group cursor-pointer">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-surface-container-highest mb-sm">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHRyqCopEcZl4ph5I-WyuQP7o6NJUvLgXm9hauPqm93Fp2eifhi2GGWZVjLZkPMAEKOpjgAUdeNn5Pdv_PZQi6TwBSWLhVqLqR5tCnLAMKZUOFI1gbkfbN02S_AgXOER0pzMnrkmXVRZjAwaejKjmynz4IBbCqKpfJCDo05yXwt5bXlLsgB0OiGeYiwso00hj6wDuZv6V7t2RcSGLq3kL5HpJCL_bGB4wqroRzXLCIYcWCHXTkvtKUjY0TJkhezrb00g6LLADpn4E"
                  alt="The Punjabi Tadka"
                />
                <div className="absolute top-md left-md bg-primary text-white font-bold text-[10px] px-2 py-1 rounded">
                  PROMOTED
                </div>
                <div className="absolute bottom-md right-md bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                  <span className="text-on-surface font-bold text-label-md">4.2</span>
                  <span
                    className="material-symbols-outlined text-[14px] text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline-md text-headline-md text-on-surface">The Punjabi Tadka</h4>
                  <p className="text-label-md font-label-md text-secondary">North Indian • Mughlai • ₹350 for one</p>
                </div>
                <div className="text-right">
                  <p className="text-label-md font-label-md font-bold text-on-surface">25 min</p>
                  <p className="text-label-sm font-label-sm text-secondary">3 km</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Shell - Sticky */}
      <nav className="flex-shrink-0 w-full z-40 flex justify-around items-center bg-surface-container-lowest dark:bg-surface-container py-xs px-gutter border-t border-surface-container-highest">
        {/* Home (Active) */}
        <button
          className="flex flex-col items-center justify-center text-primary dark:text-primary-fixed-dim font-bold active:scale-95 transition-transform duration-150 relative py-1"
          onClick={() => setScreen("home")}
        >
          <span className="material-symbols-outlined mb-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
            home
          </span>
          <span className="font-label-md text-label-md">Home</span>
          <div className="absolute bottom-0 w-1.5 h-1.5 bg-primary rounded-full"></div>
        </button>
        {/* Under 250 */}
        <button className="flex flex-col items-center justify-center text-secondary dark:text-on-secondary-container active:scale-95 transition-transform duration-150 py-1">
          <span className="material-symbols-outlined mb-0.5">payments</span>
          <span className="font-label-md text-label-md">Under ₹250</span>
        </button>
        {/* Dining */}
        <button className="flex flex-col items-center justify-center text-secondary dark:text-on-secondary-container active:scale-95 transition-transform duration-150 py-1">
          <span className="material-symbols-outlined mb-0.5">restaurant</span>
          <span className="font-label-md text-label-md">Dining</span>
        </button>
        {/* Healthy */}
        <button className="flex flex-col items-center justify-center text-secondary dark:text-on-secondary-container active:scale-95 transition-transform duration-150 py-1">
          <span className="material-symbols-outlined mb-0.5">nutrition</span>
          <span className="font-label-md text-label-md">Healthy</span>
        </button>
      </nav>
    </div>
  );
}
