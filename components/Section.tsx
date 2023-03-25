import Image from "next/image";
import React from "react";
type Props = {
  reverse?: boolean;
  ilustration: any;
  description: string;
  title: string;
  subtitle: string;
  id?: string;
};
export const Section = ({
  reverse,
  title,
  subtitle,
  description,
  ilustration,
  id,
}: Props) => {
  return (
    <div
      className={`container sm:flex sm:items-center ${
        reverse && "flex-row-reverse"
      }`}
      id={id}
    >
      <Image
        src={ilustration}
        alt="How we Work ilustration"
        className="w-full sm:w-1/2"
      />
      <div className="w-full text-center sm:w-1/2 sm:text-left">
        <h3 className="font-semibold text-green">{title}</h3>
        <h1 className="mt-1 mb-7 text-3xl font-bold leading-[48px]">
          {subtitle}
        </h1>
        <p className="font-medium leading-8 text-white/60">{description}</p>
      </div>
    </div>
  );
};
