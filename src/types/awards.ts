import React from "react";

export interface AwardItem {
  icon: React.ReactNode;
  badgeColor: string;
  title: string;
  issuer: string;
  date: string;
}

export interface HonorItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}
