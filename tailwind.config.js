/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core backgrounds
        darkbg: "#080E1C",
        darkcard: "rgba(15, 25, 50, 0.50)",
        darkborder: "rgba(255, 255, 255, 0.07)",
        // Tescra brand colors
        brand: "#F58220",       // Brand orange — primary CTAs & accents
        corporate: "#1B3A6B",  // Deep navy — headings, authority elements
        // Refined professional accent palette (kept same names for compatibility)
        neonindigo: "#3B5BDB",  // Corporate indigo-blue
        neonteal: "#0D9488",    // Professional teal
        neonviolet: "#6D28D9",  // Deeper purple
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Manrope", "Inter", "sans-serif"],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
