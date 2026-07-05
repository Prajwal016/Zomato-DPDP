# Zomato DPDP Compliance Flow - Mobile Prototype

A high-fidelity, interactive mobile application prototype illustrating compliance with the **Digital Personal Data Protection (DPDP) Act** within the Zomato food delivery experience. 

Built using **Next.js** and **Tailwind CSS v4**, this prototype simulates a native mobile app view constrained inside a high-fidelity smartphone device chassis mockup frame.

## 📱 Prototype Features

1. **Simulated Mobile Viewport Layout:** Encased within a centered 375px × 812px viewport chassis featuring a status bar notch, current time, and network indicators.
2. **Smooth Screen Navigation Flows:**
   - **Home Feed Screen:** Realistic home interface featuring category list rails, express delivery bentos, promotions, and trending restaurant cards. Clicks on the top-right profile avatar navigate to user settings.
   - **Profile & Settings Screen:** Gold member details containing direct DPDP setting controls (Veg Mode, Personalized Ratings) and access points for compliance hubs.
   - **Privacy Control Center Screen:** Comprehensive GPS and Marketing AI processing consent management toggles. Built-in interactive visual snackbars slide up to confirm when preferences are saved.
   - **Data Deletion Transparency Hub:** Clearly breaks down data deletion guidelines under DPDP regulations. Provides interactive request scheduling feedback with toast overlays.
3. **Walkthrough Guidance Highlights:** Subtle glowing pulses and highlighted rows to assist mobile users in navigating the compliance flow, even when instructions are hidden on small screens.
4. **Shared Application State:** User preferences (like Veg Mode toggle) synchronize across all screens in real-time.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 (with `@theme` CSS configuration and custom animations)
- **Icons:** Material Symbols Outlined
- **Typography:** Inter (via Google Fonts)

---

## 🚀 Running the Prototype Locally

To run the application locally on your machine, follow these steps:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Open the Prototype
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Build and Verification
To build the application for production:
```bash
npm run build
```
This optimizes the static page assets and compiles all components successfully.
