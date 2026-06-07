import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { culturalPillars } from "../constants/lifeAtTescra";

export default function LifeAtTescra() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-darkbg transition-colors duration-300">
      
      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.06),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-neonteal/30 bg-neonteal/5 text-xs font-semibold text-neonteal">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Life at Tescra</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight">
              We cultivate a culture of innovation, collaboration, and excellence.
            </h1>
            <p className="text-slate-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed">
              We prioritize work-life balance. Our supportive environment empowers every team member to grow, make a meaningful impact, and achieve success—both professionally and personally.
            </p>
          </div>
        </div>
      </section>

      
      <section className="pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-neonviolet/10 text-neonviolet flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
              A Close-Knit Family
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
              We consider ourselves to be a close-knit family. We believe that if we impart a peaceful work atmosphere with positive work culture, it automatically reflects on our business making decisions. A happy employee means a happy customer!
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
              Career Acceleration
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
              We take pride in creating a workplace where people join us for building their careers with complex and end to end projects, cutting edge technologies, and technical challenges. Their dedication and loyalty grow organic capability, giving us an edge.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-neonteal/10 text-neonteal flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
              Autonomous Growth
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
              We believe in challenging people, providing opportunities, and letting them work the way they want. Our leadership team strives to provide them these challenges, keeping a perfect balance with their personal lives.
            </p>
          </div>

        </div>
      </section>

      
      <section className="py-20 border-t border-slate-200 dark:border-darkborder/30 bg-slate-100/40 dark:bg-darkcard/10 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neonindigo/30 bg-neonindigo/5 text-xs font-semibold text-neonindigo">
                <span>Our Team</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
                What makes a Tescra family member
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                During our journey, as we work hard to provide value to our clients, we want to enjoy and have fun too. The free and open culture at Tescra gives every member the space to grow with us.
              </p>
              <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                You will find our workplace constantly buzzing with celebrations for small wins, events and festivities. You will have to be a part of it to really experience what it means to work at Tescra!
              </p>
            </div>

            
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-neonteal to-neonindigo rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-darkborder shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Tescra team collaborating together"
                  className="w-full h-[360px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block mb-1">
                    Collaboration Zone
                  </span>
                  <h4 className="font-heading font-bold text-lg">Workplace & Festivities</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight">
              Tescra Family
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm mt-3">
              Four key pillars that define our daily interactions and product excellence goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl hover:border-slate-300 dark:hover:border-gray-700 hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between bg-white dark:bg-darkcard/10"
              >
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder inline-block">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed mt-2">
                      {pillar.desc}
                    </p>
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
            Want to Join the Family?
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
            We are always looking for passionate engineers, analysts, and project creators to join our remote and hybrid locations.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/careers")}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-neonindigo to-neonteal text-white font-semibold rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Explore Current Openings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
