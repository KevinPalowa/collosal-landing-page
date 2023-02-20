"use client";
import Button from "@/components/Button";
import Section1 from "../public/assets/svg/section1.svg";
import Section2 from "../public/assets/svg/section2.svg";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import useWindowSize from "@/hooks/useWindowSize";

export default function Home() {
  const { width } = useWindowSize();
  return (
    <main className="min-h-screen backdrop-blur-[87.5px] bg-[#0B0B22]/90 scroll-smooth">
      <div className="container relative px-5 mx-auto sm:px-10 pt-[4%] pb-16 space-y-40">
        <NavBar />
        <Hero />
        <div className="flex justify-center space-x-6">
          <Button size={width > 671 ? "normal" : "sm"} color="primary">
            Send Quote
          </Button>
          <Button
            size={width > 671 ? "normal" : "sm"}
            color="white"
            style="light"
          >
            Learn More
          </Button>
        </div>
        <div className="grid-cols-1 sm:grid-cols-3 gap-5 grid">
          <FeatureCard
            title="Design"
            description="The project interface will be designed first, our favorite tool is Figma."
          />
          <FeatureCard
            title="Design"
            description="The project interface will be designed first, our favorite tool is Figma."
          />
          <FeatureCard
            title="Design"
            description="The project interface will be designed first, our favorite tool is Figma."
          />
        </div>
        <Logo />
        <Section
          title="How We Work"
          subtitle="
          Everything is well planned, well designed and developed wholeheartedly
        "
          description="
          Careful planning makes us confident, developed with best practices so
          that the project can be maintained. We always test projects before
          they are shipped.
        "
          ilustration={Section1}
        />
        <Section
          reverse
          title="OUR TEAM"
          subtitle="
        We're a team of designers, engineers and analysts"
          description="
        Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results."
          ilustration={Section2}
        />
        <Footer />
      </div>
    </main>
  );
}
