"use client";

import React, { useState } from "react";

export default function PrivacyControlScreen({
  setScreen,
  marketingAI,
  setMarketingAI,
}) {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSave = () => {
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  return (
    <div className="bg-background text-on-surface h-full flex flex-col overflow-hidden relative">
      {/* Top App Bar - Fixed */}
      <header className="flex-shrink-0 bg-surface flex items-center justify-between px-container-margin py-sm border-b border-surface-container-highest">
        <div className="flex items-center gap-md">
          <button
            aria-label="Back to Profile"
            className="flex items-center justify-center p-xs hover:bg-surface-container-low transition-colors rounded-full"
            onClick={() => setScreen("profile")}
          >
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </button>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Privacy Control Center</h1>
        </div>
        <div className="flex items-center">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified_user
          </span>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-grow overflow-y-auto hide-scrollbar pb-6">
        {/* Intro Section */}
        <section className="px-container-margin py-lg bg-surface-container-lowest">
          <div className="flex items-start gap-md mb-md">
            <div className="mt-1 flex-shrink-0">
              <span
                className="material-symbols-outlined text-[#2E7D32] text-[32px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield
              </span>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-base">Your Privacy Rights</h2>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                Under the Digital Personal Data Protection (DPDP) guidelines, you have full control over how your data is collected and processed. Manage your preferences below.
              </p>
            </div>
          </div>
        </section>

        <div className="flat-divider"></div>
        <div className="h-xs bg-surface-container-low"></div>

        {/* Data Permissions Section */}
        <section className="py-lg">
          <div className="px-container-margin mb-md">
            <h3 className="font-label-md text-label-md text-secondary uppercase tracking-wider">Data Permissions</h3>
          </div>

          {/* Item 1: GPS */}
          <div className="px-container-margin py-md flex items-start justify-between bg-surface-container-lowest border-b border-surface-container-highest">
            <div className="pr-md">
              <h4 className="font-headline-md text-[16px] text-on-surface">Operational GPS Tracking</h4>
              <p className="font-body-md text-body-md text-secondary mt-base">
                Mandatory for order delivery and location-based services.
              </p>
            </div>
            <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in mt-1 flex-shrink-0">
              <input
                checked
                disabled
                className="toggle-checkbox absolute block w-12 h-6 rounded-full appearance-none cursor-pointer opacity-0 z-10"
                id="gps"
                name="gps"
                type="checkbox"
                readOnly
              />
              <label
                className="toggle-slot block overflow-hidden h-6 w-12 rounded-full bg-primary cursor-not-allowed"
                htmlFor="gps"
              >
                <span className="toggle-dot block h-4 w-4 rounded-full bg-white mt-1 ml-1 transition-transform translate-x-6"></span>
              </label>
            </div>
          </div>

          {/* Item 2: AI Profiling */}
          <div
            className="px-container-margin py-md flex items-start justify-between bg-surface-container-lowest active:bg-surface-container-low transition-colors cursor-pointer border-b border-surface-container-highest"
            onClick={() => setMarketingAI(!marketingAI)}
          >
            <div className="pr-md">
              <h4 className="font-headline-md text-[16px] text-on-surface">Marketing AI Profiling</h4>
              <p className="font-body-md text-body-md text-secondary mt-base">
                Allow us to use your data to provide personalized recommendations and offers.
              </p>
            </div>
            <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in mt-1 flex-shrink-0">
              <input
                className="toggle-checkbox absolute block w-12 h-6 rounded-full appearance-none cursor-pointer opacity-0 z-10"
                id="ai-toggle"
                name="ai-toggle"
                type="checkbox"
                checked={marketingAI}
                onChange={() => {}}
              />
              <label
                className={`toggle-slot block overflow-hidden h-6 w-12 rounded-full cursor-pointer transition-colors duration-200 ${
                  marketingAI ? "bg-primary" : "bg-surface-container-highest"
                }`}
                htmlFor="ai-toggle"
              >
                <span
                  className={`toggle-dot block h-4 w-4 rounded-full bg-white mt-1 ml-1 transition-transform duration-200 ${
                    marketingAI ? "translate-x-6" : "translate-x-0"
                  }`}
                ></span>
              </label>
            </div>
          </div>

          {/* Item 3: Request Deletion */}
          <button
            className="w-full px-container-margin py-md flex items-center justify-between bg-surface-container-lowest hover:bg-surface-container-low active:bg-surface-variant transition-all text-left border-b border-surface-container-highest interactive-highlight-row"
            onClick={() => setScreen("deletion_hub")}
          >
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-secondary">delete</span>
              <div>
                <h4 className="font-headline-md text-[16px] text-on-surface">Request Data History Deletion</h4>
                <p className="font-body-sm text-label-sm text-secondary">
                  Permanently remove your activity and personal records.
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-secondary-fixed-dim">chevron_right</span>
          </button>
        </section>
      </main>

      {/* Interactive Footer Action - Sticky */}
      <footer className="flex-shrink-0 bg-surface-container-lowest border-t border-surface-container-highest px-container-margin py-md z-30">
        <button
          className="w-full bg-primary text-on-primary py-md rounded-lg font-headline-md text-headline-md active:scale-[0.98] transition-transform interactive-highlight-pulse"
          id="save-btn"
          onClick={handleSave}
        >
          Save Preferences
        </button>
      </footer>

      {/* Success Snackbar (absolutely positioned relative to the mobile container) */}
      <div
        className={`absolute bottom-24 left-4 right-4 z-50 bg-[#2E7D32] text-white px-md py-sm rounded-lg shadow-lg flex items-center gap-md transition-all duration-300 ${
          showSnackbar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="material-symbols-outlined">check_circle</span>
        <span className="font-body-md">Your preferences have been saved</span>
      </div>
    </div>
  );
}
