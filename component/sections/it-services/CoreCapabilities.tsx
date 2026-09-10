import {
  Globe,
  Cpu,
  Bot,
  Layers,
  ShieldCheck,
  GitMerge,
  Tablet,
} from "lucide-react";

export default function CoreCapabilities() {
  const capabilities = [
    {
      icon: Globe,
      tag: "Full-Stack Development",
      title: "Enterprise Web Applications",
      description:
        "High-throughput, server-rendered web applications built with Next.js and TypeScript, optimized for sub-second Core Web Vitals and heavy traffic.",
    },
    {
      icon: Tablet,
      tag: "Android & IOS Development",
      title: "Custom Mobile Apps",
      description:
        "High-Optimized mobile apps built with React Native, Flutter and swift for sub-second and professional business needs.",
    },
    {
      icon: Cpu,
      tag: "Cloud-Native Backend",
      title: "Microservices & Distributed APIs",
      description:
        "Resilient REST & GraphQL microservice architectures using Node.js, Express, and PostgreSQL with containerized Docker deployments.",
    },
    {
      icon: Bot,
      tag: "Applied Intelligence",
      title: "AI Integration & Workflow Automation",
      description:
        "Practical integration of LLM endpoints, semantic search vector stores, and automated business logic to eliminate repetitive manual ops.",
    },
    {
      icon: Layers,
      tag: "Product Design Systems",
      title: "Corporate UI/UX & Micro-Frontends",
      description:
        "Atomic design libraries and component systems crafted in Tailwind CSS, ensuring pixel parity, strict accessibility (WCAG), and responsive UX.",
    },
    {
      icon: ShieldCheck,
      tag: "Modernization",
      title: "Codebase Audits & Refactoring",
      description:
        "Performance bottleneck diagnoses, database indexing optimization, security patching, and migrating legacy codebases to modern tech stacks.",
    },
    {
      icon: GitMerge,
      tag: "DevSecOps",
      title: "Automated CI/CD & Cloud Infrastructure",
      description:
        "End-to-end deployment pipelines, infrastructure as code, zero-downtime releases, and comprehensive monitoring on AWS and Vercel.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-heading text-xs uppercase tracking-[0.25em] font-bold text-edvow-orange">
            Engineering Scope
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-edvow-blue">
            Core Capabilities Built for Scale.
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
            From greenfield MVP development to enterprise-grade system
            modernization, we execute using modern web architectures and clean
            code patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 bg-slate-50 border border-slate-200/90 hover:border-edvow-blue transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-[10px] uppercase tracking-wider font-bold text-edvow-orange bg-white border border-slate-200 px-2.5 py-1">
                      {item.tag}
                    </span>
                    <div className="p-2.5 bg-white border border-slate-200 text-edvow-blue group-hover:bg-edvow-blue group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-edvow-blue mb-3 group-hover:text-slate-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-edvow-orange" />
                  <span className="font-heading text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Production-Grade Standard
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
