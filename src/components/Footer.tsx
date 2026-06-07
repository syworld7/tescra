import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  setActiveIndustryTab?: (industryId: string) => void;
}

export default function Footer({ setActiveIndustryTab }: FooterProps) {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (tabId: string) => {
    navigate(tabId === "home" ? "/" : `/${tabId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleIndustryClick = (industryId: string) => {
    if (setActiveIndustryTab) {
      setActiveIndustryTab(industryId);
    }
    navigate("/industries");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 dark:bg-darkbg border-t border-slate-200 dark:border-darkborder/50 relative z-10 pt-20 pb-10 transition-colors duration-300">
      
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
        
        
        <div className="col-span-1 sm:col-span-2 md:col-span-2 space-y-6">
          <button
            onClick={() => handleLinkClick("home")}
            className="focus:outline-none flex items-center text-slate-900 dark:text-white"
          >
            <Logo className="h-10 w-auto hover:opacity-90 transition-opacity" />
          </button>

          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
            Empowering global corporations with outcome-focused software advisory, custom applications, and advanced intelligent process automation since 2002.
          </p>

          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/company/tescra/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder hover:border-slate-300 dark:hover:border-gray-600 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a
                href="https://x.com/tescrasoftware"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder hover:border-slate-300 dark:hover:border-gray-600 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a
                href="https://www.instagram.com/tescrasoftware/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder hover:border-slate-300 dark:hover:border-gray-600 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>

            
            <div className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard/20 backdrop-blur-sm shadow-sm dark:shadow-none">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center text-[10px] font-extrabold text-white">
                M
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest block">Certified Member</span>
                <span className="text-[10px] font-extrabold text-slate-800 dark:text-white tracking-wide">NMSDC Minority Business</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => handleLinkClick("home")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("services")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("awards")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Awards & Recognition
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("careers")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Current Openings
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("life-at-tescra")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Life at Tescra
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("contact")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => handleLinkClick("services")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                AI & GenAI
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("services")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Custom Development
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("services")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Intelligent Automation
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("services")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Cloud Engineering
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("services")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Global Capability Centres (GCC)
              </button>
            </li>
          </ul>
        </div>

        
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">Industries</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => handleIndustryClick("bfsi")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Banking & BFSI
              </button>
            </li>
            <li>
              <button onClick={() => handleIndustryClick("healthcare")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Healthcare & LIMS
              </button>
            </li>
            <li>
              <button onClick={() => handleIndustryClick("retail")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Retail & E-commerce
              </button>
            </li>
            <li>
              <button onClick={() => handleIndustryClick("manufacturing")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Smart Manufacturing
              </button>
            </li>
            <li>
              <button onClick={() => handleIndustryClick("energy")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Energy & Utilities
              </button>
            </li>
            <li>
              <button onClick={() => handleIndustryClick("telecom")} className="text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Telecom & Tech
              </button>
            </li>
          </ul>
        </div>

      </div>

      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200 dark:border-darkborder/30 flex flex-col md:flex-row items-center justify-between gap-4">
        
        
        <div className="text-xs text-slate-500 dark:text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} Tescra. All Rights Reserved.
        </div>

        
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-gray-500 font-medium">
          <a href="#privacy" className="hover:text-slate-800 dark:hover:text-white transition-colors">Terms of Use</a>
          <a href="#privacy" className="hover:text-slate-800 dark:hover:text-white transition-colors">Accessibility</a>
          <a href="#privacy" className="hover:text-slate-800 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#privacy" className="hover:text-slate-800 dark:hover:text-white transition-colors">Cookie Settings</a>
        </div>

        
        <button
          onClick={handleScrollToTop}
          className="p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder hover:border-slate-300 dark:hover:border-gray-700 text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white rounded-xl transition-all duration-200"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
