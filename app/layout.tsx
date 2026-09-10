import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Edvow — Where Careers Begin",
    default:
      "Edvow | EdTech Counselling & IT Services — Students, Professionals & Businesses",
  },
  manifest: "/site.webmanifest",
  description:
    "Edvow is India's dual-service platform — expert career counselling for students & professionals, and custom software development & IT services for businesses. 1-on-1 mentorship, online & regular programs, web & mobile development across India.",
  keywords: [
    "career counselling India",
    "IT services India",
    "software development company India",
    "online programs for professionals",
    "EdTech consulting India",
    "career guidance students India",
    "custom software development",
    "cloud native development India",
    "AI integration services",
    "custom mobile app development",
    "MBA admission guidance",
    "1-on-1 Mentorship",
    "No-Cost EMI Education",
    "IT staffing India",
    "Edvow",
    "MBA",
    "BBA",
    "BA",
    "MA",
    "BCA",
    "MCA",
  ],
  metadataBase: new URL("https://www.edvow.com"),
  alternates: {
    canonical: "https://www.edvow.com",
  },
  openGraph: {
    title:
      "Edvow | EdTech Counselling & IT Services — Students, Professionals & Businesses",
    description:
      "Career counselling for students & professionals + custom software development & IT services for businesses. India's dual-engine EdTech & IT platform.",
    url: "https://www.edvow.com",
    siteName: "Edvow",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edvow — Career Counselling & IT Services India",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@edvow",
    creator: "@edvow",
    title: "Edvow | Career Counselling & IT Services across India",
    description:
      "Expert 1-on-1 career mentorship for students & professionals. Custom software development & IT services for businesses. Where Careers Begin.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Edvow",
  url: "https://www.edvow.com",
  logo: "https://www.edvow.com/android-chrome-512x512.png",
  description:
    "Edvow offers expert career counselling for students and professionals, and custom software development & IT services across India.",
  telephone: "+91-8439599969",
  email: "hello@edvow.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Uttar Pradesh",
  },
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Edvow Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Career Counselling",
          url: "https://www.edvow.com/career-counselling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Development & IT Services",
          url: "https://www.edvow.com/it-services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Careers",
          url: "https://www.edvow.com/careers",
        },
      },
    ],
  },
  sameAs: [
    "https://instagram.com/edvow.official",
    "https://www.linkedin.com/company/edvow",
    "https://x.com/edvow",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Edvow",
  alternateName: ["Edvow EdTech", "Edvow IT Services"],
  url: "https://www.edvow.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.edvow.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
