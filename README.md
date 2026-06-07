# Tescra Corporate Redesign & Enhancement Project

This repository contains a modern, optimized, and fully redesigned version of the Tescra corporate website.

*   **Original Website**: [http://www.tescra.com/](http://www.tescra.com/)
*   **Redesign Hosted URL**: [https://tescra-redesign.netlify.app/](https://tescra-redesign.netlify.app/)
*   **GitHub Repository**: [https://github.com/syworld7/tescra](https://github.com/syworld7/tescra)

---

## 🚀 Technical Architecture & Tech Stack

### Frontend & Build Tools
*   **Vite + React (v19) + TypeScript (v6)**: A modern, ultra-fast build toolchain using hot module replacement (HMR) and rigorous type checking.
*   **Tailwind CSS (v3) + PostCSS**: Utility-first styling for robust responsiveness and clean UI design system tokens.
*   **Lucide React**: Modern, scalable SVG vector icons.
*   **React Router DOM (v7)**: Client-side routing with lazy-loading chunk splitting.
*   **React Hot Toast**: Elegant, non-blocking toast notifications for user interactions.

### Backend & Storage
*   **Supabase (PostgreSQL + Storage)**: Integrates real-time data submission pipelines.
    *   **Database Tables**: Configured to capture `contact_submissions` and `job_applications` dynamically.
    *   **Storage Bucket**: A dedicated `resumes` bucket handles PDF/DOC/DOCX resume file uploads.
    *   **Simulation Fallback**: If API keys are not supplied, the app gracefully falls back to simulated database/storage persistence inside `localStorage` for testing.

---

## ✨ Enhancements & Suggested Improvements

### 1. UI/UX Design & Premium Aesthetics
*   **Glassmorphic Design**: Soft glass-panels (`glass-panel`) paired with clean borders that change opacity dynamically based on background state.
*   **Authoritative Dark/Light Mode**: Full theme customization persisted in local storage. Transitions between dark and light modes are smooth and handle contrast ratios cleanly for compliance and readability.
*   **Custom Brand Assets**: Fully optimized SVG logo scaling cleanly on retina displays. Custom animations provide modern micro-interactions.

### 2. Performance & Responsiveness
*   **WebP Image Optimizations**: Converted client and partner logo files into lightweight `.webp` formats to minimize size.
*   **Lazy Loading**: Pages split dynamically via code splitting (`React.lazy`) to minimize main bundle weight.

### 3. Navigation & User Experience (UX)
*   **Better Forms**:
    *   Phone numbers are limited strictly to numeric digits and validate to length bounds.
    *   Drag-and-drop file uploader checks file formats and maximum weight boundaries (5MB) in real-time.
    *   Form submissions yield descriptive and user-friendly success/error toast alerts.
*   **Copy Clipboard utility**: Global offices cards and successfully generated job application tracking IDs (e.g. `TES-XXXXXX`) feature copy-to-clipboard buttons with temporary checkmark verification states.
*   **Multi-action Modals**: Clear separation of "Close" (closing the dialog) and "Done" actions, allowing quick navigation back to the careers job listing or easy-apply form.

---

## 📁 Code Directory Structure

The project has been modularized to ensure separation of concerns:

```
src/
├── assets/         # Optimized assets & client logos (.webp)
├── components/     # Reusable UI components
│   ├── contact/    # Form, OfficeCard, and QuickInfo components
│   ├── Footer.tsx  # Shared footer
│   ├── Header.tsx  # Navigation with theme switcher and mobile drawer
│   ├── Hero.tsx    # Authoritative brand fold
│   ├── Logo.tsx    # SVG Logo component
│   └── Stats.tsx   # Metrics dashboard & infinite marquee
├── constants/      # Static configuration metadata mapping
├── lib/            # Third-party initializations (Supabase Client)
├── pages/          # Main application page layout folders
├── types/          # Dedicated TypeScript interface declarations
├── App.tsx         # Main entry, theme wrapper, and shell layout
├── index.css       # Core design tokens and custom animation variables
├── main.tsx        # React mounting bootstrap
└── route.tsx       # Route definitions & chunk splitting
```

---

## 🛠️ Verification & Building

The project runs on strict TypeScript rules, including type-only import paths (`verbatimModuleSyntax`) to keep production builds lean.

To run the project locally:

```bash
# Install dependencies
npm install

# Run Vite local development server
npm run dev

# Run compilation check & build assets
npm run build
```

---
