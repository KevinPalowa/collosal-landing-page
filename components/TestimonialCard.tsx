import React from "react";

type Props = {
  name: string;
  company: string;
  text: string;
  className?: string;
};
export const TestimonialCard = ({ className, name, company, text }: Props) => {
  return (
    <div
      className={`flex flex-col items-center rounded-[3px] bg-white/5 px-[47px] py-[63px] ${className}`}
    >
      <div className="h-[90px] w-[90px] rounded-full bg-primary" />
      <h2 className="mt-[21px] text-lg font-bold">{name}</h2>
      <h3 className="mt-2 text-sm text-white/60">{company}</h3>
      <p className="mt-8 font-medium leading-8">&quot;{text}&quot;</p>
    </div>
  );
};
