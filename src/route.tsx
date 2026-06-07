import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const RouteLoader = () => (
  <div className="w-full min-h-[60vh] flex items-center justify-center flex-col space-y-4">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-white/5" />
      <div className="absolute inset-0 rounded-full border-4 border-t-neonindigo border-r-neonteal animate-spin" />
    </div>
    <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-gray-500 uppercase animate-pulse">
      Loading Page...
    </span>
  </div>
);

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const Awards = lazy(() => import("./pages/Awards"));
const LifeAtTescra = lazy(() => import("./pages/LifeAtTescra"));
const Insights = lazy(() => import("./pages/Insights"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));

interface AppRoutesProps {
  activeIndustryTab: string;
  setActiveIndustryTab: (tab: string) => void;
}

export default function AppRoutes({ activeIndustryTab, setActiveIndustryTab }: AppRoutesProps) {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              activeIndustryTab={activeIndustryTab}
              setActiveIndustryTab={setActiveIndustryTab}
            />
          }
        />
        <Route path="/services" element={<Services />} />
        <Route
          path="/industries"
          element={
            <Industries
              activeTab={activeIndustryTab}
              setActiveTab={setActiveIndustryTab}
            />
          }
        />
        <Route path="/awards" element={<Awards />} />
        <Route path="/life-at-tescra" element={<LifeAtTescra />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
