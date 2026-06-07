import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import AppRoutes from "./route";
import Footer from "./components/Footer";

export default function App() {
  const [activeIndustryTab, setActiveIndustryTab] = useState("bfsi");
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-darkbg text-slate-800 dark:text-gray-200 selection:bg-neonindigo/35 selection:text-white flex flex-col justify-between transition-colors duration-300">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--toast-bg, #1e293b)',
            color: '#fff',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <Header theme={theme} setTheme={setTheme} />

      
      <main className="flex-grow">
        <AppRoutes
          activeIndustryTab={activeIndustryTab}
          setActiveIndustryTab={setActiveIndustryTab}
        />
      </main>

      
      <Footer setActiveIndustryTab={setActiveIndustryTab} />

    </div>
  );
}
