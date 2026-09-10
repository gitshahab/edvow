import { Award, GraduationCap, Laptop, Sparkles } from "lucide-react";

export default function CombinedMetricsBar() {
  const metrics = [
    {
      icon: GraduationCap,
      value: "5,000+",
      label: "Scholars Guided",
      detail: "1-on-1 career mapping & admissions",
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      detail: "Target university & stream conversion",
    },
    {
      icon: Laptop,
      value: "40+",
      label: "Digital Deliverables",
      detail: "Production web apps & API platforms",
    },
    {
      icon: Sparkles,
      value: "99.9%",
      label: "Uptime & Scalability",
      detail: "Modern Next.js & cloud-native engineering",
    },
  ];

  return (
    <section className="bg-edvow-blue text-white py-14 border-y border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/15">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-start lg:items-center text-left lg:text-center px-0 lg:px-8 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-white/10 text-edvow-orange group-hover:bg-edvow-orange group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">
                    {item.value}
                  </span>
                </div>
                <h3 className="font-heading text-xs uppercase tracking-[0.18em] font-semibold text-edvow-orange mb-1">
                  {item.label}
                </h3>
                <p className="font-sans text-xs text-blue-100/80 leading-relaxed max-w-[220px]">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
