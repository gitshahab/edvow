import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['700'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Edvow — Where Careers Begin",
    default: "Edvow | Premier Career Counselling & 2026 Admission Guidance",
  },
  description: "Edvow is an elite EdTech career counselling platform helping students cut through the noise. Get 1-on-1 expert mentorship, course selection guidance, and 2026 admission support across India.",
  keywords: [
    "Career Counselling",
    "2026 Admissions",
    "Education Consultant India",
    "Stream Selection Guidance",
    "College Admission Strategy",
    "1-on-1 Mentorship",
    "No-Cost EMI Education"
  ],
  metadataBase: new URL("https://edvow.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Edvow | Career Counselling, College Admissions & Expert Mentorship",
    description: "Cut through the noise and make confident, informed decisions about your future with 1-on-1 expert mentorship and career path alignment.",
    url: "https://edvow.com",
    siteName: "Edvow",
    locale: "en_IN",
    type: "website",
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
      { url: "/favicon.ico", sizes: "96x96", type: "image/x-ico" },
      { url: "/edvow.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/edvow.png",
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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
