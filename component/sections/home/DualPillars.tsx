import Link from "next/link";
import {
  Compass,
  Code2,
  ArrowUpRight,
  GraduationCap,
  Users2,
  LineChart,
  Layers,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export default function DualPillars() {
  const pillars = [
    {
      id: "counselling",
      tag: "Academic & Career Growth",
      title: "Strategic Career Architecture",
      subtitle:
        "Precision counseling designed to eliminate choice fatigue and secure premier admissions.",
      icon: Compass,
      href: "/career-counselling",
      buttonText: "Explore Counselling",
      features: [
        {
          title: "Stream & College Selection",
          desc: "Data-driven alignment for Class 8–12 students and graduates.",
          icon: GraduationCap,
        },
        {
          title: "1-on-1 Mentorship",
          desc: "Personalized roadmaps, profile evaluation, and SOP mastery.",
          icon: Users2,
        },
        {
          title: "Global Admission Strategy",
          desc: "Guidance for competitive PG, MBA, and overseas admissions.",
          icon: LineChart,
        },
      ],
      theme: {
        badge: "bg-edvow-orange/10 text-edvow-orange border-edvow-orange/20",
        accent: "group-hover:border-edvow-orange",
        btn: "bg-edvow-orange hover:bg-edvow-blue text-white",
      },
    },
    {
      id: "it-services",
      tag: "Enterprise Engineering",
      title: "Scalable Digital Solutions",
      subtitle:
        "Full-stack development, modern web architecture, and cloud deployment for modern business.",
      icon: Code2,
      href: "/it-services",
      buttonText: "Explore IT Solutions",
      features: [
        {
          title: "Full-Stack Web & App Builds",
          desc: "Fast, accessible web applications built on Next.js, React, and Node.js.",
          icon: Layers,
        },
        {
          title: "Cloud & Microservices",
          desc: "Resilient APIs, relational database design, and cloud infrastructure.",
          icon: Cpu,
        },
        {
          title: "Architecture & Code Audits",
          desc: "Optimizing enterprise applications for latency, security, and scale.",
          icon: ShieldCheck,
        },
      ],
      theme: {
        badge: "bg-edvow-blue/10 text-edvow-blue border-edvow-blue/20",
        accent: "group-hover:border-edvow-blue",
        btn: "bg-edvow-blue hover:bg-edvow-orange text-white",
      },
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange">
            What We Deliver
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-edvow-blue tracking-tighter">
            Two Verticals. <br />
            <span className="text-slate-400 font-normal">
              One Standard of Excellence.
            </span>
          </h2>
          <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed">
            Whether accelerating an individual career trajectory or building
            production-ready digital products, Edvow provides structured,
            high-impact solutions.
          </p>
        </div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative bg-white border border-slate-200 p-8 md:p-12 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${pillar.theme.accent}`}
              >
                {/* Top Details */}
                <div className="space-y-8">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`inline-block px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider border ${pillar.theme.badge}`}
                    >
                      {pillar.tag}
                    </span>
                    <div className="p-3 bg-slate-50 text-edvow-blue group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-edvow-blue tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Bullet / Capability List */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    {pillar.features.map((feat, idx) => {
                      const FeatIcon = feat.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3.5">
                          <div className="p-1.5 bg-slate-100/70 text-slate-700 mt-0.5">
                            <FeatIcon className="w-4 h-4 stroke-[2]" />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-sm text-edvow-blue">
                              {feat.title}
                            </h4>
                            <p className="font-sans text-xs text-slate-500 leading-normal">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-10 mt-8 border-t border-slate-100">
                  <Link
                    href={pillar.href}
                    className={`inline-flex items-center justify-between w-full px-6 py-4 font-heading text-xs uppercase tracking-widest font-bold transition-colors ${pillar.theme.btn}`}
                  >
                    <span>{pillar.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
