"use client";

import { useState } from "react";
import { useGoogleForm } from "@/component/hooks/useGoogleForm";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

const INQUIRY_TYPES = [
  "IT Services & Custom Development",
  "Hire Dedicated Developers (Onsite / Remote)",
  "Career & Admissions Counseling",
  "Careers & Recruitment at Edvow",
  "General Corporate Inquiry",
] as const;

export default function ContactForm() {
  const [selectedIntent, setSelectedIntent] = useState<string>(
    INQUIRY_TYPES[0],
  );
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { submitForm, isSubmitting, isSuccess, error, resetStatus } =
    useGoogleForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await submitForm({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      source: `Contact Page: ${selectedIntent}`,
      message: formData.message,
    });
  };

  const handleReset = () => {
    resetStatus();
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 text-center space-y-5">
        <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-bold text-edvow-blue">
            Message Dispatched
          </h3>
          <p className="font-sans text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out regarding{" "}
            <strong>{selectedIntent}</strong>. Our leadership team reviews all
            incoming inquiries and will contact you within 24 business hours.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="bg-edvow-blue text-white px-7 py-3 font-heading text-xs uppercase tracking-widest font-bold hover:bg-slate-900 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200/90 p-8 md:p-10 shadow-sm space-y-6"
    >
      <div>
        <span className="font-heading text-[10px] uppercase tracking-widest font-bold text-edvow-orange block mb-1">
          Direct Channel
        </span>
        <h3 className="font-heading text-2xl font-bold text-edvow-blue tracking-tight">
          Send an Inquiry
        </h3>
      </div>

      {/* Inquiry Type Selector */}
      <div>
        <label className="block font-heading text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Nature of Inquiry *
        </label>
        <select
          value={selectedIntent}
          onChange={(e) => setSelectedIntent(e.target.value)}
          className="w-full border border-slate-200 px-3.5 py-3 text-xs md:text-sm font-sans text-slate-800 bg-white focus:border-edvow-blue outline-none cursor-pointer"
        >
          {INQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Name Input */}
      <div>
        <label className="block font-heading text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          placeholder="e.g. Mohd Shahab"
          className="w-full border border-slate-200 px-3.5 py-2.5 text-sm font-sans focus:border-edvow-blue outline-none"
        />
      </div>

      {/* Email & Phone Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-heading text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="you@company.com"
            className="w-full border border-slate-200 px-3.5 py-2.5 text-sm font-sans focus:border-edvow-blue outline-none"
          />
        </div>
        <div>
          <label className="block font-heading text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+91 98765 43210"
            className="w-full border border-slate-200 px-3.5 py-2.5 text-sm font-sans focus:border-edvow-blue outline-none"
          />
        </div>
      </div>

      {/* Message Box */}
      <div>
        <label className="block font-heading text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
          Message / Requirement Details *
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Briefly outline your project requirements, counseling objectives, or recruitment query..."
          className="w-full border border-slate-200 px-3.5 py-2.5 text-sm font-sans focus:border-edvow-blue outline-none resize-none"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 p-3 border border-red-200">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-edvow-blue text-white py-4 font-heading text-xs uppercase tracking-widest font-bold hover:bg-slate-900 transition-colors disabled:opacity-50"
      >
        <Send className="w-3.5 h-3.5" />
        <span>{isSubmitting ? "Transmitting..." : "Submit Inquiry"}</span>
      </button>

      <p className="text-[11px] text-slate-400 text-center font-sans">
        Information submitted is kept strictly confidential under enterprise
        NDAs.
      </p>
    </form>
  );
}
