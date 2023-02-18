"use client";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [colorChange, setColorchange] = useState(false);
  console.log(colorChange);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <main className="bg-[#0B0B22] h-full relative">
      <div className="w-full h-full absolute backdrop-blur-[87.5px] bg-[#0B0B22]/90"></div>
      <svg
        width="904"
        height="861"
        viewBox="0 0 1404 861"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="392.146"
          cy="385.089"
          rx="392.146"
          ry="385.089"
          transform="matrix(0.969732 -0.244172 0.253855 0.967242 210.148 63.6521)"
          fill="#16FCD2"
        />
        <ellipse
          cx="392.146"
          cy="385.089"
          rx="392.146"
          ry="385.089"
          transform="matrix(0.969732 -0.244172 0.253855 0.967242 -327 198.902)"
          fill="#FCA016"
        />
        <ellipse
          cx="392.146"
          cy="385.089"
          rx="392.146"
          ry="385.089"
          transform="matrix(0.969732 -0.244172 0.253855 0.967242 532.438 -17.498)"
          fill="#FC165B"
        />
      </svg>

      <div
        className={`z-10 fixed top-0 px-10 py-7 w-full flex justify-between text-white transition items-center ${
          colorChange && "bg-white/5"
        }`}
      >
        <div className="font-bold text-2xl">Collosal</div>
        <ul className="flex space-x-10">
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/work">How We Work</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
        <Button>Contact</Button>
      </div>
    </main>
  );
}
