import Link from "next/link";
import React from "react";
import Button from "./Button";
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <Link href={href}>{children}</Link>;
};

export const NavBar = () => {
  return (
    <div
      className={`z-10 py-[9px] sticky top-0 w-full flex justify-between text-white transition items-center`}
    >
      <Link
        className="font-bold text-2xl flex items-center space-x-[17.25px]"
        href="/"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9221 5.77922V3C18.9221 1.89543 18.0266 1 16.9221 1H3C1.89543 1 1 1.89543 1 3V16.9221C1 18.0266 1.89543 18.9221 3 18.9221H6.22727"
            stroke="white"
            strokeWidth="2"
          />
          <rect
            x="7.07812"
            y="6.48052"
            width="15.9221"
            height="15.9221"
            rx="1"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
        <span>Collosal</span>
      </Link>
      <ul className="sm:flex space-x-10 hidden">
        <li>
          <NavLink href="#service">Service</NavLink>
        </li>
        <li>
          <NavLink href="#work">How We Work</NavLink>
        </li>
        <li>
          <NavLink href="#projects">Projects</NavLink>
        </li>
      </ul>
      <Button size="sm" color="white" style="light" className="hidden sm:flex">
        Contact
      </Button>
    </div>
  );
};
