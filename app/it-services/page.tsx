import GenericHero from "@/component/ui/GenericHero";
import CoreCapabilities from "@/component/sections/it-services/CoreCapabilities";
import EngagementSection from "@/component/sections/it-services/EngagementSection";
import EngineeringLifecycle from "@/component/sections/it-services/EngineeringLifecycle";
import TechStackMatrix from "@/component/sections/it-services/TechStackMetrix";
import { Metadata } from "next";
import { MonitorSmartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development & IT Services India",
  description:
    "Edvow IT Services — Full-scale software architecture, high-performance web development, cloud native engineering and AI integration. Senior engineers delivering rapid, scalable solutions.",
  keywords: [
    "software development company India",
    "custom web development India",
    "cloud native engineering",
    "AI integration services India",
    "Next.js development agency",
    "MVP development India",
    "hire software developers India",
    "custom mobile app development",
  ],
  alternates: {
    canonical: "https://www.edvow.com/it-services",
  },
  openGraph: {
    title: "Software Development & IT Services | Edvow",
    description:
      "Full-scale software architecture, cloud native engineering and AI integration by senior engineers.",
    url: "https://www.edvow.com/it-services",
  },
};

export default function ITServicesPage() {
  return (
    <main>
      <GenericHero
        title="Custom Software Development"
        subTitle="& IT Services in India"
        para="Accelerate your digital transformation with high-performance engineering tailored for scale. We specialize in full-cycle web & mobile app development in India, delivering robust platforms built on modern cloud-native development architectures. Whether you are seeking rapid MVP development for startups to validate your product or need cutting-edge AI integration services to automate workflows, our engineering team delivers end-to-end solutions."
        bgImg="/ITHero.webp"
        btn1={{
          text: "Get in touch",
          url: "/contact",
          icon: <MonitorSmartphone />,
        }}
      />

      <CoreCapabilities />
      <TechStackMatrix />
      <EngagementSection />
      <EngineeringLifecycle />
    </main>
  );
}
