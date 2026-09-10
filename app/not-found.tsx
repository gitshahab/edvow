import Link from "next/link";
import { Home, Compass, Briefcase, Code2 } from "lucide-react";

export default function NotFound() {
  const quickLinks = [
    { label: "IT Services", href: "/it-services", icon: Code2 },
    { label: "Careers on Payroll", href: "/careers", icon: Briefcase },
    { label: "Career Counselling", href: "/career-counselling", icon: Compass },
  ];

  return (
    <main className="min-h-[85vh] bg-slate-50 flex items-center justify-center px-6 py-20 border-b border-slate-200/80">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Error Code & Brand Tag */}
        <div className="space-y-2">
          <span className="font-heading text-xs uppercase tracking-[0.3em] font-bold text-edvow-orange">
            Error 404 • Resource Relocated
          </span>
          <h1 className="font-heading text-7xl md:text-8xl font-black text-edvow-blue tracking-tighter">
            404
          </h1>
        </div>

        {/* Narrative */}
        <div className="space-y-3">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Page Not Found
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
            The link you navigated to may be outdated, renamed, or currently
            unavailable on our network.
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-edvow-blue text-white px-8 py-4 font-heading text-xs uppercase tracking-widest font-bold hover:bg-slate-900 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4 text-edvow-orange" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Scaffolding Quick Links */}
        <div className="pt-8 border-t border-slate-200 space-y-4">
          <span className="font-heading text-[10px] uppercase tracking-widest text-slate-400 font-bold block">
            Or Jump Directly To
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-xs font-heading uppercase tracking-wider text-slate-700 hover:border-edvow-blue hover:text-edvow-blue transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
