import React from "react";
import { Award, Briefcase, Globe, Users } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Award className="w-5 h-5 text-brand" />,
      value: "20+",
      label: "Years of Excellence",
      desc: "Founded in 2002, guiding enterprises through every IT revolution",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-brand" />,
      value: "500+",
      label: "Projects Delivered",
      desc: "Agile delivery across cloud, custom apps, and AI integrations",
    },
    {
      icon: <Users className="w-5 h-5 text-brand" />,
      value: "100+",
      label: "Global Clients",
      desc: "Trusted by Fortune 500 leaders and high-growth innovators",
    },
    {
      icon: <Globe className="w-5 h-5 text-brand" />,
      value: "4",
      label: "Global Offices",
      desc: "Seamless operations across USA, Canada, UK, and India",
    },
  ];

  const clientLogos = [
    "/src/assets/clients/client1.webp",
    "/src/assets/clients/client2.webp",
    "/src/assets/clients/client3.webp",
    "/src/assets/clients/client4.webp",
    "/src/assets/clients/client5.webp",
    "/src/assets/clients/client6.webp",
    "/src/assets/clients/client7.webp",
    "/src/assets/clients/client8.webp",
    "/src/assets/clients/client9.webp",
    "/src/assets/clients/client10.webp",
    "/src/assets/clients/client11.webp",
    "/src/assets/clients/client12.webp",
    "/src/assets/clients/client13.webp",
    "/src/assets/clients/client14.webp",
  ];

  return (
    <section className="py-20 relative border-t border-slate-200 dark:border-darkborder/30 bg-white dark:bg-darkbg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-panel rounded-xl p-7 relative overflow-hidden group transition-all duration-200"
            >
              
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand/30 group-hover:bg-brand/60 transition-colors duration-200 rounded-t-xl"></div>

              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-brand/8 border border-brand/15">
                  {stat.icon}
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  {stat.label}
                </span>
              </div>

              <div className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                {stat.value}
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-6">
            Trusted by Fortune Enterprises Worldwide
          </p>

          <div className="relative w-full overflow-hidden py-10 bg-slate-50 dark:bg-darkcard/20 rounded-xl border border-slate-200 dark:border-darkborder/30">
            
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-darkbg to-transparent z-10 pointer-events-none"></div>
            
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-darkbg to-transparent z-10 pointer-events-none"></div>

            
            <div className="flex animate-marquee">
              
              <div className="flex shrink-0 items-center gap-20 px-10 min-w-max">
                {clientLogos.map((logo, idx) => (
                  <div
                    key={`p1-${idx}`}
                    className="group flex-shrink-0 grayscale opacity-50 dark:opacity-35 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                  >
                    <img
                      src={logo}
                      alt={`client-${idx + 1}`}
                      className="h-14 w-auto object-contain max-w-[140px] transition-all duration-300 dark:invert dark:brightness-150 dark:group-hover:invert-0 dark:group-hover:brightness-100"
                    />
                  </div>
                ))}
              </div>

              
              <div className="flex shrink-0 items-center gap-20 px-10 min-w-max">
                {clientLogos.map((logo, idx) => (
                  <div
                    key={`p2-${idx}`}
                    className="group flex-shrink-0 grayscale opacity-50 dark:opacity-35 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                  >
                    <img
                      src={logo}
                      alt={`client-${idx + 1}`}
                      className="h-14 w-auto object-contain max-w-[140px] transition-all duration-300 dark:invert dark:brightness-150 dark:group-hover:invert-0 dark:group-hover:brightness-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
