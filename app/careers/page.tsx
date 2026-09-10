import CareersJobSection from "@/component/sections/careers/CareerJobSection";
import CareersScrollSection from "@/component/sections/careers/CareerScrollSection";
import GenericHero from "@/component/ui/GenericHero";
import CareersBenefits from "@/component/sections/careers/CareersBenefits";
import { Metadata } from "next";
import { Contact } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Edvow | Onsite Client Deployment & Internal Roles",
  description:
    "Join Edvow on our payroll and work across high-impact internal projects or deployed onsite with leading IT and corporate clients across India. Explore open positions.",
  keywords: [
    "Careers at Edvow",
    "Edvow payroll jobs",
    "IT careers India",
    "onsite client deployment jobs",
    "corporate executive hiring",
    "software engineer careers India",
    "consulting jobs Delhi NCR",
    "IT jobs on company payroll",
  ],
  alternates: {
    canonical: "https://www.edvow.com/careers",
  },
  openGraph: {
    title: "Careers at Edvow | Onsite & Internal Opportunities",
    description:
      "Join our growing team on Edvow payroll. Work on internal platforms or deployed onsite with premier client organizations across India.",
    url: "https://www.edvow.com/careers",
    siteName: "Edvow",
    locale: "en_IN",
    type: "website",
  },
};

const careerSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Careers at Edvow",
  description:
    "Career opportunities on Edvow payroll, covering internal product development and onsite enterprise client deputation across IT and corporate sectors.",
  url: "https://www.edvow.com/careers",
  mainEntity: {
    "@type": "Organization",
    name: "Edvow",
    url: "https://www.edvow.com",
    sameAs: ["https://www.linkedin.com/company/edvow"],
  },
};

const Careers = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careerSchema) }}
      />
      <GenericHero
        title="IT & Non-IT Executive"
        subTitle="Careers Across India"
        para="Build your career on Edvow payroll. We hire skilled software developers and business associates, deploying top talent into high-impact onsite enterprise client roles and core internal teams across India. Edvow partners with IT and Non-IT organizations across India to place skilled executives in onsite roles."
        bgImg="/career1.webp"
        btn1={{ text: "Talk to Recruiter", url: "/contact", icon: <Contact /> }}
      />
      <CareersJobSection />
      <CareersBenefits />
      <CareersScrollSection />
    </>
  );
};

export default Careers;
