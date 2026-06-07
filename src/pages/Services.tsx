import React, { useState } from "react";
import { ChevronRight, X, CheckCircle2 } from "lucide-react";
import { services } from "../constants/services";
import type { ServiceItem } from "../types/services";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services-grid" className="py-24 border-t border-slate-200 dark:border-darkborder/30 bg-slate-50 dark:bg-darkbg relative transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-[11px] font-semibold text-brand mb-4 tracking-widest uppercase">
            <span className="w-1 h-1 rounded-full bg-brand"></span>
            Our Expertise
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-slate-900 dark:text-white mb-4 tracking-tight">
            Services Built for Scaling Enterprises
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            We help companies leverage data-driven solutions and advanced architectures to achieve success in a rapidly changing market.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="glass-panel rounded-xl p-7 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-white/15 flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 p-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder/50 rounded-lg inline-block">
                  {service.icon}
                </div>
                <h3 className="font-heading font-semibold text-[17px] text-slate-900 dark:text-white mb-2.5">
                  {service.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  {service.shortDesc}
                </p>
              </div>

              <div className="flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand/80 transition-colors duration-150 mt-3">
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-darkbg/80 backdrop-blur-sm">
          <div
            className="w-full max-w-2xl bg-white dark:bg-darkbg border border-slate-200 dark:border-darkborder rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            
            <div className="p-6 md:p-8 border-b border-slate-200 dark:border-darkborder/50 flex items-center justify-between bg-slate-50 dark:bg-darkcard/30">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200/50 dark:border-none">
                  {selectedService.icon}
                </div>
                <h3 className="font-heading font-extrabold text-xl md:text-2xl text-slate-900 dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-darkborder bg-white dark:bg-white/5 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            
            <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-gray-500 mb-2">Overview</h4>
                <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
                  {selectedService.longDesc}
                </p>
              </div>

              
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-gray-500 mb-3">Core Capabilities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start space-x-2.5 text-slate-700 dark:text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-gray-500 mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder rounded-lg text-xs text-slate-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
              <div className="p-5 rounded-xl bg-brand/5 border border-brand/20">
                <h4 className="text-xs font-bold text-brand uppercase tracking-wider mb-2">
                  Client Impact Story
                </h4>
                <h5 className="font-heading font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  {selectedService.caseStudy.title}
                </h5>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {selectedService.caseStudy.result}
                </p>
              </div>
            </div>

            
            <div className="p-6 border-t border-slate-200 dark:border-darkborder/50 flex justify-end bg-slate-50 dark:bg-darkcard/20">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white text-sm font-semibold rounded-xl border border-slate-200 dark:border-darkborder transition-all"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
