import React from "react";

export const Footer = () => {
  return (
    <footer className="container grid grid-cols-2 gap-5 sm:grid-cols-4">
      <div className="hidden space-y-[21px] sm:block">
        <div className="flex items-center space-x-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 30 30"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M23.75 13.75H6.25m17.5 0a2.5 2.5 0 012.5 2.5v7.5a2.5 2.5 0 01-2.5 2.5H6.25a2.5 2.5 0 01-2.5-2.5v-7.5a2.5 2.5 0 012.5-2.5m17.5 0v-2.5a2.5 2.5 0 00-2.5-2.5m2.5 5l-2.5-5m-15 5v-2.5a2.5 2.5 0 012.5-2.5m-2.5 5l2.5-5m12.5 0v-2.5a2.5 2.5 0 00-2.5-2.5h-7.5a2.5 2.5 0 00-2.5 2.5v2.5m12.5 0H8.75"
            ></path>
          </svg>
          <h3 className="text-2xl font-bold">Collosal</h3>
        </div>
        <ul className="space-y-[10px] text-white/60">
          <li>Copyright © 2021 </li>
          <li>Design By Collosal LLC</li>
        </ul>
      </div>
      <div className="flex flex-col justify-start space-y-[14px]">
        <h4 className="text-sm font-medium">SERVICES</h4>
        <ul className="space-y-[10px] text-white/60">
          <li>Web Development</li>
          <li>App Development</li>
          <li>UI Design</li>
          <li>Consultation</li>
          <li>Maintanance</li>
        </ul>
      </div>
      <div className="space-y-[14px]">
        <h4 className="text-sm font-medium">COMPANY</h4>
        <ul className="space-y-[10px] text-white/60">
          <li>About</li>
          <li>Contact</li>
          <li>Send Quote</li>
          <li>Privacy Policy</li>
          <li>Jobs</li>
        </ul>
      </div>
      <div className="space-y-[14px] ">
        <h4 className="text-sm font-medium">RESOURCES</h4>
        <ul className="space-y-[10px] text-white/60">
          <li>Support</li>
          <li>Documentation</li>
          <li>License</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </footer>
  );
};
