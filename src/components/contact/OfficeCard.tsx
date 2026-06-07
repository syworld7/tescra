import React, { useState } from "react";
import { MapPin, Copy, Check } from "lucide-react";
import type { Office } from "../../types/offices";

interface OfficeCardProps {
  office: Office;
  idx: number;
}

export default function OfficeCard({ office }: OfficeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:border-slate-300 dark:hover:border-white/10 hover:shadow-md dark:hover:shadow-none relative bg-white dark:bg-transparent">
      <div>
        <span className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest block mb-2">
          {office.type}
        </span>
        
        <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-neonindigo" />
          <span>{office.country}</span>
        </h3>
        
        <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed mb-6 font-medium">
          {office.address}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-200 dark:border-darkborder/50 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-400 dark:text-gray-500">{office.coords}</span>
        
        <button
          onClick={() => handleCopyAddress(office.address)}
          className="p-1.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-darkborder hover:border-slate-300 dark:hover:border-gray-600 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          title="Copy Address"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-neonteal" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
