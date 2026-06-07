import React from "react";
import { BrainCircuit, Code2, Cpu, Cloud, Building2 } from "lucide-react";

import type { ServiceItem } from "../types/services";

export const services: ServiceItem[] = [
  {
    id: "ai-genai",
    icon: <BrainCircuit className="w-8 h-8 text-neonviolet" />,
    title: "AI & Generative AI Services",
    shortDesc: "Leverage cutting-edge LLMs, custom agents, and cognitive automation to drive enterprise decision-making.",
    longDesc: "Transform raw organizational capacity into smart processes. Our AI services allow you to safely run large language models on private data, build multi-agent autonomous workflows, and deploy natural-language interfaces that interface with core enterprise ERP/CRMs.",
    colorClass: "text-neonviolet",
    glowClass: "hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:border-neonviolet/40",
    techs: ["OpenAI API", "LangChain", "LlamaIndex", "Python", "PyTorch", "Hugging Face"],
    capabilities: [
      "Private LLM deployment & fine-tuning",
      "Autonomous RAG (Retrieval-Augmented Generation)",
      "Generative AI Copilots & Chatbots",
      "Semantic Search Engines & Document Mining",
    ],
    caseStudy: {
      title: "AI & LIMS Specialist Integration",
      result: "Automated report extraction for a global laboratory network, cutting sample turnaround times by 35%.",
    },
  },
  {
    id: "custom-dev",
    icon: <Code2 className="w-8 h-8 text-neonteal" />,
    title: "Custom Software & App Management",
    shortDesc: "End-to-end full-stack software development, legacy system modernization, and agile DevOps.",
    longDesc: "Build reliable, scalable, and secure applications. From cloud-native microservices using React, Node.js, and Java, to legacy modernization of ASP.NET/MVC and mainframe databases, we support the full system lifecycle with dedicated team deployment.",
    colorClass: "text-neonteal",
    glowClass: "hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:border-neonteal/40",
    techs: ["React", "TypeScript", "Node.js", "Java Spring Boot", ".NET Core", "SQL Server", "MongoDB"],
    capabilities: [
      "Cloud-native microservices architecture",
      "Full-stack web & mobile app engineering",
      "API-first integration & ESB setups",
      "Legacy application refactoring & cloud porting",
    ],
    caseStudy: {
      title: "Enterprise Application Modernization",
      result: "Migrated a monolith billing framework to a React/Node microservice architecture, boosting speed by 250%.",
    },
  },
  {
    id: "automation",
    icon: <Cpu className="w-8 h-8 text-neonindigo" />,
    title: "Data Driven Intelligent Automation",
    shortDesc: "RPA pipelines, big data integration, and Automated Quality Assurance for zero-defect releases.",
    longDesc: "Unify business operations and reduce manual tasks. We integrate UiPath and Mulesoft RPA, build comprehensive ETL/Data Warehousing pipelines, and automate software testing (Selenium, Robot Framework) to ensure your business logic never breaks.",
    colorClass: "text-neonindigo",
    glowClass: "hover:shadow-[0_0_30px_rgba(129,140,248,0.15)] hover:border-neonindigo/40",
    techs: ["Mulesoft RPA", "Selenium", "Robot Framework", "Python", "Apache Spark", "Airflow", "Snowflake"],
    capabilities: [
      "Robotic Process Automation (RPA) design",
      "Data pipeline ETL & Lakehouse setup",
      "Automated software quality testing",
      "CRM & ERP middleware integrations",
    ],
    caseStudy: {
      title: "Financial Operations Automation",
      result: "Automated invoice reconciliations for a top US insurer, reducing processing errors from 8% to 0.1%.",
    },
  },
  {
    id: "cloud",
    icon: <Cloud className="w-8 h-8 text-cyan-400" />,
    title: "Cloud & Infrastructure Engineering",
    shortDesc: "Scale securely with hybrid cloud architectures, container orchestration, and automated DevSecOps.",
    longDesc: "Optimize cloud usage, security, and velocity. We set up managed cloud platforms on AWS, Azure, and Google Cloud, orchestrate high-availability Kubernetes deployments, and automate security scans inside modern CI/CD setups.",
    colorClass: "text-cyan-400",
    glowClass: "hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-400/40",
    techs: ["AWS", "Microsoft Azure", "Terraform", "Kubernetes", "Docker", "Jenkins", "GitHub Actions"],
    capabilities: [
      "Infrastructure as Code (IaC) engineering",
      "High-availability container scaling",
      "Cloud migration strategy & execution",
      "24/7 cloud operations & cost optimization",
    ],
    caseStudy: {
      title: "Retail Cloud Infrastructure Setup",
      result: "Designed a multi-region AWS setup supporting 50k concurrent users, ensuring 99.99% uptime during peak sales.",
    },
  },
  {
    id: "gcc",
    icon: <Building2 className="w-8 h-8 text-fuchsia-400" />,
    title: "Global Capability Centres (GCC)",
    shortDesc: "Establish and scale your offshore centers of excellence with managed compliance and operations.",
    longDesc: "Expand globally with confidence. We help you build, run, and transfer offshore delivery setups in technology hubs. We handle office infrastructure, hiring of top engineering talent, local payroll compliance, and agile governance models.",
    colorClass: "text-fuchsia-400",
    glowClass: "hover:shadow-[0_0_30px_rgba(232,121,249,0.15)] hover:border-fuchsia-400/40",
    techs: ["Agile Management", "Talent Pipelines", "Compliance Auditing", "Workplace Provisioning"],
    capabilities: [
      "Offshore Center of Excellence (CoE) design",
      "Tech talent sourcing & onboarding",
      "Legal entity set-ups & compliance",
      "Operational governance & scaling",
    ],
    caseStudy: {
      title: "GCC Enablement in India",
      result: "Built a 120-engineer global innovation center in Bangalore for a UK fintech client within 9 months.",
    },
  },
];
