export function FinalCTA() {
  return (
    <section className="mx-6 md:mx-12 lg:mx-20 mb-24 bg-edvow-blue p-12 md:p-20 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-edvow-orange/20 blur-3xl rounded-full" />
      
      <div className="relative z-10 text-center space-y-8">
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tighter">
          Ready to build your <br /> <span className="text-edvow-orange">global future?</span>
        </h2>
        <p className="text-blue-100 font-sans text-lg max-w-xl mx-auto">
          Limited slots available for 2026 admissions. Secure your precision counseling today and get your global career on track.
        </p>
        <a href="mailto:hello@edvow.com"  className="bg-white text-edvow-blue px-2 md:px-12 py-5 font-heading font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-edvow-orange hover:text-white transition-all">
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}