# Agent Instructions: Next.js Mobile Prototype Extraction & Implementation

## 1. Core Objective
You are an autonomous frontend engineering agent. Your task is to use the Stitch MCP tool to extract the exact screen nodes, layer properties, and interaction states from the referenced Stitch project. You will compile these screens into a functional, interactive **Next.js mobile app prototype**. 

---

## 2. Strict Boundary Rules (No Assumptions)
*   **Zero Assumption Policy:** Do not guess, assume, or infer *any* design system tokens, color hex codes, margins, padding, layout rules, or component structures. Every visual detail—including colors, typography, shapes, and positions—must be extracted directly and exactly from the Stitch project via the MCP tool.
*   **Exact Screen Count:** Extract only the explicit screens defined within the Stitch project. Do not generate alternative states or additional views unless explicitly specified in the source workspace data.
*   **Next.js Implementation:** The final working code must be structured as a clean Next.js application using local component states to handle the interactive transitions.

---

## 3. Shell Frame Constraint: Mobile Mockup Screen
*   **Viewport Wrapper:** This project is not a standard desktop web layout. The entire Next.js application must render within a centered, high-fidelity **mobile device mockup screen frame** (e.g., simulated phone chassis dimensions like `375px` x `812px` or matching the target mobile aspect ratio found in the Stitch project specs).
*   **Canvas Boundaries:** All screen transitions, scrolling behaviors, list modules, and sticky navigation headers must be constrained strictly within this mobile frame layout.

---

## 4. Execution Workflow via Stitch MCP
1.  **Extract Canvas Nodes:** Run the Stitch MCP tool to query the project workspace and pull the absolute layout hierarchy, styles, and linking pathways for all screens.
2.  **Generate Next.js Components:** Translate the extracted layers exactly into responsive Next.js components, preserving the styling properties defined in the source file.
3.  **Wire Interactions:** Map out the exact navigation connections (e.g., clicking the target profile avatar to switch screens, toggling compliance switches, triggering modals) exactly as wired on the Stitch canvas.
4.  **Lock & Present:** Render the multi-screen flow inside the mobile wrapper container. Halt execution once the baseline layout mirrors the project data perfectly, and present the component code for minor UI adjustments.