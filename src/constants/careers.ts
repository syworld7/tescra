import type { JobItem } from "../types/careers";

export const depts = ["All", "Engineering", "Testing", "Consulting", "Other"];

export const jobs: JobItem[] = [
  {
    title: "Software Engineer_Full Stack",
    dept: "Engineering",
    location: "San Ramon, CA / Bangalore",
    mustHave: "C#, ASP.NET Core, React, HTML5, Angular, JavaScript, Microservices, MongoDB, DevOps (CI/CD)",
    desc: "Architect, build, and support enterprise web apps using C#, Node.js, and modern React interfaces. Design robust microservice backends, database integrations, and manage serverless infrastructures on AWS.",
  },
  {
    title: "Software Engineer_Backend",
    dept: "Engineering",
    location: "San Ramon, CA / Remote",
    mustHave: "ASP.NET, C#, .NET Framework, Azure, OOP, SQL, Design Patterns",
    desc: "Implement high-performance backend pipelines, scale data relational tables, maintain API routes, and deploy server components securely inside Microsoft Azure.",
  },
  {
    title: "Software Engineer (AI & LIMS Specialist)",
    dept: "Engineering",
    location: "Bangalore, India",
    mustHave: "Python, Large Language Models (LLMs), LangChain, RAG frameworks, LIMS Systems",
    desc: "Deploy AI solutions that integrate with Laboratory Information Management Systems. Develop private retrieval models (RAG) to automate report indexing and parsing.",
  },
  {
    title: "Mulesoft RPA Developer",
    dept: "Engineering",
    location: "Bangalore, India / Remote",
    mustHave: "Mulesoft, RPA, Robotic Process Automation, API Integrations",
    desc: "Automate cross-platform data flows by building software bots and integration schemas on Mulesoft. Connect legacy endpoints to cloud applications.",
  },
  {
    title: "QA Automation Engineer",
    dept: "Testing",
    location: "Bangalore, India",
    mustHave: "Selenium, Automation, JavaScript, Node.js, BDD frameworks",
    desc: "Author automated end-to-end user-flow tests. Maintain test suites inside continuous delivery lines to guarantee high-performance web products.",
  },
  {
    title: "Android Application Testing Specialist",
    dept: "Testing",
    location: "San Ramon, CA / Bangalore",
    mustHave: "Android Testing, Robot Framework, Python, Appium",
    desc: "Run compatibility, performance, and unit tests on mobile platforms. Write scripts to validate location, data usage, and UI rendering on multiple devices.",
  },
  {
    title: "Sr. Test Engineer",
    dept: "Testing",
    location: "Bangalore, India",
    mustHave: "Software Testing, Web App Testing, Regression, Bug Tracking",
    desc: "Lead team quality audits. Design regression test matrices, track defects inside Jira, and certify builds for production deployments.",
  },
  {
    title: "Bi Developer",
    dept: "Engineering",
    location: "Bangalore, India / Remote",
    mustHave: "BI, DWH, Data Warehousing, SSIS, SQL Server, PowerBI",
    desc: "Design enterprise data pipelines and dashboards. Write complex analytical queries, build ETL packs with SSIS, and construct visual board sheets in PowerBI.",
  },
  {
    title: "Value Consultant",
    dept: "Consulting",
    location: "San Ramon, CA",
    mustHave: "Digital Marketing, Financial Analysis, Business Consulting",
    desc: "Partner with enterprise executive teams. Assess digital transformation metrics, calculate ROI models, and define capability development roadmaps.",
  },
  {
    title: "Junior TAM / Senior TAM",
    dept: "Consulting",
    location: "Markham, Canada / UK",
    mustHave: "SaaS, LMS, CMS, API integration, Client Management",
    desc: "Manage customer technical operations. Guide enterprise accounts through system roll-outs, resolve integration questions, and champion feature requests.",
  },
  {
    title: "Customer Excellence Data Analyst",
    dept: "Consulting",
    location: "Bangalore, India",
    mustHave: "Data Visualization, PowerBI, Python, SQL, Excel",
    desc: "Parse service tickets and customer metrics. Identify process bottlenecks, build visual trackers, and suggest optimization guidelines.",
  },
  {
    title: "Operations Management Assignment Writer",
    dept: "Other",
    location: "Remote",
    mustHave: "Excellent English Writing, Operations Management expertise",
    desc: "Create comprehensive technical guides, case write-ups, and operational workflow documents to support global consulting strategies.",
  },
];
