import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid company email";
    }
    if (formData.phone.trim() && !/^[0-9]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (8-15 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    
    if (supabase) {
      try {
        const { error } = await supabase.from("contact_submissions_tescra").insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            company: formData.company,
            country: formData.country,
            phone: formData.phone || null,
            message: formData.message,
          },
        ]);
        if (error) throw error;
        toast.success("Message sent! Our team will get back to you shortly.");
        setIsSuccess(true);
      } catch (err: any) {
        console.error("Supabase insert error:", err);
        toast.error(`Submission failed: Please check your network connection.`);
      } finally {
        setIsSubmitting(false);
      }
    } else {

      setTimeout(() => {
        const existing = JSON.parse(localStorage.getItem("tescra_contact_submissions") || "[]");
        existing.push({
          ...formData,
          id: Math.random().toString(36).substring(2, 9),
          created_at: new Date().toISOString()
        });
        localStorage.setItem("tescra_contact_submissions", JSON.stringify(existing));
        console.log("Saved Contact form to simulation storage:", formData);
        
        toast.success("Inquiry received! Our team will get back to you shortly.");
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1200);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      country: "",
      phone: "",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div id="contact-form" className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden bg-white dark:bg-transparent">
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border ${errors.fullName ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonindigo"} focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500`}
              />
              {errors.fullName && <span className="text-[11px] text-red-500 mt-1 block">{errors.fullName}</span>}
            </div>

            
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Company Email ID *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border ${errors.email ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonindigo"} focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500`}
              />
              {errors.email && <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Company Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={`w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border ${errors.company ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonindigo"} focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500`}
              />
              {errors.company && <span className="text-[11px] text-red-500 mt-1 block">{errors.company}</span>}
            </div>

            
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border ${errors.country ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonindigo"} focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500`}
              />
              {errors.country && <span className="text-[11px] text-red-500 mt-1 block">{errors.country}</span>}
            </div>
          </div>

          
          <div>
            <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">Phone Number (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border ${errors.phone ? "border-red-500" : "border-slate-200 dark:border-darkborder focus:border-neonindigo"} focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500`}
            />
            {errors.phone && <span className="text-[11px] text-red-500 mt-1 block">{errors.phone}</span>}
          </div>

          
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block">Your Message</label>
              <span className="text-[10px] text-slate-400 dark:text-gray-500">{formData.message.length}/1000 chars</span>
            </div>
            <textarea
              name="message"
              rows={4}
              maxLength={1000}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Describe your technical needs, project scope, or request details..."
              className="w-full px-4 py-3 bg-white dark:bg-darkcard/50 rounded-xl border border-slate-200 dark:border-darkborder focus:border-neonindigo focus:outline-none text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 resize-none"
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
                <span>Submitting Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Form</span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-neonteal/10 text-neonteal rounded-full flex items-center justify-center mx-auto mb-4 border border-neonteal/20">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">Inquiry Received!</h4>
          <p className="text-slate-600 dark:text-gray-400 text-sm max-w-sm mx-auto">
            Thank you for reaching out to Tescra. One of our technical advisors will review your inquiry and connect with you within 24 business hours.
          </p>
          <button
            onClick={resetForm}
            className="px-6 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-darkborder text-slate-700 dark:text-gray-300 text-sm font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all mt-4"
          >
            Send another message
          </button>
        </div>
      )}
    </div>
  );
}
