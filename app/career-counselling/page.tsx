import FAQ from "@/component/sections/career-counselling/Faq";
import Features from "@/component/sections/career-counselling/Features";
import { FinalCTA } from "@/component/sections/career-counselling/FinalCTA";
import GenericHero from "@/component/ui/GenericHero";
import Roadmap from "@/component/sections/career-counselling/Roadmap";
import { Metadata } from "next";
import { StepForward } from "lucide-react";

export const metadata: Metadata = {
  title: "Career Counselling for Students & Professionals India",
  description:
    "Expert career counselling for students and working professionals in India. Get 1-on-1 guidance for online degrees, MBA admissions, stream selection and more. Edvow — Where Careers Begin.",
  keywords: [
    "career counselling India",
    "online MBA guidance",
    "career counsellor for students",
    "stream selection after 12th",
    "UGC approved online degree",
    "working professional MBA",
    "admission guidance India",
  ],
  alternates: {
    canonical: "https://www.edvow.com/career-counselling",
  },
  openGraph: {
    title: "Career Counselling for Students & Professionals | Edvow",
    description:
      "Stop the confusion of endless options. Expert 1-on-1 career guidance from admission to final letter.",
    url: "https://www.edvow.com/career-counselling",
  },
};

export default function CareerCounsellingPage() {
  return (
    <main>
      <GenericHero
        title="Career Counselling in India"
        subTitle="Online, Distance & Regular Degrees"
        para="As a trusted career counsellor in India, we help students and executives make confident academic decisions from crucial stream selection after 12th to specialized MBA admission guidance. For ambitious executives looking to upskill without pausing their careers, we provide end-to-end support in choosing the right online MBA for working professionals tailored to your industry goals."
        btn1={{
          text: "Courses",
          url: "/courses",
          icon: <StepForward />,
        }}
        bgImg="/edvow-hero.webp"
      />
      <Features />
      <Roadmap />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
