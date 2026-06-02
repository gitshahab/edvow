import Footer from "@/component/layout/Footer";
import Header from "@/component/layout/Header";
import FAQ from "@/component/sections/Faq";
import Features from "@/component/sections/Features";
import { FinalCTA } from "@/component/sections/FinalCTA";
import Hero from "@/component/sections/Hero";
import Mentors from "@/component/sections/Mentors";
import Roadmap from "@/component/sections/Roadmap";

export default function Home() {
  return (
    <main >
      <Hero/>
      <Features/>
      <Roadmap/>
      {/* <Mentors/> */}
      <FAQ/>
      <FinalCTA/>
    </main>
  );
}
