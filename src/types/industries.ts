import React from "react";

export interface IndustryItem {
  id: string;
  icon: React.ReactNode;
  tabLabel: string;
  title: string;
  description: string;
  solutions: string[];
  metrics: {
    value: string;
    label: string;
  }[];
}
