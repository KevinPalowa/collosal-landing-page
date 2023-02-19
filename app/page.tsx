"use client";
import Button from "@/components/Button";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/NavBar";
import useWindowSize from "@/hooks/useWindowSize";

export default function Home() {
  const { width } = useWindowSize();
  return (
    <main className="min-h-screen backdrop-blur-[87.5px] bg-[#0B0B22]/90">
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
        <Footer />
      </div>
    </main>
  );
}
