"use client";

import { useState } from "react";
import { CheckCircle2, X, FileText } from "lucide-react";
import EngagementModels from "./EngagementModel";
import { useGoogleForm } from "@/component/hooks/useGoogleForm";

export default function EngagementSection() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectScope: "",
  });

  const { submitForm, isSubmitting, isSuccess, error, resetStatus } =
    useGoogleForm();

  const handleOpenModal = (modelTitle: string) => {
    setSelectedModel(modelTitle);
    resetStatus();
    setFormData({ fullName: "", email: "", phone: "", projectScope: "" });
  };

  const handleCloseModal = () => {
    setSelectedModel(null);
    resetStatus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedModel) return;

    await submitForm({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      source: `IT Project Lead: ${selectedModel}`,
      message: formData.projectScope,
    });
  };

  return (
    <>
      {/* 1. The Core Engagement Cards */}
      <EngagementModels onOpenModal={handleOpenModal} />

      {/* 2. Proposal Request Modal */}
      {selectedModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg p-6 md:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-10 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-heading text-xl font-bold text-edvow-blue">
                  Inquiry Received
                </h3>
                <p className="font-sans text-xs text-slate-600 max-w-xs mx-auto">
                  Thank you for your interest in{" "}
                  <strong>{selectedModel}</strong>. Our engineering lead will
                  review your project scope and schedule an introductory
                  architecture call.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="mt-2 bg-edvow-blue text-white px-6 py-2 font-heading text-xs uppercase tracking-wider font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <span className="font-heading text-[10px] uppercase tracking-widest text-edvow-orange font-bold">
                  Engagement Request
                </span>
                <h2 className="font-heading text-xl font-bold text-edvow-blue mt-1 mb-1">
                  {selectedModel}
                </h2>
                <p className="font-sans text-xs text-slate-500 mb-6">
                  Share your requirements and our technical team will respond
                  within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="e.g. Vikram Verma"
                      className="w-full border border-slate-200 px-3.5 py-2.5 text-sm font-sans focus:border-edvow-blue outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="vikram@company.com"
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

                  <div>
                    <label className="block font-heading text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project Overview or Staffing Needs *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <textarea
                        required
                        rows={3}
                        value={formData.projectScope}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectScope: e.target.value,
                          })
                        }
                        placeholder="Briefly describe your product timeline, tech stack (e.g. Next.js/Node), or number of developers needed..."
                        className="w-full border border-slate-200 pl-10 pr-3.5 py-2.5 text-sm font-sans focus:border-edvow-blue outline-none resize-none"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-xs text-red-600 font-sans">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-edvow-blue text-white py-3 font-heading text-xs uppercase tracking-widest font-bold hover:bg-slate-900 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting
                      ? "Submitting Request..."
                      : "Request Technical Consultation"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
