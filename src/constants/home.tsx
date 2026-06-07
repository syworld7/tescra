import React from "react";
import { Building2, Terminal } from "lucide-react";

export interface ImpactStory {
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconBgClass: string;
  iconColorClass: string;
}

export const impactStories: ImpactStory[] = [
  {
    title: "Automating Finance Operations for Fortune 500 Insurer",
    desc: "Replaced manual claim reconciliation logs with a Robot process automation script, reducing human input by 92% and processing cycles from days to minutes.",
    icon: <Building2 className="w-6 h-6" />,
    iconBgClass: "bg-neonviolet/10 text-neonviolet",
    iconColorClass: "text-neonviolet",
  },
  {
    title: "LIMS Report AI Automation for Biotech Laboratory",
    desc: "Engineered private RAG pipelines parsing blood panel outputs automatically, enabling secure semantic search for scientists and reducing report assembly times.",
    icon: <Terminal className="w-6 h-6" />,
    iconBgClass: "bg-neonteal/10 text-neonteal",
    iconColorClass: "text-neonteal",
  },
];
