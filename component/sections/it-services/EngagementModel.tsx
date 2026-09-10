import { Check, Users, Boxes, ArrowRight } from "lucide-react";

interface EngagementModelsProps {
  onOpenModal: (modelTitle: string) => void;
}

export default function EngagementModels({
  onOpenModal,
}: EngagementModelsProps) {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-heading text-xs uppercase tracking-[0.25em] font-bold text-edvow-orange">
            Partnership Flexibility
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-edvow-blue">
            Structured Engagement Models
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600">
            Whether you need a full development team to build an MVP from
            scratch or dedicated software engineers deployed on your internal
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Model 1: Dedicated Staff Augmentation / Onsite Deputation */}
          <div className="bg-slate-50 border border-slate-200/90 p-8 md:p-12 flex flex-col justify-between hover:border-edvow-blue transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-heading text-[10px] uppercase tracking-widest font-bold bg-edvow-orange/10 text-edvow-orange border border-edvow-orange/20 px-3 py-1">
                  High Agency &amp; Speed
                </span>
                <Users className="w-6 h-6 text-edvow-blue" />
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-edvow-blue">
                Dedicated Developer Deputation (On Edvow Payroll)
              </h3>

              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Scale your existing engineering squads instantly. Hire verified
                Full-Stack, Frontend, or Backend engineers on Edvow payroll who
                integrate directly into your Jira, daily standups, and codebase.
              </p>

              <ul className="space-y-3 pt-4 border-t border-slate-200 text-xs font-sans text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Engineers remain on Edvow payroll (zero HR/compliance
                    overhead for you)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Flexible deployment: Onsite (Delhi NCR/Pan-India) or Remote
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Immediate replacement guarantee &amp; senior architectural
                    oversight
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={() =>
                onOpenModal("Staff Augmentation / Dedicated Developers")
              }
              className="mt-8 inline-flex items-center justify-between w-full bg-edvow-blue text-white px-6 py-4 font-heading text-xs uppercase tracking-widest font-bold hover:bg-slate-900 transition-colors"
            >
              <span>Hire Dedicated Developers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Model 2: End-to-End Product Turnkey */}
          <div className="bg-slate-50 border border-slate-200/90 p-8 md:p-12 flex flex-col justify-between hover:border-edvow-blue transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-heading text-[10px] uppercase tracking-widest font-bold bg-white border border-slate-200 text-edvow-blue px-3 py-1">
                  Fixed Milestone Scope
                </span>
                <Boxes className="w-6 h-6 text-edvow-orange" />
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-edvow-blue">
                Turnkey Product &amp; MVP Engineering
              </h3>

              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Take your concept from wireframe to production launch. We handle
                full UI/UX design, database schema architecture, frontend,
                backend microservices, and final cloud deployment.
              </p>

              <ul className="space-y-3 pt-4 border-t border-slate-200 text-xs font-sans text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Milestone-based delivery with weekly interactive demo builds
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Fixed scope, transparent budget estimates, and strict
                    timelines
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Complete IP and code repository transfer upon launch
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenModal("Turnkey Product / MVP Build")}
              className="mt-8 inline-flex items-center justify-between w-full bg-white border border-edvow-blue text-edvow-blue px-6 py-4 font-heading text-xs uppercase tracking-widest font-bold hover:bg-edvow-blue hover:text-white transition-colors"
            >
              <span>Request Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
