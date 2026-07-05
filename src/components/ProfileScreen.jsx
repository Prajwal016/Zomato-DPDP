"use client";

import React from "react";

export default function ProfileScreen({
  setScreen,
  isVeg,
  setIsVeg,
  showPersonalizedRatings,
  setShowPersonalizedRatings,
}) {
  return (
    <div className="bg-surface text-on-surface h-full flex flex-col overflow-hidden">
      {/* Scrollable area containing header and main content */}
      <div className="flex-grow overflow-y-auto hide-scrollbar">
        {/* Header Section */}
        <header className="bg-[#1C1C1E] diamond-pattern pt-12 pb-6 px-container-margin relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-full bg-[#FFF9E6] border-2 border-[#D4AF37] flex items-center justify-center text-[#410007] font-bold text-headline-xl">
                A
              </div>
              <div>
                <h1 className="text-on-primary font-headline-xl text-headline-xl">Anand</h1>
                <div className="flex items-center gap-base text-surface-container-highest cursor-pointer active:opacity-80 transition-opacity">
                  <span className="font-body-md text-body-md">Edit profile</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </div>
              </div>
            </div>
            <div className="flex gap-xs items-center">
              <span className="material-symbols-outlined text-surface-container-highest">settings</span>
            </div>
          </div>
          <div className="flex gap-sm">
            <div className="bg-[#2C2C2E] rounded-xl px-md py-xs border border-[#444446] flex items-center gap-xs">
              <span className="material-symbols-outlined text-[#D4AF37]" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
              <span className="text-[#D4AF37] font-bold font-label-md text-label-md">Gold member</span>
            </div>
            <div className="bg-[#3D2B1F] rounded-full px-md py-xs border border-[#5E4637] flex items-center gap-xs">
              <span className="text-[#F2F0F0] font-medium font-label-md text-label-md">saved ₹3964</span>
            </div>
          </div>
        </header>

        {/* Top Cards Grid */}
        <main className="px-container-margin -mt-4 relative z-10 grid grid-cols-2 gap-sm">
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md flex flex-col justify-between">
            <div className="flex items-center gap-xs mb-base">
              <span className="material-symbols-outlined text-secondary text-[20px]">account_balance_wallet</span>
              <span className="font-label-md text-label-md text-secondary">Zomato Money</span>
            </div>
            <p className="font-headline-md text-headline-md text-[#2D8A39]">₹0</p>
          </div>
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-md flex flex-col justify-between">
            <div className="flex items-center gap-xs mb-base">
              <span className="material-symbols-outlined text-secondary text-[20px]">confirmation_number</span>
              <span className="font-label-md text-label-md text-secondary">Your coupons</span>
            </div>
            <p className="font-label-sm text-label-sm text-[#D4AF37] font-semibold">1 expires tomorrow</p>
          </div>
        </main>

        {/* Content Sections */}
        <section className="mt-lg px-container-margin space-y-lg pb-10">
          {/* List Group 1: Your preferences */}
          <div>
            <h3 className="font-headline-md text-headline-md mb-sm px-base">Your preferences</h3>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden">
              {/* Veg Mode */}
              <div
                className="flex items-center justify-between p-md border-b border-surface-container-highest hover:bg-surface-container-low transition-colors cursor-pointer"
                onClick={() => setIsVeg(!isVeg)}
              >
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">eco</span>
                  <span className="font-body-md text-body-md">Veg Mode</span>
                </div>
                <span className="text-tertiary font-bold font-label-md text-label-md">
                  {isVeg ? "On" : "Off"}
                </span>
              </div>
              {/* Personalised Ratings */}
              <div className="flex items-center justify-between p-md border-b border-surface-container-highest">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">stars</span>
                  <span className="font-body-md text-body-md">Show personalised ratings</span>
                </div>
                <div
                  className={`custom-toggle ${showPersonalizedRatings ? "toggle-active" : ""}`}
                  onClick={() => setShowPersonalizedRatings(!showPersonalizedRatings)}
                ></div>
              </div>
              {/* Privacy Control Center */}
              <div
                className="flex items-center justify-between p-md border-b border-surface-container-highest hover:bg-surface-container-low transition-colors cursor-pointer interactive-highlight-row"
                onClick={() => setScreen("privacy_control")}
              >
                <div className="flex items-center gap-md">
                  <span
                    className="material-symbols-outlined text-[#2D8A39]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    shield
                  </span>
                  <div>
                    <p className="font-body-md text-body-md">Privacy Control Center (DPDP)</p>
                    <p className="font-label-sm text-label-sm text-secondary">Manage your data rights</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
              {/* Appearance */}
              <div className="flex items-center justify-between p-md border-b border-surface-container-highest hover:bg-surface-container-low transition-colors cursor-pointer">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">palette</span>
                  <span className="font-body-md text-body-md">Appearance</span>
                </div>
                <span className="text-secondary font-body-md text-body-md">Light</span>
              </div>
              {/* Payment Methods */}
              <div className="flex items-center justify-between p-md hover:bg-surface-container-low transition-colors cursor-pointer">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">credit_card</span>
                  <span className="font-body-md text-body-md">Payment methods</span>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
            </div>
          </div>

          {/* List Group 2: Food delivery */}
          <div>
            <h3 className="font-headline-md text-headline-md mb-sm px-base">Food delivery</h3>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-md border-b border-surface-container-highest hover:bg-surface-container-low transition-colors cursor-pointer">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">receipt_long</span>
                  <span className="font-body-md text-body-md">Your orders</span>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
              <div className="flex items-center justify-between p-md border-b border-surface-container-highest hover:bg-surface-container-low transition-colors cursor-pointer">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <span className="font-body-md text-body-md">Address book</span>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
            </div>
          </div>

          {/* List Group 3: Data Privacy */}
          <div>
            <h3 className="font-headline-md text-headline-md mb-sm px-base">Data Privacy</h3>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden">
              <div
                className="flex items-center justify-between p-md hover:bg-surface-container-low transition-colors cursor-pointer interactive-highlight-row"
                onClick={() => setScreen("deletion_hub")}
              >
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">delete</span>
                  <span className="font-body-md text-body-md">
                    Request Data History Deletion (Right to be Forgotten)
                  </span>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
            </div>
          </div>

          {/* Group 4: Dining */}
          <div>
            <h3 className="font-headline-md text-headline-md mb-sm px-base">Dining</h3>
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden">
              <div className="p-md border-b border-surface-container-highest flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">restaurant</span>
                  <span className="font-body-md text-body-md">Your dining transactions</span>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
              <div className="p-md border-b border-surface-container-highest flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">toll</span>
                  <span className="font-body-md text-body-md">Your DineCoins</span>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
              <div className="p-md border-b border-surface-container-highest flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">military_tech</span>
                  <span className="font-body-md text-body-md">Your dining rewards</span>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
              <div className="p-md border-b border-surface-container-highest flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">book_online</span>
                  <span className="font-body-md text-body-md">Your bookings</span>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
              <div className="p-md flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-secondary">help</span>
                  <span className="font-body-md text-body-md">Dining help</span>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
            </div>
          </div>

          {/* Group 5: Others */}
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden">
            <div className="p-md border-b border-surface-container-highest flex items-center justify-between">
              <div className="flex items-center gap-md">
                <span className="material-symbols-outlined text-secondary">share</span>
                <span className="font-body-md text-body-md">Invite friends</span>
              </div>
              <span className="material-symbols-outlined text-secondary">chevron_right</span>
            </div>
            <div className="p-md border-b border-surface-container-highest flex items-center justify-between">
              <div className="flex items-center gap-md">
                <span className="material-symbols-outlined text-secondary">volunteer_activism</span>
                <span className="font-body-md text-body-md">Feeding India impact</span>
              </div>
              <span className="material-symbols-outlined text-secondary">chevron_right</span>
            </div>
            <div className="p-md flex items-center justify-between">
              <div className="flex items-center gap-md">
                <span className="material-symbols-outlined text-secondary">card_membership</span>
                <span className="font-body-md text-body-md">Memberships &amp; rewards</span>
              </div>
              <span className="material-symbols-outlined text-secondary">chevron_right</span>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Nav - Sticky */}
      <nav className="flex-shrink-0 w-full z-40 flex justify-around items-center bg-surface-container-lowest dark:bg-surface-container py-xs px-gutter border-t border-surface-container-highest">
        <button
          className="flex flex-col items-center justify-center text-secondary dark:text-on-secondary-container active:scale-95 transition-transform duration-150 py-1"
          onClick={() => setScreen("home")}
        >
          <span className="material-symbols-outlined mb-0.5">home</span>
          <span className="font-label-md text-label-md">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-secondary dark:text-on-secondary-container active:scale-95 transition-transform duration-150 py-1">
          <span className="material-symbols-outlined mb-0.5">payments</span>
          <span className="font-label-md text-label-md">Under ₹250</span>
        </button>
        <button className="flex flex-col items-center justify-center text-secondary dark:text-on-secondary-container active:scale-95 transition-transform duration-150 py-1">
          <span className="material-symbols-outlined mb-0.5">restaurant</span>
          <span className="font-label-md text-label-md">Dining</span>
        </button>
        <button
          className="flex flex-col items-center justify-center text-primary font-bold active:scale-95 transition-transform duration-150 relative py-1"
          onClick={() => setScreen("profile")}
        >
          <span className="material-symbols-outlined mb-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
            account_circle
          </span>
          <span className="font-label-md text-label-md">Profile</span>
          <div className="absolute bottom-0 w-1.5 h-1.5 bg-primary rounded-full"></div>
        </button>
      </nav>
    </div>
  );
}
