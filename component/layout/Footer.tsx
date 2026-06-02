import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* brand */}
          <div className="space-y-6">
            <Link href='/' className="flex items-center gap-3">
              <Image src="/edvow.png" loading="eager" alt="Edvow Logo" width={100} height={100} className="h-20 w-20 object-contain" />
            </Link>
            <p className="font-sans text-slate-500 text-sm leading-relaxed max-w-xs">
              My vow: To motivate you until you win. Precision counseling for the next generation of global leaders.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-blue mb-6">Navigation</h4>
            <ul className="space-y-4 font-sans text-sm text-slate-600">
              <li><a href="/courses" className="hover:text-edvow-orange transition-colors">Courses</a></li>
              <li><a href="/about" className="hover:text-edvow-orange transition-colors">About Us</a></li>
              <li><a href="/privacypolicy" className="hover:text-edvow-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* services (SEO) */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-blue mb-6">Services</h4>
            <ul className="space-y-4 font-sans text-sm text-slate-600">
              <li><a href="#" className="hover:text-edvow-orange transition-colors">Admission Counseling</a></li>
              <li><a href="#" className="hover:text-edvow-orange transition-colors">Storytelling Workshops</a></li>
              <li><a href="#" className="hover:text-edvow-orange transition-colors">EMI Planning</a></li>
            </ul>
          </div>

          {/*social & contact */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-edvow-blue mb-6">Connect</h4>
            <div className="space-y-4">
              <p className="font-sans text-sm text-slate-600 underline decoration-edvow-orange underline-offset-4">
                hello@edvow.com
              </p>
              <div className="flex gap-4 pt-2">
                {/* instagram Icon */}
                <a href="https://instagram.com/edvow.consultant" className="text-slate-400 hover:text-edvow-blue transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* linkedIn Icon */}
                <a href="https://www.linkedin.com/company/edvow" className="text-slate-400 hover:text-edvow-blue transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* bottom bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] uppercase tracking-widest text-slate-400">
            © {currentYear} Edvow. All Rights Reserved.
          </p>
          <div className="flex gap-8 font-sans text-[10px] uppercase tracking-widest text-slate-400">
            <Link href="/privacypolicy" className="hover:text-edvow-blue">Privacy Policy  |  Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}