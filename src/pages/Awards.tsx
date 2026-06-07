import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Shield, ArrowRight } from "lucide-react";
import { mainAwards, additionalHonors } from "../constants/awards";

export default function Awards() {
  const navigate = useNavigate();
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-darkbg transition-colors duration-300">
      
      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.08),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-neonindigo/30 bg-neonindigo/5 text-xs font-semibold text-neonindigo">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Honors & Achievements</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Awards & Recognition
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our latest honors and industry achievements. At Tescra, our commitment to excellence and innovation has been recognized through various awards and honors over the years.
          </p>
        </div>
      </section>

      
      <section className="pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainAwards.map((award, i) => (
            <div
              key={i}
              className="glass-panel p-8 rounded-3xl flex flex-col justify-between items-start space-y-6 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 border border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard/20 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neonindigo/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="space-y-4">
                <div className={`p-4 rounded-2xl inline-block ${award.badgeColor.split(" ")[0]} border ${award.badgeColor.split(" ")[2]}`}>
                  {award.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white leading-snug">
                  {award.title}
                </h3>
              </div>
              
              <div className="w-full pt-4 border-t border-slate-200 dark:border-darkborder/50">
                <span className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest block mb-1">
                  Issued By
                </span>
                <span className="text-sm font-semibold text-slate-800 dark:text-gray-300 block">
                  {award.issuer}
                </span>
                <span className="text-xs text-slate-500 dark:text-gray-500 mt-0.5 block">
                  {award.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-20 border-t border-slate-200 dark:border-darkborder/30 bg-slate-100/40 dark:bg-darkcard/10 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-neonindigo to-neonteal rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-darkborder shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial safety and engineering standards"
                  className="w-full h-[360px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-2">
                    <Shield className="w-3.5 h-3.5 text-neonteal" />
                    <span>NMSDC Compliance</span>
                  </div>
                  <h4 className="font-heading font-bold text-lg">AGC Grand Safety Standard</h4>
                </div>
              </div>
            </div>

            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neonindigo/30 bg-neonindigo/5 text-xs font-semibold text-neonindigo">
                <span>AGC Awards</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
                SAFETY FIRST
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                We're proud to be one of only two companies to be recognized as the "Nation's Safest Contractor" twice, having won the Associated General Contractors (AGC) Grand Award for safety in 2006 and 2016. We have earned more AGC Build America Awards than any other contractor in the world.
              </p>
              <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                Build America Awards represent the industry's highest possible achievement for innovation, quality and excellence in client service. This recognition drives our technical infrastructure team to deliver zero-downtime, fully secure systems to all stakeholders.
              </p>
            </div>

          </div>
        </div>
      </section>

      
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight">
              Additional Honors
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm mt-3">
              Recognized consistently for fast growth, technological expertise, and corporate responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalHonors.map((honor, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl hover:border-slate-300 dark:hover:border-gray-700 hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between bg-white dark:bg-darkcard/10"
              >
                <div className="space-y-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder inline-block">
                    {honor.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm leading-snug">
                      {honor.title}
                    </h4>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mt-1 block">
                      {honor.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 border-t border-slate-200 dark:border-darkborder/30 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-darkbg dark:via-darkcard/20 dark:to-darkbg transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight">
            Ready to Build Award-Winning Digital Platforms?
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
            Contact us today to explore how our certified expertise and commitment to safety and engineering quality can accelerate your business goals.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact", { state: { scrollToForm: true } })}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#F58220] hover:bg-[#e0741c] active:bg-[#cc6819] text-white font-semibold rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Contact our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
