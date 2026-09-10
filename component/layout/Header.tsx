"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navLinks = [
    { name: "Career Counselling", href: "/career-counselling" },
    { name: "IT Services", href: "/it-services" },
    { name: "Careers", href: "/careers" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full h-16 md:h-20 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto h-full px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* logo section */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/edvow.png"
            loading="eager"
            alt="Edvow Logo"
            width={100}
            height={100}
            className="h-auto w-auto"
          />
        </Link>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-heading font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-edvow-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={"/contact"}
            className=" inline-flex items-center gap-1 bg-edvow-blue text-white px-6 py-2 hover:bg-edvow-orange transition-all"
          >
            Get Started <ArrowRight />
          </Link>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
          className="lg:hidden text-edvow-blue"
        >
          <Menu />
        </button>
      </div>

      {/* mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-white h-screen w-screen transform ${isOpen ? "translate-x-0 visible" : "translate-x-full invisible"} transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* close button */}
          <button
            className="self-end p-2 text-edvow-blue"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X />
          </button>

          {/* mobile links */}
          <nav className="flex flex-col items-center flex-grow gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-2xl font-bold text-edvow-blue hover:text-edvow-orange"
              >
                {link.name}
              </a>
            ))}
            <Link
              onClick={() => setIsOpen(false)}
              href={"/contact"}
              className="inline-flex items-center gap-1 mt-4 bg-edvow-blue text-white w-fit p-4 font-heading uppercase tracking-widest"
            >
              Get Started <ArrowRight />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
