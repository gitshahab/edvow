import type { Metadata } from "next";
import { Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import ContactForm from "@/component/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Edvow | Technology Partnerships & Career Counseling",
  description:
    "Connect with Edvow for custom enterprise software development, IT staff deputation, or strategic academic and career counseling across India.",
  alternates: {
    canonical: "https://www.edvow.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Edvow",
  description:
    "Official contact directory for Edvow IT services and career counseling.",
  url: "https://www.edvow.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Edvow",
    url: "https://www.edvow.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Business Development",
      email: "hello@edvow.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main className="min-h-screen bg-slate-50">
        {/* Header Banner */}
        <section className="bg-white border-b border-slate-200/80 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl space-y-4">
              <span className="font-heading text-xs uppercase tracking-[0.25em] font-bold text-edvow-orange">
                Start The Dialogue
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-edvow-blue">
                Partner with us. <br className="hidden sm:inline" />
                Build with clarity.
              </h1>
              <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed">
                Whether scaling engineering squads with dedicated developers or
                mapping college admissions and career tracks, our team is
                equipped to execute.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section: Info & Form Split */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Coordinates & SLA */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <span className="font-heading text-xs uppercase tracking-widest font-bold text-slate-400">
                    Corporate Directory
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-edvow-blue">
                    Direct Points of Contact
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Email Box */}
                  <a
                    href="mailto:hello@edvow.com"
                    className="flex items-start gap-4 p-5 bg-white border border-slate-200 hover:border-edvow-blue transition-colors group"
                  >
                    <div className="p-3 bg-slate-50 text-edvow-blue group-hover:bg-edvow-blue group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                        General &amp; Business Inquiries
                      </span>
                      <span className="font-heading text-sm md:text-base font-bold text-slate-800 group-hover:text-edvow-blue">
                        hello@edvow.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@edvow.com"
                    className="flex items-start gap-4 p-5 bg-white border border-slate-200 hover:border-edvow-blue transition-colors group"
                  >
                    <div className="p-3 bg-slate-50 text-edvow-blue group-hover:bg-edvow-blue group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                        Career Counselling &amp; Careers Inquiries
                      </span>
                      <span className="font-heading text-sm md:text-base font-bold text-slate-800 group-hover:text-edvow-blue">
                        contact@edvow.com
                      </span>
                    </div>
                  </a>

                  {/* Location Box */}
                  <div className="flex items-start gap-4 p-5 bg-white border border-slate-200">
                    <div className="p-3 bg-slate-50 text-edvow-orange">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                        Headquarters &amp; Operations
                      </span>
                      <p className="font-heading text-sm md:text-base font-bold text-slate-800">
                        Moradabad, India
                      </p>
                      <p className="font-sans text-xs text-slate-500 mt-0.5">
                        Client onsite deployments across Gurugram, Noida,
                        Bengaluru &amp; Pan-India
                      </p>
                    </div>
                  </div>

                  {/* SLA Box */}
                  <div className="flex items-start gap-4 p-5 bg-white border border-slate-200">
                    <div className="p-3 bg-slate-50 text-emerald-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                        Response Window SLA
                      </span>
                      <p className="font-heading text-sm font-bold text-slate-800">
                        Under 24 Business Hours
                      </p>
                      <p className="font-sans text-xs text-slate-500 mt-0.5">
                        Direct response from an engineering lead or senior
                        academic counselor
                      </p>
                    </div>
                  </div>
                </div>

                {/* Assurance Notice */}
                <div className="p-6 bg-blue-50/60 border border-blue-100 flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-edvow-blue shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-slate-700 leading-relaxed">
                    <strong>Hiring or Deputation Request?</strong> All client
                    inquiries receive pre-signed mutual NDA options before
                    sharing proprietary codebase or architectural requirements.
                  </p>
                </div>
              </div>

              {/* Right Column: Google Form Submitter */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
