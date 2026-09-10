import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Edvow | EdTech Counselling & IT Services Company India",
  description:
    "Edvow is India's dual-engine platform — expert career counselling for students & professionals, and custom software development & IT services for businesses. Learn how we guide careers and build technology across India.",
  keywords: [
    "about Edvow",
    "EdTech company India",
    "career counselling company India",
    "IT services company India",
    "software development firm India",
    "career guidance platform India",
    "online degree counselling",
    "executive placement India",
  ],
  alternates: {
    canonical: "https://www.edvow.com/about",
  },
  openGraph: {
    title: "About Edvow | EdTech Counselling & IT Services India",
    description:
      "India's dual-engine platform for career counselling and IT services. Guiding students, professionals and businesses since day one.",
    url: "https://www.edvow.com/about",
    siteName: "Edvow",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Edvow — Career Counselling & IT Services India",
      },
    ],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Edvow",
  url: "https://www.edvow.com/about",
  description:
    "Edvow is India's dual-engine EdTech and IT Services platform — offering expert career counselling for students and professionals, and custom software development for businesses.",
  mainEntity: {
    "@type": "Organization",
    name: "Edvow",
    url: "https://www.edvow.com",
    logo: "https://www.edvow.com/android-chrome-512x512.png",
    foundingLocation: "Uttar Pradesh, India",
    areaServed: "IN",
    serviceType: [
      "Career Counselling",
      "IT Services",
      "Software Development",
      "Executive Placement",
    ],
  },
};

export default function AboutPage() {
  const edtechServices = [
    "1-on-1 Career Counselling & Mentorship",
    "Course & College Selection Guidance",
    "Psychometric & Aptitude Assessments",
    "Tie-ups with Leading Online & Offline Institutes",
    "Skill Development & Certification Roadmaps",
    "Admission Support & Application Guidance",
  ];

  const itServices = [
    "Custom Web & Mobile App Development",
    "Full-Scale Software Architecture",
    "Cloud Native Engineering",
    "AI & ML Integration Services",
    "Technical Outsourcing & Product Engineering",
    "IT & Non-IT Executive Placement (Onsite)",
  ];

  const whoWeHelp = [
    {
      target: "School Students (Class 8–12)",
      context: "Choosing the right stream and career path with clarity",
      icon: "🎒",
    },
    {
      target: "Graduates",
      context: "Navigating PG courses, MBA, law, design, and tech careers",
      icon: "🎓",
    },
    {
      target: "Working Professionals",
      context: "Planning upskills, career transitions and online degrees",
      icon: "💼",
    },
    {
      target: "Parents",
      context: "Seeking expert, data-driven guidance for their child's future",
      icon: "👨‍👩‍👧",
    },
    {
      target: "Businesses & Startups",
      context: "Needing scalable software development and IT outsourcing",
      icon: "🏢",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ── Hero ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center space-y-6">
          <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange">
            About Edvow
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-edvow-blue tracking-tighter max-w-4xl mx-auto leading-tight">
            India's Career Counselling &amp; IT Services Platform
          </h1>
          <p className="font-sans text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Confused about which course, college, or career path to choose?
            You're not alone — and that's exactly why{" "}
            <span className="font-bold text-edvow-blue">Edvow</span> exists.
          </p>
          <div className="pt-4 max-w-3xl mx-auto space-y-4">
            <p className="font-sans text-base text-slate-500 leading-relaxed">
              Edvow is an EdTech career counselling platform helping students
              and working professionals make confident, informed decisions about
              their future — from stream selection after Class 10 to online MBA
              admissions and career transitions.
            </p>
            <p className="font-sans text-base text-slate-500 leading-relaxed">
              Beyond mentorship, our IT Services division builds the technology
              powering modern businesses — delivering custom web &amp; mobile
              development, cloud native engineering, AI integration, and
              technical outsourcing for startups and enterprises across India.
            </p>
          </div>
        </div>
      </section>

      {/* ── Dual Engine Section ── */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16 space-y-3">
          <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange">
            Our Dual Engine Model
          </span>
          {/* H2 */}
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-edvow-blue tracking-tighter">
            Two Engines. One Mission.
          </h2>
          <p className="font-sans text-slate-500 max-w-2xl mx-auto">
            We bridge the gap between human potential and cutting-edge
            technology — guiding careers and building products under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Engine 1 — EdTech */}
          <div className="border border-slate-100 bg-slate-50/50 p-8 md:p-10 space-y-6">
            <div className="space-y-2">
              <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange">
                Engine 01
              </span>
              {/* H3 */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-edvow-blue tracking-tight">
                Career Counselling &amp; EdTech
              </h3>
              <p className="font-sans text-slate-500 text-sm leading-relaxed">
                Expert 1-on-1 guidance for students, graduates and working
                professionals — from course selection to final admission letter.
              </p>
            </div>
            <div className="space-y-3">
              {edtechServices.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 border border-slate-100 bg-white"
                >
                  <div className="bg-edvow-blue/10 p-1 mt-0.5 text-edvow-blue">
                    ✓
                  </div>
                  <p className="font-heading font-bold text-sm md:text-base text-edvow-blue tracking-tight">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="/career-counselling"
              className="inline-flex items-center gap-2 text-edvow-blue font-heading font-bold text-sm uppercase tracking-widest hover:text-edvow-orange transition-all"
            >
              Explore Career Counselling →
            </a>
          </div>

          {/* Engine 2 — IT Services */}
          <div className="border border-slate-100 bg-edvow-blue p-8 md:p-10 space-y-6">
            <div className="space-y-2">
              <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange">
                Engine 02
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">
                Software Development &amp; IT Services
              </h3>
              <p className="font-sans text-blue-100 text-sm leading-relaxed">
                Full-scale software architecture, cloud native development, AI
                integration and technical outsourcing for businesses and
                startups across India.
              </p>
            </div>
            <div className="space-y-3">
              {itServices.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 border border-white/10 bg-white/5"
                >
                  <div className="text-edvow-orange mt-0.5">✓</div>
                  <p className="font-heading font-bold text-sm md:text-base text-white tracking-tight">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/it-services"
              className="inline-flex items-center gap-2 text-edvow-orange font-heading font-bold text-sm uppercase tracking-widest hover:text-white transition-all"
            >
              Explore IT Services →
            </a>
          </div>
        </div>
      </section>

      {/* ── Who We Help ── */}
      <section className="py-24 bg-edvow-blue text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange block mb-3">
            Who We Serve
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter mb-16">
            Built for Students, Professionals &amp; Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {whoWeHelp.map((item, index) => (
              <div
                key={index}
                className="border-l-2 border-edvow-orange pl-6 py-2 space-y-2"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-heading font-bold text-lg text-white">
                  {item.target}
                </h3>
                <p className="font-sans text-sm text-blue-100 leading-relaxed">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Edvow ── */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange">
            Our Approach
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-edvow-blue tracking-tighter">
            Why Choose Edvow
          </h2>
          <p className="font-sans text-slate-600 text-lg leading-relaxed">
            We don't just list courses — we understand the student first. Our
            counsellors combine psychometric insights, market trends, and
            real-world career data to give guidance that actually fits the
            individual.
          </p>
          <p className="font-sans text-slate-500 text-base leading-relaxed">
            With strong tie-ups across top online and offline education
            providers across India, we help students access the right
            opportunities — not just the popular ones.
          </p>
          <p className="font-sans text-slate-500 text-base leading-relaxed">
            And through our IT Services team, we bring the same commitment to
            clarity and execution to businesses building their next digital
            product — from MVPs to enterprise-scale platforms.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 space-y-8">
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
              Availability
            </p>
            <h4 className="font-heading text-xl font-bold text-edvow-blue">
              Serving students &amp; businesses across India
            </h4>
            <p className="font-sans text-sm text-slate-500 mt-1">
              Online &amp; Offline sessions available
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-edvow-orange">📍</span>
              <p className="font-sans text-sm text-slate-600">
                Based in Moradabad Uttar Pradesh, India
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-edvow-orange">📞</span>
              <a
                href="tel:+919412838624"
                className="font-sans text-sm text-slate-600 hover:text-edvow-blue transition-all"
              >
                +91-8439599969
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-edvow-orange">✉️</span>
              <a
                href="mailto:hello@edvow.com"
                className="font-sans text-sm text-slate-600 hover:text-edvow-blue transition-all"
              >
                contact@edvow.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-edvow-orange">✉️</span>
              <a
                href="mailto:hello@edvow.com"
                className="font-sans text-sm text-slate-600 hover:text-edvow-blue transition-all"
              >
                hello@edvow.com
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/career-counselling"
              className="inline-flex items-center justify-center gap-3 bg-edvow-blue text-white px-6 py-4 font-heading uppercase tracking-widest text-xs font-bold hover:bg-edvow-orange transition-all"
            >
              Career Counselling
            </a>
            <a
              href="/it-services"
              className="inline-flex items-center justify-center gap-3 border border-edvow-blue text-edvow-blue px-6 py-4 font-heading uppercase tracking-widest text-xs font-bold hover:bg-edvow-blue hover:text-white transition-all"
            >
              IT Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
