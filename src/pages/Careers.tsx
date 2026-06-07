import React, { useState, useRef, useEffect } from "react";
import { Search, MapPin, FileText, CheckCircle2, X, Send, Sparkles, UploadCloud, Trash2, Copy, Check } from "lucide-react";
import { supabase } from "../lib/supabase";
import { toast } from "react-hot-toast";
import { depts, jobs } from "../constants/careers";
import type { JobItem } from "../types/careers";

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDept, setActiveDept] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    linkedin: "",
    education: "B.Tech / B.E.",
    note: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [appId, setAppId] = useState("");
  const [copiedId, setCopiedId] = useState(false);

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

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.mustHave.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = activeDept === "All" || job.dept === activeDept;
    return matchesSearch && matchesDept;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const cleanValue = name === "phone" ? value.replace(/[^0-9]/g, "") : value;
    setFormData((prev) => ({ ...prev, [name]: cleanValue }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setResumeFile(file);
      if (errors.resume) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.resume;
          return next;
        });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResumeFile(file);
      if (errors.resume) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.resume;
          return next;
        });
      }
    }
  };

  const removeSelectedFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (8-15 digits)";
    }
    if (!formData.city.trim()) newErrors.city = "City is required";
    
    if (!resumeFile) {
      newErrors.resume = "Resume is required";
    } else {
      const ext = resumeFile.name.split(".").pop()?.toLowerCase();
      if (ext !== "pdf" && ext !== "doc" && ext !== "docx") {
        newErrors.resume = "Only PDF, DOC, and DOCX formats are supported";
      }
      if (resumeFile.size > 5 * 1024 * 1024) {
        newErrors.resume = "File size must be less than 5MB";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !selectedJob || !resumeFile) {
      toast.error("Please fill in all required fields and upload your resume.");
      return;
    }

    setIsSubmitting(true);
    const generatedAppId = `TES-${Math.floor(100000 + Math.random() * 900000)}`;

    if (supabase) {
      try {

        const fileExt = resumeFile.name.split(".").pop();
        const filePath = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from("resumes")
          .upload(filePath, resumeFile);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("resumes")
          .getPublicUrl(filePath);

        const resumeUrl = publicUrlData?.publicUrl;

        const { error: insertError } = await supabase
          .from("job_applications")
          .insert([
            {
              app_id: generatedAppId,
              first_name: formData.firstName,
              last_name: formData.lastName,
              email: formData.email,
              phone: formData.phone,
              city: formData.city,
              highest_education: formData.education,
              linkedin_url: formData.linkedin || null,
              personal_note: formData.note || null,
              job_title: selectedJob.title,
              job_dept: selectedJob.dept,
              resume_url: resumeUrl || null,
            },
          ]);

        if (insertError) throw insertError;

        toast.success("Application submitted successfully!");
        setAppId(generatedAppId);
        setIsSuccess(true);
      } catch (err: any) {
        console.error("Supabase submission error:", err);
        toast.error(`Submission failed: Please check your network and try again.`);
      } finally {
        setIsSubmitting(false);
      }
    } else {

      setTimeout(() => {
        const existing = JSON.parse(localStorage.getItem("tescra_job_applications") || "[]");
        existing.push({
          ...formData,
          appId: generatedAppId,
          jobTitle: selectedJob.title,
          jobDept: selectedJob.dept,
          resumeName: resumeFile.name,
          resumeSize: resumeFile.size,
          created_at: new Date().toISOString(),
        });
        localStorage.setItem("tescra_job_applications", JSON.stringify(existing));
        console.log("Saved job application simulation state to localStorage:", formData);
        
        toast.success("Application submitted successfully!");
        setAppId(generatedAppId);
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      linkedin: "",
      education: "B.Tech / B.E.",
      note: "",
    });
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setErrors({});
    setIsSuccess(false);
    setIsSubmitting(false);
    setCopiedId(false);
  };

  const handleCopyAppId = () => {
    if (appId) {
      navigator.clipboard.writeText(appId);
      setCopiedId(true);
      toast.success("Tracking ID copied!");
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

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
                    onClick={() => {
                      resetForm();
                      setSelectedJob(job);
                    }}
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
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          
          <div 
            className="fixed inset-0 bg-slate-900/40 dark:bg-darkbg/85 backdrop-blur-sm"
            onClick={() => {
              setSelectedJob(null);
              resetForm();
            }}
          />
          
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-darkbg border border-slate-200 dark:border-darkborder rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200 z-10"
            role="dialog"
            aria-modal="true"
          >
            
            <div className="p-6 md:p-8 border-b border-slate-200 dark:border-darkborder/50 flex items-center justify-between bg-slate-50 dark:bg-darkcard/30">
              <div>
                <span className="px-2.5 py-0.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder rounded-lg text-[10px] font-bold tracking-widest uppercase text-neonteal">
                  {selectedJob.dept}
                </span>
                <h3 className="font-heading font-extrabold text-xl md:text-2xl text-slate-900 dark:text-white mt-1.5">
                  {selectedJob.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  setSelectedJob(null);
                  resetForm();
                }}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-darkborder bg-white dark:bg-white/5 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            
            <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto overscroll-contain space-y-8 [scrollbar-width:thin]">
              
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Location</h4>
                  <p className="text-slate-700 dark:text-gray-300 text-sm flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4 text-neonteal" />
                    <span>{selectedJob.location}</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Role Summary</h4>
                  <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
                    {selectedJob.desc}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Must-Have Skills</h4>
                  <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-darkborder/80">
                    <p className="text-slate-700 dark:text-gray-300 text-xs font-mono leading-relaxed">
                      {selectedJob.mustHave}
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="pt-6 border-t border-slate-200 dark:border-darkborder/50">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Apply Now for Success</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border ${errors.firstName ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonteal"} focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500`}
                        />
                        {errors.firstName && <span className="text-[11px] text-red-500 mt-1 block">{errors.firstName}</span>}
                      </div>
                      
                      
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border ${errors.lastName ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonteal"} focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500`}
                        />
                        {errors.lastName && <span className="text-[11px] text-red-500 mt-1 block">{errors.lastName}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Email ID *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border ${errors.email ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonteal"} focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500`}
                        />
                        {errors.email && <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>}
                      </div>
                      
                      
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Phone Number *</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="e.g. +1 555-0199"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border ${errors.phone ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonteal"} focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500`}
                        />
                        {errors.phone && <span className="text-[11px] text-red-500 mt-1 block">{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border ${errors.city ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonteal"} focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500`}
                        />
                        {errors.city && <span className="text-[11px] text-red-500 mt-1 block">{errors.city}</span>}
                      </div>

                      
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Highest Education *</label>
                        <select
                          name="education"
                          value={formData.education}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 text-slate-800 dark:text-white rounded-xl border border-slate-200 dark:border-darkborder focus:border-neonteal focus:outline-none text-sm"
                        >
                          <option value="B.Tech / B.E.">B.Tech / B.E.</option>
                          <option value="M.Tech / M.E.">M.Tech / M.E.</option>
                          <option value="MCA / MS">MCA / MS</option>
                          <option value="B.Sc / BCA">B.Sc / BCA</option>
                          <option value="MBA / Business Management">MBA / Business Management</option>
                          <option value="Other Graduate">Other Graduate</option>
                        </select>
                      </div>
                    </div>

                    
                    <div>
                      <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">LinkedIn Profile URL</label>
                      <input
                        type="url"
                        name="linkedin"
                        placeholder="https://linkedin.com/in/username"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border border-slate-200 dark:border-darkborder focus:border-neonteal focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500"
                      />
                    </div>

                    
                    <div>
                      <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">
                        Attach Resume *
                      </label>
                      
                      <div
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        className={`w-full relative group flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl transition-all ${
                          dragActive
                            ? "border-neonteal bg-neonteal/5"
                            : errors.resume
                            ? "border-red-500 bg-red-500/5"
                            : "border-slate-200 dark:border-darkborder hover:border-slate-300 dark:hover:border-white/10 bg-slate-50/50 dark:bg-darkcard/20"
                        }`}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="resume-file-input"
                        />
                        
                        {!resumeFile ? (
                          <label
                            htmlFor="resume-file-input"
                            className="flex flex-col items-center justify-center cursor-pointer space-y-2 w-full text-center py-2"
                          >
                            <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-darkborder text-slate-400 dark:text-gray-400 shadow-sm transition-transform group-hover:scale-105 duration-200">
                              <UploadCloud className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-slate-700 dark:text-gray-300">
                                Click to upload or drag & drop
                              </p>
                              <p className="text-[10px] text-slate-400 dark:text-gray-500">
                                PDF, DOC, DOCX up to 5MB
                              </p>
                            </div>
                          </label>
                        ) : (
                          <div className="w-full flex items-center justify-between p-3.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-darkborder rounded-xl">
                            <div className="flex items-center space-x-3 truncate">
                              <div className="p-2 bg-gradient-to-r from-neonindigo/10 to-neonteal/10 text-neonindigo dark:text-[#a5b4fc] rounded-lg">
                                <FileText className="w-4 h-4" />
                              </div>
                              <div className="truncate text-left">
                                <p className="text-xs font-semibold text-slate-700 dark:text-gray-200 truncate">
                                  {resumeFile.name}
                                </p>
                                <p className="text-[10px] text-slate-400 dark:text-gray-500">
                                  {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={removeSelectedFile}
                              className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                              title="Remove resume"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                      
                      {errors.resume && (
                        <span className="text-[11px] text-red-500 mt-1 block">
                          {errors.resume}
                        </span>
                      )}
                    </div>

                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Personal Note (Optional)</label>
                        <span className="text-[10px] text-slate-400 dark:text-gray-500">{formData.note.length}/300 chars</span>
                      </div>
                      <textarea
                        name="note"
                        maxLength={300}
                        rows={3}
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder="Highlight key skills or relevant experience..."
                        className="w-full px-4 py-3 bg-white dark:bg-darkcard/50 rounded-xl border border-slate-200 dark:border-darkborder focus:border-neonteal focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 resize-none"
                      ></textarea>
                    </div>

                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-neonindigo to-neonteal text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                          <span>Sending Application...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Easy Apply</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 bg-neonteal/10 text-neonteal rounded-full flex items-center justify-center mx-auto mb-4 border border-neonteal/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">Application Submitted!</h4>
                    <p className="text-slate-600 dark:text-gray-400 text-sm max-w-md mx-auto">
                      Thank you for applying for the <strong>{selectedJob.title}</strong> role. Our talent acquisition team will review your credentials and get back to you shortly.
                    </p>
                    <div className="p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-darkborder rounded-2xl max-w-xs mx-auto flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest block">Application Tracking ID</span>
                        <span className="font-mono font-bold text-slate-900 dark:text-white text-lg">{appId}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyAppId}
                        className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all"
                        title="Copy Tracking ID"
                      >
                        {copiedId ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4 mt-6">
                      <button
                        onClick={() => {
                          setSelectedJob(null);
                          resetForm();
                        }}
                        className="px-6 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-darkborder text-slate-700 dark:text-gray-300 text-sm font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => {
                          resetForm();
                        }}
                        className="px-6 py-2.5 bg-gradient-to-r from-neonindigo to-neonteal text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
