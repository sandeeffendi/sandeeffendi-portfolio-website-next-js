
"use client"

import { HeroSection } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { FooterSection } from "@/components/footer";
import { NavbarSection } from "@/components/navBar";
import { PortfolioSection } from "@/components/portfolio";

export default function Portfolio() {


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono scroll-smooth">
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
