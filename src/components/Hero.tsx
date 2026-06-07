import React from "react";
import { ArrowRight, Database, Shield, Zap } from "lucide-react";

interface HeroProps {
  setCurrentTab: (tab: string) => void;
}

export default function Hero({ setCurrentTab }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-grid-glow overflow-hidden transition-colors duration-300">
      
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]"></div>

      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full bg-brand/5 dark:bg-brand/8 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 dark:bg-brand/10 border border-brand/25 text-[11px] font-semibold text-brand mb-8 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block"></span>
            Certified NMSDC Minority Business · Est. 2002
          </div>

          
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15]">
            Enterprise Software Solutions{" "}
            <span className="text-brand">
              Built for Scale
            </span>
          </h1>

          
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-10">
            Tescra partners with global organizations to modernize operations, deploy intelligent automation, and deliver enterprise software that drives measurable business outcomes.
          </p>

          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setCurrentTab("contact")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F58220] hover:bg-[#e0741c] active:bg-[#cc6819] text-white font-semibold rounded-lg transition-all duration-150 shadow-md active:scale-[0.98]"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentTab("services")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/15 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-white font-semibold rounded-lg transition-all duration-150 active:scale-[0.98]"
            >
              <span>Explore Our Services</span>
            </button>
          </div>

          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-xs font-medium text-slate-500 dark:text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand"></span>
              Fortune 500 Clients
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand"></span>
              SOC2 · HIPAA · PCI-DSS
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand"></span>
              USA · Canada · UK · India
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand"></span>
              500+ Projects Delivered
            </span>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 max-w-4xl mx-auto">

          <div className="glass-panel rounded-xl p-6 flex items-start gap-4 hover:-translate-y-0.5 transition-transform duration-200">
            <div className="p-2.5 bg-brand/10 rounded-lg text-brand flex-shrink-0 mt-0.5">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-[15px] text-slate-900 dark:text-white mb-1.5">
                Rapid Time-to-Value
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Outcome-focused delivery that adapts to your business velocity and timeline.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 flex items-start gap-4 hover:-translate-y-0.5 transition-transform duration-200">
            <div className="p-2.5 bg-neonindigo/10 rounded-lg text-neonindigo flex-shrink-0 mt-0.5">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-[15px] text-slate-900 dark:text-white mb-1.5">
                AI & Data Engineering
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Enterprise GenAI pipelines, predictive analytics, and intelligent automation.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 flex items-start gap-4 hover:-translate-y-0.5 transition-transform duration-200">
            <div className="p-2.5 bg-neonteal/10 rounded-lg text-neonteal flex-shrink-0 mt-0.5">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-[15px] text-slate-900 dark:text-white mb-1.5">
                Enterprise-Grade Quality
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                SOC2, HIPAA, and PCI-DSS compliant architectures trusted by Fortune clients.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
