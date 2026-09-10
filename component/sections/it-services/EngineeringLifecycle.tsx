import { Search, Compass, Code2, ShieldCheck, Rocket } from "lucide-react";

export default function EngineeringLifecycle() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discovery & System Architecture",
      timeline: "Week 1",
      desc: "Deep-dive stakeholder sessions to define data models, API contracts, system constraints, and functional requirements before writing a line of code.",
      deliverables: [
        "Product Specification",
        "Database ERD & API Schema",
        "Milestone Roadmap",
      ],
    },
    {
      step: "02",
      icon: Compass,
      title: "UI/UX & Component Prototyping",
      timeline: "Week 2",
      desc: "Architecting interactive wireframes and atomic design token libraries in Tailwind CSS, prioritizing sub-second load times and WCAG compliance.",
      deliverables: [
        "High-Fidelity Wireframes",
        "Design System Tokens",
        "User Journey Flowcharts",
      ],
    },
    {
      step: "03",
      icon: Code2,
      title: "Agile Development Sprints",
      timeline: "Sprint Cycles",
      desc: "Two-week iterative sprints with continuous code reviews. We build server-rendered frontends in Next.js paired with scalable Node.js microservices.",
      deliverables: [
        "Bi-Weekly Interactive Demos",
        "Git PR Reviews",
        "Staging Environment Access",
      ],
    },
    {
      step: "04",
      icon: ShieldCheck,
      title: "Quality Engineering & Audits",
      timeline: "Pre-Release",
      desc: "Rigorous automated integration testing, Core Web Vitals optimization, vulnerability patching, and cross-browser stress testing under simulated load.",
      deliverables: [
        "Automated Test Suites",
        "Security Audit Report",
        "Lighthouse 95+ Scorecard",
      ],
    },
    {
      step: "05",
      icon: Rocket,
      title: "Cloud Deployment & Handover",
      timeline: "Production",
      desc: "Zero-downtime production cutover, automated CI/CD pipeline configuration on AWS/Vercel, complete repository transfer, and SLA documentation.",
      deliverables: [
        "Production Cloud Setup",
        "Full IP & Repo Transfer",
        "Maintenance & SLA Support",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-heading text-xs uppercase tracking-[0.25em] font-bold text-edvow-orange">
            Structured Delivery
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-edvow-blue">
            Our Engineering Delivery Lifecycle.
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
            Every build adheres to transparent milestones, strict version
            control, and continuous staging releases. No black boxes, no scope
            surprises.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-slate-50 border border-slate-200/90 p-6 flex flex-col justify-between hover:border-edvow-blue transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Number + Timeline */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 mb-5">
                    <span className="font-heading text-xl font-black text-edvow-orange">
                      {item.step}
                    </span>
                    <span className="font-heading text-[10px] uppercase tracking-wider text-slate-400 font-bold bg-white border border-slate-200 px-2 py-0.5">
                      {item.timeline}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="p-2.5 bg-white border border-slate-200 text-edvow-blue w-fit mb-4 group-hover:bg-edvow-blue group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-base font-bold text-edvow-blue mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-slate-200/70 space-y-1.5">
                  <span className="font-heading text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">
                    Key Outputs
                  </span>
                  {item.deliverables.map((out) => (
                    <div
                      key={out}
                      className="flex items-center gap-1.5 text-[11px] font-sans text-slate-700"
                    >
                      <span className="w-1 h-1 rounded-full bg-edvow-orange shrink-0" />
                      <span className="truncate">{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
