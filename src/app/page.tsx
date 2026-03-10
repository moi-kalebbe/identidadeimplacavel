"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Topbar } from "@/components/Topbar";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { DorSection } from "@/components/DorSection";
import { ParaQuemE } from "@/components/ParaQuemE";
import { Pillars } from "@/components/Pillars";
import { WhySection } from "@/components/WhySection";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { MethodAuthority } from "@/components/MethodAuthority";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { WhatsappSection } from "@/components/WhatsappSection";
import { FinalStrip } from "@/components/FinalStrip";
import { Footer } from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Topbar />
      <Hero />
      <Countdown />
      <DorSection />
      <ParaQuemE />
      <Pillars />
      <WhySection />
      <About />
      <Testimonials />
      <MethodAuthority />
      <Pricing />
      <FAQ />
      <WhatsappSection />
      <FinalStrip />
      <Footer />
    </main>
  );
}
