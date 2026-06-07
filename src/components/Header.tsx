import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sun, Moon, ChevronDown } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Header({ theme, setTheme }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  

  const currentTab = location.pathname === "/" ? "home" : location.pathname.substring(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "industries", label: "Industries" },
    { id: "awards", label: "Awards" },
    { id: "insights", label: "Insights" },
    {
      id: "careers-dropdown",
      label: "Careers",
      subLinks: [
        { id: "careers", label: "Current Openings" },
        { id: "life-at-tescra", label: "Life at Tescra" },
      ],
    },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (tabId: string) => {
    navigate(tabId === "home" ? "/" : `/${tabId}`);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTalkToExpertClick = () => {
    navigate("/contact", { state: { scrollToForm: true } });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-white/80 dark:bg-darkbg/85 backdrop-blur-md border-b border-slate-200 dark:border-darkborder shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <button
            onClick={() => handleNavClick("home")}
            className="focus:outline-none flex items-center text-slate-900 dark:text-white"
          >
            <Logo className="h-10 w-auto hover:opacity-90 transition-opacity" />
          </button>

          
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              if (link.subLinks) {
                const isSubActive = link.subLinks.some((sub) => currentTab === sub.id);
                return (
                  <div key={link.id} className="relative group py-2">
                    <button
                      className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md focus:outline-none ${
                        isSubActive
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                      {isSubActive && (
                        <span className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-[#F58220]" />
                      )}
                    </button>

                    
                    <div className="absolute left-0 mt-1.5 w-48 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 shadow-xl p-2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-left z-50">
                      {link.subLinks.map((sub) => {
                        const isActive = currentTab === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(sub.id)}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                              isActive
                                ? "bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border-l-2 border-[#F58220]"
                                : "text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                            }`}
                          >
                            {sub.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md focus:outline-none ${
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-[#F58220]" />
                  )}
                </button>
              );
            })}
          </nav>

          
          <div className="hidden xl:flex items-center space-x-5">
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus:outline-none flex items-center p-0.5 border border-slate-300 dark:border-slate-600"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              <div
                className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ${
                  theme === "dark"
                    ? "translate-x-6 bg-slate-900"
                    : "translate-x-0 bg-white"
                }`}
              >
                {theme === "dark" ? (
                  <Moon className="w-3 h-3 text-indigo-400 fill-indigo-400" />
                ) : (
                  <Sun className="w-3 h-3 text-amber-500 fill-amber-500" />
                )}
              </div>
            </button>

            <button
              onClick={handleTalkToExpertClick}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#F58220] hover:bg-[#e0741c] active:bg-[#cc6819] text-white text-sm font-semibold rounded-lg transition-all duration-150 shadow-sm"
            >
              <span>Talk to our Expert</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          
          <div className="flex items-center space-x-3 xl:hidden">
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus:outline-none flex items-center p-0.5 border border-slate-300 dark:border-slate-600"
              title="Toggle theme"
              aria-label="Toggle theme"
            >
              <div
                className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ${
                  theme === "dark"
                    ? "translate-x-6 bg-slate-900"
                    : "translate-x-0 bg-white"
                }`}
              >
                {theme === "dark" ? (
                  <Moon className="w-3 h-3 text-indigo-400 fill-indigo-400" />
                ) : (
                  <Sun className="w-3 h-3 text-amber-500 fill-amber-500" />
                )}
              </div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard/50 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      

      
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white dark:bg-[#060913] border-l border-slate-200 dark:border-white/10 shadow-2xl p-6 transition-transform duration-300 ease-in-out xl:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8 mt-4">
          <Logo className="h-8 w-auto text-slate-900 dark:text-white" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl border border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard/50 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-3">
          {navLinks.map((link) => {
            if (link.subLinks) {
              return (
                <div key={link.id} className="space-y-1.5 py-1">
                  <span className="px-4 text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest block mb-1">
                    {link.label}
                  </span>
                  {link.subLinks.map((sub) => {
                    const isActive = currentTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(sub.id)}
                        className={`w-full text-left px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-[#F58220]/10 text-[#F58220] border-l-2 border-[#F58220]"
                            : "text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                        }`}
                      >
                        {sub.label}
                      </button>
                    );
                  })}
                </div>
              );
            }

            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#F58220]/10 text-[#F58220] border-l-2 border-[#F58220]"
                    : "text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-darkborder/50">
          <button
            onClick={handleTalkToExpertClick}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#F58220] hover:bg-[#e0741c] text-white font-semibold rounded-xl active:scale-[0.98] transition-all duration-150"
          >
            <span>Talk to our Expert</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
