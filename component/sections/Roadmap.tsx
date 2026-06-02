const steps = [
  { id: '01', title: 'Discovery', desc: 'Personalized mapping of your global career goals.' },
  { id: '02', title: 'Strategy', desc: 'University shortlisting tailored for 2026 intake.' },
  { id: '03', title: 'Storytelling', desc: 'Crafting compelling SOPs and professional profiles.' },
  { id: '04', title: 'Success', desc: 'Visa assistance and financial support setups.' },
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16 text-edvow-blue tracking-tighter">
          Your Journey to <span className="text-edvow-orange">Global Success.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-slate-100">
          {steps.map((step) => (
            <div key={step.id} className="group p-8 border-b border-r border-slate-100 hover:bg-slate-50 transition-colors duration-300">
              <span className="block font-heading text-5xl font-bold text-slate-100 group-hover:text-edvow-orange/20 transition-colors">
                {step.id}
              </span>
              <h3 className="font-heading text-xl font-bold mt-4 mb-2 text-edvow-blue">
                {step.title}
              </h3>
              <p className="font-sans text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}