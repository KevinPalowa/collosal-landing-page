import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { Collosal } from "./logo/Collosal";
import { backToTop } from "@/utils/helper";
import classNames from "classnames";
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} className="hover:text-white/70">
      {children}
    </a>
  );
};

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = [
    { name: "Service", url: "#service" },
    { name: "How We Work", url: "#work" },
    { name: "Projects", url: "#projects" },
  ];
  const linkClassName = classNames("sm:space-x-10 hidden sm:flex");
  return (
    <nav
      className={`container sticky top-0 z-10  flex w-full items-center justify-between py-[9px] text-white transition`}
    >
      <Link
        className="flex items-center space-x-[17.25px] text-2xl font-bold"
        href="/"
        onClick={backToTop}
      >
        <Collosal />
        <span>Collosal</span>
      </Link>
      <ul className={linkClassName}>
        {menuList.map((link, i) => (
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
    </nav>
  );
};
