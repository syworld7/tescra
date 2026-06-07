import React from "react";
import { Landmark, HeartPulse, ShoppingCart, Factory, Flame, Smartphone } from "lucide-react";

import type { IndustryItem } from "../types/industries";

export const industries: IndustryItem[] = [
  {
    id: "bfsi",
    tabLabel: "Banking & BFSI",
    icon: <Landmark className="w-5 h-5" />,
    title: "Banking & Financial Services (BFSI)",
    description: "Accelerate digital transformation in compliance-heavy finance. We build secure cloud architectures, automate claim audits, and implement Generative AI agents for customer service and risk management.",
    solutions: [
      "Automated Claims & Invoice Reconciliation systems",
      "Secure cloud transitions matching SOC2 and PCI-DSS compliance",
      "Algorithmic fraud detection & AML data pipelines",
      "AI customer advisors for wealth management & insurance inquiries",
    ],
    metrics: [
      { label: "Claims Processing Speed", value: "+40%" },
      { label: "Reconciliation Error Rates", value: "<0.1%" },
    ],
  },
  {
    id: "healthcare",
    tabLabel: "Healthcare",
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Healthcare & Life Sciences",
    description: "Modernize clinical systems, enable secure electronic data exchange, and leverage AI to extract intelligence from medical reports and LIMS environments.",
    solutions: [
      "HIPAA-compliant data warehouses & analytics dashboards",
      "Integration of LIMS reporting with generative AI engines",
      "Automated medical coding and billing verification workflows",
      "Mobile patient engagement and telehealth portal architectures",
    ],
    metrics: [
      { label: "Report Processing Time", value: "-30%" },
      { label: "Patient Data Sync Accuracy", value: "99.9%" },
    ],
  },
  {
    id: "retail",
    tabLabel: "Retail & E-commerce",
    icon: <ShoppingCart className="w-5 h-5" />,
    title: "Retail and E-commerce Solutions",
    description: "Scale supply chains, build omnichannel experiences, and optimize inventory management with real-time predictive analytics and cloud scaling.",
    solutions: [
      "Real-time product recommendation engines powered by ML",
      "High-performance Headless Commerce APIs",
      "Inventory planning & automated supply chain coordination",
      "Omnichannel CRM integration and customer support desk bots",
    ],
    metrics: [
      { label: "Checkout Conversion Rate", value: "+18%" },
      { label: "Inventory Holding Cost Reduction", value: "12%" },
    ],
  },
  {
    id: "manufacturing",
    tabLabel: "Manufacturing",
    icon: <Factory className="w-5 h-5" />,
    title: "Smart Manufacturing & Operations",
    description: "Bridge IT and operational systems. We build data pipelines that capture IoT telemetry, run predictive maintenance alerts, and automate supply logistics.",
    solutions: [
      "IoT telemetry ingestion pipelines using Kafka & Apache Spark",
      "Predictive machine maintenance warning dashboards",
      "Warehouse logistics optimization and order tracing portals",
      "Automated QA inspection software on assembly lines",
    ],
    metrics: [
      { label: "Machine Downtime Avoided", value: "22%" },
      { label: "OEE (Overall Equipment Effectiveness)", value: "88%" },
    ],
  },
  {
    id: "energy",
    tabLabel: "Energy & Utilities",
    icon: <Flame className="w-5 h-5" />,
    title: "Energy, Oil, and Gas Solutions",
    description: "Manage physical asset portfolios and optimize grid operations with structured data architectures, real-time IoT telemetry, and predictive modeling.",
    solutions: [
      "Asset performance management & risk assessment portals",
      "Big Data ingestion for sensor data in pipeline networks",
      "Regulatory safety and environmental compliance reporting tools",
      "Smart grid analytics and energy distribution models",
    ],
    metrics: [
      { label: "Asset Lifetime Extension", value: "+15%" },
      { label: "Compliance Auditing Speed", value: "3x" },
    ],
  },
  {
    id: "telecom",
    tabLabel: "Telecom & Tech",
    icon: <Smartphone className="w-5 h-5" />,
    title: "Telecommunications & Hi-Tech",
    description: "Optimize cellular network telemetry pipelines, automate service ticketing systems, and engineer agile, high-performance cloud-native microservices.",
    solutions: [
      "Network usage & churn prediction machine learning models",
      "Automated system ticketing routers and support dispatch",
      "Cloud virtualization of core networks & SD-WAN tools",
      "B2B telecom billing portals & APIs for service partners",
    ],
    metrics: [
      { label: "Customer Churn Reduction", value: "-8%" },
      { label: "Auto-Resolved Support Tickets", value: "35%" },
    ],
  },
];
