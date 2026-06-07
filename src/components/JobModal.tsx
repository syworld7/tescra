import React, { useState, useRef, useCallback, memo } from "react";
import { MapPin, FileText, X, Send, CheckCircle2, UploadCloud, Trash2, Copy, Check } from "lucide-react";
import { supabase } from "../lib/supabase";
import { toast } from "react-hot-toast";
import type { JobItem } from "../types/careers";

interface JobModalProps {
  selectedJob: JobItem;
  onClose: () => void;
}

const JobModal = memo(function JobModal({ selectedJob, onClose }: JobModalProps) {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [appId, setAppId] = useState("");
  const [copiedId, setCopiedId] = useState(false);
  const [noteLength, setNoteLength] = useState(0);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const linkedinRef = useRef<HTMLInputElement>(null);
  const educationRef = useRef<HTMLSelectElement>(null);
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getFormValues = useCallback(() => ({
    firstName: firstNameRef.current?.value.trim() ?? "",
    lastName: lastNameRef.current?.value.trim() ?? "",
    email: emailRef.current?.value.trim() ?? "",
    phone: phoneRef.current?.value.trim() ?? "",
    city: cityRef.current?.value.trim() ?? "",
    linkedin: linkedinRef.current?.value.trim() ?? "",
    education: educationRef.current?.value ?? "B.Tech / B.E.",
    note: noteRef.current?.value.trim() ?? "",
  }), []);

  const clearError = useCallback((field: string) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const handlePhoneInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    clearError("phone");
  }, [clearError]);

  const handleNoteChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteLength(e.target.value.length);
  }, []);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      setResumeFile(e.dataTransfer.files[0]);
      clearError("resume");
    }
  }, [clearError]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setResumeFile(e.target.files[0]);
      clearError("resume");
    }
  }, [clearError]);

  const removeSelectedFile = useCallback(() => {
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const validateForm = useCallback(() => {
    const v = getFormValues();
    const errs: Record<string, string> = {};
    if (!v.firstName) errs.firstName = "First name is required";
    if (!v.lastName) errs.lastName = "Last name is required";
    if (!v.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(v.email)) errs.email = "Enter a valid email address";
    if (!v.phone) errs.phone = "Phone number is required";
    else if (!/^[0-9]{8,15}$/.test(v.phone)) errs.phone = "Enter a valid phone number (8–15 digits)";
    if (!v.city) errs.city = "City is required";
    if (!resumeFile) {
      errs.resume = "Resume is required";
    } else {
      const ext = resumeFile.name.split(".").pop()?.toLowerCase();
      if (ext !== "pdf" && ext !== "doc" && ext !== "docx") errs.resume = "Only PDF, DOC, DOCX formats are supported";
      if (resumeFile.size > 5 * 1024 * 1024) errs.resume = "File size must be less than 5MB";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }, [getFormValues, resumeFile]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !resumeFile) {
      toast.error("Please fill in all required fields and upload your resume.");
      return;
    }
    setIsSubmitting(true);
    const v = getFormValues();
    const generatedAppId = `TES-${Math.floor(100000 + Math.random() * 900000)}`;

    if (supabase) {
      try {
        const fileExt = resumeFile.name.split(".").pop();
        const filePath = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from("resumes").upload(filePath, resumeFile);
        if (uploadError) throw uploadError;
        const { data: publicUrlData } = supabase.storage.from("resumes").getPublicUrl(filePath);
        const { error: insertError } = await supabase.from("job_applications").insert([{
          app_id: generatedAppId,
          first_name: v.firstName, last_name: v.lastName,
          email: v.email, phone: v.phone, city: v.city,
          highest_education: v.education,
          linkedin_url: v.linkedin || null,
          personal_note: v.note || null,
          job_title: selectedJob.title, job_dept: selectedJob.dept,
          resume_url: publicUrlData?.publicUrl || null,
        }]);
        if (insertError) throw insertError;
        toast.success("Application submitted successfully!");
        setAppId(generatedAppId);
        setIsSuccess(true);
      } catch (err: any) {
        console.error("Supabase error:", err);
        toast.error("Submission failed. Please check your network and try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setTimeout(() => {
        const existing = JSON.parse(localStorage.getItem("tescra_job_applications") || "[]");
        existing.push({ ...v, appId: generatedAppId, jobTitle: selectedJob.title, jobDept: selectedJob.dept, resumeName: resumeFile.name, created_at: new Date().toISOString() });
        localStorage.setItem("tescra_job_applications", JSON.stringify(existing));
        toast.success("Application submitted successfully!");
        setAppId(generatedAppId);
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  }, [validateForm, resumeFile, getFormValues, selectedJob]);

  const handleCopyAppId = useCallback(() => {
    if (appId) {
      navigator.clipboard.writeText(appId);
      setCopiedId(true);
      toast.success("Tracking ID copied!");
      setTimeout(() => setCopiedId(false), 2000);
    }
  }, [appId]);

  const inputBase = "w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500";
  const inputClass = (field: string) => `${inputBase} ${errors[field] ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonteal"}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/60 dark:bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white dark:bg-darkbg border border-slate-200 dark:border-darkborder rounded-3xl shadow-2xl overflow-hidden z-10 [will-change:transform]" role="dialog" aria-modal="true">

        <div className="p-6 md:p-8 border-b border-slate-200 dark:border-darkborder/50 flex items-center justify-between bg-slate-50 dark:bg-darkcard/30">
          <div>
            <span className="px-2.5 py-0.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder rounded-lg text-[10px] font-bold tracking-widest uppercase text-neonteal">{selectedJob.dept}</span>
            <h3 className="font-heading font-extrabold text-xl md:text-2xl text-slate-900 dark:text-white mt-1.5">{selectedJob.title}</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg border border-slate-200 dark:border-darkborder bg-white dark:bg-white/5 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 h-[60vh] max-h-[75vh] overflow-y-auto overscroll-contain space-y-8 [scrollbar-width:thin] [contain:strict]">
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Location</h4>
              <p className="text-slate-700 dark:text-gray-300 text-sm flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-neonteal" /><span>{selectedJob.location}</span>
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Role Summary</h4>
              <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">{selectedJob.desc}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Must-Have Skills</h4>
              <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-darkborder/80">
                <p className="text-slate-700 dark:text-gray-300 text-xs font-mono leading-relaxed">{selectedJob.mustHave}</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-darkborder/50">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Apply Now</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">First Name *</label>
                    <input ref={firstNameRef} type="text" defaultValue="" onChange={() => clearError("firstName")} className={inputClass("firstName")} />
                    {errors.firstName && <span className="text-[11px] text-red-500 mt-1 block">{errors.firstName}</span>}
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Last Name *</label>
                    <input ref={lastNameRef} type="text" defaultValue="" onChange={() => clearError("lastName")} className={inputClass("lastName")} />
                    {errors.lastName && <span className="text-[11px] text-red-500 mt-1 block">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Email ID *</label>
                    <input ref={emailRef} type="email" defaultValue="" onChange={() => clearError("email")} className={inputClass("email")} />
                    {errors.email && <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Phone Number *</label>
                    <input ref={phoneRef} type="text" placeholder="e.g. 9876543210" defaultValue="" onChange={handlePhoneInput} className={inputClass("phone")} />
                    {errors.phone && <span className="text-[11px] text-red-500 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">City *</label>
                    <input ref={cityRef} type="text" defaultValue="" onChange={() => clearError("city")} className={inputClass("city")} />
                    {errors.city && <span className="text-[11px] text-red-500 mt-1 block">{errors.city}</span>}
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Highest Education *</label>
                    <select ref={educationRef} defaultValue="B.Tech / B.E." className="w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 text-slate-800 dark:text-white rounded-xl border border-slate-200 dark:border-darkborder focus:border-neonteal focus:outline-none text-sm">
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
                  <input ref={linkedinRef} type="url" placeholder="https://linkedin.com/in/username" defaultValue="" className={`${inputBase} border-slate-200 dark:border-darkborder focus:border-neonteal`} />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Attach Resume *</label>
                  <div onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop}
                    className={`w-full relative group flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl transition-all ${dragActive ? "border-neonteal bg-neonteal/5" : errors.resume ? "border-red-500 bg-red-500/5" : "border-slate-200 dark:border-darkborder hover:border-slate-300 dark:hover:border-white/10 bg-slate-50/50 dark:bg-darkcard/20"}`}>
                    <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" id="resume-file-input" />
                    {!resumeFile ? (
                      <label htmlFor="resume-file-input" className="flex flex-col items-center justify-center cursor-pointer space-y-2 w-full text-center py-2">
                        <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-darkborder text-slate-400 dark:text-gray-400 shadow-sm transition-transform group-hover:scale-105 duration-200">
                          <UploadCloud className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-slate-700 dark:text-gray-300">Click to upload or drag & drop</p>
                          <p className="text-[10px] text-slate-400 dark:text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                        </div>
                      </label>
                    ) : (
                      <div className="w-full flex items-center justify-between p-3.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-darkborder rounded-xl">
                        <div className="flex items-center space-x-3 truncate">
                          <div className="p-2 bg-gradient-to-r from-neonindigo/10 to-neonteal/10 text-neonindigo dark:text-[#a5b4fc] rounded-lg"><FileText className="w-4 h-4" /></div>
                          <div className="truncate text-left">
                            <p className="text-xs font-semibold text-slate-700 dark:text-gray-200 truncate">{resumeFile.name}</p>
                            <p className="text-[10px] text-slate-400 dark:text-gray-500">{(resumeFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <button type="button" onClick={removeSelectedFile} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors" title="Remove resume">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  {errors.resume && <span className="text-[11px] text-red-500 mt-1 block">{errors.resume}</span>}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Personal Note (Optional)</label>
                    <span className="text-[10px] text-slate-400 dark:text-gray-500">{noteLength}/300 chars</span>
                  </div>
                  <textarea ref={noteRef} maxLength={300} rows={3} defaultValue="" onChange={handleNoteChange} placeholder="Highlight key skills or relevant experience..." className="w-full px-4 py-3 bg-white dark:bg-darkcard/50 rounded-xl border border-slate-200 dark:border-darkborder focus:border-neonteal focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 resize-none" />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-neonindigo to-neonteal text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all disabled:opacity-50">
                  {isSubmitting ? (
                    <><div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" /><span>Sending Application...</span></>
                  ) : (
                    <><Send className="w-4 h-4" /><span>Submit Easy Apply</span></>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
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
                  <button type="button" onClick={handleCopyAppId} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all" title="Copy Tracking ID">
                    {copiedId ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <button onClick={onClose} className="px-6 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-darkborder text-slate-700 dark:text-gray-300 text-sm font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all">Close</button>
                  <button onClick={() => { setIsSuccess(false); setAppId(""); setNoteLength(0); }} className="px-6 py-2.5 bg-gradient-to-r from-neonindigo to-neonteal text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all">Done</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default JobModal;
