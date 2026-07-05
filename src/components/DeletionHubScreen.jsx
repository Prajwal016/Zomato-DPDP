"use client";

import React, { useState } from "react";

export default function DeletionHubScreen({ setScreen }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleErase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setShowSnackbar(true);
      setIsProcessing(false);
    }, 1000);
  };

  const hideSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div className="bg-[#ffffff] text-on-background h-full flex flex-col relative">
      {/* Top Navigation Bar - Fixed */}
      <header className="flex-shrink-0 bg-white z-40 px-container-margin py-md flex items-center gap-md border-b border-surface-container-highest">
        <button
          className="flex items-center justify-center p-base active:opacity-50 transition-opacity rounded-full hover:bg-surface-container-low"
          onClick={() => setScreen("profile")}
          aria-label="Back"
        >
          <span className="material-symbols-outlined text-on-surface" style={{ fontSize: "24px" }}>
            arrow_back
          </span>
        </button>
        <div className="flex flex-col">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight">
            Data Deletion Transparency Hub
          </h1>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-grow px-container-margin py-lg overflow-y-auto hide-scrollbar pb-6">
        {/* Hero Branding/Intro */}
        <div className="mt-xs mb-lg">
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-black tracking-tight mb-xs">
            Manage Your Data Rights
          </h2>
          <p className="font-body-md text-secondary leading-relaxed">
            Under DPDP guidelines, you have full control over your digital footprint. Here is how your data is handled upon erasure request confirmation.
          </p>
        </div>

        {/* Section 1: Erased Data */}
        <section className="mb-lg">
          <div className="bg-surface-container-lowest border border-red-100 rounded-lg p-md">
            <div className="flex items-center gap-xs mb-md">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                delete_forever
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">1. Permanently Scrubbed from Systems</h3>
            </div>
            <ul className="space-y-sm">
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontSize: "18px" }}>
                  close
                </span>
                <span className="font-body-md text-secondary text-left">
                  Behavioral Tracking &amp; Logs (Session data, clickstream analysis)
                </span>
              </li>
              <div className="h-[1px] bg-surface-container-high w-full"></div>
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontSize: "18px" }}>
                  close
                </span>
                <span className="font-body-md text-secondary text-left">Marketing Profiling (Preference scores, segmentations)</span>
              </li>
              <div className="h-[1px] bg-surface-container-high w-full"></div>
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontSize: "18px" }}>
                  close
                </span>
                <span className="font-body-md text-secondary text-left">Saved Locations &amp; Geocodes (Historical delivery pins)</span>
              </li>
              <div className="h-[1px] bg-surface-container-high w-full"></div>
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontSize: "18px" }}>
                  close
                </span>
                <span className="font-body-md text-secondary text-left">App Usage History (Search queries, browsing patterns)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Visual Separator Animation */}
        <div className="relative w-full h-32 my-lg rounded-xl overflow-hidden border border-dashed border-surface-container-highest flex flex-col items-center justify-center text-center p-md bg-surface-container-lowest flex-shrink-0">
          <span className="material-symbols-outlined text-secondary mb-xs" style={{ fontSize: "32px" }}>
            security
          </span>
          <p className="font-label-md text-secondary max-w-[240px]">
            Ensuring end-to-end encryption for all compliance-related logs
          </p>
        </div>

        {/* Section 2: Retained Data */}
        <section className="mb-xl">
          <div className="bg-surface-container-lowest border border-gray-200 rounded-lg p-md">
            <div className="flex items-center gap-xs mb-xs">
              <span
                className="material-symbols-outlined text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">2. Legally Mandated Retention</h3>
            </div>
            <p className="font-label-sm text-secondary mb-md italic">
              Per Section 8(7) of the DPDP Act, specific records must be held for regulatory audit.
            </p>
            <ul className="space-y-sm">
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-tertiary mt-0.5" style={{ fontSize: "18px" }}>
                  check_circle
                </span>
                <span className="font-body-md text-secondary text-left">
                  Financial Transaction Invoices (GST compliance for 7 years)
                </span>
              </li>
              <div className="h-[1px] bg-surface-container-high w-full"></div>
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-tertiary mt-0.5" style={{ fontSize: "18px" }}>
                  check_circle
                </span>
                <span className="font-body-md text-secondary text-left">
                  Core Verification Identity (KYC hashes for fraud prevention)
                </span>
              </li>
              <div className="h-[1px] bg-surface-container-high w-full"></div>
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-tertiary mt-0.5" style={{ fontSize: "18px" }}>
                  check_circle
                </span>
                <span className="font-body-md text-secondary text-left">
                  Immutable Compliance Log (The record of your deletion request)
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer Action - Sticky */}
      <footer className="flex-shrink-0 bg-white px-container-margin py-md border-t border-surface-container-high z-30">
        <button
          className={`w-full bg-primary text-on-primary py-md rounded-lg font-headline-md text-headline-md active:scale-[0.98] transition-transform shadow-sm interactive-highlight-pulse ${
            isProcessing ? "opacity-80" : ""
          }`}
          id="eraseBtn"
          onClick={handleErase}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing Request..." : "Confirm & Erase My Secondary Data"}
        </button>
      </footer>

      {/* Snackbar Notification (absolute in mockup container) */}
      <div
        className={`absolute bottom-24 left-4 right-4 z-50 transition-all duration-300 ${
          showSnackbar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        id="snackbar"
      >
        <div className="bg-on-surface text-surface px-md py-sm rounded-lg shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-sm flex-1 mr-2">
            <span className="material-symbols-outlined text-surface" style={{ fontSize: "20px" }}>
              info
            </span>
            <p className="font-body-md text-white text-[13px] leading-tight text-left">
              Erasure Request Scheduled. Complete purge processing within 48 hours.
            </p>
          </div>
          <button className="p-xs flex-shrink-0" onClick={hideSnackbar}>
            <span className="material-symbols-outlined text-surface" style={{ fontSize: "18px" }}>
              close
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
