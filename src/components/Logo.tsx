import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        
        <linearGradient id="logo-cra-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f58220" />
          <stop offset="100%" stopColor="#ffb347" />
        </linearGradient>
      </defs>

      
      
      <path
        d="M 8,20.8 L 11.6,22.9 L 11.6,27.1 L 8,29.2 L 4.4,27.1 L 4.4,22.9 Z"
        fill="#f58220"
      />

      
      <path
        d="M 17,9.8 L 20.6,11.9 L 20.6,16.1 L 17,18.2 L 13.4,16.1 L 13.4,11.9 Z"
        fill="#4ba3e3" 
      />

      
      <path
        d="M 17,20.8 L 20.6,22.9 L 20.6,27.1 L 17,29.2 L 13.4,27.1 L 13.4,22.9 Z"
        fill="#328cc1"
      />

      
      <path
        d="M 17,31.8 L 20.6,33.9 L 20.6,38.1 L 17,40.2 L 13.4,38.1 L 13.4,33.9 Z"
        fill="#98d9b6"
      />

      
      
      <path
        d="M 45,5 L 62.3,15 L 62.3,35 L 45,45 L 27.7,35 L 27.7,15 Z"
        fill="#0c325c"
        stroke="#134074"
        strokeWidth="1.5"
      />

      
      <text
        x="45"
        y="33.5"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="25"
        fill="#ffffff"
        textAnchor="middle"
        style={{ userSelect: "none" }}
      >
        t
      </text>

      
      <text
        x="68"
        y="34.5"
        fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="-0.03em"
        style={{ userSelect: "none" }}
      >
        <tspan fill="currentColor">es</tspan>
        <tspan fill="url(#logo-cra-grad)">cra</tspan>
      </text>
    </svg>
  );
}
