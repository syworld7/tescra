import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { offices } from "../constants/offices";
import OfficeCard from "../components/contact/OfficeCard";
import QuickInfo from "../components/contact/QuickInfo";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form" || (location.state && (location.state as any).scrollToForm)) {

      const timer = setTimeout(() => {
        const element = document.getElementById("contact-form");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <section className="py-24 border-t border-slate-200 dark:border-darkborder/30 bg-slate-50 dark:bg-darkbg relative transition-colors duration-300">
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-neonteal/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white mb-4 tracking-tight">
            Connect With Our Experts
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Have a project in mind, need software advisory guidance, or want to integrate advanced intelligent workflows? Get in touch.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {offices.map((office, idx) => (
            <OfficeCard key={idx} office={office} idx={idx} />
          ))}
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          
          <QuickInfo />

          
          <ContactForm />

        </div>

      </div>
    </section>
  );
}
