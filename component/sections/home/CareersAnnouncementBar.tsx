import Link from "next/link";
import { ArrowRight, Briefcase, Users, Terminal } from "lucide-react";

export function CareersAnnouncementBar() {
  return (
    <aside
      aria-label="Hiring announcement"
      className="bg-slate-900 text-white border-b border-slate-800 text-xs py-2.5 px-4"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-flex items-center gap-1.5 font-heading uppercase tracking-widest text-[10px] font-bold bg-edvow-orange/20 text-edvow-orange px-2 py-0.5 border border-edvow-orange/30 shrink-0">
            <Users className="w-3 h-3" />
            We&apos;re Hiring
          </span>
          <p className="truncate text-slate-300 font-sans">
            Growing across India: Seeking Onsite Executive &amp; Associates.
          </p>
        </div>

        <Link
          href="/careers"
          className="inline-flex items-center gap-1 font-heading uppercase tracking-wider text-[11px] font-bold text-edvow-orange hover:text-white transition-colors shrink-0"
        >
          <span>View Open Roles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </aside>
  );
}

export function CareersPreFooterTeaser() {
  const openTracks = [
    {
      role: "Admissions & Career Counselor",
      type: "Full-Time / Hybrid",
      location: "Delhi NCR / Remote",
      department: "Counseling Operations",
      icon: Briefcase,
    },
    {
      role: "Full-Stack Engineer (Next.js & TypeScript)",
      type: "Full-Time",
      location: "Delhi NCR / Remote",
      department: "IT Services & Architecture",
      icon: Terminal,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-slate-50 border border-slate-200/90 p-8 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-heading text-xs uppercase tracking-[0.25em] font-bold text-edvow-orange">
                Join The Movement
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-edvow-blue">
                Shape India&apos;s next generation of talent and technology.
              </h2>
              <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
                Whether you guide ambitious scholars toward target universities
                or engineer resilient cloud-native digital platforms, we provide
                direct ownership, high agency, and zero bureaucracy.
              </p>
              <div className="pt-2">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-3 bg-edvow-blue text-white px-7 py-3.5 font-heading text-xs uppercase tracking-widest font-bold hover:bg-slate-900 transition-colors"
                >
                  <span>Explore All Openings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Mini Job Cards */}
            <div className="lg:col-span-6 space-y-3">
              {openTracks.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.role}
                    className="p-5 bg-white border border-slate-200 flex items-start justify-between gap-4 hover:border-edvow-blue transition-colors group"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-[10px] uppercase tracking-wider font-semibold text-edvow-orange bg-edvow-orange/10 px-2 py-0.5">
                          {item.department}
                        </span>
                        <span className="text-[11px] text-slate-400 font-sans">
                          {item.location}
                        </span>
                      </div>
                      <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-edvow-blue transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-xs text-slate-500 font-sans">
                        {item.type}
                      </p>
                    </div>

                    <div className="p-2 bg-slate-50 text-slate-400 group-hover:text-edvow-orange transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
