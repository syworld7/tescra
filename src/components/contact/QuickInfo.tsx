import React from "react";
import { Mail } from "lucide-react";

export default function QuickInfo() {
  return (
    <div className="lg:col-span-5 space-y-8 lg:mt-6">
      <div>
        <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2">Let's talk technology.</h3>
        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
          Whether you need advice on Generative AI pipelines, legacy systems modernization, or global capabilities center setups, we are here to guide you.
        </p>
      </div>

      <div className="space-y-4">
        <a
          href="mailto:info@tescra.com"
          className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-darkborder hover:border-slate-300 dark:hover:border-gray-700 transition-all group shadow-sm dark:shadow-none"
        >
          <div className="p-3 bg-neonindigo/10 text-neonindigo rounded-xl group-hover:scale-95 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest block">General Inquiries</span>
            <span className="text-sm font-semibold text-slate-800 dark:text-white">info@tescra.com</span>
          </div>
        </a>

        <a
          href="mailto:dm@tescra.com"
          className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-darkborder hover:border-slate-300 dark:hover:border-gray-700 transition-all group shadow-sm dark:shadow-none"
        >
          <div className="p-3 bg-neonteal/10 text-neonteal rounded-xl group-hover:scale-95 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest block">Partnerships & Sales</span>
            <span className="text-sm font-semibold text-slate-800 dark:text-white">dm@tescra.com</span>
          </div>
        </a>
      </div>
    </div>
  );
}
