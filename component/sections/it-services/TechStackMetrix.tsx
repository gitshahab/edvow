export default function TechStackMatrix() {
  const stackCategories = [
    {
      category: "Frontend & Web Architecture",
      technologies: [
        "Next.js (App Router)",
        "TypeScript",
        "React.js",
        "Tailwind CSS v4",
        "Redux / Zustand",
        "HTML5 Canvas",
      ],
    },
    {
      category: "Mobile Android & IOS",
      technologies: ["React Native", "Kotlin", "Swift", "Flutter"],
    },
    {
      category: "Backend & Distributed Systems",
      technologies: [
        "Node.js",
        "Express.js",
        "REST & GraphQL APIs",
        "PostgreSQL",
        "MongoDB",
        "Prisma ORM",
      ],
    },
    {
      category: "Cloud, DevOps & Tooling",
      technologies: [
        "Docker",
        "AWS (EC2/S3)",
        "Vercel",
        "Git / GitHub Actions",
        "Jest / Vitest",
        "Redis Caching",
      ],
    },
    {
      category: "AI, Data & Workflows",
      technologies: [
        "LLM API Orchestration",
        "Vector Databases",
        "Local AI Models",
        "Webhooks & Headless CMS",
        "Data Pipelines",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="font-heading text-xs uppercase tracking-[0.25em] font-bold text-edvow-orange">
            Technical Rigor
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-edvow-blue">
            Our Technology Foundation
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600">
            We avoid outdated frameworks. We build solely on proven,
            high-performance web standards that scale seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white border border-slate-200 p-6 space-y-4"
            >
              <h3 className="font-heading text-xs uppercase tracking-widest font-bold text-edvow-blue border-b border-slate-100 pb-3">
                {cat.category}
              </h3>
              <ul className="space-y-2.5">
                {cat.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2.5 text-xs font-sans text-slate-700"
                  >
                    <span className="w-1.5 h-1.5 bg-edvow-orange shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
