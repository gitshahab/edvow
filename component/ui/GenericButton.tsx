import Link from "next/link";
import React from "react";

type btnProp = {
  btnText: string;
  href?: string;
  variant?: "blue" | "orange" | "outline-blue" | "outline-orange" | "dark";
  styleClass?: string;
  icon?: React.ReactNode;
};

export default function GenericButton({
  btnText,
  href,
  variant = "blue",
  styleClass = "",
  icon,
}: btnProp) {
  const baseStyle =
    "inline-flex items-center justify-center gap-3 px-8 py-4 font-heading uppercase tracking-widest text-xs font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 select-none";

  const variants = {
    blue: "bg-edvow-blue text-white  focus:ring-edvow-blue/30",
    orange:
      "bg-edvow-orange text-white hover:bg-edvow-blue focus:ring-edvow-orange/30",
    "outline-blue":
      "bg-white border-2 border-edvow-blue text-edvow-blue hover:bg-slate-50 focus:ring-edvow-blue/30",
    "outline-orange":
      "bg-white border-2 border-edvow-orange text-edvow-orange hover:bg-slate-50 focus:ring-edvow-orange/30",
    dark: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-950/30",
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${styleClass}`;

  const content = (
    <>
      <span>{btnText}</span>
      {icon && (
        <span className="transition-transform group-hover:translate-x-1 duration-300">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  return <button className={`group ${combinedClasses}`}>{content}</button>;
}
