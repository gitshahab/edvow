"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How does the No-Cost EMI option work?",
    a: "We partner with leading financial institutions to spread your counseling fees over 24-36 months at 0% interest, ensuring your focus remains entirely on your studies.",
  },
  {
    q: "What is included in the 2026 Precision Counseling?",
    a: "It includes profile evaluation, university shortlisting, SOP/LOR editing, scholarship assistance, and visa mock interviews specifically tailored for the 2026 intake.",
  },
  {
    q: "How do I claim my complimentary tablet?",
    a: "Every student who enrolls in our 'Elite Global' package receives a pre-configured tablet to access our digital library and mentor sessions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Heading */}
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-edvow-blue tracking-tighter mb-6">
            Everything you{" "}
            <span className="text-edvow-orange">need to know.</span>
          </h2>
          <p className="font-sans text-slate-500 text-lg mb-8">
            Can't find the answer you're looking for? Reach out to our team
            directly.
          </p>
          <a
            href="/contact"
            className="bg-edvow-blue text-white px-8 py-4 font-heading uppercase tracking-widest text-xs hover:bg-edvow-orange transition-all"
          >
            Contact Support
          </a>
        </div>

        {/* Right: Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-100">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className="font-heading text-lg font-bold text-edvow-blue group-hover:text-edvow-orange transition-colors">
                  {faq.q}
                </span>
                <span className="text-2xl text-edvow-blue">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 pb-6" : "max-h-0"}`}
              >
                <p className="font-sans text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
