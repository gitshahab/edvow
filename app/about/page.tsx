
export const metadata = {
  title: "About Us",
  description: "Learn how Edvow helps students cut through the noise with 1-on-1 career counselling, mentorship, and college selection guidance across India.",
};

export default function AboutPage() {
  const whatWeDo = [
    "1-on-1 Career Counselling & Mentorship",
    "Course & College Selection Guidance",
    "Psychometric & Aptitude Assessments",
    "Tie-ups with Leading Online & Offline Institutes",
    "Skill Development & Certification Roadmaps",
    "Admission Support & Application Guidance",
  ];

  const whoWeHelp = [
    { target: "School students (Class 8–12)", context: "choosing the right stream" },
    { target: "Graduates", context: "confused about PG courses, MBA, law, design, tech" },
    { target: "Working professionals", context: "planning career transitions" },
    { target: "Parents", context: "seeking expert guidance for their child's future" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero / Core Mission Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center space-y-6">
          <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange">
            Our Mission
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-edvow-blue tracking-tighter max-w-4xl mx-auto leading-tight">
            Confused about which course, college, or career path to choose?
          </h1>
          <p className="font-sans text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            You're not alone — and that's exactly why <span className="font-bold text-edvow-blue">Edvow</span> exists.
          </p>
          <div className="pt-4">
            <p className="font-sans text-base text-slate-500 max-w-3xl mx-auto">
              Edvow is an EdTech career counselling platform that helps students cut through the noise and make confident, informed decisions about their future. Whether you're a Class 10 student choosing your stream, a graduate exploring career options, or a working professional planning an upskill — we guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/*What We Do Section */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange block mb-3">
            Services
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-edvow-blue tracking-tighter mb-6">
            What We Do
          </h2>
          <p className="font-sans text-slate-500 leading-relaxed mb-8">
            We provide a comprehensive framework to map out your educational and professional future, eliminating guesswork completely.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          {whatWeDo.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border border-slate-100 bg-slate-50/50">
              <div className="bg-edvow-blue/10 p-1 mt-0.5 text-edvow-blue">
                
              </div>
              <p className="font-heading font-bold text-sm md:text-base text-edvow-blue tracking-tight">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*Who We Help Section */}
      <section className="py-24 bg-edvow-blue text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange block mb-3">
            Impact
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter mb-16">
            Who We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoWeHelp.map((item, index) => (
              <div key={index} className="border-l-2 border-edvow-orange pl-6 py-2 space-y-2">
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

      {/*Why Edvow Section */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-orange">
            Our Approach
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-edvow-blue tracking-tighter">
            Why Edvow
          </h2>
          <p className="font-sans text-slate-600 text-lg leading-relaxed">
            We don't just list courses — we understand the student first. Our counsellors combine psychometric insights, market trends, and real-world career data to give guidance that actually fits the individual.
          </p>
          <p className="font-sans text-slate-500 text-base leading-relaxed">
            With strong tie-ups across top online and offline education providers, we help students access the right opportunities — not just the popular ones.
          </p>
        </div>
        
        {/* Contact/Location Info Card */}
        <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 space-y-8">
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Availability</p>
            <h4 className="font-heading text-xl font-bold text-edvow-blue">Serving students across India</h4>
            <p className="font-sans text-sm text-slate-500 mt-1">Online & Offline sessions available</p>
          </div>
          
          <div className="space-y-4">
            <p className="font-sans text-sm text-slate-600">
              Ready to clear the confusion? Connect with us to claim your path.
            </p>
            <a 
              href="mailto:hello@edvow.com" 
              className="inline-flex items-center gap-3 bg-edvow-blue text-white px-8 py-4 font-heading uppercase tracking-widest text-xs font-bold hover:bg-edvow-orange transition-all"
            >
              Book Free Session
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}