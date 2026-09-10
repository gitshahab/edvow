import CombinedMetricsBar from "@/component/sections/home/CombinedMatrixBar";
import CrossDisciplinarySection from "@/component/sections/home/CrossDisciplinarySection";
import DualPillars from "@/component/sections/home/DualPillars";
import GenericHero from "@/component/ui/GenericHero";
import HomeFAQ from "@/component/sections/home/HomeFAQ";
import { CareersAnnouncementBar } from "@/component/sections/home/CareersAnnouncementBar";
import UnifiedFinalCTA from "@/component/sections/home/UnifiedFinalCTA";
import { CodeXml, Zap } from "lucide-react";

export const metadata = {
  title: "Edvow | Career Counselling & IT Services in India",
  description:
    "Edvow delivers expert career counselling for students & working professionals alongside custom software development and scalable IT solutions across India.",
  keywords: [
    "Career Counselling India",
    "IT Services Company India",
    "Custom Software Development",
    "College Admission Guidance",
    "Next.js Development Agency",
    "Professional Career Mentorship",
  ],
  openGraph: {
    title: "Edvow | Career Counselling & Custom IT Services",
    description:
      "Expert guidance for educational success and robust digital products built for scale.",
    url: "https://www.edvow.com",
    siteName: "Edvow",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <CareersAnnouncementBar />
      <GenericHero
        title="Edvow - Career Counselling"
        subTitle="& IT Services in India"
        para="Expert Career Counselling for Students & Professionals | 
Custom Software Development & IT Services across India"
        bgImg="/EdvowHeroImage.webp"
        btn1={{
          text: "Career Counselling",
          url: "/career-counselling",
          varient: "orange",
          icon: <Zap />,
        }}
        btn2={{
          text: "IT Services",
          url: "it-services",
          icon: <CodeXml />,
        }}
      />
      <DualPillars />
      <CombinedMetricsBar />
      <CrossDisciplinarySection />
      <HomeFAQ />
      <UnifiedFinalCTA />
    </main>
  );
}
