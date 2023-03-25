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
import { ProjectCard } from "@/components/ProjectCard";
import { PricingCard } from "@/components/PricingCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Callout } from "@/components/Callout";
import { Carousel } from "@/components/Carousel";
/* import { Carousel } from "flowbite-react"; */

export default function Home() {
  const { width } = useWindowSize();
  return (
    <main className="min-h-screen bg-[#0B0B22]/90 backdrop-blur-[87.5px]">
      <div className="relative mx-auto space-y-40 px-5 pt-[4%] sm:px-[67px]">
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
        <div className="container grid grid-cols-1 gap-5 sm:grid-cols-3">
          <FeatureCard
            title="Design"
            description="The project interface will be designed first, our favorite tool is Figma."
          />
          <FeatureCard
            title="Develop"
            description="Transform design and write business logic here. Choose the technology you want."
          />
          <FeatureCard
            title="Ship"
            description="After the work is complete, we will send the project and all its assets to you."
          />
        </div>
        <Logo />
        <Section
          id="work"
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
        <div id="projects" className="container">
          <div className="w-full text-center sm:mx-auto sm:w-6/12">
            <h3 className="font-semibold text-green">PROJECTS</h3>
            <h1 className="mt-1 mb-7 text-3xl font-bold leading-[48px]">
              We have completed many amazing projects that you will not believe
            </h1>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <ProjectCard
              title="The Mobile App Landing Page"
              description="A landing page for mobile app"
            />
            <ProjectCard
              title="The Desktop App Landing Page"
              description="A landing page for desktop app"
            />
          </div>
        </div>

        <div
          className="mx-auto rounded-[30px] bg-[#221048] py-[5.625rem] pb-[10.875rem]"
          id="service"
        >
          <div className="container">
            <div className="w-full text-center sm:mx-auto sm:w-6/12">
              <h3 className="font-semibold text-green">GET STARTED</h3>
              <h1 className="mt-1 mb-7 text-3xl font-bold leading-[48px]">
                What do you need? Choose a service that can help you
              </h1>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              <PricingCard
                name="UI Design"
                price="1200$"
                features={[
                  "10 design pages",
                  "Well-documented",
                  "4 Revisions",
                  "$100/additional page",
                ]}
                color="bg-[#3F2379]"
              />
              <PricingCard
                name="Development"
                price="5000$"
                features={[
                  "Web & Mobile",
                  "Well-documented",
                  "8 Revisions",
                  "$1000/additional page",
                ]}
                color="bg-[#233679]"
              />
              <PricingCard
                name="Maintenance"
                price="3000$"
                features={[
                  "Daily Backup",
                  "3 hourse of maintenance",
                  "Including fixing",
                  "$50/additional hour",
                ]}
                color="bg-[#792366]"
              />
            </div>
          </div>
        </div>

        {/* <div>
          <div className="w-full text-center sm:mx-auto sm:w-6/12">
            <h3 className="font-semibold text-green">TESTIMONIAL</h3>
            <h1 className="mt-1 mb-24 text-3xl font-bold leading-[48px]">
              What do our clients say that we never let down?
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <TestimonialCard
              name="Courtney Henry"
              company="Biffco Enterprises Ltd."
              text="Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."
            />
            <TestimonialCard
              className="sm:-translate-y-8"
              name="Esther Howard"
              company="Abstergo Ltd."
              text="Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."
            />
            <TestimonialCard
              name="Ronald Richards"
              company="Barone LLC."
              text="I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "
            />
          </div>
          <div className="mt-[75px] flex justify-center space-x-2">
            <button className="h-[10px] w-[10px] rounded-full bg-white/20" />
            <button className="h-[10px] w-[10px] rounded-full bg-white" />
            <button className="h-[10px] w-[10px] rounded-full bg-white/20" />
          </div>
        </div> */}
        <Carousel>
          <TestimonialCard
            name="Courtney Henry"
            company="Biffco Enterprises Ltd."
            text="Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."
          />
          <TestimonialCard
            name="Esther Howard"
            company="Abstergo Ltd."
            text="Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."
          />
          <TestimonialCard
            name="Ronald Richards"
            company="Barone LLC."
            text="I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "
          />
        </Carousel>
        <Callout />
        <Footer />
      </div>
    </main>
  );
}
