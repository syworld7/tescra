import React from "react";

export interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  colorClass: string;
  glowClass: string;
  techs: string[];
  capabilities: string[];
  caseStudy: {
    title: string;
    result: string;
  };
}
