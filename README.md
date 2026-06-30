# Celesta 2026 - Workshop Registration System

An independent, single-page React application built with Vite for managing student registrations for the Celesta 2026 National Workshop Series. The application handles everything from dynamic details collection to active form validation, a live billing calculation engine, and a simulated payment gateway handshake sequence.

Live Link: https://celesta-workshop.vercel.app/

---

## 🚀 Features & Phase Breakdowns

### Phase 1: Dynamic Registration Form
Collects vital user parameters with contextual interface adjustments based on student status:
*   **Personal Details Required:** Full Name, Email, Mobile Number, Institute/College, and City/State.
*   **Workshop Track Dropdown:** Toggle select between technical tracks (AI, Ethical Hacking, Drone Technology, Full Stack, Arduino, Autonomous Robotics, Generative AI, or IoT).
*   **Contextual UI Rendering:** 
    *   Selecting **IIT Patna Student = Yes** dynamically reveals a required *Roll Number* input field and overrides the housing configuration.
    *   Selecting **IIT Patna Student = No** safely hides the roll field and opens an *Accommodation Request* selector toggle.

### Phase 2: Live Derived-State Fee Calculator
An instant-update billing counter that eliminates manual processing errors. This runs entirely as **derived state** inside React, recalculating on-the-fly during active state cycles:
*   **Base Workshop Fee:** ₹1,200
*   **IITP Discount:** Applied instantly if institutional criteria are satisfied.
*   **Accommodation Fee:** Injected transparently for non-IITP campus stays if toggled.
*   **Statutory Taxation:** Computes 18% GST accurately over the adjusted subtotal.

### Phase 3: Comprehensive Validation Gatekeeper
Ensures submission payloads match strict validation formulas before allowing form completion. The final submit trigger is explicitly disabled until all following conditions evaluate to `true`:
*   Valid non-empty text strings for Name, College, and Location.
*   Standard RFC 5322 regex validation on Email structure.
*   Strict 10-digit number limitation check on Mobile entries.
*   Enforced mandatory Roll Number strings if registered as an internal student.

### Phase 4: Payment Gateway Simulation Bridge
Gracefully coordinates backend routing handshakes inside an isolated framework:
1.  **Form Submission Initiated:** Intercepts click handler state.
2.  **Gateway Handshake:** Mounts an interactive loading state sequence replicating server token synchronization.
3.  **Transaction Ledger Entry:** Simulates external bank confirmation callbacks.
4.  **Token Generation:** Authorizes code generation to construct a secure alpha-numeric Registration ID.

### Phase 5: Ticket Pass Generation & Confirmation
Generates a persistent success screen hosting transaction metadata and credential tags:
*   Displays a prominent successful execution checkmark status badge.
*   Renders a finalized transactional pass detailing the customized Registration ID format (e.g., `WS2026-XXXXX`).
*   Informs the user that an official receipt confirmation email has been dispatched.

---

## 🛠️ Tech Stack & Architecture

*   **Core Engine:** React 18+ (Functional Components with Hooks)
*   **Bundler & Hot Reloading:** Vite (Fast, optimized development lifecycle)
*   **State Implementation:** Pure derived state paradigms for live multi-variable mathematical summaries to avoid state syncing artifacts.
*   **Architecture Pattern:** Component isolation (Separation of Concerns). App routing logic, data capture schemas, calculations, and execution displays are broken down into self-contained modules inside `src/components/`.

---

