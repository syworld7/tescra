import React from "react";
import { Heart, Zap, Award, Coffee } from "lucide-react";

import type { CulturalPillar } from "../types/lifeAtTescra";

export const culturalPillars: CulturalPillar[] = [
  {
    icon: <Heart className="w-6 h-6 text-neonviolet" />,
    title: "People First",
    desc: "A supportive, flexible environment that respects work-life balance and celebrates personal milestones.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#F58220]" />,
    title: "Technical Excellence",
    desc: "Author complex end-to-end applications, work on generative AI networks, and tackle exciting server challenges.",
  },
  {
    icon: <Award className="w-6 h-6 text-neonteal" />,
    title: "Open Culture",
    desc: "Free and transparent communication lines where great ideas win, regardless of hierarchy or seniority.",
  },
  {
    icon: <Coffee className="w-6 h-6 text-neonindigo" />,
    title: "Buzzing Workplace",
    desc: "Events, festivities, hackathons, and celebrations for small and big wins alike. We enjoy the journey together.",
  },
];
