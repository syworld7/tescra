import React from "react";
import { Users, Star, Trophy, Award } from "lucide-react";

import type { AwardItem, HonorItem } from "../types/awards";

export const mainAwards: AwardItem[] = [
  {
    icon: <Users className="w-8 h-8 text-neonteal" />,
    title: "#49 100 Largest Employee-Owned Companies",
    issuer: "National Center for Employee Ownership",
    date: "October 2021",
    badgeColor: "bg-neonteal/10 text-neonteal border-neonteal/20",
  },
  {
    icon: <Star className="w-8 h-8 text-[#F58220]" />,
    title: "#51 Engineering News Record Top 400 Contractors",
    issuer: "Engineering News Record",
    date: "May 2021",
    badgeColor: "bg-[#F58220]/10 text-[#F58220] border-[#F58220]/20",
  },
  {
    icon: <Trophy className="w-8 h-8 text-neonindigo" />,
    title: "“NATION’S SAFEST CONTRACTOR” WITH 2 AGC GRAND SAFETY AWARDS",
    issuer: "Associated General Contractors of America",
    date: "2006 / 2016",
    badgeColor: "bg-neonindigo/10 text-neonindigo border-neonindigo/20",
  },
];

export const additionalHonors: HonorItem[] = [
  {
    title: "Ranked #41 in Fastest-Growing Private Companies",
    subtitle: "Metro Area",
    icon: <Award className="w-5 h-5 text-neonindigo" />,
  },
  {
    title: "Ranked #74 in Fastest-Growing Private Companies",
    subtitle: "Software Sector",
    icon: <Award className="w-5 h-5 text-neonteal" />,
  },
  {
    title: "Ranked #1027 in Fastest-Growing Private Companies",
    subtitle: "National Scale",
    icon: <Award className="w-5 h-5 text-[#F58220]" />,
  },
  {
    title: "Top 2008 Businesses Recognition",
    subtitle: "Industry Excellence",
    icon: <Award className="w-5 h-5 text-neonviolet" />,
  },
  {
    title: "Ranked #74 in the Top 100 Software Companies",
    subtitle: "Software Excellence",
    icon: <Award className="w-5 h-5 text-neonteal" />,
  },
  {
    title: "Top Businesses Diversity Owned Businesses",
    subtitle: "Diversity Leadership",
    icon: <Award className="w-5 h-5 text-neonindigo" />,
  },
  {
    title: "Top 500 Businesses Diversity Owned Businesses",
    subtitle: "Inclusive Growth",
    icon: <Award className="w-5 h-5 text-neonviolet" />,
  },
];
