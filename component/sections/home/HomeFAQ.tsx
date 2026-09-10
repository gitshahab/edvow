"use client";

import { useState } from "react";

const faqData = {
  counselling: [
    {
      q: "Who is Edvow's career counselling designed for?",
      a: "Our sessions cater to Class 8–12 students selecting academic streams, graduates targeting competitive master's programs (MBA, Tech, Design), and working professionals seeking strategic career pivots.",
    },
    {
      q: "Are counselling sessions available online across India?",
      a: "Yes. We offer fully remote, interactive 1-on-1 sessions nationwide, complete with shared action plans and psychometric evaluations.",
    },
    {
      q: "How does the admission guidance process work?",
      a: "We evaluate your strengths, curate realistic and reach universities, review all application essays and documentation, and run mock interviews.",
    },
  ],
  itServices: [
    {
      q: "What digital solutions does Edvow's IT team build?",
      a: "We specialize in custom web applications, responsive enterprise portals, API integrations, and cloud architectures built on modern TypeScript and Next.js stacks.",
    },
    {
      q: "How do you handle project timelines and milestones?",
      a: "Every build follows agile development sprints with transparent code reviews, bi-weekly demo check-ins, and direct communication channels.",
    },
    {
      q: "Can you take over an existing codebase or legacy project?",
      a: "Yes, we run structured code audits to review architecture, security, and performance before planning refactors or feature expansion.",
    },
  ],
};

export default function HomeFAQ() {
  const [activeTab, setActiveTab] = useState<"counselling" | "itServices">(
    "counselling",
  );
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-edvow-blue tracking-tighter">
            Frequently Asked <br /> Questions.
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
            Find clarity on our counselling roadmaps or software engineering
            delivery standards.
          </p>

          {/* Vertical Toggle Tabs */}
          <div className="inline-flex p-1 bg-slate-100 rounded-none gap-1">
            <button
              onClick={() => {
                setActiveTab("counselling");
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 text-xs font-heading uppercase tracking-wider font-bold transition-all ${
                activeTab === "counselling"
                  ? "bg-edvow-blue text-white shadow-sm"
                  : "text-slate-600 hover:text-edvow-blue"
              }`}
            >
              Counselling
            </button>
            <button
              onClick={() => {
                setActiveTab("itServices");
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 text-xs font-heading uppercase tracking-wider font-bold transition-all ${
                activeTab === "itServices"
                  ? "bg-edvow-blue text-white shadow-sm"
                  : "text-slate-600 hover:text-edvow-blue"
              }`}
            >
              IT Services
            </button>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7 space-y-3">
          {faqData[activeTab].map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-100 bg-slate-50/50 p-6 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-left gap-4"
                >
                  <span className="font-heading font-bold text-base md:text-lg text-edvow-blue">
                    {item.q}
                  </span>
                  <span className="text-xl font-mono text-edvow-orange">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pt-4 text-sm md:text-base text-slate-600 font-sans leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
