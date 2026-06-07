import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "./Services";
import Industries from "./Industries";
import Insights from "./Insights";
import { ArrowRight, Sparkles } from "lucide-react";
import { impactStories } from "../constants/home";

interface HomeProps {
  activeIndustryTab: string;
  setActiveIndustryTab: (tab: string) => void;
}

export default function Home({ activeIndustryTab, setActiveIndustryTab }: HomeProps) {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-300">
      
      <Hero setCurrentTab={(tab) => navigate(`/${tab === "home" ? "" : tab}`)} />
      
      
      <Stats />
      
      
      <Services />

      
      <section className="py-24 border-t border-slate-200 dark:border-darkborder/30 bg-slate-100/50 dark:bg-darkcard/10 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neonindigo/30 bg-neonindigo/5 text-xs font-semibold text-neonindigo">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Impact Stories</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
                Delivering Value at Scale
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                We deliver future-ready solutions that drive value by accelerating growth, reducing costs, and modernizing operations. Our team of experts works closely with you to design and implement customized strategies that align with your business goals.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center space-x-2 text-sm font-bold text-neonteal hover:text-neonindigo transition-colors group"
              >
                <span>Partner with us</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {impactStories.map((story, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl flex items-start space-x-4">
                  <div className={`p-3 rounded-xl shrink-0 ${story.iconBgClass}`}>
                    {story.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-1">
                      {story.title}
                    </h4>
                    <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
                      {story.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      
      <Industries activeTab={activeIndustryTab} setActiveTab={setActiveIndustryTab} />
      
      
      <Insights />

      
      <section className="py-20 border-t border-slate-200 dark:border-darkborder/30 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-darkbg dark:via-darkcard/20 dark:to-darkbg transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
            Ready to Accelerate Your Digital Capability?
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Partner with our global software advisors and intelligent process automation architects to build high-performance enterprise systems.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-neonindigo to-neonteal text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
            >
              Get in Touch
            </button>
            <button
              onClick={() => navigate("/careers")}
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-white/5 border border-slate-300 dark:border-darkborder hover:border-slate-400 dark:hover:border-gray-700 text-slate-800 dark:text-white font-semibold rounded-xl transition-all shadow-sm dark:shadow-none"
            >
              Explore Careers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
