import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Search, MapPin, Sparkles } from "lucide-react";
import { depts, jobs } from "../constants/careers";
import type { JobItem } from "../types/careers";
import JobModal from "../components/JobModal";

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDept, setActiveDept] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);

  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedJob]);

  const filteredJobs = useMemo(() =>
    jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.mustHave.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = activeDept === "All" || job.dept === activeDept;
      return matchesSearch && matchesDept;
    }),
    [searchQuery, activeDept]
  );

  const handleCloseModal = useCallback(() => {
    setSelectedJob(null);
  }, []);

  const handleOpenJob = useCallback((job: JobItem) => {
    setSelectedJob(job);
  }, []);

  return (
    <section className="py-24 border-t border-slate-200 dark:border-darkborder/30 bg-slate-50 dark:bg-darkbg relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neonviolet/30 bg-neonviolet/5 text-xs font-semibold text-neonviolet mb-4 animate-pulse-slow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Global Team</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white mb-4 tracking-tight">
            Discover Exciting Career Opportunities
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            We are looking for creators, dreamers, and engineering pioneers who want to tackle complex technical architectures and shape the future of enterprise systems.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {depts.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeDept === d
                    ? "bg-gradient-to-r from-neonindigo to-neonteal text-white shadow-lg"
                    : "bg-slate-200/60 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-white/10"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search by role or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border border-slate-200 dark:border-darkborder focus:outline-none focus:border-neonteal text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 transition-all"
            />
          </div>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:border-slate-300 dark:hover:border-white/10 hover:shadow-md dark:hover:shadow-none"
              >
                <div className="bg-white dark:bg-transparent">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder rounded-lg text-[10px] font-bold tracking-widest uppercase text-neonteal">
                      {job.dept}
                    </span>
                    <span className="flex items-center space-x-1 text-xs text-slate-500 dark:text-gray-400 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500" />
                      <span>{job.location}</span>
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-neonindigo transition-colors duration-250">
                    {job.title}
                  </h3>
                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider block mb-1">Key Must-Haves:</span>
                    <p className="text-slate-600 dark:text-gray-300 text-xs leading-relaxed font-mono truncate">
                      {job.mustHave}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-darkborder/50 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenJob(job)}
                    className="px-5 py-2.5 bg-gradient-to-r from-neonindigo to-neonteal hover:from-neonteal hover:to-neonindigo text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/10 active:scale-[0.97]"
                  >
                    View Details & Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-darkcard/50 border border-slate-200 dark:border-darkborder rounded-2xl">
            <p className="text-slate-500 dark:text-gray-400 text-sm">No job positions found matching "{searchQuery}"</p>
          </div>
        )}

      </div>

      {selectedJob && (
        <JobModal selectedJob={selectedJob} onClose={handleCloseModal} />
      )}
    </section>
  );
}
