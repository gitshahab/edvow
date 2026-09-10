import Image from "next/image";
import GenericButton from "./GenericButton";

type HeroProp = {
  title: string;
  subTitle: string;
  para: string;
  bgImg: string;
  btn1?: {
    text: string;
    url: string;
    icon?: React.ReactNode;
    varient?: "blue" | "orange" | "outline-blue" | "outline-orange" | "dark";
  };
  btn2?: {
    text: string;
    url: string;
    icon?: React.ReactNode;
    varient?: "blue" | "orange" | "outline-blue" | "outline-orange" | "dark";
  };
};

export default function GenericHero(props: HeroProp) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* BG image Submerged */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-0">
        <Image
          src={props.bgImg}
          alt={props.title}
          fill
          priority
          sizes="90vw"
          className="object-cover grayscale-[40%] brightness-75"
        />
        {/* Fade-out Mask. into white/bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
      </div>

      {/* Glass Overlay BG-GLASS-HERO Layer */}
      <div className="absolute inset-0 z-10 bg-glass-hero opacity-90 backdrop-blur-[2px]" />

      {/* Content Grid, Floating on top */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-18 w-full">
        <div className="max-w-3xl space-y-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter leading-[1] text-edvow-blue">
            {props.title}
            <br />
            <span className="text-edvow-orange">{props.subTitle}</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed">
            {props.para}
          </p>

          {(props.btn1 || props.btn2) && (
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {props.btn1 && (
                <GenericButton
                  btnText={props.btn1.text}
                  href={props.btn1.url}
                  variant={props.btn1.varient}
                  icon={props.btn1.icon}
                />
              )}
              {props.btn2 && (
                <GenericButton
                  btnText={props.btn2.text}
                  href={props.btn2.url}
                  variant={props.btn2.varient}
                  icon={props.btn2.icon}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
