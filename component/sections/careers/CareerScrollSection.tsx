"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CareersScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const scrollDistance = rect.height - window.innerHeight;

      if (scrollDistance <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollDistance);

      const calculatedProgress = scrolled / scrollDistance;

      setProgress(calculatedProgress);

      const active = rect.top <= 0 && rect.bottom >= window.innerHeight;

      setIsActive(active);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /*
   * ============================================================
   * PHASE PROGRESS & OPACITY
   * ============================================================
   */

  const phase1 = Math.min(progress / 0.3333, 1);

  const phase2 = Math.min(Math.max((progress - 0.3333) / 0.3333, 0), 1);

  const phase3 = Math.min(Math.max((progress - 0.6666) / 0.3334, 0), 1);

  const phase1Opacity =
    progress < 0.25 ? 1 : progress < 0.4 ? 1 - (progress - 0.25) / 0.15 : 0;

  const phase2Opacity =
    progress < 0.25
      ? 0
      : progress < 0.38
        ? (progress - 0.25) / 0.13
        : progress < 0.58
          ? 1
          : progress < 0.72
            ? 1 - (progress - 0.58) / 0.14
            : 0;

  const phase3Opacity =
    progress < 0.58 ? 0 : progress < 0.72 ? (progress - 0.58) / 0.14 : 1;

  /*
   * ============================================================
   * BACKGROUND OPACITY
   * ============================================================
   */

  const background1Opacity =
    progress < 0.3 ? 1 : progress < 0.48 ? 1 - (progress - 0.3) / 0.18 : 0;

  const background2Opacity =
    progress < 0.28
      ? 0
      : progress < 0.42
        ? (progress - 0.28) / 0.14
        : progress < 0.65
          ? 1
          : progress < 0.78
            ? 1 - (progress - 0.65) / 0.13
            : 0;

  const background3Opacity =
    progress < 0.6 ? 0 : progress < 0.75 ? (progress - 0.6) / 0.15 : 1;

  /*
   * ============================================================
   * TRANSFORMS
   * ============================================================
   */

  const careersY = progress < 0.3333 ? phase1 * -15 : -60;

  const careersScale = 0.94 + phase1 * 0.08;

  const phase2Y =
    progress < 0.3333 ? 70 : progress < 0.6666 ? 70 - phase2 * 70 : -40;

  const phase2Scale = progress < 0.3333 ? 0.96 : 0.96 + phase2 * 0.04;

  const phase3Y = progress < 0.6666 ? 70 : 70 - phase3 * 70;

  /*
   * ============================================================
   * VISUAL CONTAINER POSITION
   *
   * This replaces sticky positioning.
   *
   * While the section is active:
   *      fixed viewport
   *
   * Before section:
   *      absolute at top
   *
   * After section:
   *      absolute at 200vh
   * ============================================================
   */

  const viewportStyle: React.CSSProperties = isActive
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }
    : {
        position: "absolute",
        top: progress >= 1 ? "200vh" : 0,
        left: 0,
        width: "100%",
        height: "100vh",
      };

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-slate-950">
      <div style={viewportStyle} className="z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/career2.webp')",
            opacity: background1Opacity,
            transform: `scale(${1.05 + phase1 * 0.08})`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/ex1.webp')",
            opacity: background2Opacity,
            transform: `scale(${1.08 - phase2 * 0.04})`,
          }}
        >
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div
          className="absolute inset-0 bg-edvow-blue"
          style={{
            opacity: background3Opacity * 0.92,
          }}
        />

        <div
          className="absolute inset-0 bg-edvow-blue"
          style={{
            opacity: 0.1 + progress * 0.18,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(2,6,23,0.10), rgba(2,6,23,0.55))",
          }}
        />

        {/* ====================================================
            PHASE 1 — CAREERS
        ==================================================== */}

        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-6"
          style={{
            opacity: phase1Opacity,
            transform: `
              translateY(${careersY}px)
              scale(${careersScale})
            `,
            pointerEvents: phase1Opacity > 0.5 ? "auto" : "none",
          }}
        >
          <div className="flex w-full flex-col items-center text-center">
            <span className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.4em] text-edvow-orange md:text-sm">
              Your Future Starts Here
            </span>

            <h2
              className="
                select-none
                bg-cover
                bg-center
                bg-clip-text
                font-heading
                text-[19vw]
                font-black
                uppercase
                leading-none
                tracking-tighter
                text-transparent
                md:text-[17vw]
              "
              style={{
                backgroundImage: "url('/career2.webp')",
                WebkitBackgroundClip: "text",
              }}
            >
              CAREERS
            </h2>

            <p className="mt-5 max-w-lg font-sans text-xs uppercase tracking-[0.3em] text-blue-100/90 md:text-base">
              Scroll to uncover opportunities
            </p>
          </div>
        </div>

        {/* ====================================================
            PHASE 2 — EXPLORE
        ==================================================== */}

        <div
          className="absolute inset-0 z-20 flex items-center justify-center px-6"
          style={{
            opacity: phase2Opacity,
            transform: `
              translateY(${phase2Y}px)
              scale(${phase2Scale})
            `,
            pointerEvents: phase2Opacity > 0.5 ? "auto" : "none",
          }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-edvow-orange" />

              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-edvow-orange">
                Your Next Chapter
              </span>
            </div>

            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
              Don't just find a job.
              <br />
              <span className="text-edvow-orange">Build your future.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-blue-100/90 sm:text-lg">
              At Edvow, your work goes beyond a designation. Join a team where
              ideas become products, challenges become opportunities, and your
              growth moves with the company.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["Growth", "Ownership", "Impact"].map((item) => (
                <span
                  key={item}
                  className="
                    border
                    border-white/20
                    bg-white/10
                    px-5
                    py-3
                    font-heading
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                    backdrop-blur-md
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ====================================================
            PHASE 3 — JOIN EDVOW
        ==================================================== */}

        <div
          className="absolute inset-0 z-30 flex items-center justify-center px-6"
          style={{
            opacity: phase3Opacity,
            transform: `translateY(${phase3Y}px)`,
            pointerEvents: phase3Opacity > 0.5 ? "auto" : "none",
          }}
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-edvow-orange" />

              <span className="font-heading text-xs font-bold uppercase tracking-widest text-edvow-orange">
                Direct Company Payroll
              </span>
            </div>

            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
              Ready to build with us?
              <br />
              <span className="text-edvow-orange">Join Edvow.</span>
            </h2>

            <p className="mx-auto mb-10 mt-6 max-w-2xl font-sans text-base leading-relaxed text-blue-100/90 sm:text-lg">
              Whether you deploy onsite with tier-1 enterprise clients or
              advance our internal platforms, we back your career with direct
              stability, statutory benefits, and high-impact ownership.
            </p>

            <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  bg-edvow-orange
                  px-8
                  py-4
                  font-heading
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-slate-900
                  transition-colors
                  hover:bg-white
                  sm:w-auto
                "
              >
                <span>View Open Roles</span>

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/contact"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  border
                  border-white/30
                  bg-white/5
                  px-8
                  py-4
                  font-heading
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-white
                  backdrop-blur-sm
                  transition-all
                  hover:bg-white
                  hover:text-edvow-blue
                  sm:w-auto
                "
              >
                Talk to Recruitment
              </Link>
            </div>
          </div>
        </div>

        {/* ====================================================
            SCROLL INDICATOR
        ==================================================== */}

        <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="font-heading text-[9px] uppercase tracking-[0.3em] text-white/60">
            Scroll
          </span>

          <div className="h-16 w-px overflow-hidden bg-white/20">
            <div
              className="w-full bg-edvow-orange"
              style={{
                height: `${progress * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
