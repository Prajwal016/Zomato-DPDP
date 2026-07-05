"use client";

import React, { useState } from "react";
import HomeScreen from "../components/HomeScreen";
import ProfileScreen from "../components/ProfileScreen";
import PrivacyControlScreen from "../components/PrivacyControlScreen";
import DeletionHubScreen from "../components/DeletionHubScreen";

export default function Home() {
  const [screen, setScreen] = useState("home");
  const [isVeg, setIsVeg] = useState(true);
  const [showPersonalizedRatings, setShowPersonalizedRatings] = useState(true);
  const [marketingAI, setMarketingAI] = useState(false);

  // Helper to render the active screen component
  const renderScreen = () => {
    switch (screen) {
      case "home":
        return (
          <HomeScreen
            setScreen={setScreen}
            isVeg={isVeg}
            setIsVeg={setIsVeg}
          />
        );
      case "profile":
        return (
          <ProfileScreen
            setScreen={setScreen}
            isVeg={isVeg}
            setIsVeg={setIsVeg}
            showPersonalizedRatings={showPersonalizedRatings}
            setShowPersonalizedRatings={setShowPersonalizedRatings}
          />
        );
      case "privacy_control":
        return (
          <PrivacyControlScreen
            setScreen={setScreen}
            marketingAI={marketingAI}
            setMarketingAI={setMarketingAI}
          />
        );
      case "deletion_hub":
        return (
          <DeletionHubScreen
            setScreen={setScreen}
          />
        );
      default:
        return (
          <HomeScreen
            setScreen={setScreen}
            isVeg={isVeg}
            setIsVeg={setIsVeg}
          />
        );
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#18181b] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background ambient red glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-tertiary/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Desktop info panel on the left (hidden on mobile/tablet) */}
      <div className="hidden lg:flex flex-col w-[320px] flex-shrink-0 mr-16 text-white z-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-black text-2xl shadow-lg shadow-primary/30">
            Z
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">zomato</h1>
            <p className="text-xs text-zinc-400 font-semibold tracking-widest uppercase">
              DPDP Compliance Prototype
            </p>
          </div>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Interactive mobile app walkthrough showcasing implementation of the Digital Personal Data Protection (DPDP) Act rules inside the Zomato experience.
        </p>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 space-y-4">
          <h2 className="text-sm font-bold text-zinc-200">Interactive Flows:</h2>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
              <span>Click Profile icon <strong className="text-zinc-200 font-bold">(A)</strong> to access user settings.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
              <span>Access <strong className="text-zinc-200 font-semibold">Privacy Control Center</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
              <span>Toggle Marketing AI profiling preferences.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
              <span>Confirm Right to be Forgotten secondary data erasure.</span>
            </li>
          </ul>
        </div>
        <div className="text-zinc-500 text-[11px]">
          Created with Next.js & Tailwind CSS v4
        </div>
      </div>

      {/* Mobile Device Mockup Frame */}
      <div className="relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-[48px] border-[12px] border-zinc-850 bg-black p-2 z-10 w-[375px] h-[812px] flex flex-col overflow-hidden">
        
        {/* Status Bar (placed strictly at the top of viewport) */}
        <div className="absolute top-3 left-4 right-4 h-6 z-50 flex items-center justify-between px-4 pointer-events-none text-zinc-400">
          <span className="text-[11px] font-bold text-white">4:20</span>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="material-symbols-outlined text-[14px] text-white">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[14px] text-white">wifi</span>
            <span className="material-symbols-outlined text-[14px] text-white">battery_5_bar</span>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50 pointer-events-none flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-[#161616] rounded-full"></div>
        </div>

        {/* Viewport container - Set overflow-hidden so headers/footers can stay sticky */}
        <div className="w-full h-full bg-[#fbf9f8] rounded-[36px] overflow-hidden relative pt-[34px] flex flex-col">
          {renderScreen()}
        </div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50 pointer-events-none"></div>
      </div>
    </div>
  );
}
