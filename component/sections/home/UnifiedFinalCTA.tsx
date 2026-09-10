import Link from "next/link";
import { GraduationCap, Code2, ArrowRight } from "lucide-react";

export default function UnifiedFinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative overflow-hidden bg-edvow-blue text-white p-8 md:p-16 lg:p-20 border border-edvow-blue">
          {/* Subtle Accent Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 bg-edvow-orange/15 blur-3xl rounded-full"
          />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block font-heading text-xs uppercase tracking-[0.25em] font-bold text-edvow-orange">
              Take The Next Step
            </span>

            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Ready to clarify your future or build your next platform?
            </h2>

            <p className="font-sans text-base md:text-lg text-blue-100/90 leading-relaxed max-w-2xl">
              Whether you need strategic guidance for competitive admissions or
              an experienced engineering partner to bring software to market,
              our team is ready.
            </p>

            {/* Dual CTA Actions */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                href="/career-counselling"
                className="inline-flex items-center justify-center gap-3 bg-edvow-orange text-slate-900 px-8 py-4 font-heading text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors group"
              >
                <GraduationCap className="w-4 h-4 text-slate-900" />
                <span>Book Counseling Session</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/it-services"
                className="inline-flex items-center justify-center gap-3 border border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-4 font-heading text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-edvow-blue transition-all group"
              >
                <Code2 className="w-4 h-4" />
                <span>Discuss an IT Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-y-2 gap-x-8 text-xs text-blue-100/70 font-sans">
              <span>✓ Confidential 1-on-1 sessions</span>
              <span>✓ Modern Next.js &amp; Cloud architectures</span>
              <span>✓ Transparent milestone roadmaps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
