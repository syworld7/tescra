import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { industries } from "../constants/industries";

interface IndustriesProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export default function Industries({ activeTab: propActiveTab, setActiveTab: propSetActiveTab }: IndustriesProps = {}) {
  const [internalActiveTab, setInternalActiveTab] = useState("bfsi");

  const activeTab = propActiveTab !== undefined ? propActiveTab : internalActiveTab;
  const setActiveTab = propSetActiveTab !== undefined ? propSetActiveTab : setInternalActiveTab;

  const currentIndustry = industries.find((ind) => ind.id === activeTab) || industries[0];

  return (
    <section className="py-24 border-t border-slate-200 dark:border-darkborder/30 bg-slate-50 dark:bg-darkbg relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white mb-4 tracking-tight">
            Industries We Transform
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Delivering domain-focused engineering capabilities that solve operational bottlenecks and maximize competitive advantages.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-darkborder/30">
            {industries.map((ind) => {
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex items-center space-x-3 px-5 py-4 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink text-left focus:outline-none ${
                    isActive
                      ? "bg-gradient-to-r from-neonindigo/10 to-neonteal/5 border border-neonindigo/20 text-slate-900 dark:text-white lg:mr-[-1px] lg:border-r-2 lg:border-r-neonteal"
                      : "text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? "bg-neonindigo/25 text-neonteal" : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400"}`}>
                    {ind.icon}
                  </div>
                  <span>{ind.tabLabel}</span>
                </button>
              );
            })}
          </div>

          
          <div className="lg:col-span-8 glass-panel p-8 md:p-10 rounded-2xl animate-in fade-in slide-in-from-right-4 duration-300 min-h-[460px] lg:min-h-[460px] flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">
                {currentIndustry.title}
              </h3>
              
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                {currentIndustry.description}
              </p>

              
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-2">Key Solution Focus</h4>
                {currentIndustry.solutions.map((sol, i) => (
                  <div key={i} className="flex items-start space-x-3 text-slate-700 dark:text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-neonteal mt-0.5 flex-shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="pt-6 border-t border-slate-200 dark:border-darkborder/50 flex flex-wrap gap-6 items-center justify-between">
              <div className="flex gap-8">
                {currentIndustry.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neonindigo to-neonteal">
                      {metric.value}
                    </div>
                    <div className="text-xs text-slate-400 dark:text-gray-500 font-semibold tracking-wider uppercase mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-1.5 text-xs font-bold text-neonteal uppercase tracking-wider">
                <span>View Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
