import privacypolicydata from "@/component/data/privacypolicydata";
import { PolicySection } from "@/component/data/privacypolicytype";

export const metadata = {
  title: "Privacy Policy | Edvow",
  description: "Read the Edvow privacy policy. Learn how we collect, protect, and safely handle student and counseling data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="max-w-[800px] mx-auto px-6 font-sans text-slate-600 leading-relaxed space-y-12">
        
        {/* Header Block */}
        <div className="border-b border-slate-100 pb-8 space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-edvow-blue tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-xs uppercase tracking-widest text-slate-400 font-heading">
            Effective Date: May 28, 2026 | Last Updated: May 28, 2026
          </p>
        </div>

        <p>
          Edvow (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website 
          <a href="https://www.edvow.com" className="text-edvow-blue underline mx-1">www.edvow.com</a> 
          and provides career counselling, course guidance, and educational consulting services...
        </p>

        <div className="bg-slate-50 p-6 border-l-4 border-edvow-orange text-sm">
          <p className="font-heading font-bold text-edvow-blue mb-1">Note:</p>
          This policy is compliant with India's Information Technology Act, 2000 and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. If you are located in the European Union, additional GDPR rights may apply to you.
        </div>

        {/* Sections */}
        { privacypolicydata.sections.map((section : PolicySection) => (
        <div key={section.id} className="space-y-4">
          <h2 className="font-heading text-2xl font-bold text-edvow-blue tracking-tight">
            {section.title}
          </h2>
          <p>{section.intro}</p>
          {/* bullet points if any*/}
            {section?.points && (
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600 font-sans">
                {section.points.map((point, index) => (
                <li key={index}>{point}</li>
                ))}
            </ul>
            )}
          {/* subsections */}
            {section?.subsections?.map((subsec) => (
                <div key={subsec.id}>
                    <h3 className="font-heading text-lg font-bold text-edvow-blue mt-4">
                        {subsec?.title}
                    </h3>
                    {/* desc if any */}
                    {subsec?.description && <p>{subsec?.description}</p>}
                    {/* bullet points */}
                    {subsec.points && (
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600 font-sans">
                        {subsec.points.map((point, index) => (
                        <li key={index}>{point}</li>
                        ))}
                    </ul>
                    )}

                    {/* Subsection Note */}
                    {subsec.note && (
                    <p className="text-xs italic text-slate-400 font-sans pt-2">
                        {subsec.note}
                    </p>
                    )}
                </div>))}
        </div>))
        }
        

        {/* Highlight Block */}
        <div className="bg-slate-50 p-6 border-l-4 border-edvow-orange text-sm">
          <p className="font-heading font-bold text-edvow-blue mb-1">Data Security Note:</p>
          Your counselling session notes and personal academic information are treated as sensitive data and are accessible only to your assigned counsellor and authorised Edvow staff.
        </div>

       

        {/* Contact Block */}
        <div className="pt-8 border-t border-slate-100 space-y-4 text-sm">
          <h2 className="font-heading text-xl font-bold text-edvow-blue">12. Contact Us</h2>
          <p>If you have any questions or requests regarding your personal data, please contact our Privacy Officer:</p>
          <div className="bg-slate-50 p-6 space-y-1 font-mono text-xs text-slate-700">
            <p className="font-bold">Company: Edvow — Where Careers Begin</p>
            <p>Email: hello@edvow.com</p>
            <p>Address: 459, Near Naya Budh Bazar, Pipalsana, Moradabad, UP, 244402, India</p>
          </div>
        </div>

      </div>
    </main>
  );
}