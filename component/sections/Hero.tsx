import Image from "next/image";
import GenericButton from "../ui/GenericButton";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      
      {/* BG image Submerged */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-0">
        <Image
          src="/edvow-hero.jpg"
          alt="Students"
          fill
          priority
          className="object-cover grayscale-[40%] brightness-75"
        />
        {/* Fade-out Mask. into white/bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
      </div>

      {/* Glass Overlay BG-GLASS-HERO Layer */}
      <div className="absolute inset-0 z-10 bg-glass-hero opacity-90 backdrop-blur-[2px]" />

      {/* Content Grid, Floating on top */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-18 w-full">
        <div className="max-w-2xl space-y-8">
          <h1 className="font-heading text-5xl font-bold tracking-tighter leading-[1] text-edvow-blue">
            Precision Counseling<br /> 
            <span className="text-edvow-orange">Online & Regular Programs for Students & Professionals</span>
          </h1>
          
          <p className="font-sans text-xl text-slate-700 max-w-md leading-relaxed">
            Stop the confusion of endless options. From career clarity to the final admission letter, we manage every deadline and document.
          </p>
          
          <div className="flex gap-4 pt-4">
            <GenericButton btnText="Services"/>
          </div>
        </div>
      </div>
    </section>
  );
}