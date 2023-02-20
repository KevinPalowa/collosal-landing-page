import Image from "next/image";
import React from "react";
type Props = {
  reverse?: boolean;
  ilustration: any;
  description: string;
  title: string;
  subtitle: string;
};
export const Section = ({
  reverse,
  title,
  subtitle,
  description,
  ilustration,
}: Props) => {
  return (
    <div
      className={`sm:flex sm:items-center ${reverse && "flex-row-reverse"}`}
      id="work"
    >
      <Image
        src={ilustration}
        alt="How we Work ilustration"
        className="w-full sm:w-1/2"
      />
      <div className="w-full sm:w-1/2 text-center sm:text-left">
        <h3 className="text-green font-semibold">{title}</h3>
        <h1 className="font-bold text-3xl leading-[48px] mt-1 mb-7">
          {subtitle}
        </h1>
        <p className="text-white/60 font-medium">{description}</p>
      </div>
    </div>
  );
};
