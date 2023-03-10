import React from "react";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      <div className="hidden space-y-[21px] sm:block">
        <div className="flex items-center space-x-[14px]">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 13.75H6.25M23.75 13.75C24.413 13.75 25.0489 14.0134 25.5178 14.4822C25.9866 14.9511 26.25 15.587 26.25 16.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V16.25C3.75 15.587 4.01339 14.9511 4.48223 14.4822C4.95107 14.0134 5.58696 13.75 6.25 13.75M23.75 13.75V11.25C23.75 10.587 23.4866 9.95107 23.0178 9.48223C22.5489 9.01339 21.913 8.75 21.25 8.75M23.75 13.75L21.25 8.75M6.25 13.75V11.25C6.25 10.587 6.51339 9.95107 6.98223 9.48223C7.45107 9.01339 8.08696 8.75 8.75 8.75M6.25 13.75L8.75 8.75M21.25 8.75V6.25C21.25 5.58696 20.9866 4.95107 20.5178 4.48223C20.0489 4.01339 19.413 3.75 18.75 3.75H11.25C10.587 3.75 9.95107 4.01339 9.48223 4.48223C9.01339 4.95107 8.75 5.58696 8.75 6.25V8.75M21.25 8.75H8.75"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
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
