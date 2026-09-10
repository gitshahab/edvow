import { Database, Binary, Compass, Network, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CrossDisciplinarySection() {
  const differentiators = [
    {
      icon: Binary,
      tag: "Live Market Intelligence",
      title: "Guidance Powered by Actual Industry Tech",
      description:
        "Most counseling relies on outdated college brochures. We build commercial software daily, giving students real-time visibility into hiring trends, tech stacks, and career viability.",
    },
    {
      icon: Database,
      tag: "Algorithmic Precision",
      title: "Data-Backed Course & Stream Mapping",
      description:
        "We replace gut feelings with structured profile analytics. Psychometric data matches candidate aptitude with market demand to maximize long-term ROI on higher education.",
    },
    {
      icon: Network,
      tag: "Ecosystem Synergies",
      title: "Integrated EdTech Platforms for Partners",
      description:
        "For universities and educational partners, we do not just recruit students—we design, engineer, and deploy their digital portals, admission CRMs, and learning systems.",
    },
    {
      icon: Compass,
      tag: "Holistic Execution",
      title: "Dual-Track Scalability",
      description:
        "Whether preparing an engineer for a master's abroad or scaling an enterprise web platform, we operate with identical rigor: strict milestones, clear documentation, and zero fluff.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-heading text-xs uppercase tracking-[0.25em] font-bold text-edvow-orange">
              Why Edvow • The Convergence
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-edvow-blue">
              Where engineering rigor elevates career counsel.
            </h2>
            <p className="font-sans text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
              We aren&apos;t just educational advisors, and we aren&apos;t just
              software contractors. By bridging cutting-edge digital development
              with strategic career navigation, we offer clarity that standard
              consultancies cannot match.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-widest font-bold text-edvow-blue hover:text-edvow-orange transition-colors pb-1 border-b-2 border-edvow-blue hover:border-edvow-orange"
            >
              <span>Explore Our Methodology</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200/80 p-8 md:p-10 flex flex-col justify-between hover:border-edvow-blue transition-all duration-300 group hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-[11px] uppercase tracking-[0.2em] font-semibold text-edvow-orange bg-slate-50 border border-slate-100 px-3 py-1">
                      {item.tag}
                    </span>
                    <div className="p-2.5 bg-slate-50 border border-slate-100 text-edvow-blue group-hover:bg-edvow-blue group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl font-bold text-edvow-blue mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-edvow-orange" />
                  <span className="font-heading text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                    Built on Enterprise Practice
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
