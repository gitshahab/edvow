import { ShieldCheck, TrendingUp, Users2, Laptop2 } from "lucide-react";

export default function CareersBenefits() {
  const perks = [
    {
      icon: ShieldCheck,
      title: "Guaranteed Payroll & Statutory Security",
      desc: "All roles are on official Edvow payroll with PF, ESI/insurance coverage, timely disbursements, and regulatory compliance.",
    },
    {
      icon: Laptop2,
      title: "Tier-1 Enterprise Exposure",
      desc: "Work deployed on mission-critical platforms with prominent banking, corporate, and technology brands across India.",
    },
    {
      icon: TrendingUp,
      title: "Structured Mentorship & Career Ladder",
      desc: "Continuous technical code reviews, domain workshops, and accelerated transition pathways from junior to lead associate.",
    },
    {
      icon: Users2,
      title: "Zero Bureaucracy, High Agency",
      desc: "Whether building internal products or delivering client solutions, your input shapes architecture and client execution.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="font-heading text-xs uppercase tracking-[0.25em] font-bold text-edvow-orange">
            The Edvow Advantage
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-edvow-blue">
            Why build your career on our payroll.
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600">
            We provide stability, enterprise access, and genuine career guidance
            for every team member.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-edvow-blue">
                    <Icon className="w-5 h-5 text-edvow-orange" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-edvow-blue tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
