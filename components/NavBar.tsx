import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { Collosal } from "./logo/Collosal";
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="hover:text-white/70">
      {children}
    </Link>
  );
};

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Service", url: "#service" },
    { name: "How We Work", url: "#work" },
    { name: "Projects", url: "#projects" },
  ];
  return (
    <div
      className={`sticky top-0 z-10  flex w-full items-center justify-between py-[9px] text-white transition`}
    >
      <Link
        className="flex items-center space-x-[17.25px] text-2xl font-bold"
        href="/"
      >
        <Collosal />
        <span>Collosal</span>
      </Link>
      <ul className="hidden space-x-10 sm:flex">
        {links.map((link, i) => (
          <li key={i}>
            <NavLink href={link.url}>{link.name}</NavLink>
          </li>
        ))}
        <FaTimes
          className="absolute top-0 right-0 cursor-pointer sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      </ul>
      <Button size="sm" color="white" style="light" className="hidden sm:flex">
        Contact
      </Button>
      <FaBars
        className="cursor-pointer sm:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </div>
  );
};
