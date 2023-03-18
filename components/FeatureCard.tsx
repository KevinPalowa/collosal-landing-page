import React, { ReactNode } from "react";
type Props = {
  icon?: ReactNode;
  title: string;
  description: string;
};
export const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div className="inline-block rounded-[5px] bg-white/5 px-10 py-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 50 50"
      >
        <rect
          width="50"
          height="50"
          fill="#fff"
          fillOpacity="0.03"
          rx="3"
        ></rect>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18 18.5a3.5 3.5 0 013.5-3.5H25v7h-3.5a3.5 3.5 0 01-3.5-3.5zM25 15h3.5a3.5 3.5 0 110 7H25v-7z"
        ></path>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25 25.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0v0zM18 32.5a3.5 3.5 0 013.5-3.5H25v3.5a3.5 3.5 0 11-7 0zM18 25.5a3.5 3.5 0 013.5-3.5H25v7h-3.5a3.5 3.5 0 01-3.5-3.5z"
        ></path>
      </svg>
      <div className="mt-7">
        <p className="text-lg font-bold">{title}</p>
        <p className="mt-2 text-base font-medium leading-8 text-white/60">
          {description}
        </p>
      </div>
    </div>
  );
};
